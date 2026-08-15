import './CatalogProducts.scss'
import type { Product } from '@/types/product';
import type {CatalogFilters} from '@/types/filters'
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import longArrow from '@/assets/icons/arrow-long.svg'

type ProductListProps = {
  products: Product[];
  filters:CatalogFilters;
};
export default function CatalogProducts({
    filters,products
}:ProductListProps){
    const [rightLimit,setRightLimit] = useState<number>(9)
    const [leftLimit,setLeftLimit] = useState<number>(0)
    
    const filtedArr = products.filter((product) =>{
        const matchesPrice =
            product.price >= filters.minPrice &&
            product.price <= filters.maxPrice
        const matchesColor = 
            filters.colors.length === 0 ||
            product.colors.some((productColor) =>
                filters.colors.includes(productColor)
            )
        const matchesSize =
                filters.sizes.length === 0 ||
                product.sizes.some((productSizes) =>
                filters.sizes.includes(productSizes)
            )
        return matchesPrice && matchesColor && matchesSize
    }).slice(leftLimit,rightLimit)
    const maxLimit = filtedArr.length
    

    const handleIncreaseLimit = () =>{
        if(rightLimit + 9 > maxLimit){
            setRightLimit(maxLimit)
            setLeftLimit(maxLimit - 9)
        }else{
            setRightLimit((perv) => perv + 9)
            setLeftLimit((perv) => perv + 9)
        }
    }
    const handleDecreaseLimit = () =>{
        if(leftLimit - 9 < 0){
            setRightLimit(9)
            setLeftLimit(0)
        }else{
            setRightLimit((perv) => perv - 9)
            setLeftLimit((perv) => perv - 9)
        }
    }
    return(
        <section className='catalog'>
            <div className="catalog__products">
                {filtedArr.map((item) =>(
                    <ProductCard 
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
            
            <div className="catalog__scroll-bar">
                <button className='catalog__scroll-btn'
                    onClick={handleDecreaseLimit}
                >
                    <img src={longArrow} alt="" />
                    <span>Previous</span>
                </button>

                <button className='catalog__scroll-btn catalog__scroll-btn--left'
                onClick={handleIncreaseLimit}>
                    <span>Next</span>
                    <img src={longArrow} alt="" />
                </button>
            </div>
        </section>
    )
}