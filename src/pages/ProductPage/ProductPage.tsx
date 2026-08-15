import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { products } from '@/data/products';

import ProductGallery from '@/components/ProductGallery';


import './ProductPage.scss';
import ProductPageInfo from '@/components/ProductPageInfo';
import ProductTabs from '@/sections/ProductPage/ProductTabs';

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity,setQuantity] = useState<number>(1)
  
  const { productId } = useParams();

  const product = products.find(
    (obj) => obj.id === Number(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }
  const discount = (product.oldPrice && 
  product.oldPrice - product.price) || 0
  return (
    <section className="product-page wrapper">
      <div className='product-page__top'>
            <ProductGallery
            imgSrc={product.images}
          />

          <ProductPageInfo
            discount = {discount}
            id = {product.id}
            imgSrc = {product.imgSrc}
            title={product.title}
            rating={product.rating}
            price={product.price}
            oldPrice={product.oldPrice}
            description={product.description}
            colors={product.colors}
            sizes={product.sizes}

            selectedColor={selectedColor}
            onColorChange={setSelectedColor}

            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}

            quantity={quantity}
            onQuantityChange={setQuantity}
          />
      </div>
      <ProductTabs id = {Number(productId)} category = {product.category}/>
    </section>
  );
}