import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import NavWrapper from '../assets/wrappers/NavWrapper';
import Links from './Links';
import logoLg from '../assets/images/logo.svg';
import logoSm from '../assets/images/logo-color-sm.svg';
import Language from './Language';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  const displayLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <NavWrapper>
      <div className='left-side'>
        <div className='flex-center'>
          <div className='logo-small'>
            <Link to='/'>
              <img src={logoSm} alt='Vanessa' />
            </Link>
          </div>
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
          <div className='logo-large'>
            <Link to='/'>
              <img src={logoLg} alt='Vanessa' />
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
