import styled from 'styled-components';

const LoaderWrapper = styled.div`
  @keyframes turn {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  #inner {
    border-radius: 50%;
    width: 50vh;
    height: 50vh;
    border: 4px solid transparent;
    border-top-color: #000;
    border-bottom-color: #000;
    position: absolute;
    animation: turn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s infinite;
  }

  #outer {
    border-radius: 50%;
    width: 45vh;
    height: 45vh;
    border: 4px solid transparent;
    border-left-color: #000;
    border-right-color: #000;
    position: absolute;
    animation: turn 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s infinite;
  }
  #spinner {
    position: relative;
    display: grid;
    place-items: center;
    height: 60vh;
  }
`;

export default LoaderWrapper;
