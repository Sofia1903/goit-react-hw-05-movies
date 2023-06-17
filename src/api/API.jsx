const URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDY5NDYxNzVhYmE4NGVjMWZlYjNhNjAzNWVmZGI0ZCIsInN1YiI6IjY0ODhiNzRmOTkyNTljMDBmZjEwOGVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W8hYuQw3SpaFp3KuXamF2ZGzm3w0X0SsPIxY8a5WkFQ',
  },
};
export const getTrendingAll = () => {
  const url = `${URL}trending/all/day?language=en-US`;

  const data = fetch(url, options).then(res => res.json());

  return data;
};
export const getMovieById = id => {
  const url = `${URL}movie/${id}?language=en-US`;

  const data = fetch(url, options).then(res => res.json());

  return data;
};

export const getMovieIdCredits = id => {
  const url = `${URL}movie/${id}/credits?language=en-US`;

  const data = fetch(url, options).then(res => res.json());
  return data;
};
export const getMovieIdReviews = id => {
  const url = `${URL}movie/${id}/reviews?language=en-US&page=1`;

  const data = fetch(url, options).then(res => res.json());
  return data;
};

export const getSearchMovie = search => {
  const url = `${URL}search/movie?query=${search}&include_adult=false&language=en-US&page=1`;

  const data = fetch(url, options).then(res => res.json());
  return data;
};