import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';
import ListAllProdCateg from '../../containers/ListAllProdCateg/ListAllProdCateg';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';
import './home.css';
import React, { useEffect, useState } from 'react';
import {
  productCategUrl,
  frontPageProdUrl,
  getData,
} from '../../utilsScripts/utils_requests';

const Home = () => {
  const [prodCateg, setProdCateg] = useState(null);
  const [frontPageProd, setFrontPageProd] = useState(null);
  const [frontPageProdError, setFrontPageProdError] = useState(null);
  const [prodCategError, setProdCategError] = useState(null);

  useEffect(() => {
    getData(frontPageProdUrl, setFrontPageProd, setFrontPageProdError);

    getData(productCategUrl, setProdCateg, setProdCategError);
  }, []);

  return (
    <Container className='container'>
      {frontPageProdError ? (
        <ErrorMsg error={frontPageProdError} />
      ) : (
        <ImageSlider data={frontPageProd} />
      )}

      {prodCategError ? (
        <ErrorMsg error={prodCategError} />
      ) : (
        <ListAllProdCateg className='categoriesProd' data={prodCateg}>
          <Card />
        </ListAllProdCateg>
      )}
    </Container>
  );
};

export default Home;
