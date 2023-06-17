import { getMovieById } from 'api/API';
import { useEffect,  useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import AddInf from 'components/Movie/AddInfo/AddInf';
import MainInfo from 'components/Movie/MainInfo';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId)
      .then(data => setMovie(data))
      .catch(err => console.log(err));
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <MainInfo movie={movie} />
      <AddInf />
      <Outlet />
    </>
  );
};

export default Movie;
