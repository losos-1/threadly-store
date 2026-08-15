import star from '@/assets/icons/Star.svg';

import Discount from '@/components/UI/Discount';
import ColorBlock from '../Sidebar/ColorBlock';

import './ProductPageInfo.scss';
import SizeBlock from '../Sidebar/SizeBlock';

import { useEffect } from 'react';
import Button from '../UI/Button';

import { useCart } from '@/hooks/useCart';
type ProductPageInfoProps = {
  id: number;
  imgSrc: string;
  discount:number;

  title: string;
  rating: number;
  price: number;
  oldPrice?: number;
  description: string;

  colors: string[];
  sizes: string[];

  selectedColor: string | null;
  onColorChange: (color: string | null) => void;

  selectedSize: string | null;
  onSizeChange: (size: string | null) => void;

  quantity:number;
  onQuantityChange: (cnt: number) => void;

};

export default function ProductPageInfo({
  discount,
  id,
  imgSrc,
  title,
  rating,
  price,
  oldPrice,
  description,
  colors,
  sizes,
  selectedColor,
  onColorChange,
  selectedSize,
  onSizeChange,
  quantity = 1,
  onQuantityChange,
}: ProductPageInfoProps) {

  const discountPercent = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : null;

  useEffect(() =>{
    onQuantityChange(1)
  },[selectedColor, selectedSize])

  const handleIncreaseQuantity = () =>{
    onQuantityChange(quantity + 1)
  }
  const handleDecreaseQuantity = () =>{
    if(quantity === 1){
      return
    }
    onQuantityChange(quantity - 1)
  }
  
  const { addToCart } = useCart();

  const handleCart = ()=>{
    if (!selectedColor || !selectedSize || quantity === 0) {
      return;
    }
    const product = {
      id,
      title,
      price,
      imgSrc,
      color: selectedColor,
      size: selectedSize,
      quantity,
      discount,
    };

    addToCart(product)
  }
  return (
    <article className="product-info">

      <div className="product-info__text">

        <h1 className="product-info__title">
          {title}
        </h1>

        <div className="product-info__rating">
          <img src={star} alt="" />
          <span>{rating}/5</span>
        </div>

        <div className="product-info__price">

          <span className="product-info__cost">
            ${price}
          </span>
          
          {oldPrice !== undefined && (
            <>
              <span className="product-info__cost product-card__cost--old">
                ${oldPrice}
              </span>

              {discountPercent !== null && (
                <Discount title={discountPercent} />
              )}
            </>
          )}

        </div>

        <p className="product-info__description">
          {description}
        </p>

      </div>

      <div className="product-info__colors">

        <h5>Select Colors</h5>

        <ColorBlock
          selectedColors={selectedColor ? [selectedColor] : []}
          onColorsChange={(colors) => {
            onColorChange(colors[0] ?? null);
          }}
          availableColors={colors}
        />

      </div>

      <div className="product-info__sizes">

        <h5>Choose Size</h5>

        <SizeBlock
          selectedSizes = {selectedSize ? [selectedSize] : []}
          onSizesChange  = {(size) =>{
            onSizeChange(size[0] ?? null)
          }}
          availableSizes = {sizes}
        />
      </div>
      <div className="product-info__button">
        <div className='product-info__cnt'>
          <button className='product-info__cnt-minus' onClick={handleDecreaseQuantity}>
            <span>−</span>
          </button>
          <span className='product-info__cnt-of-product'>
            {quantity}
          </span>
          <button className='product-info__cnt-plus' onClick={handleIncreaseQuantity}>
            <span>+</span>
          </button>
        </div>
        <Button
          className = 'product-info__add-button'
          title = 'Add to Cart'
          size = "wide"
          onClick={handleCart}
        />
      </div>
    </article>
  );
}