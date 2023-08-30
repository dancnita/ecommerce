import './navProdCateg.css';
import { Link } from 'react-router-dom';

import { MdOutlineComputer } from 'react-icons/md';
import { FaTabletAlt } from 'react-icons/fa';
import { MdHeadphones } from 'react-icons/md';
import { FiSmartphone } from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';
import { FaTv } from 'react-icons/fa';

const NavProdCateg = ({ text, icoId }) => {
  const icons = [
    MdOutlineComputer,
    FaTabletAlt,
    FiSmartphone,
    IoGameControllerOutline,
    FaTv,
    MdHeadphones,
  ];
  const Ico = icons[icoId];

  return (
    <div className='navProdCateg'>
      <Link to={`/productList/${text}`} className='text-link'>
        <Ico className='iconTopBarSec' />
        <span> {text}</span>
      </Link>
    </div>
  );
};

export default NavProdCateg;
