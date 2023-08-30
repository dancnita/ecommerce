import React from 'react';
import Button from '../Button/Button';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/Hi';
import { Link } from 'react-router-dom';
import './addTocart.css';

const AddToCart = ({ data, addToCart }) => {
  return (
    <div>
      <p>Price: {data?.price}</p>
      {/* <Link to='/cart'> </Link> */}
      <Button
        className={'addCartBtn'}
        ico={HiOutlineShoppingCart}
        text={`Add to Cart`}
        onClick={addToCart}
      />

      <Button
        className={'addCartBtn'}
        ico={AiOutlineHeart}
        text={`Add to Favorites`}
      />
    </div>
  );
};

export default AddToCart;
