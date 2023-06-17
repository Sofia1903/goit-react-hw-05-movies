import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MovieLink = ({movie}) => {
    const location = useLocation();
    return (
    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.original_name ? movie.original_name : movie.original_title}
    </Link>
    )
}

export default MovieLink