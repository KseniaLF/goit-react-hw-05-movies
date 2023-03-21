import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearchMovies } from 'api';

import { SearchBox } from 'components/SearchBox/SearchBox';
import { MovieList } from 'components/MovieList/MovieList';
// import { MovieList } from 'components/TrendingList/TrendingList';
// import { MovieList } from 'components/MovieList/MovieList';
// import { TrendingList } from 'components/TrendingList/TrendingList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('name') ?? '';

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        if (searchParam) {
          const data = await getSearchMovies(searchParam, abortController);
          // console.log(searchParam);
          setMovies(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };

    // try {
    //   if (searchParam) {
    //     fetchData();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  }, [searchParam]);

  const visibleMovies = movies.filter(movie => {
    if (searchParam || searchParam === '') {
      return movie;
    }
    return movie.name.toLowerCase().includes(searchParam.toLowerCase());
  });

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={searchParam} onChange={updateQueryString} />
      <MovieList movies={visibleMovies} />
    </main>
  );
};
export default Movies;
