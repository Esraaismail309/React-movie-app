import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { SiFacepunch } from 'react-icons/si'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { fetchFilterdMoviesRequest } from './../../redux/searchMovie/SearchActions'
import Loader from '../../components/Loader';
import Movie from '../movie/Movie';
import { Link, useParams, } from 'react-router-dom';
import { Pagination } from '../../components/shared/Pagination';

export const FilterdMovies = () => {
    const { page, query } = useParams()
    const dispatch = useDispatch()
    const data = useSelector((res) => { return res.filterdMovies })
    useEffect(() => {
        dispatch(fetchFilterdMoviesRequest(page, query));
    }, [page, query]);
    return (
        <div className='container mt-5 pt-5'>
            {data?.isLoading ? (<Loader />) :
                data?.filterdMovies?.results.length === 0 ?
                    (<div className='text-center'>
                        <h2>data not found </h2>
                        <SiFacepunch className='h1 d-block m-auto' />
                        <Link
                            to={"/popularmovies"}
                            className="btn btn-dark border px-4 mt-3  shadow border-dark rounded-pill "
                        >
                            <FaLongArrowAltLeft /> Back
                        </Link>
                    </div>) :
                    (<div className='row gx-4 gy-3 '>
                        {data?.filterdMovies.results?.map((movie) => (
                            <Movie movie={movie} key={movie.id} />
                        ))}
                    </div>)
            }
            <Pagination page={page} query={query} />
        </div>
    )
}
