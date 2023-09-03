import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';

const Card = ({ data }) => {
  return (
    <Link to={`productList/${data.title}`} className='text-link'>
      <div className='card'>
        <Image src={data.imgUrl} alt='' className='cardImg' />
        <h2 className='titleCard'>{data.title}</h2>
      </div>
    </Link>
  );
};

export default Card;
