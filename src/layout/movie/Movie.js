import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import Rating from '../../components/shared/Rating'
import { addToWishList, removeFromWishList } from '../../redux/wishlist/WishlistActions';
import './Movie.css'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";
function Movie({ movie }) {
    const dispatch = useDispatch();
    const [found, setfound] = useState(true)
    const [local, setlocal] = useState([])

    const handleRemoveFromWishlist = (movie) => {
        dispatch(removeFromWishList(movie))
        setfound(true)
    }
    const handleAddtowishList = (movie) => {
        dispatch(addToWishList(movie))
        const x = []
        x.push(movie)
        setfound(false)
        localStorage.setItem('movie', JSON.stringify(x))
    }
    return (
        <div className='col-lg-2 col-md-6 movie_item'>
            <div className=" text-center " key={movie.id}>
                {found ?
                    <button
                        onClick={() => handleAddtowishList(movie)}
                        className="cartBtn btn"
                        type="button"
                    >
                        <span className="fs-5 "></span> <AiOutlineHeart className="me-2 fs-4" />
                        Add to wishlist
                    </button>
                    :
                    <button
                        onClick={() => handleRemoveFromWishlist(movie)}
                        className="cartBtn btn "
                        type="button"
                    >
                        <span className="fs-5 ms-2"></span> <AiFillHeart className="me-2 fs-4" />
                        Remove From
                        wishlist
                    </button>
                }
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