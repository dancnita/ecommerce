import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import ProductImgs from '../../components/ProductImgs/ProductImgs';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import AddToBtns from '../../components/AddToBtns/AddToBtns';
import ClipLoaderContainer from '../../components/ClipLoaderContainer/ClipLoaderContainer';
import './product.css';
import { findProdUrl, getData } from '../../utilsScripts/utils';
import TitleH2 from '../../components/TitleH2/TitleH2';

const Product = () => {
  const { addToCart, addToFavorites } = useContext(ShopContext);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();
  const findProdUrlById = `${findProdUrl}${id}`;

  useEffect(() => {
    error ? navigate('/notFound') : null;
  }, [error]);

  useEffect(() => {
    getData(findProdUrlById, setProduct, setError);
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
              addToFavorites={() => addToFavorites(product)}
              data={!product ? null : product}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
