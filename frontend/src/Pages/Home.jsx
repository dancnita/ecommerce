import React from 'react';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import CategoriesProd from '../components/CategoriesProd/CategoriesProd';
import { useEffect, useState } from 'react';
import axios from 'axios';

const productCategUrl = 'http://127.0.0.1:5000/api/productCateg';
const frontPageProdUrl = 'http://127.0.0.1:5000/api/frontPagProd';

const Home = () => {
  const [prodCateg, setProdCateg] = useState(null);
  const [frontPageProd, setFrontPageProd] = useState(null);

  const getFrontPageProd = async () => {
    try {
      const response = await axios.get(frontPageProdUrl);
      setFrontPageProd(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductCateg = async () => {
    try {
      const response = await axios.get(productCategUrl);

      setProdCateg(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFrontPageProd();
    getProductCateg();
  }, []);

  return (
    <div className='container'>
      <ImageSlider data={frontPageProd} />
      <CategoriesProd data={prodCateg} />
    </div>
  );
};

export default Home;
