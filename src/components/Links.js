import React, { useState, useEffect } from 'react';
import LinksWrapper from '../assets/wrappers/LinksWrapper';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { closeSidebar } from '../features/blogSlice';
import { IoIosClose } from 'react-icons/io';
import { navLinks } from '../services/navLinks';
import { useDispatch, useSelector } from 'react-redux';

const Links = () => {
  const { isSidebarOpen } = useSelector((store) => store.blog);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const closeMenu = () => {
    dispatch(closeSidebar());
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <LinksWrapper
      className={
        isMobile ? (isSidebarOpen ? 'is-mobile open' : 'is-mobile close') : ''
      }
    >
      <button className='small-screens close-btn no-border' onClick={closeMenu}>
        <IoIosClose />
      </button>
      {navLinks.map((navLink, index) => {
        const { title, link } = navLink;
        return (
          <div key={index} className='nav-link'>
            <NavLink to={link} onClick={closeMenu}>
              {t(`${title}`)}
            </NavLink>
          </div>
        );
      })}
    </LinksWrapper>
  );
};

export default Links;
