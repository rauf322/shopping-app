import { useProduct } from '../hooks/useProduct';
import { AddBtn } from './AddBtn';

const ListItems = () => {
  const { products, loading } = useProduct();
  return (
    <div className='product-items'>
      {loading ? (
        <div className='loading-container'>
          <h1 className='loading-spinner'>Loading amazing products...</h1>
        </div>
      ) : (
        products.map((product) => {
          return (
            <div key={product.id} className='product-item'>
              <img src={product.image} alt={product.name} />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <h1 className='product-price'>${product.price.toFixed(2)}</h1>
              <AddBtn product={product} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ListItems;
