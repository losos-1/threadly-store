import './BasketProducts.scss'
import BasketCard from '../BasketCard';
import { useCart } from '@/hooks/useCart';

export default function BasketProducts(){
    const { cartItems, addToCart } = useCart();

    return(
        <section className='basket-products'>
            {cartItems.map((item) =>(
                <BasketCard
                    key={item.id}
                    id = {item.id}
                    imgSrc={item.imgSrc}
                    title={item.title}
                    price={item.price}
                    size={item.size}
                    color={item.color}
                    quantity = {item.quantity}
                />
            ))}
        </section>
    )
}