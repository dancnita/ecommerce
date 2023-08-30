import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <Link to={`productList/${data.title}`} className='text-link'>
      <div className='card'>
        <img src={data.imgUrl} alt='' className='cardImg' />
        <h2 className='titleCard'>{data.title}</h2>
      </div>
    </Link>
  );
};

export default Card;
