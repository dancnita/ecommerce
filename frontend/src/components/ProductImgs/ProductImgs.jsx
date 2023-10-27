import React, { useState } from 'react';
import Container from '../Container/Container';
import Image from '../Image/Image';
import './productImgs.css';

const ProductImgs = ({ data, className }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const showImg = (index) => {
    setImgIndex(index);
  };
  return (
    <Container className={className}>
      <Container className='mainImg'>
        <Image src={!data ? null : data[`${imgIndex}`]} alt='' />
      </Container>
      <Container className='secImgs'>
        {!data
          ? null
          : data.map((item, index) => {
              return (
                <Image
                  src={item}
                  alt=''
                  key={index}
                  onClick={() => showImg(index)}
                />
              );
            })}
      </Container>
    </Container>
  );
};

export default ProductImgs;
