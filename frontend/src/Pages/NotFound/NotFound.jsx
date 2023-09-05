import React from 'react';
import './notFound.css';
import { RiEmotionUnhappyLine } from 'react-icons/ri';
import Parag from '../../components/Parag/Parag';

const NotFound = () => {
  return (
    <div>
      <RiEmotionUnhappyLine className='icon-notFound' />
      <Parag text='404' className='not-found-errCode' />
      <Parag text='Page not found' className='not-found-text' />
      <Parag
        text={`The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved`}
        className='not-found-decs'
      />
    </div>
  );
};

export default NotFound;
