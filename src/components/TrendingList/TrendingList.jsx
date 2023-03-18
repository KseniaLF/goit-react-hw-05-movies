// import { List } from './TrendingList.styled';

import { Link, useLocation } from 'react-router-dom';

export const TrendingList = ({ trending }) => {
  const location = useLocation();

  return (
    <ul>
      {trending.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
