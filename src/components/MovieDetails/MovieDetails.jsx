import GoBackButton from 'components/GoBackButton/GoBackButton.jsx';
import useFetching from 'hooks/useFetching';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import MoviesService from 'services/MoviesService.js';
import { ContentWrapper, StyledLink } from './MovieDetails.styled.js';

const MovieDetails = () => {
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const [fetchDetails, isDetailsLoading, detailsError] = useFetching(
    async () => {
      const response = await MoviesService.fetchDetails(movieId);
      setMovieDetails(response.data);
    }
  );

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      {detailsError && <h4>{detailsError}</h4>}
      {isDetailsLoading && <h4>Loading...</h4>}
      <GoBackButton onClick={handleGoBack}>Go back</GoBackButton>
      <ContentWrapper>
        <img
          className="img"
          src={
            movieDetails.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
              : ''
          }
          alt={movieDetails.title}
          width="320"
          height="430"
        />
        <div className="info-wrapper">
          <h2 className="title">{movieDetails.title}</h2>
          <h3 className="overview-title">Overview</h3>
          <p className="overview-text">{movieDetails.overview}</p>
          <p className="release-date">
            Release date:<span> {movieDetails.release_date}</span>
          </p>
          <p className="rating">
            Rating: <span>{`${movieDetails.vote_average}`.slice(0, 3)}</span>
          </p>
          <p className="lang">
            Original language: <span>{movieDetails.original_language}</span>
          </p>
        </div>
      </ContentWrapper>
      <StyledLink to="cast">Cast</StyledLink>
      <StyledLink to="reviews">Reviews</StyledLink>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
