import React from 'react';
import Container from '../Container/Container';
import Parag from '../../components/Parag/Parag';

const ErrorMsg = ({ error }) => {
  return (
    <Container>
      <Parag text={` An error occurred: ${error.status} ${error.statusText}`} />
    </Container>
  );
};

export default ErrorMsg;
