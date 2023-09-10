import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import CartPage from './Pages/CartPage/CartPage';
import Checkout from './Pages/Checkout/Checkout';
import { ShopContextProvider } from './context/ShopContext';
import PaymentSuccess from './Pages/PaymentSuccess/PaymentSuccess';
import NotFound from './Pages/NotFound/NotFound';
import FavoritesPage from './Pages/FavoritesPage/FavoritesPage';
import SearchResultList from './Pages/SearchResultList/SearchResultList';
import AdminAddProd from './Pages/AdminAddProd/AdminAddProd';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productList/:id' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/paySuccess' element={<PaymentSuccess />} />
          <Route path='/favoritesPage' element={<FavoritesPage />} />
          <Route path='/searchResultList' element={<SearchResultList />} />
          <Route path='/notFound' element={<NotFound />} />
          <Route path='/adminAddProd' element={<AdminAddProd />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
