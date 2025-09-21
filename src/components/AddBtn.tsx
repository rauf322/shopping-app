import { useCart } from '../hooks/useCart';
import type { ProductItem } from '../types/ProductType';

export const AddBtn = ({ product }: { product: ProductItem }) => {
  const { addToCart } = useCart();
  return (
    <div>
      <button onClick={() => addToCart(product)} className='add-to-cart-btn'>
        Add to Cart
      </button>
    </div>
  );
};
