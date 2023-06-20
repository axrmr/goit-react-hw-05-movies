import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 5px;
  padding-bottom: 80px;
  list-style: none;

  img {
    width: 210px;
    height: 280px;
    border-radius: 5px;
  }

  .name {
    margin: 5px 0 5px;
  }

  .character {
    max-width: 210px;
    margin: 0 0 20px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.01em;
    line-height: 1.5;
  }
`;
