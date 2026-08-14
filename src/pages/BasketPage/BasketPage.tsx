import BasketProducts from '@/components/BasketPage/BasketProducts';
import CalculationPrice from '@/components/BasketPage/CalculationPrice';
import './BasketPage.scss'

export default function BasketPage() {
  return (
    <main className="basket-page wrapper">
      <h1 className="basket-page__title">YOUR CART</h1>

      <div className="basket-page__content">
        <BasketProducts />
        <CalculationPrice />
      </div>
    </main>
  );
}