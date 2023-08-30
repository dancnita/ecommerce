import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import ProductImgs from '../components/ProductImgs/ProductImgs';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import AddToCart from '../components/AddToCart/AddToCart';

import ClipLoaderContainer from '../components/ClipLoaderContainer/ClipLoaderContainer';
import './product.css';
// import { computersProd } from '../data';
//const product = computersProd[0];
const Product = () => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const findProdUrl = `http://127.0.0.1:5000/api/find/${id}`;

  const getProdct = async () => {
    try {
      const response = await axios(findProdUrl);
      //product in stock?
      setProduct(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error, error.response);
      console.log('Not found');
    }
  };

  useEffect(() => {
    getProdct();
  }, [id]);

  return (
    <div className='container'>
      {!product ? (
        <ClipLoaderContainer />
      ) : (
        <>
          <h3>{product?.title}</h3>
          <div className='product'>
            <div className='productImgDis'>
              <ProductImgs data={product?.imgUrl} className='productImgs' />

              <ProductDescription
                data={product?.desc}
                className='prodDescription'
              />
            </div>
            <AddToCart
              addToCart={() => addToCart(product)}
              data={!product ? null : product}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
