import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ProductProvider } from './contexts/ProductProvider.tsx';
import { CartProvider } from './contexts/CartProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
);
