import ListItems from './components/ListItems';
import { Header } from './components/Header';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <div className='content-header'>
          <h1 className='app-title'>Featured Products</h1>
          <p className='app-subtitle'>
            Discover amazing products at great prices
          </p>
        </div>
        <ListItems />
      </main>
    </div>
  );
}

export default App;
