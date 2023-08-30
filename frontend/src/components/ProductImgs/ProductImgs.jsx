import React from 'react';
import { useState } from 'react';
import './productImgs.css';

const ProductImgs = ({ data, className }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const showImg = (index) => {
    setImgIndex(index);
  };
  return (
    <div className={className}>
      <div className='mainImg'>
        <img src={!data ? null : data[`${imgIndex}`]} alt='' />
      </div>
      <div className='secImgs'>
        {!data
          ? null
          : data.map((item, index) => {
              return (
                <img
                  src={item}
                  alt=''
                  key={index}
                  onClick={() => showImg(index)}
                />
              );
            })}
        {/* <img src={data} alt='' />
          <img src={data} alt='' />
          <img src={data} alt='' />
          <img src={data} alt='' /> */}
      </div>
    </div>
  );
};

export default ProductImgs;
