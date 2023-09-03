import React from 'react';
import NavProdCateg from '../NavProdCateg/NavProdCateg';
import { productsCateg } from '../../utilsScripts/data';

const NavProdCategContainer = () => {
  return (
    <div className='topBarSec'>
      <div className='topBar'>
        {productsCateg.map((categ, index) => {
          return <NavProdCateg text={categ.title} key={index} icoId={index} />;
        })}
        {/* <span > navbar burger - langa logo</span> */}
      </div>
    </div>
  );
};

export default NavProdCategContainer;
