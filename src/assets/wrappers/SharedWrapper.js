import styled from 'styled-components';

const SharedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .video-background::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(balloons);
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    .video-background {
      display: none;
    }
  }
`;

export default SharedWrapper;
