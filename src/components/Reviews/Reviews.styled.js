import { styled } from 'styled-components';

export const Wrapper = styled.ul`
  list-style: none;

  & li:not(:last-child) {
    margin-bottom: 70px;
  }

  .author {
    margin: 0;
    font-weight: normal;
    font-style: italic;
  }

  .text {
    max-width: 500px;
    line-height: 1.7;
  }
`;
