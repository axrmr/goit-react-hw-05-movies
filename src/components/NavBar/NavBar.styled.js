import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Shared = styled.div`
  color: blue;
`;

export const Wrapper = styled.div`
  margin: 0 0 20px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 26px;

  &:hover {
    color: orange;
  }

  & + & {
    margin-left: 15px;
  }

  &.active {
    font-size: 34px;
    color: orange;
  }
`;
