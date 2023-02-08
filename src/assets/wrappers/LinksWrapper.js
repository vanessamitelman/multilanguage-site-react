import styled from 'styled-components';

const LinksWrapper = styled.div`
  padding: 1rem 5rem;
  a {
    margin: 0 2rem;
    text-decoration: none;
    transition: all 0.2s linear;
  }
  .homepage & {
    a {
      color: #1a1a1a;
      &:hover {
        color: #656262;
      }
    }
  }
  .inner-page & {
    a {
      color: #fff;
      &:hover {
        color: #d3cfcf;
      }
      @media screen and (max-width: 768px) {
        color: #000;
        font-size: 1rem;
        margin: 0;
        padding: 0.3rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 5px 5px 15px 5px #000000;
    width: 100px;
    padding: 0.2rem 0;
    display: flex;
    flex-direction: column;
    a {
      &:hover {
        color: #8a8989;
        font-size: 1.01rem;
      }
    }
  }
  .responsive & {
    position: absolute;
  }
`;

export default LinksWrapper;
