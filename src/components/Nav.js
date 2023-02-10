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
      <div className='logo-container'>
        <div className='small-screens'>
          <Link to='/'>
            <img src={logoSm} alt='Vanessa' className='logo-small' />
          </Link>
        </div>
        <div className='large-screens'>
          <Link to='/'>
            <img src={logoLg} alt='Vanessa' className='logo-large' />
          </Link>
        </div>
      </div>
      <div className='navbar-menu'>
        <button className='btn burger small-screens' onClick={displayLinks}>
          <RxHamburgerMenu />{' '}
        </button>
        <div className='small-screens '>{showLinks && <Links />}</div>
        <div className='large-screens links'>
          <Links />
        </div>
      </div>
      <div className='language-container'>
        <Language />
      </div>
    </NavWrapper>
  );
};

export default Nav;
