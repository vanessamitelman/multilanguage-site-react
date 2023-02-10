import React, { useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import BlogItemWrapper from '../assets/wrappers/BlogItemWrapper.js';
import { clearPosts } from '../features/postSlice.js';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BlogItem = ({ id, created_at, locale, language, image }) => {
  const { author, title, shortDesc } = locale[language];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
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
          <div className='flex flex-col text-container'>
            <p>
              {moment(created_at).format('DD/MM/YYYY')} {author}
            </p>
            <img src={image} alt={title} className='pt-2' />
            <h2 className='pt-3 pb-3 text-3xl font-bold'>
              {title.substring(0, 60)}
              {title.length > 60 && '...'}
            </h2>

            <p className='flex-grow'>
              {shortDesc.substring(0, 130)}
              {shortDesc.length > 130 && '...'}
            </p>
            <div className='pt-4'>
              <Link
                to={`/post/${id}`}
                className='p-1 border-2 border-gray-400 border-solid rounded '
              >
                {t('readMore')}
              </Link>
            </div>
          </div>
        </div>
      </button>
    </BlogItemWrapper>
  );
};

export default BlogItem;
