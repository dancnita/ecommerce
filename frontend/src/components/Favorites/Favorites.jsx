import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { ShopContext } from '../../context/ShopContext';
import './favorites.css';

const Favorites = () => {
  const { totalFavoriteItems } = useContext(ShopContext);
  return (
    <Link to='/favoritesPage' className='text-link'>
      <div className='navCart'>
        <span>
          <AiOutlineHeart className='navcart-icon' />

          <span
            className='navCartitemNo'
            style={{ display: totalFavoriteItems === 0 ? 'none' : 'inline' }}
          >
            {totalFavoriteItems}
          </span>
        </span>
        <span>Favorites</span>
      </div>
    </Link>
  );
};

export default Favorites;
