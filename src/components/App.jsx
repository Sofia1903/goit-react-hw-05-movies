import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Header = lazy(() => import('./Header'));
const Movie = lazy(() => import('../pages/Movie'));
const MovieCast = lazy(() => import('./Movie/AddInfo/MovieCast'));
const MovieReviews = lazy(() => import('./Movie/AddInfo/MovieReviews'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

/* c06946175aba84ec1feb3a6035efdb4d */
