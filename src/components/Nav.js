import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import NavWrapper from '../assets/wrappers/NavWrapper';
import Links from './Links';
import logoLg from '../assets/images/logo.svg';
import logoSm from '../assets/images/logo-color-sm.svg';
import Language from './Language';
import { toggleSidebar } from '../features/blogSlice';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(toggleSidebar());
  };
  useEffect(() => {
    //set The media query
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    //initialize the isMobile value
    setIsMobile(mediaQuery.matches);
    //add function to update  isMobile
    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };
    //add event listener to the media query
    mediaQuery.addEventListener('change', handleMediaChange);
    //callback function to remove the event listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);
  return (
    // <NavWrapper>
    //   <div className='logo-container'>
    //     <div className='small-screens'>
    //       <Link to='/'>
    //         <img src={logoSm} alt='Vanessa' className='logo-small' />
    //       </Link>
    //     </div>
    //     <div className='large-screens'>
    //       <Link to='/'>
    //         <img src={logoLg} alt='Vanessa' className='logo-large' />
    //       </Link>
    //     </div>
    //   </div>
    //   <div className='navbar-menu'>
    //     <button className='btn burger small-screens' onClick={toggleMenu}>
    //       <RxHamburgerMenu />
    //     </button>
    //     <div className='small-screens '>{isSidebarOpen && <Links />}</div>
    //     <div className='large-screens links'>
    //       <Links />
    //     </div>
    //   </div>
    //   <div className='language-container'>
    //     <Language />
    //   </div>
    // </NavWrapper>
    <NavWrapper>
      <div className='nav-container'>
        <div className='nav-header'>
          <div className='img-container'>
            <Link to='/'>
              <img
                src={isMobile ? logoSm : logoLg}
                alt='Vanessa'
                className={isMobile ? 'logo-small' : 'logo-large'}
              />
            </Link>
          </div>
        </div>
        <div className='nav-links'>
          <div className='btn-container'>
            <div className='language-container'>
              <Language />
            </div>
            <div className='links-container'>
              <button className='btn burger small-screens' onClick={toggleMenu}>
                <FaBars />
              </button>
              <Links />
            </div>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Nav;
