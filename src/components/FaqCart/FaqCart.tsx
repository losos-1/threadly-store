import { useState } from 'react'
import './FaqCart.scss'
import arrow from '@/assets/icons/arrow.svg'
import classNames from 'classnames'

type FaqCartProps = {
    question:string,
    answer:string,

}
export default function FaqCart({
    question,answer
} : FaqCartProps){

    const [isOpen,setIsOpen] = useState<boolean>(false)

    const handleOpen = () =>{
        setIsOpen((perv) => !perv)
    }
    return(
        <button className='faq-cart' onClick={handleOpen}>
            <div className="faq-cart__question">
                <strong>{question}</strong> 
                <img src={arrow} alt="" 
                    className={classNames('faq-cart__arrow',
                        {'faq-cart__arrow--active' : isOpen}
                    )}
                />    
            </div>
            {isOpen && (
                <div className="faq-cart__answer">
                    <p>{answer}</p>
                </div>
            )}
        </button>
    )
}