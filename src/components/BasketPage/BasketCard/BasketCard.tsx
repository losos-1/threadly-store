import { useState } from 'react'
import './BasketCard.scss'
import deletBtn from '@/assets/icons/deleat-btn.svg'
import { useCart } from '@/hooks/useCart'


type BasketCardProps  = {
    id:number,
    imgSrc:string
    title:string
    price:number
    size:string
    color:string
    quantity:number
}
export default function BasketCard({
    imgSrc,title,price,size,color,id,quantity
}:BasketCardProps){
    const {
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart()

    
    return(
        <article className='basket-card'>
            <img src={imgSrc} alt="" className="basket-card__img" />
            <div className="basket-card__description">
                <h3>{title}</h3>
                <div className="basket-card__category">
                    <strong >Size:</strong>
                    <span className="basket-card__category--gray">{`${size}`}</span>
                </div>
                <div className="basket-card__category">
                    <strong>Color:</strong>
                    <span className="basket-card__category--gray">{`${color}`}</span>
                </div>
                <span className='basket-card__price h4'>{`$${price}`}</span>
            </div>
            <div className="basket-card__button">
                <button className="basket-card__deleat" onClick={() => removeFromCart(id)}>
                    <img src={deletBtn} alt="" />
                </button>
                <div className='product-info__cnt'>
                    <button className='basket-card__cnt-minus' onClick={() => decreaseQuantity(id)}>
                        <span>−</span>
                    </button>
                    <span className='basket-card__cnt-of-product'>
                        {quantity}
                    </span>
                    <button className='basket-card__cnt-plus' onClick={() => increaseQuantity(id)}>
                        <span>+</span>
                    </button>
                </div>
            </div>
        </article>
    )
}