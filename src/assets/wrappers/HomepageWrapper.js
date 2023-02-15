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
    font-size: 5rem;
    text-shadow: 2px 0px 4px #f3f1f1fc;
    background-color: white;
    color: black;
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
    &:hover {
      font-size: 4rem;
    }
  }
`;

export default HomepageWrapper;
