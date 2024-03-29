import styled from 'styled-components';

const LinksWrapper = styled.div`
  color: #4e0517;
  font-size: 1.2rem;
  display: flex;
  gap: 1rem;
  .active {
    color: white;
    text-shadow: 0px 2px 6px #a9062f;
  }
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
    box-shadow: 0px 1px 7px 2px #000;
    &.open {
      display: block;
      animation: fadeIn linear 1s forwards;
      .nav-link {
        [dir='ltr'] & {
          animation: LinkfadeInLtr var(--bezier) 1s forwards;
        }
        [dir='rtl'] & {
          animation: LinkfadeInRtl var(--bezier) 1s forwards;
        }
      }
    }
    &.close {
      display: none;
    }
    .nav-link {
      padding: 7px 0;
    }
  }
  .close-btn {
    font-size: 2rem;
    position: absolute;
    cursor: pointer;
    z-index: 10;
    [dir='ltr'] & {
      transform: translateX(-20%);
      right: 0;
    }
    [dir='rtl'] & {
      transform: translateX(20%);
      left: 0;
    }
  }
  @keyframes LinkfadeInLtr {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    75% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes LinkfadeInRtl {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    75% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(-50%, 40%) scale(0);
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
`;

export default LinksWrapper;
