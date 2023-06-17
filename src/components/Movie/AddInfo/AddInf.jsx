import React from 'react'
import { Link } from 'react-router-dom'

const AddInf = () => {
  return (
    <div>
      <p>Additional information</p>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
    </div>
  )
}

export default AddInf