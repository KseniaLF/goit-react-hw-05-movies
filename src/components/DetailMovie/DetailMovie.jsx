import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

export const DetailMovie = ({ movieDetails }) => {
  const movieUrl = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    : require('image/noImage.jpg');

  return (
    <div>
      <img src={movieUrl} alt="" width={300} />

      {movieDetails.title}
      {movieDetails.release_date}

      <p>Overview</p>
      {movieDetails.overview}

      <p>Genres</p>
      <ul>
        {movieDetails.genres &&
          movieDetails.genres.map(genre => {
            return <li key={genre.id}>{genre.name}</li>;
          })}
      </ul>

      <AdditionalInfo />
    </div>
  );
};
