import styled from 'styled-components';

const PostWrapper = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  box-sizing: border-box;
  color: #fff;
  > a {
    text-decoration: none;
    color: #000;
    padding: 0 0.5rem;
  }
  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  article {
    line-height: 1.5;
    padding-bottom: 2rem;
  }

  .back {
    display: flex;
    align-items: center;
    margin: 1rem 0 2rem;
  }
  .intro {
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  h2 {
    text-transform: capitalize;
    padding: 2rem 0 1rem;
  }
  h4 {
    font-size: 1.2rem;
    padding-bottom: 1rem;
  }
`;

export default PostWrapper;
