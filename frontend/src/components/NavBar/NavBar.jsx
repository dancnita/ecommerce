import React from 'react';
import NavProdCateg from '../NavProdCateg/NavProdCateg';
import { productsCateg } from '../../utilsScripts/data';
import './navBar.css';

const NavBar = ({ showSideBar, setShowSideBar }) => {
  return (
    <>
      <div className='topBarSec'>
        <nav className={showSideBar ? 'navBar show' : 'navBar hide'}>
          {productsCateg.map((categ, index) => {
            return (
              <NavProdCateg
                text={categ.title}
                key={index}
                icoId={index}
                className='navProdCateg'
                onClick={() => setShowSideBar(!showSideBar)}
              />
            );
          })}
        </nav>
      </div>
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
