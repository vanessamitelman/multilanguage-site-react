import React, { useEffect, useState } from 'react';
import { getBlog } from '../features/blogSlice';
import Loader from '../components/Loader';
import BlogItem from '../components/BlogItem';
import { useTranslation } from 'react-i18next';
import BlogWrapper from '../assets/wrappers/BlogWrapper';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel';

const Blog = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ]);
  // eslint-disable-next-line
  const [toShow, setToShow] = useState(3);

  const { language, isLoading, blog } = useSelector((store) => store.blog);

  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth < 1200) {
        setToShow(2);
      }
      if (window.innerWidth < 687) {
        setToShow(1);
      }
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  useEffect(() => {
    dispatch(getBlog());
    // eslint-disable-next-line
  }, [language]);

  if (isLoading) {
    return <Loader />;
  }
  if (blog.length === 0) {
    return <BlogWrapper>{t('missing_data')}</BlogWrapper>;
  }
  return (
    <BlogWrapper>
      <div className='carousel-container'>
        <div>
          <h2>Width: {windowSize[0]}</h2>

          <h2>Height: {windowSize[1]}</h2>
        </div>
        <Carousel show={toShow}>
          {blog.map((item, index) => {
            return (
              <div key={index} style={{ width: `calc(100% / ${toShow}` }}>
                <div className='child'>
                  <BlogItem key={index} {...item} language={language} />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </BlogWrapper>
  );
};

export default Blog;
