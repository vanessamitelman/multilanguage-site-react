import React, { useEffect } from 'react';
import { getBlog } from '../features/blogSlice';
import Loader from '../components/Loader';
import BlogItem from '../components/BlogItem';
import { useTranslation } from 'react-i18next';
import BlogWrapper from '../assets/wrappers/BlogWrapper';
import { useDispatch, useSelector } from 'react-redux';

const Blog = () => {
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
      {blog.map((item, index) => {
        return <BlogItem key={index} {...item} language={language} />;
      })}
    </BlogWrapper>
  );
};

export default Blog;
