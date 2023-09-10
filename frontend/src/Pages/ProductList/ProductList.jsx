import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardWide from '../../components/CardWide/CardWide';
import './productsList.css';
import ListAllProdCateg from '../../containers/ListAllProdCateg/ListAllProdCateg';
import Container from '../../components/Container/Container';
import ClipLoaderContainer from '../../components/ClipLoaderContainer/ClipLoaderContainer';
import { getData, prodCategUrlById } from '../../utilsScripts/utils';
import TitleH2 from '../../components/TitleH2/TitleH2';

const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();

  const prodCategUrlByID = prodCategUrlById + `${id}`;

  useEffect(() => {
    getData(prodCategUrlByID, setProducts);
  }, [id]);

  return (
    <Container className='container'>
      <TitleH2 text={id} />
      <ListAllProdCateg data={products} className='productsList'>
        <CardWide />
      </ListAllProdCateg>

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
