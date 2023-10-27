import React from 'react';
import Container from '../Container/Container';
import Parag from '../Parag/Parag';
import TitleH4 from '../TitleH4/TitleH4';
import './footer.css';

const Footer = () => {
  return (
    <Container className='footer'>
      <Container>
        <TitleH4 text={`Get to Know Us`} />
        <Parag text={`About Us`} />
        <Parag text={`Careers`} />
      </Container>
      <Container>
        <TitleH4 text={`Connect with Us`} />
        <Parag text={`Facebook`} />
        <Parag text={`Twitter`} />
        <Parag text={`Instagram`} />
      </Container>
    </Container>
  );
};

export default Footer;
