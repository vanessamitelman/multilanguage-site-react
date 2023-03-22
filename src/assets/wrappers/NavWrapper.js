import styled from 'styled-components';

const NavWrapper = styled.nav`
  padding: 5px 15px;
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
        margin-right: 30%;
      }
      [dir='rtl'] & {
        margin-left: 30%;
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
