import { useState, type ReactNode } from 'react';
import { CartContext } from './CartContext';
import type { ProductItem, CartState } from '../types/ProductType';

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartState>({});

  function addToCart(product: ProductItem) {
    setCart((prev) => {
      const productId = product.id;
      if (prev[productId]) {
        const newObj = {
          name: prev[productId].name,
          totalPrice: prev[productId].totalPrice + product.price,
          amount: prev[productId].amount + 1,
        };
        return { ...prev, [productId]: newObj };
      } else {
        const newObj = {
          name: product.name,
          amount: 1,
          totalPrice: product.price,
        };
        return { ...prev, [productId]: newObj };
      }
    });
  }

  function deleteFromCart(productId: string) {
    setCart((prev) => {
      const newObj = {
        name: prev[productId].name,
        totalPrice:
          prev[productId].totalPrice -
          prev[productId].totalPrice / prev[productId].amount,
        amount: prev[productId].amount - 1,
      };
      if (newObj.amount == 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [productId]: _removed, ...rest } = prev;
        return rest;
      }
      return { ...prev, [productId]: newObj };
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
