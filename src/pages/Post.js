import React, { useEffect } from 'react';
import { getPost } from '../features/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import PostWrapper from '../assets/wrappers/PostWrapper.js';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

import DOMPurify from 'dompurify';

const Post = () => {
  const { id } = useParams();
  const { language, lang_Direction } = useSelector((store) => store.blog);
  const { isLoading, post } = useSelector((store) => store.post);
  const { created_at, locale, image, link } = post;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getPost(id));
    // eslint-disable-next-line
  }, [language]);

  if (isLoading) {
    return <Loader />;
  }

  if (!post.hasOwnProperty('created_at')) {
    return (
      <PostWrapper>
        <article>{t('missing_data')}</article>
      </PostWrapper>
    );
  }
  return (
    <PostWrapper>
      <div className='back'>
        {lang_Direction === 'rtl' && <AiOutlineRight />}
        {lang_Direction === 'ltr' && <AiOutlineLeft />}
        <Link to='/blog'>{t('back')}</Link>
      </div>
      <article>
        <p className='intro'>
          {moment(created_at).format('DD/MM/YYYY')} <BsDot />
          {locale[language].author}
        </p>
        <h2
          contentEditable='false'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(locale[language].title)
          }}
        />

        <h4
          contentEditable='false'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(locale[language].shortDesc)
          }}
        />
        <p
          contentEditable='false'
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(locale[language].longDesc)
          }}
        />
      </article>
    </PostWrapper>
  );
};

export default Post;
