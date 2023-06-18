import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../service/FetchApi';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const prevLocation = useRef(location?.state?.from ?? '/movies');

  useEffect(() => {
    setLoading(true);

    getMovieById(movieId)
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        alert('error:', error);
        setLoading(false);
      });
  }, [movieId]);

  const {
    title,
    overview,
    genres,
    poster_path: path,
    vote_average: vote,
    release_date: release,
  } = data;

  const rating = vote?.toFixed(1);
  const releaseDate = `(${release?.slice(0, 4)})`;

  const defaultImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`;

  const imgPath = path ? `https://image.tmdb.org/t/p/w500${path}` : defaultImg;

  return (
    <Suspense>
      <div className={css.container}>
        <Link className={css.backLink} to={prevLocation.current}>
          Back
        </Link>
        {loading ? (
          <p className={css.loading}>Loading...</p>
        ) : (
          <>
            <h1 className={css.title}>
              {title} <span className={css.releaseDate}>{releaseDate}</span>
            </h1>

            <p className={css.overview}>Overview: {overview}</p>
            <p className={css.genres}>
              Genres: {genres && genres.map(genre => genre.name).join(', ')}
            </p>
            <img width={250} className={css.poster} src={imgPath} alt="" />

            {vote && <p className={css.userScore}>User Score: {rating} / 10</p>}
            <ul className={css.navigation}>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <div className={css.reviewsContainer}>
              <Outlet />
            </div>
          </>
        )}
      </div>
    </Suspense>
  );
};

export default MovieDetails;
