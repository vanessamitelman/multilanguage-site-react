import styled from 'styled-components';

const SharedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (min-width: 500px) {
    .small-screens {
      display: none;
    }
    .large-screens {
      display: block;
    }
  }

  @media screen and (max-width: 500px) {
    .small-screens {
      display: block;
    }
    .large-screens {
      display: none;
    }
  }
`;

export default SharedWrapper;
