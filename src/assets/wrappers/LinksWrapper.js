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
      width: calc(100%);
    }
  }
  @media screen and (max-width: 768px) {
    z-index: 9;
    animation: open-menu 0.5s linear;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: var(--color);
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    color: rgba(0, 0, 0, 0.87);
    position: absolute;
    outline: 0;
    width: 100vw;
    top: 3rem;
    background-color: var(--bg-color2);
    [dir='rtl'] & {
      right: 0;
    }
    [dir='ltr'] & {
      left: 0;
    }
    .small-screens.close-btn {
      position: absolute;
      [dir='rtl'] & {
        left: 0;
      }
      [dir='ltr'] & {
        right: 0;
      }

      svg {
        fill: var(--color);
        font-size: 3rem;
      }
    }
  }
  .small-screens & {
    position: absolute;
  }
  a {
    color: var(--color);
    text-transform: uppercase;
    font-size: 1rem;
    margin: 0 2rem;
    text-decoration: none;
    transition: all 0.2s linear;
    line-height: 2;
    align-self: flex-start;

    &.active {
      box-shadow: var(--box-shadow4);
    }
    [dir='ltr'] & {
      font-size: 1.1rem;
    }
    [dir='rtl'] & {
      font-size: 1.4rem;
    }
    &:hover {
      color: var(--color3);
    }
    @media screen and (max-width: 768px) {
      color: var(--color);
      margin: 0;
    }
  }
`;

export default LinksWrapper;
