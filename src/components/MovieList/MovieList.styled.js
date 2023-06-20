import { styled } from 'styled-components';

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
  margin: 0;
  padding: 0 0 60px;
  list-style: none;

  li {
    border-radius: 5px;
    text-align: left;
    transition: transform 0.2s linear;

    &:hover {
      transform: scale(1.01);
    }
  }

  a {
    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 5px;
  }

  .title {
    max-width: 220px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
    margin-top: 10px;
    padding: 0 10px;
    font-size: 14px;
    color: #fff;
  }
`;

export default Wrapper;
