import styled from 'styled-components';

const LinksWrapper = styled.div`
  padding: 1rem 5rem;
  @keyframes open-menu {
    0% {
      width: 25%;
    }
    25% {
      width: 55%;
    }
    50% {
      width: 70%;
    }
    100% {
      width: calc(100vw - 4rem);
    }
  }
  a {
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    margin: 0 2rem;
    text-decoration: none;
    transition: all 0.2s linear;
    line-height: 2;
    [dir='ltr'] & {
      font-size: 1.3rem;
    }
    [dir='rtl'] & {
      font-size: 1.7rem;
    }
    &:hover {
      color: #d3cfcf;
    }
    @media screen and (max-width: 768px) {
      color: #fff;
      margin: 0;
      padding: 0.3rem;
    }
  }

  @media screen and (max-width: 768px) {
    z-index: 9;
    animation: open-menu 0.5s linear;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgba(0, 0, 0, 0.87);
    position: absolute;
    outline: 0;
    width: 100vw;
    top: 5rem;
    background-color: #90092b;
    [dir='rtl'] & {
      right: 0;
    }
    [dir='ltr'] & {
      left: 0;
    }
    .small-screens.close-btn {
      display: grid;
      place-items: end;

      svg {
        fill: #fff;
        font-size: 3rem;
      }
    }
  }
  .small-screens & {
    position: absolute;
  }
`;

export default LinksWrapper;
