import './navProdCateg.css';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

import { MdOutlineComputer } from 'react-icons/md';
import { FaTabletAlt } from 'react-icons/fa';
import { MdHeadphones } from 'react-icons/md';
import { FiSmartphone } from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';
import { FaTv } from 'react-icons/fa';

const NavProdCateg = ({ text, categ, icoId, className, onClick }) => {
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
    <Container className={className}>
      <Link
        to={`/productList/${categ}`}
        className='text-link'
        onClick={onClick}
      >
        <Ico className='iconTopBarSec' />
        <span> {text}</span>
      </Link>
    </Container>
  );
};

export default NavProdCateg;
