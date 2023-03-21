import { List } from './TrendingList.styled';

import { Link, useLocation } from 'react-router-dom';

export const TrendingList = ({ trending }) => {
  const location = useLocation();

  return (
    <List>
      {trending.map(movie => {
        const movieUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          : require('image/noImage.jpg');

        return (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <img src={movieUrl} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          </li>
        );
      })}
    </List>
  );
};
