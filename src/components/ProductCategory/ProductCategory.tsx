import Button from "@/components/UI/Button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

import "./ProductCategory.scss";

type ProductCategoryProps = {
  title: string;
  category: string;
};

export default function ProductCategory({
  title,
  category,
}: ProductCategoryProps) {
  const filteredProducts = products.filter(
    (product) => product.category === category,
  ).slice(0,4);
  
  
  return (
    <section className="product-category wrapper">
      <h2 className="product-category__title">{title}</h2>

      <div className="product-category__products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <Button
        className="product-category__button"
        title="View All"
        variant="outline"
        size="wide"
      />
    </section>
  );
}
