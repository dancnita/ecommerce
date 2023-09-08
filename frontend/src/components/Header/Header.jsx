import React, { useState } from 'react';
import './header.css';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Login from '../Login/Login';
import Favorites from '../Favorites/Favorites';
import NavCart from '../NavCart/NavCart';
import NavBar from '../NavBar/NavBar';
import Modal from '../Modal/Modal';
import underConstructionImg from '../../assets/under-construction-website-5kv.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  const BurgerMenuIcon = showSideBar ? AiOutlineClose : GiHamburgerMenu;

  return (
    <div>
      <div className='topBar'>
        <BurgerMenuIcon
          className='sideBarBtn'
          onClick={() => setShowSideBar(!showSideBar)}
        />
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
      <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
    </div>
  );
};

export default Header;
