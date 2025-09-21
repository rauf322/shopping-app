import { useState, useEffect, type ReactNode } from 'react';
import { ProductContext } from './ProductContext';
import type { ProductItem } from '../types/ProductType';
import productsData from '../data/db.json';

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setProducts(productsData.products);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
