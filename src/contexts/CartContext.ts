import { createContext } from 'react';
import type { CartState, ProductItem } from '../types/ProductType';

export type CartContextType = {
  cart: CartState;
  addToCart: (product: ProductItem) => void;
  deleteFromCart: (id: string) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: {},
  addToCart: () => {},
  deleteFromCart: () => {},
});
