import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardWide from '../../components/CardWide/CardWide';
import './productsList.css';
import ListAllProdCateg from '../../containers/ListAllProdCateg/ListAllProdCateg';
import Container from '../../components/Container/Container';

import { getData, prodCategUrlById } from '../../utilsScripts/utils_requests';
import TitleH2 from '../../components/TitleH2/TitleH2';
import ErrorMsg from '../../components/ErrorMsg/ErrorMsg';

const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();
  const [error, setError] = useState(null);

  const prodCategUrlByID = prodCategUrlById + `${id}`;

  useEffect(() => {
    getData(prodCategUrlByID, setProducts, setError);
  }, [id]);

  return (
    <Container className='container'>
      <TitleH2 text={id} />
      {error ? (
        <ErrorMsg error={error} />
      ) : (
        <ListAllProdCateg data={products} className='productsList'>
          <CardWide />
        </ListAllProdCateg>
      )}

      {/* <Container className='productsList'>
        {!products ? (
          <ClipLoaderContainer />
        ) : (
          products.map((item, index) => {
            return (
              <Container key={index}>
                <CardWide data={item} />
              </Container>
            );
          })
        )}
      </Container> */}
    </Container>
  );
};

export default ProductList;
