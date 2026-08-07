import './CatalogProducts.scss'
import type { Product } from '@/types/product';
import type {CatalogFilters} from '@/types/filters'
import ProductCard from '@/components/ProductCard';

type ProductListProps = {
  products: Product[];
  filters:CatalogFilters;
};
export default function CatalogProducts({filters,products}:ProductListProps){

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
    }).slice(0,9)

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
            
            <div className="catalog__slidebar">

            </div>
        </section>
    )
}