import React from 'react'
import { Link } from "react-router-dom";
import Rating from '../components/shared/Rating'


const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";
function Movie({ movie }) {
    return (
        <div className="col-md-3 text-center" key={movie.id}>
            <Link to={`/moviedetails/${movie.id}`} className='text-decoration-none text-dark'>
                <img
                    src={BASE_IMG_URL + movie.poster_path}
                    className="w-75 rounded shadow"
                    alt={movie.title}
                />
                <h3 className="fs-6 fw-normal mt-2 ">{movie.title}</h3>
                <Rating
                    rate={movie?.vote_average}
                    className="justify-content-center"
                />
            </Link>
        </div >)
}

export default Movie