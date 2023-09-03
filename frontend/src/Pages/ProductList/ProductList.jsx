import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardWide from '../../components/CardWide/CardWide';
import './productsList.css';
//import axios from 'axios';
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
    <div className='container'>
      <TitleH2 text={id} />
      <div className='productsList'>
        {!products ? (
          <ClipLoaderContainer />
        ) : (
          products.map((item, index) => {
            return (
              <div key={index}>
                <CardWide data={item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProductList;
