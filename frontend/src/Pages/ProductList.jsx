import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { computersProd } from '../data';
import CardWide from '../components/CardWide/CardWide';
import './productsList.css';
import axios from 'axios';
import ClipLoaderContainer from '../components/ClipLoaderContainer/ClipLoaderContainer';

const ProductList = () => {
  const { id } = useParams();
  const [products, setProducts] = useState();
  //const products = computersProd;

  const prodCategUrl = `http://127.0.0.1:5000/api/products/?category=${id}`;

  const getProducts = async () => {
    try {
      const response = await axios.get(prodCategUrl);
      setProducts(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <div className='container'>
      <h2>{id} SortBar?</h2>
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
