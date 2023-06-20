import { StyledLink, Wrapper } from './NavBar.styled';

const NavBar = () => {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Wrapper>
  );
};

export default NavBar;
