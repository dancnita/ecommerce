import React from 'react';
import './header.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Login from '../Login/Login';
import Favorites from '../Favorites/Favorites';
import NavCart from '../NavCart/NavCart';
import NavProdCategContainer from '../NavProdCategContainer/NavProdCategContainer';

const Header = () => {
  return (
    <div>
      <div className='topBar'>
        <Logo />
        <SearchBar />
        <Login />
        <Favorites />
        <NavCart />
      </div>
      <NavProdCategContainer />
    </div>
  );
};

export default Header;
