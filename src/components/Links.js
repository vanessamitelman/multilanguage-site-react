import React from 'react';
import LinksWrapper from '../assets/wrappers/LinksWrapper';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../features/blogSlice';
import { IoIosClose } from 'react-icons/io';
import { navLinks } from '../services/navLinks';

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
      {navLinks.map((navLink, index) => {
        const { title, link } = navLink;
        return (
          <NavLink key={index} to={link} onClick={closeMenu}>
            {t(`${title}`)}
          </NavLink>
        );
      })}
    </LinksWrapper>
  );
};

export default Links;
