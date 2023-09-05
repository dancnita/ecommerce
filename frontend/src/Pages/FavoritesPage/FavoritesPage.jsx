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

const Favorites = () => {
  const { totalFavoriteItems, favoriteProd, removeFromFavorites, addToCart } =
    useContext(ShopContext);

  return (
    <div className='container'>
      <TitleH2 text='Favorites' />

      {totalFavoriteItems === 0 ? (
        <Parag text='No Favorite Products' />
      ) : (
        Object.values(favoriteProd).map((item, i) => {
          return (
            <div key={i}>
              <div className='cartProduct'>
                <Link to={`/product/${item._id}`}>
                  <Image
                    src={!item.imgUrl ? null : item.imgUrl[0]}
                    alt={item.title}
                    className='cartProdImg'
                  />
                </Link>

                <ProductDescription data={item.desc} className='cartProdDesc' />
                <Parag text={`Price: ${item.price} ${currency}`} />

                <div>
                  <Button
                    ico={HiOutlineShoppingCart}
                    text={'Add to cart'}
                    className={'btn'}
                    onClick={() => addToCart(item)}
                  ></Button>
                  <Parag
                    text={'Remove from Favorites'}
                    className={'remove-from-cart'}
                    onClick={() => removeFromFavorites(item)}
                  />
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Favorites;
