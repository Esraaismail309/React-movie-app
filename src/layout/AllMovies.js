import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesRequest } from '../redux/allMovies/AllMoviesActions'

function AllMovies() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMoviesRequest())
    }, [])
    const movies = useSelector((res) => { return res.movies })
    console.log(movies);
    return (
        <div className='container mt-3'>
            {movies.isLoading ? (<p>loadin....</p>)
                : movies.movies.results.map((movie) => (
                    <p>{movie.id}</p>
                ))
            }
        </div>
    )
}

export default AllMovies