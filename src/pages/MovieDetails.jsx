import { getMovieDetails } from 'api';
import { BackLink } from 'components/BackLink/BackLink';
import { DetailMovie } from 'components/DetailMovie/DetailMovie';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/movies';
  const BackLinkLocationRef = useRef(location.state?.from ?? '/movies');

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieDetails(movieId);
      // console.log(data);
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
      <BackLink to={BackLinkLocationRef.current}>Back to list</BackLink>
      {movieDetails && <DetailMovie movieDetails={movieDetails} />}
    </div>
  );
};
export default MovieDetails;
