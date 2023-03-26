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
    border-radius: var(--border-radius);
    width: 3rem;
    height: 3rem;
    border: var(--border2);
    border-top-color: var(--color);
    border-bottom-color: var(--color);
    position: absolute;
    animation: turn 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s infinite;
  }

  #outer {
    border-radius: var(--border-radius);
    width: 5rem;
    height: 5rem;
    border: var(--border2);
    border-left-color: var(--color);
    border-right-color: var(--color);
    position: absolute;
    animation: turn 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s infinite;
    box-shadow: var(--box-shadow5);
  }
  #spinner {
    position: relative;
    display: grid;
    place-items: center;
    height: 60vh;
  }
`;

export default LoaderWrapper;
