import React from 'react';
import './cardWide.css';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import Parag from '../Parag/Parag';
import { currency } from '../../utilsScripts/data';
import TitleH4 from '../TitleH4/TitleH4';
import Container from '../Container/Container';

const CardWide = ({ data }) => {
  return (
    <Link to={`/product/${data._id}`} className='text-link'>
      <Container className='cardWide'>
        <Container>
          <Image src={data.imgUrl[0]} alt={data.title} />
        </Container>
        <Container>
          <TitleH4 text={data.title} />
          <Parag text={`Price: ${data.price} ${currency}`} />
        </Container>
      </Container>
    </Link>
  );
};

export default CardWide;
