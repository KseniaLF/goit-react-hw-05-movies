import { getMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieReviews(movieId);
      // console.log(data);
      setMovieReviews(data);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (movieReviews.length === 0) {
    return <div>we dont have any reviews for this movie</div>;
  }

  return (
    <ul>
      {movieReviews.map(review => {
        return (
          <li key={review.id}>
            <b>Author: {review.author}</b>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
