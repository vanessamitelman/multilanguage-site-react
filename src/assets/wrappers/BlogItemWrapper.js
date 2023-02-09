import styled from 'styled-components';

const BlogItemWrapper = styled.div`
  button {
    height: 100%;
    padding: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .item-container {
    width: 234px;
    height: 100%;
    box-shadow: -1px 0px 4px 5px #9c9999;
    border-radius: 6px;
    padding: 10px;
    @media screen and (max-width: 768px) {
      box-shadow: -1px 0px 4px 5px #9c9999;
      border-radius: 6px;
      padding: 10px;
    }
  }
  .img-container {
    width: 234px;
    min-width: 234px;
  }
  .text-container {
    line-height: 1.5;
  }
`;

export default BlogItemWrapper;
