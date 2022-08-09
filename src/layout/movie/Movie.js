import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Rating from '../../components/shared/Rating'
import { addToWishList, removeFromWishList } from '../../redux/wishlist/WishlistActions';
import './Movie.css'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";
const Movie = (props) => {
    const dispatch = useDispatch();
    const { movie } = props
    const wishListmovie = useSelector((state) => state.wishlist.wishList);

    const favouriteList = wishListmovie.filter((mov) => {
        return mov.id === movie.id
    })

    const handleRemoveFromWishlist = (movie) => {
        dispatch(removeFromWishList(movie))
        toast.error('You already added this item', { position: 'top-right' })

    }
    const handleAddtowishList = (movie) => {
        dispatch(addToWishList(movie))
        toast.success("Success Notification !")
    }
    return (
        <div className='col-lg-2 col-md-6 movie_item'>
            <div className=" text-center position-relative" key={movie.id}>
                <div className='position-absolute end-0'>
                    {favouriteList.length === 1 ?
                        <span
                            onClick={() => handleRemoveFromWishlist(movie)}
                            className="cartBtn btn "
                            type="button"
                        >
                            <span className="fs-5 ms-2"> <AiFillHeart className="me-2 fs-4 text-danger" /></span>
                        </span>
                        : <span
                            onClick={() => handleAddtowishList(movie)}
                            className="cartBtn btn"
                            type="button"
                        >
                            <span className="fs-5 "><AiOutlineHeart className="me-2 fs-4 " /></span>
                        </span>

                    }</div>
                <Link to={`/movie-app/moviedetails/${movie.id}`} className='text-decoration-none text-dark'>
                    <img
                        // BASE_IMG_URL + movie.poster_path
                        src={movie.poster_path ? (BASE_IMG_URL + movie.poster_path) : 'https://via.placeholder.com/200x300'}
                        className="w-100 rounded-top shadow"
                        alt={movie.title}
                    />
                    <div className='movie_item-body'>
                        <h3 className="fs-6 fw-normal ">{movie.title}

                        </h3>
                        <div className='d-flex justify-content-center'> <Rating
                            rate={movie?.vote_average}
                            className="justify-content-center "
                        />
                        </div>
                    </div>
                </Link>
            </div >
        </div>
    )
}

export default Movie