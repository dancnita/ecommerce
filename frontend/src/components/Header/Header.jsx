import React, { useState } from 'react';
import './header.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Login from '../Login/Login';
import Favorites from '../Favorites/Favorites';
import NavCart from '../NavCart/NavCart';
import NavProdCategContainer from '../NavProdCategContainer/NavProdCategContainer';
import Modal from '../Modal/Modal';
import underConstructionImg from '../../assets/under-construction-website-5kv.png';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className='topBar'>
        <Logo />
        <SearchBar />
        <a style={{ cursor: 'pointer' }} onClick={() => setShowModal(true)}>
          <Login />
        </a>

        <Favorites />
        <NavCart />

        {showModal ? (
          <Modal
            className='modal-fade'
            toggleModal={setShowModal}
            modalMsg={`We're sorry, but this feature is not available right now`}
            modalImgSrc={underConstructionImg}
            modalImgAlt='under-construction'
          />
        ) : null}
      </div>
      <NavProdCategContainer />
    </div>
  );
};

export default Header;
