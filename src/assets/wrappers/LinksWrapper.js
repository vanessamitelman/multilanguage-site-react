import styled from 'styled-components';

const LinksWrapper = styled.div`
  color: white;
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  margin-right: 1rem;
  .nav-link {
    padding: 0px 10px;
  }
  &.is-mobile {
    position: absolute;
    margin-right: 0;
    width: 80%;
    height: auto;
    position: fixed;
    background: #cb0e3d;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, 40%);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &.open {
      display: block;
      animation-name: fadeIn;
      animation-duration: 1s;
    }
    &.close {
      animation-name: fadeOut;
      animation-duration: 1s;
      animation-timing-function: linear;
      opacity: 0;
    }
    .nav-link {
      padding: 7px 0;
    }
  }
  .close-btn {
    font-size: 2rem;
    position: absolute;
    cursor: pointer;

    [dir='ltr'] & {
      transform: translateX(-20%);
      right: 0;
    }
    [dir='rtl'] & {
      transform: translateX(20%);
      left: 0;
    }
  }
  .active {
    color: #4e0517;
    text-shadow: 0px 2px 6px #a9062f;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(-50%, 40%) scale(0.3);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, 40%) scale(1.05);
    }
    70% {
      transform: translate(-50%, 40%) scale(0.9);
    }
    100% {
      transform: translate(-50%, 40%) scale(1);
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export default LinksWrapper;
