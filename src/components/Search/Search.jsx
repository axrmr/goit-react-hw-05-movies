import PropTypes from 'prop-types';
import { SearchBox } from './Search.styled';

const Search = ({ onSubmit }) => {
  return (
    <SearchBox onSubmit={onSubmit}>
      <input type="text" name="search" placeholder="Search movie" />
      <button className="searh-btn">Search</button>
    </SearchBox>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func,
};

export default Search;
