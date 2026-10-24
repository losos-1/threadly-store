import './CatalogProducts.scss'
import type { Product } from '@/types/product';
import type {CatalogFilters} from '@/types/filters'
import ProductCard from '@/components/ProductCard';
import { useState } from 'react';
import longArrow from '@/assets/icons/arrow-long.svg'

type ProductListProps = {
  products: Product[];
  filters:CatalogFilters;
  page:number;
  onPageChange:(psge:number) => void
};

const PAGE_SIZE = 9

export default function CatalogProducts({
    filters,products,page,onPageChange
}:ProductListProps){

    

    const filtesProducts = products.filter((product) =>{
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
    })
    const totalPages = Math.ceil(filtesProducts.length / PAGE_SIZE)
    const start = (page - 1) * PAGE_SIZE

    const filtedArr = filtesProducts.slice(start, start + PAGE_SIZE)

    const handleIncreaseLimit = () =>{
        if(page < totalPages){
            onPageChange(page + 1)
        }
    }
    const handleDecreaseLimit = () =>{
        if(page > 1){
            onPageChange(page - 1)
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
                {totalPages === 0 && (
                    <span className='catalog__products-blank-page'>
                        Товаров не найдено
                    </span>
                )}
            </div>
            
            <div className="catalog__scroll-bar">
                <button className='catalog__scroll-btn'
                    onClick={handleDecreaseLimit}
                    disabled={page <= 1}
                >
                    <img src={longArrow} alt="" />
                    <span>Previous</span>
                </button>

                <span className='catalog__scroll-page'>{page}</span>

                <button className='catalog__scroll-btn catalog__scroll-btn--left'
                    onClick={handleIncreaseLimit}
                    disabled={page === totalPages || totalPages === 0}
                >
                    <span>Next</span>
                    <img src={longArrow} alt="" />
                </button>
            </div>
        </section>
    )
}