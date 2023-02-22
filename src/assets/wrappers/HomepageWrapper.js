import styled from 'styled-components';
import globe from '../images/globe.jpg';

const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  background-image: url(${globe});
  background-size: cover;
  position: relative;

  h1 {
    transition: all 1s linear;

    text-shadow: var(----text-shadow2);
    background-color: var(--color);
    color: var(--bg-color1);
    font-weight: bold;
    margin: 0 auto;
    padding: 10px;
    width: 50%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
    transition: all 0.5s linear;
  }
  @media screen and (min-width: 768px) {
    font-size: 5rem;
    &:hover {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default HomepageWrapper;
