import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import NavWrapper from '../assets/wrappers/NavWrapper';
import Links from './Links';
import logo from '../assets/images/logo.svg';
import Language from './Language';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const displayLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <NavWrapper className='inner-page'>
      <div className='left-side'>
        <div className='flex-center'>
          <div className='burger'>
            <button className='btn' onClick={displayLinks}>
              <RxHamburgerMenu />
              {showLinks && (
                <div className='responsive'>
                  <Links />
                </div>
              )}
            </button>
          </div>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='Vanessa' />
            </Link>
          </div>
          <div className='links'>
            <Links />
          </div>
        </div>
      </div>
      <div className='right-side'>
        <Language />
      </div>
    </NavWrapper>
  );
};

export default Nav;
