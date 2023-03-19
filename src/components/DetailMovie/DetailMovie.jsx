import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieBlock, MovieImg, MovieInfo } from './DetailMovie.styled';

export const DetailMovie = ({ movieDetails }) => {
  const movieUrl = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    : require('image/noImage.jpg');

  const dateParse = Date.parse(movieDetails.release_date);
  const getYear = new Date(dateParse).getFullYear();
  console.log(movieDetails);

  return (
    <div>
      <MovieBlock>
        <MovieImg>
          <img src={movieUrl} alt={movieDetails.title} />
        </MovieImg>

        <MovieInfo>
          <h2>
            {movieDetails.title} ({getYear})
          </h2>
          <p>User Score: {Math.round(movieDetails.popularity)}%</p>

          <p>Overview:</p>
          <div>{movieDetails.overview}</div>

          <p>Genres:</p>
          <ul>
            {movieDetails.genres &&
              movieDetails.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
          </ul>
        </MovieInfo>
      </MovieBlock>

      <AdditionalInfo />
    </div>
  );
};
