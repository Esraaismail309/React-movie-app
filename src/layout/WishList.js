import React from 'react'
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Movie from './movie/Movie';

export const WishList = () => {

    const wishListmovie = useSelector((state) => state.wishlist.wishList);
    console.log(wishListmovie);
    return (
        <div className='mt-5 container pt-5'>

            <div className="row gy-3 text-center gx-3">

                {wishListmovie?.length === 0 ? (
                    <>
                        <h3> your wishlist is empty </h3>
                        <h5>Back to movies</h5>
                        <Link
                            to={"/movie-app/popularmovies/1"}
                            className="btn btn-dark border px-4 mx-auto mt-3 col-1 shadow border-dark rounded-pill "
                        >
                            <FaLongArrowAltLeft /> Back
                        </Link>
                    </>
                ) :
                    <>
                        <h1>Your WishList ...</h1>
                        {
                            wishListmovie?.map((movie) => (
                                <Movie movie={movie} key={movie.id} />))
                        }
                    </>

                }

            </div>


        </div >
    )
}
