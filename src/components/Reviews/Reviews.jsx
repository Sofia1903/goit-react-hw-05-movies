import { useParams } from 'react-router-dom';
import { getReviewsById } from 'service/FetchApi';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getReviewsById(movieId)
      .then(({ results }) => {
        setData(results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (data === null) {
    return null;
  }

  if (data.length === 0) {
    return <p>No reviews found.</p>;
  }

  return (
    <ul>
      {data.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
