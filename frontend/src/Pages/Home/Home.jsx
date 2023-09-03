import React, { useEffect, useState } from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import CategoriesProd from '../../components/CategoriesProd/CategoriesProd';
//import axios from 'axios';
import {
  productCategUrl,
  frontPageProdUrl,
  getData,
} from '../../utilsScripts/utils';

const Home = () => {
  const [prodCateg, setProdCateg] = useState(null);
  const [frontPageProd, setFrontPageProd] = useState(null);

  useEffect(() => {
    getData(productCategUrl, setProdCateg);
    getData(frontPageProdUrl, setFrontPageProd);
  }, []);

  return (
    <div className='container'>
      <ImageSlider data={frontPageProd} />
      <CategoriesProd data={prodCateg} />
    </div>
  );
};

export default Home;
