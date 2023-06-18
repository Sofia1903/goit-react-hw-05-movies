const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWE3MTViMjhiYzlhNTc2ZWQ2MzkzZjYzYjllMjlmOCIsInN1YiI6IjY0N2ZhYTRlY2E3ZWM2MDEzOTAwNDkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4uBK7cn8JGhy1huwgClr31nT-u15Nkxz-Rq5SsBaK6g',
  },
};

const getTrendingMovies = async () => {
  const data = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  return data.json();
};

const getSearchMovies = async query => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data.json();
};

const getMovieById = async movieId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return data.json();
};

const getCreditsById = async movieId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data.json();
};

const getReviewsById = async movieId => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data.json();
};

export {
  getTrendingMovies,
  getSearchMovies,
  getMovieById,
  getCreditsById,
  getReviewsById,
};
