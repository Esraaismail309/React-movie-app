import React from 'react'
import Rating from '../components/shared/Rating'


const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";

function Movie({ movie }) {
    return (
        <div className="col-md-3 text-center" key={movie.id}>
            <img
                src={BASE_IMG_URL + movie.poster_path}
                className="w-75 rounded shadow"
                alt={movie.title}
            />
            <h3 className="fs-6 fw-normal mt-2">{movie.title}</h3>

            <Rating
                rate={movie?.vote_average}
                className="justify-content-center"
            />
        </div>)
}

export default Movie