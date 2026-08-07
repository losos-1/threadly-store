import ProductCategory from "@/components/ProductCategory";
import Hero from "@/sections/HomePage/Hero";
import DressStyle from "@/sections/HomePage/DressStyle";
import ReviewsSlider from "@/sections/HomePage/ReviewsSlider";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <ProductCategory title="NEW ARRIVALS" category="new-arrivals" />
      <ProductCategory title="TOP SELLING" category="top-selling" />
      <DressStyle />
      <ReviewsSlider />
    </div>
  );
}
