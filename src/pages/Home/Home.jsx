import { Suspense, useEffect, useState } from 'react';
import { getTrendingMovies } from '../../service/FetchApi';
import css from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getTrendingMovies()
      .then(data => {
        setData(data.results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Suspense>
      <div className={css.container}>
        <h1>Trending today</h1>
        {loading ? (
          <p className={css.loading}>Loading...</p>
        ) : (
          <MovieList data={data} />
        )}
      </div>
    </Suspense>
  );
};

export default Home;
