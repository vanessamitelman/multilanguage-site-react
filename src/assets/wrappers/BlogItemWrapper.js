import styled from 'styled-components';

const BlogItemWrapper = styled.div`
  display: grid;
  place-content: center;
  .hover-effect {
    transition: all 0.5s linear;
  }
  .hover-effect:hover {
    background-color: var(--color);
    color: var(--color1);
    border-color: var(--color1);
  }
  .blog-container {
    cursor: pointer;
  }
  .item-container {
    height: 100%;
    border-radius: 2px;
    box-shadow: var(--box-shadow1);
    padding: 15px;
    min-height: 38rem;
    display: flex;
    [dir='ltr'] & {
      min-height: 35rem;
    }
    &:hover {
      box-shadow: var(--box-shadow2);
    }
  }

  .text-container {
    line-height: var(--line-height);
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
