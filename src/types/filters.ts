export type CatalogFilters = {
  colors: string[];
  sizes: string[];
  minPrice: number;
  maxPrice: number;
};

export const DEFAULT_CATALOG_FILTERS: CatalogFilters = {
  colors: [],
  sizes: [],
  minPrice: 50,
  maxPrice: 400,
};
