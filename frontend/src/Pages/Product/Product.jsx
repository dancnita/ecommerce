import ProductImgs from '../../components/ProductImgs/ProductImgs';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import ClipLoaderContainer from '../../components/ClipLoaderContainer/ClipLoaderContainer';
import TitleH2 from '../../components/TitleH2/TitleH2';
import Container from '../../components/Container/Container';
import Parag from '../../components/Parag/Parag';
import Button from '../../components/Button/Button';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/Hi';
import './product.css';
//
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
//
import { findProdUrl, getData } from '../../utilsScripts/utils_requests';
import { currency } from '../../utilsScripts/data';
import {
  addToFavorites,
  addToCart,
} from '../../utilsScripts/utils_ShopContext';

const Product = () => {
  const { favoriteProd, setFavoriteProd, cartProducts, setCartProducts } =
    useContext(ShopContext);
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
    <Container className='container'>
      {!product ? (
        <ClipLoaderContainer />
      ) : (
        <>
          <TitleH2 text={product?.title} />
          <Container className='product'>
            <Container className='productImgDis'>
              <ProductImgs data={product?.imgUrl} className='productImgs' />
              <ProductDescription
                data={product?.desc}
                className='prodDescription'
              />
            </Container>
            <Container className='addToBtns'>
              <Parag
                text={`Price: ${!product ? null : product.price} ${currency}`}
              />
              <Button
                className={'btn '}
                ico={HiOutlineShoppingCart}
                text={`Add to Cart`}
                onClick={() =>
                  addToCart(cartProducts, setCartProducts, product)
                }
              />
              <Button
                className={'btn '}
                ico={AiOutlineHeart}
                text={`Add to Favorites`}
                onClick={() =>
                  addToFavorites(favoriteProd, setFavoriteProd, product)
                }
              />
            </Container>
          </Container>
        </>
      )}
    </Container>
  );
};

export default Product;
