import { CartDropdown } from './CartIcon';

export const Header = () => {
  return (
    <header className='app-header-nav'>
      <div className='header-content'>
        <div className='logo-section'>
          <h1 className='header-title'>🛒 ShopHub</h1>
          <p className='header-subtitle'>Premium Products</p>
        </div>

        <nav className='header-nav'>
          <CartDropdown />
        </nav>
      </div>
    </header>
  );
};
