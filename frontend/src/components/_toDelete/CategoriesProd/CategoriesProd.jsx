import React from 'react';
//import { productsCateg } from '../../utilsScripts/data';
import Card from '../Card/Card';
import ClipLoaderContainer from '../ClipLoaderContainer/ClipLoaderContainer';
import Container from '../../components/Container/Container';
import ListAllProdCateg from '../../containers/ListAllProdCateg/ListAllProdCateg';
import './caregoriesProd.css';

const CategoriesProd = ({ data }) => {
  return (
    <>
      {/* <ListAllProdCateg className='categoriesProd' data={data}>
        <Card />
      </ListAllProdCateg> */}
      <Container className='categoriesProd'>
        {!data ? (
          <ClipLoaderContainer />
        ) : (
          data.map((categ, index) => {
            return (
              <Container key={index}>
                <Card data={categ} />
              </Container>
            );
          })
        )}
      </Container>
    </>
  );
};

export default CategoriesProd;
