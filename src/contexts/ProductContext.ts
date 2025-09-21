import { createContext } from 'react';
import type { ProductItem } from '../types/ProductType';

export type ProductContextType = {
  products: ProductItem[];
  loading: boolean;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
  loading: false,
});
