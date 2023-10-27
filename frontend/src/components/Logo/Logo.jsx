import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './logo.css';

const Logo = () => {
  return (
    <Container className='logo'>
      <Link to='/' className='text-link'>
        X-LOGO
      </Link>
    </Container>
  );
};

export default Logo;
