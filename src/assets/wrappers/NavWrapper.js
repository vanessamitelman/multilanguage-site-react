import styled from 'styled-components';

const NavWrapper = styled.nav`
  padding: 5px 15px;
  box-shadow: inset 0px -3px 0px 0px #000;
  @media screen and (max-width: 500px) {
    box-shadow: inset 1px -1px 0px 0px #000;
  }
  .nav-container {
    display: flex;
    align-items: center;
  }
  .nav-header {
    flex-grow: 1;
  }
  .btn-container {
    display: flex;
    align-items: center;
    @media screen and (min-width: 500px) {
      flex-direction: row-reverse;
    }
    .links-container {
      [dir='ltr'] & {
        margin-right: 50%;
      }
      [dir='rtl'] & {
        margin-left: 50%;
      }
    }
  }
  .burger {
    font-size: 2rem;
    color: white;
  }
  .img-container {
    @media screen and (min-width: 500px) {
      height: 80px;
    }
    @media screen and (max-width: 500px) {
      height: 40px;
    }
    img {
      height: 100%;
    }
  }
`;

export default NavWrapper;
