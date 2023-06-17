import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import defaultImg from "../../img/aOmQWw3_460s.jpg"

const MainInfo = ({movie}) => {
    const location = useLocation();
    const { current } = useRef(location.state?.from)

    return (
    <div>
    {
        <div>
        <Link to={current ?? '/'}> Повернутись</Link>
        <img
        style ={{
            width: "450px"
        }}
            src={
            movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                : defaultImg
            }
            alt={movie.original_title}
        />
        </div>
    }

    <div>
        <h3>{movie.original_title}</h3>

        <div>
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        </div>
        <div>
        <h4>Genres</h4>
        <ul>
            {movie.genres?.map((genre, ind) => (
            <span key={ind}>{genre.name}</span>
            ))}
        </ul>
        </div>
    </div>
    </div> 
  )
}

export default MainInfo