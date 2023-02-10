import React, { useEffect, useState } from 'react';
import { getBlog } from '../features/blogSlice';
import Loader from '../components/Loader';
import BlogItem from '../components/BlogItem';
import { useTranslation } from 'react-i18next';
import BlogWrapper from '../assets/wrappers/BlogWrapper';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel';

const Blog = () => {
  // eslint-disable-next-line
  const [toShow, setToShow] = useState(3);

  const { language, isLoading, blog } = useSelector((store) => store.blog);

  const { t } = useTranslation();
  const dispatch = useDispatch();

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
