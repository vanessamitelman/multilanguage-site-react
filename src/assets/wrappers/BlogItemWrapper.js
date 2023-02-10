import styled from 'styled-components';

const BlogItemWrapper = styled.div`
  display: grid;
  place-content: center;
  button {
    cursor: pointer;
  }
  .item-container {
    height: 100%;
    box-shadow: -1px 0px 4px 5px #9c9999;
    border-radius: 6px;
    padding: 10px;
    min-height: 35rem;
    display: flex;
  }

  .text-container {
    line-height: 1.5;
    [dir='ltr'] & {
      text-align: left;
    }
    [dir='rtl'] & {
      text-align: right;
    }
    img {
      @media screen and (min-width: 990px) {
        max-height: 234px;
        min-height: 234px;
      }
      @media screen and (max-width: 990px) {
        width: 100%;
      }
      width: 100%;
      height: 100%;
    }
  }
`;

export default BlogItemWrapper;
