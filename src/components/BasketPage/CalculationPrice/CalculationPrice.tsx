import Button from '@/components/UI/Button'
import './CalculationPrice.scss'
import discountMark from '@/assets/icons/discount-mark.svg'
import { useCart } from '@/hooks/useCart'



export default function Calculati(){
    const {cartItems} = useCart()

    const price = cartItems.reduce((sum,item) =>(sum + (item.price) * item.quantity),0)
    const discount = cartItems.reduce((sum,item) =>(sum + (item.discount) * item.quantity ),0)

    const totalPrice = price - discount + 15
    
    return(
        <article className='calculation-price'>
            <h3 className='border-radius__title'>Order Summary</h3>
            <div className="calculation-price__content">
                <div className="calculation-price__item">
                    <span className='calculation-price__sub-title'>Subtotal</span>
                    <strong className='h4'>{`$${price}`}</strong>
                </div>
                <div className="calculation-price__item">
                    <span className='calculation-price__sub-title'>Discount </span>
                    <span className='h4 calculation-price__discount'>{`-$${discount}`}</span>
                </div>
                <div className="calculation-price__item">
                    <span className='calculation-price__sub-title'>Delivery Fee</span>
                    <strong className='h4'>$15</strong>
                </div>
                <div className="calculation-price__item calculation-price__item--total">
                    <span className='calculation-price__sub-title'>Total Fee</span>
                    <strong className='h3'>{`$${totalPrice}`}</strong>
                </div>
            </div>
            <div className="calculation-price__button">
                <div className="calculation-price__promo-code">
                    <div className="calculation-price__input-wrapper">
                        <img src={discountMark} alt="" />

                        <input
                            type="text"
                            placeholder="Add promo code"
                            minLength={4}
                            maxLength={15}
                            className="calculation-price__input"
                            aria-label="Add promo code"
                        />
                    </div>
                    <Button
                        title='Apply'
                    />
                </div>
                <Button
                    title='Go to Checkout'
                    size = 'wide'
                />
                
            </div>
        </article>
    )
}