import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsById } from 'service/FetchApi';

const defaultImg = `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg`;

const Cast = () => {
  const { movieId } = useParams();
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getCreditsById(movieId)
      .then(({ cast }) => {
        setdata(cast);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.length > 0 ? (
            <ul>
              {data.map(({ id, profile_path, name, character }, index) => {
                const IMG = profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg;
                return (
                  <li key={`${id}_${index}`}>
                    <img width="100" src={`${IMG}`} alt="" />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No cast members found.</p>
          )}
        </>
      )}
    </>
  );
};

export default Cast;
