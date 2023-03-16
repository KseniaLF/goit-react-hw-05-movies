import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';
const KEY = '02bcb177375afb51516704bac2617151';

export const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );
  //   return console.log(response.data.results);
  return response.data.results;
};

// https: //api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export const getSearchMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  //   return console.log(response.data.results);
  return response.data;
};
