import React from 'react';
import NavProdCateg from '../NavProdCateg/NavProdCateg';
import Container from '../Container/Container';
import { productsCateg } from '../../utilsScripts/data';
import './navBar.css';

const NavBar = ({ showSideBar, setShowSideBar }) => {
  return (
    <>
      <Container className='topBarSec'>
        <Container className={showSideBar ? 'navBar show' : 'navBar hide'}>
          {productsCateg.map((item, index) => {
            return (
              <NavProdCateg
                text={item.title}
                categ={item.categ}
                key={index}
                icoId={index}
                className='navProdCateg'
                onClick={() => setShowSideBar(!showSideBar)}
              />
            );
          })}
        </Container>
      </Container>
      {/* <nav className={showSideBar ? 'sideBar show' : 'sideBar hide'}>
        {productsCateg.map((categ, index) => {
          return (
            <NavProdCateg
              text={categ.title}
              key={index}
              icoId={index}
              className='navProdCategSide'
              onClick={() => setShowSideBar(!showSideBar)}
            />
          );
        })}
      </nav> */}
    </>
  );
};

export default NavBar;
