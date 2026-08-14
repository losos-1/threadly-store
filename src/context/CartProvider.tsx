import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import type { CartItem } from '@/types/cart';

type CartProviderProps = {
  children: ReactNode;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({
  children,
}: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>{
    const savedCart = localStorage.getItem('cart')

    return savedCart 
    ? JSON.parse(savedCart)
    : []
  });

  useEffect(() =>{
    localStorage.setItem('cart',JSON.stringify(cartItems))
  },[cartItems])
  
  const addToCart = (product: CartItem) => {
    setCartItems((prev) => {
      const isAlreadyInCart = prev.some(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );

      if (isAlreadyInCart) {
        return prev.map((item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item
        );
      }

      return [...prev, product];
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((perv) => perv.filter((item) => item.id !== id))
  };

  const increaseQuantity = (id: number) => {
    setCartItems(perv => perv.map(cart =>
      cart.id === id ? {...cart,quantity:cart.quantity + 1} : cart
    ))
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(perv => perv.map(cart =>
      cart.id === id ? {...cart,quantity: Math.max(1, cart.quantity - 1)} : cart
    ))
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}