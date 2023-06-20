import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Wrapper from './MovieList.styled';

const MovieList = ({ movies }) => {
  if (movies === undefined) return;

  return (
    <>
      {!!movies.length && (
        <Wrapper>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
                      : ''
                  }
                  alt=""
                  width="300"
                  height="340"
                />
                <h4 className="title" title={movie.title}>
                  {movie.title}
                </h4>
              </Link>
            </li>
          ))}
        </Wrapper>
      )}
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
