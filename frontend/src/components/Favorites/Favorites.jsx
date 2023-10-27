import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import Parag from '../Parag/Parag';
import { AiOutlineHeart } from 'react-icons/ai';
import { ShopContext } from '../../context/ShopContext';
import './favorites.css';

const Favorites = () => {
  const { totalFavoriteItems } = useContext(ShopContext);
  return (
    <Link to='/favoritesPage' className='text-link'>
      <Container className='navCart'>
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
      </Container>
    </Link>
  );
};

export default Favorites;
