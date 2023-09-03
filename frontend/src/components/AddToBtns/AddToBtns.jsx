import React from 'react';
import Button from '../Button/Button';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/Hi';
import { Link } from 'react-router-dom';
import './addToBtns.css';
import Parag from '../Parag/Parag';

const AddToBtns = ({ data, addToCart }) => {
  return (
    <div>
      <Parag text={`Price: ${data?.price}`} />
      {/* <Link to='/cart'> </Link> */}
      <Button
        className={'btn'}
        ico={HiOutlineShoppingCart}
        text={`Add to Cart`}
        onClick={addToCart}
      />

      <Button
        className={'btn'}
        ico={AiOutlineHeart}
        text={`Add to Favorites`}
      />
    </div>
  );
};

export default AddToBtns;
