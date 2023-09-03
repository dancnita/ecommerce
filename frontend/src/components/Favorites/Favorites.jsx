import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import './favorites.css';

const Favorites = () => {
  return (
    <div className='favorites'>
      <AiOutlineHeart className='favorites-icon' />
      <span>Favorites</span>
    </div>
  );
};

export default Favorites;
