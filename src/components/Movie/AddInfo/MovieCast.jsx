import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import defaultImg from "../../../img/aOmQWw3_460s.jpg"
import { getMovieIdCredits } from 'api/API';

const MovieCast = () => {
    const { movieId } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        getMovieIdCredits(movieId)
        .then(result => setData(result))
        .catch(err => console.log(err))
    }, [movieId]);
  return (
    <ul>
      {data?.cast.map(cast => (
        <li key={cast.id}>
        <div>
            <img
            style={{
                width: "150px"
            }}
                src={
                cast.profile_path
                    ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
            />
            <h3>{cast.name}</h3>
            <span>Character: {cast.character}</span>
        </div>
        </li>
      ))}
    </ul>
  )
}

export default MovieCast
