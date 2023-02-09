import styled from 'styled-components';

const BlogItemWrapper = styled.div`
  button {
    cursor: pointer;
  }
  .item-container {
    height: 100%;
    box-shadow: -1px 0px 4px 5px #9c9999;
    border-radius: 6px;
    padding: 10px;
  }

  .text-container {
    line-height: 1.5;
    text-align: left;
    img {
      max-height: 234px;
      min-height: 234px;
      height: 100%;
    }
  }
`;

export default BlogItemWrapper;
