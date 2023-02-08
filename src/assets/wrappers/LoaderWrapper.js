import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
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
    width: 150px;
    height: 150px;
    border: 4px solid transparent;
    border-top-color: #000;
    border-bottom-color: #000;
    position: absolute;
    top: 10px;
    left: 10px;
    animation: turn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s infinite;
  }

  #outer {
    border-radius: 50%;
    width: 170px;
    height: 170px;
    border: 4px solid transparent;
    border-left-color: #000;
    border-right-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    animation: turn 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s infinite;
  }
  #spinner {
    position: relative;
    top: 4rem;
    left: -90px;
  }
`;

export default LoaderWrapper;
