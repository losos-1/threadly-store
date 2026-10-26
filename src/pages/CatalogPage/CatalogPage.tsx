import {useState,useMemo } from 'react';
import Sidebar from '@/sections/CatalogPage/Sidebar';
import arrow from '@/assets/icons/arrow.svg'

import {
  DEFAULT_CATALOG_FILTERS,
  type CatalogFilters,
} from '@/types/filters';

import './CatalogPage.scss';
import CatalogProducts from '@/sections/CatalogPage/CatalogProducts';
import classNames from 'classnames';
import {useProducts} from '@/hooks/useProducts';
import { useSearchParams } from 'react-router-dom';
import { PRODUCT_TYPES, type ProductType } from '@/types/product';

function parseType(value: string | null): ProductType | null {
  if (value !== null && (PRODUCT_TYPES as readonly string[]).includes(value)) {
    return value as ProductType;
  }
  return null;
}

export default function CatalogPage() {
  const { products, loading, error } = useProducts();

  const [filters, setFilters] = useState<CatalogFilters>(
    DEFAULT_CATALOG_FILTERS,
  );
  const [page, setPage] = useState<number>(1)
  const handleApplyFilters = (newFilters: CatalogFilters) => {
    setFilters(newFilters);
    setPage(1)
  };

  type SortType = 'popular' | 'price-asc' | 'price-desc' | 'discount-desc';

const SORT_OPTIONS: { value: SortType; label: string }[] = [
  {
    value: 'popular',
    label: 'By popularity',
  },
  {
    value: 'price-asc',
    label: 'In ascending order of price',
  },
  {
    value: 'price-desc',
    label: 'In descending order of price',
  },
  {
    value: 'discount-desc',
    label: 'Discounts in descending order',
  },
];

  const [sortType, setSortType] = useState<SortType>('popular');
  const [sortIsActive, setSortIsActive] = useState(false);
  
  const handleSortBtn = () => {
    setSortIsActive((prev) => !prev);
  };

  const handleSortType = (newSortType: SortType) => {
    setSortType(newSortType);
    setSortIsActive(false);
    setPage(1)
  };

  const currentSortLabel =
    SORT_OPTIONS.find((option) => option.value === sortType)?.label ??
    'By popularity';


  const sortedProducts = useMemo(() =>{
    if (!products.length) return [];

    const productCopy = [...products]

    switch(sortType){
      case 'price-asc':
        return productCopy.sort((a,b) => a.price - b.price)
      case 'price-desc':
        return productCopy.sort((a,b) => b.price - a.price)
      case 'discount-desc':
        return [...productCopy].sort((a, b) => {
          const discountA = a.oldPrice
            ? (a.oldPrice - a.price) / a.oldPrice
            : 0;

          const discountB = b.oldPrice
            ? (b.oldPrice - b.price) / b.oldPrice
            : 0;

          return discountB - discountA;
        });
      case 'popular':
      default:
        return productCopy
    }
  },[products,sortType])
  const [searchParams] = useSearchParams();
  const type = parseType(searchParams.get('type'));
  if(loading){
    return <div className="catalog-page wrapper">Страница загружается...</div>
  }
  if(error){
    return <div className="catalog-page wrapper">Страница недоступна...</div>
  }
  return (
    <section className="catalog-page wrapper">
      <Sidebar onApply={handleApplyFilters} />
      <div className="catalog-page__content">
        <div className="catalog-page__select">
          <button
            className="catalog-page__select-button"
            type="button"
            onClick={handleSortBtn}
            aria-expanded={sortIsActive}
          >
            <span className="catalog-page__sort">
              {currentSortLabel}
            </span>

            <img
              src={arrow}
              alt=""
              className={classNames('sort-arrow', {
                'sort-arrow--active': sortIsActive,
              })}
            />
          </button>

          {sortIsActive && (
            <div className="catalog-page__options">
              {SORT_OPTIONS.map((option) => (
                <button
                  className={classNames('catalog-page__option', {
                    'catalog-page__option--active': sortType === option.value,
                  })}
                  type="button"
                  key={option.value}
                  onClick={() => handleSortType(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <CatalogProducts
          products={sortedProducts}
          filters={filters}
          page={page}
          onPageChange={setPage}
          type = {type}
        />
        
      </div>
    </section>
  );
}
