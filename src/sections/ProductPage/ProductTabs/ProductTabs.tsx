import { useState } from 'react'
import './ProductTabs.scss'
import ProductDetails from '@/components/ProductTabs/ProductDetails';
import ProductReviews from '@/components/ProductTabs/ProductReviews';
import ProductFaqs from '@/components/ProductTabs/ProductFaqs';
import classNames from 'classnames';
import {reviews} from '@/data/reviews'

type Tab = 'details' | 'reviews' | 'faqs';

type ProductTabsProps = {
    id:number
    category:string;
}
export default function ProductTabs({id,category}:ProductTabsProps){

    const [activeTab,setActiveTab] = useState<Tab>('reviews')

    const reviewById = reviews.filter((review) => review.productId == id)
    return(
        <section className=''> 
            <div className="product-tabs">
                <button 
                onClick={() => setActiveTab('details')}
                className={classNames('product-tabs__tab',
                    {'product-tabs__tab--active' : activeTab === 'details'}
                )}
                >
                    Product Details
                </button>

                <button onClick={() => setActiveTab('reviews')}
                    className={classNames('product-tabs__tab',
                    {'product-tabs__tab--active' : activeTab === 'reviews'}
                )}>
                    Rating & Reviews
                </button>

                <button onClick={() => setActiveTab('faqs')}
                    className={classNames('product-tabs__tab',
                    {'product-tabs__tab--active' : activeTab === 'faqs'}
                )}>
                    FAQs
                </button>
            </div>
            {activeTab === 'details' && <ProductDetails />}

            {activeTab === 'reviews' && <ProductReviews 
            reviewes = {reviewById}
            productCategory ={category}/>}

            {activeTab === 'faqs' && <ProductFaqs />}
        </section>
    )
}