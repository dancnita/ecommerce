import React from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  return (
    <div className='logo'>
      <Link to='/' className='text-link'>
        X-LOGO
      </Link>
    </div>
  );
};

export default Logo;
