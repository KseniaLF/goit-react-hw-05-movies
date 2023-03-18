import { List } from './TrendingList.styled';

export const TrendingList = ({ trending }) => {
  console.log(trending);

  return (
    <ul>
      {trending.map(movie => {
        return <li key={movie.id}>{movie.title}</li>;
      })}
    </ul>
  );
};
