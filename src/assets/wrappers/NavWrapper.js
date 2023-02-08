import styled from 'styled-components';

const NavWrapper = styled.nav`
  padding: 1rem 5rem;
  @keyframes logoMove {
    50% {
      transform: translate(-50px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .responsive {
    position: relative;
    a {
      line-height: 1.5;
      margin: 0;
      padding: 0.3rem;
    }
  }
  &.homepage {
    @media screen and (min-width: 768px) {
      svg {
        fill: #000;
      }
    }
    .links {
      a {
        color: #1a1a1a;
        &:hover {
          color: #656262;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
  &.inner-page {
    @media screen and (min-width: 768px) {
      background-color: #2e2f38;
      svg {
        fill: #fff;
      }
    }
    @media screen and (max-width: 768px) {
      background-color: #fff;
      svg {
        fill: #000;
      }
    }
  }

  .burger {
    .btn {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 768px) {
    box-shadow: 0 0 7px #000;
    .burger {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .links {
      display: none;
    }
  }
  position: relative;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    .logo {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    .logo {
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
  .lang-btns {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 5px 5px 15px 5px #000000;
    width: 100px;
    [dir='rtl'] & {
      left: 0px;
    }
    [dir='ltr'] & {
      right: 0px;
    }
    .btn {
      &:hover {
        color: #8a8989;
        font-size: 1.01rem;
      }
    }
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
  .right-side {
    position: relative;
    display: flex;
    align-items: center;
  }
`;

export default NavWrapper;