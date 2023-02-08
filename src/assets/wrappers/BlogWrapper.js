import styled from 'styled-components';

const BlogWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin: 2rem 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default BlogWrapper;
