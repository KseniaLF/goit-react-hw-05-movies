import { getMovieCredits } from 'api';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setiILoading] = useState(false);

  useEffect(() => {
    setiILoading(true);
    const fetchData = async () => {
      const data = await getMovieCredits(movieId);
      // console.log(data);
      setMovieCast(data);
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
  if (!isLoading) {
    return (
      <ul>
        {movieCast.map(actor => {
          const actorUrlImg = actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : require('image/noImage.jpg');

          return (
            <li key={actor.cast_id}>
              <img src={actorUrlImg} width={150} alt="" />
              <b>{actor.name}</b>
              <p> Character: {actor.character}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  if (!isLoading && movieCast.length === 0) {
    return <div>No results</div>;
  }
};
export default Cast;
