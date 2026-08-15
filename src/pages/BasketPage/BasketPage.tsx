import BasketProducts from '@/components/BasketPage/BasketProducts';
import CalculationPrice from '@/components/BasketPage/CalculationPrice';
import './BasketPage.scss'
import { useCart } from '@/hooks/useCart';
import Button from '@/components/UI/Button';

export default function BasketPage() {
  const {cartItems} = useCart()

  return (
    <main className="basket-page wrapper">
      <h1 className="basket-page__title">YOUR CART</h1>

      {cartItems.length < 1 && (
        <div className="basket-page__error">
          <h2>The basket is still empty</h2>
          <Button
            title='View All'
            size='wide'
            variant='outline'
            toCatalogy = {true}
          />
        </div>
      )}
      {cartItems.length > 0 &&(
        <div className="basket-page__content">
          <BasketProducts />
          <CalculationPrice />
        </div>
      )}
      
    </main>
  );
}