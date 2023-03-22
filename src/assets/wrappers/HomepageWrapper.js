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
    color: white;
    text-align: center;
    line-height: 1;
  }
  @media screen and (min-width: 500px) {
    font-size: 5rem;
    &:hover {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export default HomepageWrapper;
