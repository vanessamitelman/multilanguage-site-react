import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import BlogItemWrapper from '../assets/wrappers/BlogItemWrapper.js';
import { clearPosts } from '../features/postSlice.js';
import { useDispatch } from 'react-redux';

const BlogItem = ({ id, created_at, locale, language }) => {
  const { author, title, shortDesc } = locale[language];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    dispatch(clearPosts());
    // eslint-disable-next-line
  }, []);

  return (
    <BlogItemWrapper>
      <button type='button' onClick={handleClick}>
        <div className='item-container'>
          <div className='img-container'></div>
          <div className='text-container'>
            <p>
              {moment(created_at).format('DD/MM/YYYY')} {author}
            </p>
            <h4>{title}</h4>
            <p>{shortDesc}</p>
          </div>
        </div>
      </button>
    </BlogItemWrapper>
  );
};

export default BlogItem;
