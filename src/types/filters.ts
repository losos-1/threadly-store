import type { ProductType } from './product';
export type CatalogFilters = {
  colors: string[];
  sizes: string[];
  minPrice: number;
  maxPrice: number;
  type:ProductType | null
};

export const DEFAULT_CATALOG_FILTERS: CatalogFilters = {
  colors: [],
  sizes: [],
  minPrice: 0,
  maxPrice: 500,
  type:null,
};
