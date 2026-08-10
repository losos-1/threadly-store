import Button from '@/components/UI/Button'
import './ProductReviews.scss'
import arrow from '@/assets/icons/arrow.svg'
import type { ProductReview } from '@/data/reviews';
import { useState } from 'react';
import classNames from 'classnames';
import FeedbackCard from '@/components/FeedbackCard';
import ProductCategory from '@/components/ProductCategory';

type ProductReviewsProps = {
    reviewes:ProductReview[];
    productCategory:string;
}
export default function ProductReviews({reviewes,productCategory} : ProductReviewsProps){

    const [isDrop,setIsDrop] = useState<boolean>(false)

    const handleDropMenu = () =>{
        setIsDrop((perv) => !perv)
    }
    return(
        <article className='product-reviews wrapper'>
            <div className="product-reviews__header">
                <div className="product-reviews__header-left">
                    <h3 className='h4'>All Reviews</h3>
                    <span>{`(${reviewes.length})`}</span>
                </div>
                <div className="product-reviews__header-right">

                    <div>
                        <button 
                            className="product-reviews__drop-menu"
                            onClick={handleDropMenu}
                            >
                            <span>Latest</span>
                            <img src={arrow} alt="" 
                            className={classNames('arrow',{'arrow--active' : isDrop})}/>
                        </button>
                        {isDrop && (
                            <div className="">

                            </div>
                        )}
                    </div>  
                    
                    <Button
                        title='Write a Review'
                        className='product-reviews__write-reviews'
                    />
                </div>
            </div>
            <div className="product-reviews__content">
                {reviewes.map((reviewe) => (
                    <div key={reviewe.id}>
                        <FeedbackCard 
                            name = {reviewe.author}
                            text = {reviewe.text}
                            rating = {reviewe.rating}
                        />
                    </div>
                ))}
            </div>
            <Button
                title='Load More Reviews'
                variant = 'outline'
            />
            <ProductCategory
                title = 'You might also like'
                category = {productCategory}
            />
        </article>
    )
}