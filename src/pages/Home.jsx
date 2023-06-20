import useFetching from 'hooks/useFetching';
import { useEffect, useState } from 'react';

import MovieList from 'components/MovieList/MovieList';
import MoviesService from 'services/MoviesService';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [fetchTrending, isTrendingLoading, trendingError] = useFetching(
    async () => {
      const response = await MoviesService.fetchTrending();
      setTrending(response.data.results);
    }
  );

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <>
      {trendingError && <h3>{trendingError}</h3>}
      {isTrendingLoading ? (
        <h4>Loading...</h4>
      ) : (
        <MovieList movies={trending} />
      )}
    </>
  );
};

export default Home;
