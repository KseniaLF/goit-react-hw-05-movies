export const DetailMovie = ({ movieDetails }) => {
  const movieUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

  return (
    <div>
      <img src={movieUrl} alt="" />

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
    </div>
  );
};
