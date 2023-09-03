import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Test from './Pages/Test';
import ProductList from './Pages/ProductList/ProductList';
import Product from './Pages/Product/Product';
import CartPage from './Pages/CartPage/CartPage';
import Checkout from './Pages/Checkout/Checkout';
import { ShopContextProvider } from './context/ShopContext';
import PaymentSuccess from './Pages/PaymentSuccess';

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
          {/* <Route path='/test' element={<Test />} /> */}
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

// <div>
//   <Header />
//   <div className='imgSliderContainer'>
//     <ImageSlider />
//   </div>
//   <CategoriesProd />

//   <Footer />
// </div>
