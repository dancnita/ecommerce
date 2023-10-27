import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Parag from '../../components/Parag/Parag';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import './PaymentSuccess.css';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import { ShopContext } from '../../context/ShopContext';

const PaymentSuccess = () => {
  const { setCartProducts } = useContext(ShopContext);

  useEffect(() => {
    //get confirmation of payment from stripe(backend) .then save to DB .then getFrom DB data to update frontEnd-> this is just a demo

    setCartProducts({});
  }, []);

  return (
    <Container className='pay-succ-container'>
      <AiOutlineCheckCircle className='icon-pay-succ' />
      <Parag className='parag-pay-succ' text='Thank you for your order!' />
      <Link to='/'>
        <Button
          ico={MdOutlineKeyboardDoubleArrowRight}
          className='btn'
          text='Continue Shopping'
        />
      </Link>
    </Container>
  );
};

export default PaymentSuccess;
