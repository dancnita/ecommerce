import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Image from '../Image/Image';
import Button from '../Button/Button';
import Parag from '../Parag/Parag';
import Container from '../Container/Container';
import './modal.css';

const Modal = ({ toggleModal, modalMsg, modalImgSrc, modalImgAlt }) => {
  return (
    <Container className='modal-container '>
      <Container className='modal-content modal-fade'>
        <AiOutlineClose
          className='modal-icon modal-close'
          onClick={() => toggleModal(false)}
        />
        <Parag text={modalMsg} className='modal-text' />
        <Image src={modalImgSrc} alt={modalImgAlt} className='modal-img' />
        <Button
          onClick={() => toggleModal(false)}
          text='Close'
          ico={AiOutlineClose}
          className='btn modal-btn'
        />
      </Container>
    </Container>
  );
};

export default Modal;
