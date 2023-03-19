import { getMovieReviews } from 'api';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setiILoading] = useState(false);

  useEffect(() => {
    setiILoading(true);
    const fetchData = async () => {
      const data = await getMovieReviews(movieId);
      // console.log(data);
      setMovieReviews(data);
      setiILoading(false);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && movieReviews.length !== 0) {
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
  }

  if (!isLoading) {
    return <div>We dont have any reviews for this movie</div>;
  }
};

export default Reviews;
