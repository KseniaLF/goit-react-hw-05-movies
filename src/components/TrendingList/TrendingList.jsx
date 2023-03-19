import { List } from './TrendingList.styled';

import { Link, useLocation } from 'react-router-dom';

export const TrendingList = ({ trending }) => {
  const location = useLocation();
  // console.log(trending);
  return (
    <List>
      {trending.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </li>
        );
      })}
    </List>
  );
};
