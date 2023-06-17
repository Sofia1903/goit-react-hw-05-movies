import { getMovieIdReviews } from 'api/API';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    getMovieIdReviews(movieId)
    .then(res => setData(res));
  }, [movieId]);
  return (
    <>
        {!data?.results.length ? (<p>We don't have any reviews for this movie</p>) : (data.results.map(review => (
            <div key={review.id}>
                <h3> Author: {review.author}</h3>
                <p>{review.content}</p>
            </div>
            ))
        )}
    </>
    )
};

export default MovieReviews;

