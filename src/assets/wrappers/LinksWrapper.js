import styled from 'styled-components';

const LinksWrapper = styled.div`
  padding: 1rem 5rem;
  a {
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    margin: 0 2rem;
    text-decoration: none;
    transition: all 0.2s linear;
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

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.87);
    border-radius: 4px;
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
      0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
    position: absolute;
    outline: 0;
    a {
      &:hover {
        color: #8a8989;
        font-size: 1.01rem;
      }
    }
  }
  .small-screens & {
    position: absolute;
  }
`;

export default LinksWrapper;
