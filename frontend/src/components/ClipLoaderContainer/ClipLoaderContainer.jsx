import React from 'react';
import Container from '../Container/Container';
import ClipLoader from 'react-spinners/ClipLoader';

const ClipLoaderContainer = () => {
  return (
    <Container style={{ width: '10vw', margin: 'auto', display: 'block' }}>
      <ClipLoader color='#0097e6' size={50} />
    </Container>
  );
};

export default ClipLoaderContainer;
