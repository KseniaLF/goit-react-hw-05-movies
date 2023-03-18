import { getMovieCredits } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieCredits(movieId);
      console.log(data);
      setMovieCast(data);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

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
};
export default Cast;
