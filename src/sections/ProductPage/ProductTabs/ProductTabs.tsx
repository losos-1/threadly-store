import { useState } from 'react'
import './ProductTabs.scss'
import ProductDetails from '@/components/ProductTabs/ProductDetails';
import ProductReviews from '@/components/ProductTabs/ProductReviews';
import ProductFaqs from '@/components/ProductTabs/ProductFaqs';
import classNames from 'classnames';
import {reviews} from '@/data/reviews'
import {faqs} from '@/data/faqs'

import ProductCategory from '@/components/ProductCategory';
import { useProducts } from '@/hooks/useProducts';

type Tab = 'details' | 'reviews' | 'faqs';

type ProductTabsProps = {
    id:number
    category:string;
}
export default function ProductTabs({id,category}:ProductTabsProps){
    const {products} = useProducts()
    const [activeTab,setActiveTab] = useState<Tab>('reviews')

    const reviewById = reviews.filter((review) => review.productId === id)
    const faqsById = faqs.filter((item) => item.productId === id)
    const detailsById = products.find((item) => item.id === id)

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
            {activeTab === 'details' && <ProductDetails 
            details = {detailsById?.details}/>}

            {activeTab === 'reviews' && <ProductReviews 
            reviewes = {reviewById}/>}

            {activeTab === 'faqs' && <ProductFaqs faqs = {faqsById}/>}
            <ProductCategory
                title = 'You might also like'
                category = {category}
            />
        </section>
    )
}