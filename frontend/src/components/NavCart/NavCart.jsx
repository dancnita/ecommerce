import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { HiOutlineShoppingCart } from 'react-icons/Hi';
import { HiShoppingCart } from 'react-icons/Hi';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import './navCart.css';

const NavCart = () => {
  const { totalCartItems } = useContext(ShopContext);
  return (
    <Link to='/cart' className='text-link'>
      <Container className='navCart'>
        <span>
          <HiOutlineShoppingCart className='navcart-icon' />
          <span
            className='navCartitemNo'
            style={{ display: totalCartItems === 0 ? 'none' : 'inline' }}
          >
            {totalCartItems}
          </span>
        </span>
        <span>My Cart</span>
      </Container>
    </Link>
  );
};

export default NavCart;
