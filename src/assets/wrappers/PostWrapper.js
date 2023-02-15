import styled from 'styled-components';

const PostWrapper = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  box-sizing: border-box;
  color: var(--color);
  > a {
    text-decoration: none;
    color: #000;
    padding: 0 0.5rem;
  }
  img {
    box-shadow: 1px 1px 10px 6px white;
    width: 100%;
    height: auto;
    border-radius: 0.2rem;
  }
  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  article {
    line-height: var(--line-height);
    padding-bottom: 5rem;
    position: relative;
  }
  p {
    padding: 1rem 0;
    font-size: 1.2rem;
  }
  .back {
    display: flex;
    align-items: center;
    margin: 1rem 0 0;
  }
  .read-more {
    border: 1px solid #e8c96d;
    padding: 0.3rem;
    border-radius: 5px;
    position: absolute;
    transition: all 0.5s linear;
    text-transform: uppercase;
    &:hover {
      background-color: #e8c975;
      color: #000;
    }
    [dir='rtl'] & {
      left: 0;
    }
    [dir='ltr'] & {
      right: 0;
    }
  }
  .intro {
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  h1 {
    text-transform: capitalize;
    padding: 2rem 0 1rem;
    color: #e8c96d;
  }
  h4 {
    color: #ffe4e3;
  }
`;

export default PostWrapper;
