import styled from 'styled-components';

const BlogWrapper = styled.div`
  max-width: 50%;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

export default BlogWrapper;
