import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
import { ShopContext } from '../../context/ShopContext';
import ProductImgs from '../../components/ProductImgs/ProductImgs';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import AddToBtns from '../../components/AddToBtns/AddToBtns';
import ClipLoaderContainer from '../../components/ClipLoaderContainer/ClipLoaderContainer';
import './product.css';
import { findProdUrl, getData } from '../../utilsScripts/utils';
import TitleH2 from '../../components/TitleH2/TitleH2';

const Product = () => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();
  const [product, setProduct] = useState();

  const findProdUrlById = `${findProdUrl}${id}`;

  useEffect(() => {
    getData(findProdUrlById, setProduct);
  }, [id]);

  return (
    <div className='container'>
      {!product ? (
        <ClipLoaderContainer />
      ) : (
        <>
          <TitleH2 text={product?.title} />
          <div className='product'>
            <div className='productImgDis'>
              <ProductImgs data={product?.imgUrl} className='productImgs' />

              <ProductDescription
                data={product?.desc}
                className='prodDescription'
              />
            </div>
            <AddToBtns
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
