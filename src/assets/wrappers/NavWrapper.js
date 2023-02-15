import styled from 'styled-components';

const NavWrapper = styled.nav`
  padding: 0.3rem 5rem;
  background-color: #cb0f3e;
  position: relative;
  display: flex;
  box-shadow: 0 0 7px #000;
  @keyframes logoMove {
    50% {
      transform: translate(-50px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @media screen and (min-width: 768px) {
    .logo-container {
      height: 76px;
      img {
        width: 120px;
        margin-top: 3px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    height: auto;
    .logo-container {
      img {
        width: 35px;
      }
    }
  }

  .navbar-menu,
  .language-container {
    display: flex;
    align-items: center;
  }
  .navbar-menu {
    flex-grow: 1;
  }
  .small-screens {
    a {
      margin: 0;
      padding: 0.3rem;
    }
  }

  svg {
    fill: var(--color);
    font-size: 1.5rem;
  }

  .burger {
    font-size: 1.2rem;
    svg {
      font-size: 2rem;
      path {
        fill: var(--color);
      }
    }
  }

  @media screen and (min-width: 768px) {
    .burger {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .links {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .logo-large {
      display: none;
    }
    .logo-small {
      margin: 0 1rem;
      img {
        width: 35px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .logo-small {
      display: none;
    }
    .logo-large {
      margin: 0 2rem;
      img {
        width: 100px;
        animation: logoMove 4s ease-out;
      }
    }
  }
  .flex-center {
    display: flex;
    align-items: center;
  }

  .btn {
    background-color: transparent;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.1s ease-in-out 0s;
    &.globe {
      font-size: 1.2rem;
    }
  }
`;

export default NavWrapper;
