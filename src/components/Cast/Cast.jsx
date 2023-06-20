import useFetching from 'hooks/useFetching.jsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesService from 'services/MoviesService.js';
import { Wrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [fetchCast, isCastLoading, castError] = useFetching(async movieId => {
    const response = await MoviesService.fetchCast(movieId);
    setCast(response.data.cast);
  });

  useEffect(() => {
    fetchCast(movieId);
  }, [movieId]);

  return (
    <>
      {castError && <h4>{castError}</h4>}
      {isCastLoading && <h3>Loading...</h3>}
      <Wrapper>
        {cast.slice(0, 10).map(cast => (
          <li key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : ''
              }
              alt=""
              width="300"
              height="340"
            />
            <h4 className="name">{cast.name}</h4>
            {cast.character && (
              <h4 className="character">Character - {cast.character}</h4>
            )}
          </li>
        ))}
      </Wrapper>
    </>
  );
};

export default Cast;
