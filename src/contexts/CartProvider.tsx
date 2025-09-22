import { useState, type ReactNode } from 'react';
import { CartContext } from './CartContext';
import type { ProductItem, CartState } from '../types/ProductType';

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartState>(() => {
    return localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : {};
  });

  function addToCart(product: ProductItem) {
    setCart((prev) => {
      const productId = product.id;
      const visible = document.querySelector('.visible') as HTMLElement;
      if (visible) {
        visible.style.display = 'block';
        visible.classList.remove('hiding');
        setTimeout(() => {
          visible.classList.add('hiding');
          setTimeout(() => {
            visible.style.display = 'none';
            visible.classList.remove('hiding');
          }, 300);
        }, 2500);
      }
      if (prev[productId]) {
        const newObj = {
          name: prev[productId].name,
          totalPrice: prev[productId].totalPrice + product.price,
          amount: prev[productId].amount + 1,
        };
        localStorage.setItem(
          'cart',
          JSON.stringify({ ...prev, [productId]: newObj }),
        );
        return { ...prev, [productId]: newObj };
      } else {
        const newObj = {
          name: product.name,
          amount: 1,
          totalPrice: product.price,
        };
        localStorage.setItem(
          'cart',
          JSON.stringify({ ...prev, [productId]: newObj }),
        );
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
        localStorage.setItem('cart', JSON.stringify(rest));
        return rest;
      }
      localStorage.setItem(
        'cart',
        JSON.stringify({ ...prev, [productId]: newObj }),
      );
      return { ...prev, [productId]: newObj };
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
