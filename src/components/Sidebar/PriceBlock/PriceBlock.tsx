import type { ChangeEvent, CSSProperties } from 'react';

import './PriceBlock.scss';

const MIN_PRICE = 0;
const MAX_PRICE = 500;
const PRICE_STEP = 10;
const MIN_GAP = 10;

type PriceBlockProps = {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (price: number) => void;
  onMaxPriceChange: (price: number) => void;
};

export default function PriceBlock({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: PriceBlockProps) {
  const handleMinPriceChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newMinPrice = Number(event.target.value);
    const nextMinPrice = Math.min(
      newMinPrice,
      maxPrice - MIN_GAP,
    );

    onMinPriceChange(nextMinPrice);
  };

  const handleMaxPriceChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newMaxPrice = Number(event.target.value);
    const nextMaxPrice = Math.max(
      newMaxPrice,
      minPrice + MIN_GAP,
    );

    onMaxPriceChange(nextMaxPrice);
  };

  const minPosition =
    ((minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const maxPosition =
    ((maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const sliderStyles = {
    '--min-position': `${minPosition}%`,
    '--max-position': `${maxPosition}%`,
  } as CSSProperties;

  return (
    <div className="price-block">
      <div
        className="price-block__slider"
        style={sliderStyles}
      >
        <div className="price-block__track" />

        <input
          className="price-block__range price-block__range--min"
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={PRICE_STEP}
          value={minPrice}
          onChange={handleMinPriceChange}
          aria-label="Минимальная цена"
        />

        <input
          className="price-block__range price-block__range--max"
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={PRICE_STEP}
          value={maxPrice}
          onChange={handleMaxPriceChange}
          aria-label="Максимальная цена"
        />
      </div>

      <div className="price-block__values">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>
    </div>
  );
}
