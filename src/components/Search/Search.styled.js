import { styled } from 'styled-components';

export const SearchBox = styled.form`
  display: flex;
  max-width: 400px;
  width: 100%;
  height: 40px;
  margin: 10px 0 40px;

  @media (max-width: 320px) {
    flex-wrap: wrap;
    max-width: 280px;
  }

  input {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    padding: 0 20px;
    font-size: 14px;
    border: 2px solid lightgray;
    border-radius: 5px;

    &:focus {
      border: 2px solid lightgray;
      outline: 2px solid lightgray;
    }
  }

  button {
    width: 100%;

    @media (min-width: 320px) {
      height: 35px;
      width: 120px;
      height: 100%;
      margin-left: 5px;
      padding: 5px 0;
      font-size: 14px;
    }
  }
`;
