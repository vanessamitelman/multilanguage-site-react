import React from 'react';
import LinksWrapper from '../assets/wrappers/LinksWrapper';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../features/blogSlice';
import { IoIosClose } from 'react-icons/io';

const Links = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(closeSidebar());
  };
  return (
    <LinksWrapper>
      <button className='small-screens close-btn no-border' onClick={closeMenu}>
        <IoIosClose />
      </button>
      <Link to='/' onClick={closeMenu}>
        {t('nav.home')}
      </Link>
      <Link to='/blog' onClick={closeMenu}>
        {t('nav.blog')}
      </Link>
    </LinksWrapper>
  );
};

export default Links;
