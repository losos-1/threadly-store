export type ProductColor =
  | "red"
  | "white"
  | "black"
  | "blue"
  | "azure"
  | "perple"
  | "orange"
  | "pink"
  | "yellow";

export type ProductSize =
  | "XX-Small"
  | "X-Small"
  | "Small"
  | "Medium"
  | "Large"
  | "X-Large"
  | "XX-Large"
  | "3X-Large"
  | "4X-Large";

export type ProductCategory = "new-arrivals" | "top-selling";

export type Product = {
  id: number;
  title: string;

  price: number;
  oldPrice?: number;

  rating: number;

  description: string;

  imgSrc: string;
  images: string[];

  category: ProductCategory;

  colors: ProductColor[];
  sizes: ProductSize[];
};