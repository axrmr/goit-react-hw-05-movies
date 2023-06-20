import MovieList from 'components/MovieList/MovieList';
import Search from 'components/Search/Search';
import useFetching from 'hooks/useFetching';
import { useState } from 'react';
import MoviesService from 'services/MoviesService';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovies, isSearching, searchError] = useFetching(async query => {
    const response = await MoviesService.search(query);
    setMovies(response.data.results);
  });

  const handleSearchSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    searchMovies(searchQuery);
    e.target.reset();
  };

  return (
    <>
      <Search onSubmit={handleSearchSubmit} />
      {searchError && <h3>{searchError}</h3>}
      {isSearching ? <h3>Searching...</h3> : <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
