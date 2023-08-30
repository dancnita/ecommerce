import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import Test from './Pages/Test';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import CartPage from './Pages/CartPage';
import Checkout from './Pages/Checkout';
import { ShopContextProvider } from './context/ShopContext';

// import ImageSlider from './components/ImageSlider/ImageSlider';
// import CategoriesProd from './components/CategoriesProd/CategoriesProd';

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
          {/* <Route path='/test' element={<Test />} /> */}
          <Route path='*' element={<Test />} />
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
