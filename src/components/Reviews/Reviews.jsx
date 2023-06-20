import useFetching from 'hooks/useFetching';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesService from 'services/MoviesService.js';
import { Wrapper } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [fetchReviews, isReviewsLoading, reviewsError] = useFetching(
    async movieId => {
      const response = await MoviesService.fetchReviews(movieId);
      setReviews(response.data.results);
    }
  );

  useEffect(() => {
    fetchReviews(movieId);
  }, [movieId]);

  return (
    <>
      {isReviewsLoading && <h4>Loading...</h4>}
      {reviewsError && <h4>{reviewsError}</h4>}
      {reviews.length ? (
        <Wrapper>
          {reviews.map(review => (
            <li key={review.id} className="item">
              <img
                src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`}
                alt={review.author}
                width="110"
                height="110"
              />
              <h4 className="author">{review.author}</h4>
              <p className="text">{review.content}</p>
            </li>
          ))}
        </Wrapper>
      ) : (
        <p>There is no reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
