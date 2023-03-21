import { getMovieCredits } from 'api';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setiILoading] = useState(false);

  useEffect(() => {
    setiILoading(true);
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const data = await getMovieCredits(movieId, abortController);
        // console.log(data);
        setMovieCast(data);
        setiILoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }
  if (!isLoading && movieCast.length !== 0) {
    return (
      <CastList>
        {movieCast.map(actor => {
          const actorUrlImg = actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : require('image/noImage.jpg');

          return (
            <li key={actor.cast_id}>
              <img src={actorUrlImg} width={150} alt="" />
              <div>
                <b>{actor.name}</b>
                <p> Character: {actor.character}</p>
              </div>
            </li>
          );
        })}
      </CastList>
    );
  }

  if (!isLoading) {
    return <div>No results</div>;
  }
};
export default Cast;
