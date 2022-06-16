import React from 'react'
import { Link } from "react-router-dom";
import Rating from '../../components/shared/Rating'
import './Movie.css'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";
function Movie({ movie }) {
    return (
        <div className='col-lg-2 col-md-6 movie_item'>
            <div className=" text-center " key={movie.id}>
                <Link to={`/moviedetails/${movie.id}`} className='text-decoration-none text-dark'>
                    <img
                        src={BASE_IMG_URL + movie.poster_path}
                        className="w-100 rounded shadow"
                        alt={movie.title}
                    />
                    <h3 className="fs-6 fw-normal mt-2 ">{movie.title}</h3>
                    <div className='d-flex justify-content-center'> <Rating
                        rate={movie?.vote_average}
                        className="justify-content-center "
                    /></div>
                </Link>
            </div >


        </div>
    )
}

export default Movie