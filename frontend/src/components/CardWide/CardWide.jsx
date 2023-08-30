import React from 'react';
import './cardWide.css';
import { Link } from 'react-router-dom';

const CardWide = ({ data }) => {
  return (
    <Link to={`/product/${data._id}`} className='text-link'>
      <div className='cardWide'>
        <div>
          <img src={data.imgUrl[0]} alt='' />
        </div>

        <div>
          <h4>{data.title}</h4>
          <p>Price: {data.price}&euro;</p>
        </div>
      </div>
    </Link>
  );
};

export default CardWide;
