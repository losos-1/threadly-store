import classNames from "classnames";

import star from "@/assets/icons/Star.svg";
import type { Product } from "@/types/product";
import Discount from "@/components/UI/Discount";

import "./ProductCard.scss";
import { Link } from "react-router-dom";

type ProductCardProps = Product & {
  className?: string;
};

export default function ProductCard({
  className,
  title,
  price,
  oldPrice,
  imgSrc,
  rating,
  id
}: ProductCardProps) {
  const discountPercent = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : null;

  return (
    <Link to={`/products/${id}`} className={classNames("product-card", className)}>
      <div className="product-card__image">
        <img src={imgSrc} alt={title} />
      </div>

      <div className="product-card__description">
        <h4 className="product-card__title">{title}</h4>

        <div
          className="product-card__rating"
          aria-label={`Rating ${rating} out of 5`}
        >
          <img src={star} alt="" aria-hidden="true" />
          <span>{rating}/5</span>
        </div>

        <div className="product-card__price">
          <span className="product-card__cost">${price}</span>

          {oldPrice !== undefined && (
            <>
              <span className="product-card__cost product-card__cost--old">
                ${oldPrice}
              </span>

              {discountPercent !== null && (
                <Discount title={discountPercent} />
              )}
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
