import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import BlogItemWrapper from '../assets/wrappers/BlogItemWrapper.js';
import { clearPosts } from '../features/postSlice.js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogItem = ({ id, created_at, locale, language, image, link }) => {
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
            <img src={image} alt={title} />
            <h2 className='pt-3 pb-3 text-3xl font-bold'>
              {title.substring(0, 60)}
              {title.length > 60 && '...'}
            </h2>

            <p>
              {shortDesc.substring(0, 130)}
              {shortDesc.length > 130 && '...'}
            </p>
            <div>
              <Link to={`/post/${id}`}>Read More</Link>
            </div>
            <div>
              <a href={link} target='_blank'>
                To Original Article...
              </a>
            </div>
          </div>
        </div>
      </button>
    </BlogItemWrapper>
  );
};

export default BlogItem;
