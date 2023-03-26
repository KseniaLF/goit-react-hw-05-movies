import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { List } from 'components/TrendingList/TrendingList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => {
        const movieUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : require('image/noImage.jpg');

        return (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <img src={movieUrl} alt={movie.title} />
              <p> {movie.title} </p>
            </Link>
          </li>
        );
      })}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
