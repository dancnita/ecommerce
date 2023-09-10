import React, { useContext } from 'react';
import ProductDescription from '../../components/ProductDescription/ProductDescription';
import Button from '../../components/Button/Button';
import { HiOutlineShoppingCart } from 'react-icons/Hi';
import { ShopContext } from '../../context/ShopContext';
import TitleH2 from '../../components/TitleH2/TitleH2';
import Parag from '../../components/Parag/Parag';
import Image from '../../components/Image/Image';
import { currency } from '../../utilsScripts/data';
import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import {
  removeObjFromObjsCollect,
  addToCart,
} from '../../utilsScripts/utils_ShopContext';

const Favorites = () => {
  const {
    totalFavoriteItems,
    favoriteProd,
    setFavoriteProd,
    cartProducts,
    setCartProducts,
  } = useContext(ShopContext);

  return (
    <Container className='container'>
      <TitleH2 text='Favorites' />

      {totalFavoriteItems === 0 ? (
        <Parag text='No Favorite Products' />
      ) : (
        Object.values(favoriteProd).map((item, i) => {
          return (
            <Container key={i}>
              <Container className='cartProduct'>
                <Link to={`/product/${item._id}`}>
                  <Image
                    src={!item.imgUrl ? null : item.imgUrl[0]}
                    alt={item.title}
                    className='cartProdImg'
                  />
                </Link>
                <ProductDescription data={item.desc} className='cartProdDesc' />
                <Parag text={`Price: ${item.price} ${currency}`} />
                <Container>
                  <Button
                    ico={HiOutlineShoppingCart}
                    text={'Add to cart'}
                    className={'btn'}
                    onClick={() =>
                      addToCart(cartProducts, setCartProducts, item)
                    }
                  />

                  <Parag
                    text={'Remove from Favorites'}
                    className={'remove-from-cart'}
                    onClick={() =>
                      removeObjFromObjsCollect(setFavoriteProd, item)
                    }
                  />
                </Container>
              </Container>
            </Container>
          );
        })
      )}
    </Container>
  );
};

export default Favorites;
