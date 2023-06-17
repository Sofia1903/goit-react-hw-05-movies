import { getTrendingAll } from 'api/API';
import MovieLink from 'components/Movie/MovieLink';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    getTrendingAll()
      .then(data => {
        setMovieList(data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (!movieList) {
    return;
  }
  return (
    <>
      <ul>
        {movieList.map(movie => (<MovieLink movie={movie} key={movie.id} />))}
      </ul>
    </>
  );
};

export default Home;
