import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

import Image from '../Image/Image';
import Container from '../../components/Container/Container';
import TitleH2 from '../TitleH2/TitleH2';

const Card = ({ data }) => {
  return (
    <Link to={`productList/${data.categ}`} className='text-link'>
      <Container className='card'>
        <Image src={data.imgUrl} alt='' className='cardImg' />
        <TitleH2 className='titleCard' text={data.title}></TitleH2>
      </Container>
    </Link>
  );
};

export default Card;
