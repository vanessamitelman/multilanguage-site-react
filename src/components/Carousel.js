import React, { useEffect, useState } from 'react';
import { CarouselWrapper } from '../assets/wrappers/CarouselWrapper';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Carousel = (props) => {
  const { children, show } = props;
  const { lang_Direction } = useSelector((store) => store.blog);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <CarouselWrapper>
      <div className='carousel-wrapper'>
        {currentIndex > 0 && (
          <button onClick={prev} className='left-arrow'>
            {lang_Direction === 'ltr' ? (
              <AiOutlineLeftCircle size='2rem' />
            ) : (
              <AiOutlineRightCircle size='2rem' />
            )}
          </button>
        )}

        <div className='carousel-content-wrapper'>
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(${lang_Direction === 'rtl' ? '+' : '-'}${
                currentIndex * (100 / show)
              }%)`
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - show && (
          <button onClick={next} className='right-arrow'>
            {lang_Direction === 'ltr' ? (
              <AiOutlineRightCircle size='2rem' />
            ) : (
              <AiOutlineLeftCircle size='2rem' />
            )}
          </button>
        )}
      </div>
    </CarouselWrapper>
  );
};

export default Carousel;
