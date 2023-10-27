import React from 'react';
import Container from '../Container/Container';
import Parag from '../Parag/Parag';

const ProductDescription = ({ data, className }) => {
  return (
    <Container className={className}>
      <Parag text={!data ? null : data} />
    </Container>
  );
};

export default ProductDescription;
