import React from 'react';
import Button from '../Button/Button';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/Hi';
import './addToBtns.css';
import Parag from '../Parag/Parag';
import { currency } from '../../utilsScripts/data';

const AddToBtns = ({ data, addToCart, addToFavorites }) => {
  return (
    <div className='addToBtns'>
      <Parag text={`Price: ${data?.price} ${currency}`} />

      <Button
        className={'btn '}
        ico={HiOutlineShoppingCart}
        text={`Add to Cart`}
        onClick={addToCart}
      />

      <Button
        className={'btn '}
        ico={AiOutlineHeart}
        text={`Add to Favorites`}
        onClick={addToFavorites}
      />
    </div>
  );
};

export default AddToBtns;
