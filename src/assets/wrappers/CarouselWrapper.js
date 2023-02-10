import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .carousel-wrapper {
    display: flex;
    width: 100%;
    position: relative;
    max-width: 85vw;
  }

  .carousel-content-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .carousel-content {
    display: flex;
    transition: all 1s linear;
    scrollbar-width: none; /* hide scrollbar in Firefox */
  }

  .carousel-content > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .child {
    padding: 8px;
    color: #fff;
  }
  img {
    width: 100%;
  }

  .left-arrow,
  .right-arrow {
    position: absolute;
    z-index: 1;
    top: 50%;
    color: white;
  }

  .left-arrow {
    left: 0;
    transform: translate(-100%, -50%);
  }

  .right-arrow {
    right: 0;
    transform: translate(100%, -50%);
  }

  @media (hover: none) and (pointer: coarse) {
    .left-arrow,
    .right-arrow {
      display: none;
    }
  }
`;
