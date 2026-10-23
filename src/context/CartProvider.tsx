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
  removeFromCart: (cartKey: string) => void;
  increaseQuantity: (cartKey: string) => void;
  decreaseQuantity: (cartKey: string) => void;
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
          item.cartKey === product.cartKey
      );

      if (isAlreadyInCart) {
        return prev.map((item) =>
          item.cartKey === product.cartKey
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
  const removeFromCart = (cartKey: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };

  const increaseQuantity = (cartKey: string) => {
    setCartItems(perv => perv.map(cart =>
      cart.cartKey === cartKey
       ? {...cart,quantity:cart.quantity + 1} : cart
    ))
  };

  const decreaseQuantity = (cartKey: string) => {
    setCartItems(perv => perv.map(cart =>
      cart.cartKey === cartKey
      ? {...cart,quantity: Math.max(1, cart.quantity - 1)} : cart
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