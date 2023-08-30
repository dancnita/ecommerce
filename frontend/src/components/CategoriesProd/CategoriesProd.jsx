import React from 'react';
import { productsCateg } from '../../data';
import Card from '../Card/Card';
import ClipLoaderContainer from '../ClipLoaderContainer/ClipLoaderContainer';
import './caregoriesProd.css';

const CategoriesProd = ({ data }) => {
  return (
    <div className='categoriesProd'>
      {!data ? (
        <ClipLoaderContainer />
      ) : (
        data.map((categ, index) => {
          return (
            <div key={index}>
              <Card data={categ} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default CategoriesProd;
