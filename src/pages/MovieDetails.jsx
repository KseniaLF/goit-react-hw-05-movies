import { getMovieDetails } from 'api';
import { BackLink } from 'components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieDetails(movieId);
      console.log(data);
      setMovieDetails(data);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <div>{movieDetails.title}</div>
    </div>
  );
};
export default MovieDetails;
