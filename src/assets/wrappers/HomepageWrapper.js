import styled from 'styled-components';

const HomepageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  h1 {
    transition: all 1s linear;
    font-size: 3rem;
    text-shadow: 8px 4px 4px #f3f1f1fc;
    &:hover {
      font-size: 4rem;
    }
  }
`;

export default HomepageWrapper;
