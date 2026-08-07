import Button from "@/components/UI/Button";

import mainImage from "@/assets/images/Hero/people.png";
import star from "@/assets/icons/Hero/Starts.svg";
import brand1 from "@/assets/images/Hero/brand1.png";
import brand2 from "@/assets/images/Hero/brand2.png";
import brand3 from "@/assets/images/Hero/brand3.png";
import brand4 from "@/assets/images/Hero/brand4.png";
import brand5 from "@/assets/images/Hero/brand5.png";

import "./Home.scss";

const brands = [brand1, brand2, brand3, brand4, brand5];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content wrapper">
        <div className="hero__main">
          <h1 className="hero__title">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="hero__description">
            Browse through our diverse range of meticulously crafted
            garments, designed to bring out your individuality and cater
            to your sense of style.
          </p>

          <Button
            className="hero__button"
            title="Shop Now"
            size="wide"
          />

          <div className="hero__stats">
            <div className="hero__stats-item">
              <strong>200+</strong>
              <p>International Brands</p>
            </div>
            <div className="hero__stats-item">
              <strong>2,000+</strong>
              <p>High-Quality Products</p>
            </div>
            <div className="hero__stats-item">
              <strong>30,000+</strong>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="hero__decor" aria-hidden="true">
          <img className="hero__star hero__star--top" src={star} alt="" />
          <img className="hero__star hero__star--bottom" src={star} alt="" />
        </div>
      </div>

      <div className="hero__background" aria-hidden="true">
        <img src={mainImage} alt="" />
      </div>

      <div className="hero__brands">
        <div className="hero__brands-inner wrapper">
          {brands.map((image) => (
            <img src={image} key={image} alt="" aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}
