import React, { useState, useEffect } from 'react';
import './imageSlider.css';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import ClipLoaderContainer from '../ClipLoaderContainer/ClipLoaderContainer';
import { Link } from 'react-router-dom';
import Image from '../Image/Image';
import Parag from '../Parag/Parag';
import Container from '../../components/Container/Container';

const ImageSlider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data?.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data?.length - 1 : slide - 1);
  };

  useEffect(() => {
    const showNextSlide = setTimeout(() => nextSlide(), 5000);
    return () => {
      clearTimeout(showNextSlide);
    };
  }, [slide]);

  return (
    <Container className='imgSliderContainer'>
      <Container className='slideShow'>
        <SlArrowLeft onClick={prevSlide} className='arrow arrow-left' />
        {!data ? (
          <ClipLoaderContainer />
        ) : (
          data?.map((item, index) => (
            <Container key={index}>
              <Link to={`/product/${item._id}`}>
                <Parag
                  style={slide !== index ? { display: 'none' } : null}
                  className='slideMsg'
                  text={data[index].msg}
                />

                <Image
                  src={item.imgUrl[0]}
                  className={
                    slide === index
                      ? 'imgSlide imgSlideActive'
                      : 'imgSlide imgSlideInactive'
                  }
                  alt={item.title}
                />
              </Link>
            </Container>
          ))
        )}

        <SlArrowRight onClick={nextSlide} className='arrow arrow-right' />
        <Container className='indicators'>
          {data?.map((item, index) => {
            return (
              <button
                key={index}
                className={
                  slide === index ? 'indicator' : 'indicator indicator-inactive'
                }
                onClick={() => setSlide(index)}
              />
            );
          })}
        </Container>
      </Container>
    </Container>
  );
};

export default ImageSlider;
