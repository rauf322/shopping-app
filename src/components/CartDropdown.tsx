import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';

export const CartDropdown = () => {
  const { cart, deleteFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = Object.entries(cart);
  const totalItems = Object.values(cart).reduce(
    (sum, item) => sum + item.amount,
    0,
  );
  const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.totalPrice,
    0,
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest('.cart-dropdown-container') &&
        !target.closest('.remove-btn')
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className='cart-dropdown-container'>
      <button className='cart-trigger' onClick={toggleDropdown}>
        <span className='cart-icon'>🛒</span>
        <span className='cart-text'>Cart</span>
        {totalItems > 0 && <span className='cart-badge'>{totalItems}</span>}
      </button>

      {isOpen && (
        <>
          <div className='cart-overlay' onClick={toggleDropdown} />
          <div className='cart-dropdown'>
            <div className='cart-header'>
              <h3>Shopping Cart</h3>
              <button className='cart-close' onClick={toggleDropdown}>
                ✕
              </button>
            </div>

            <div className='cart-content'>
              {cartItems.length === 0 ? (
                <div className='cart-empty'>
                  <span className='empty-icon'>🛒</span>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className='cart-items'>
                    {cartItems.map(([productId, item]) => (
                      <div key={productId} className='cart-dropdown-item'>
                        <div className='item-info'>
                          <h4>{item.name}</h4>
                          <p className='item-details'>
                            {item.amount} × $
                            {(item.totalPrice / item.amount).toFixed(2)}
                          </p>
                        </div>
                        <div className='item-actions'>
                          <span className='item-total'>
                            ${item.totalPrice.toFixed(2)}
                          </span>
                          <button
                            className='remove-btn'
                            onClick={() => deleteFromCart(productId)}
                            title='Remove one item'
                          >
                            −
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='cart-footer'>
                    <div className='cart-total'>
                      <strong>Total: ${totalPrice.toFixed(2)}</strong>
                    </div>
                    <div className='cart-actions'>
                      <button className='checkout-btn'>
                        Checkout ({totalItems} items)
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
