import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { SiFacepunch } from 'react-icons/si'
import { Link, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { fetchFilterdMoviesRequest } from './../../redux/searchMovie/SearchActions'
import { FormattedMessage, useIntl } from 'react-intl'
import Loader from '../../components/Loader';
import Movie from '../movie/Movie';


export const FilterdMovies = () => {
    const { page, query } = useParams()
    const intl = useIntl()
    const dispatch = useDispatch()
    const data = useSelector((res) => { return res.filterdMovies })
    const maxPageNum = data.filterdMovies.total_pages
    useEffect(() => {
        dispatch(fetchFilterdMoviesRequest(page, query));
    }, [page, query]);
    return (
        <div className='container mt-5 pt-5'>
            {data?.isLoading ? (<Loader />) :
                data?.filterdMovies?.results.length === 0 ?
                    (<div className='text-center'>
                        <h2>{intl.messages.notFound}</h2>
                        <SiFacepunch className='h1 d-block m-auto' />
                        <Link
                            to={`/movie-app/popularmovies/${page}`}
                            className="btn btn-dark border px-4 mt-3  shadow border-dark rounded-pill "
                        >
                            <FaLongArrowAltLeft /> {intl.messages.back}
                        </Link>
                    </div>) :
                    (<div className='row gx-4 gy-3 '>
                        {data?.filterdMovies.results?.map((movie) => (
                            <Movie movie={movie} key={movie.id} />
                        ))}
                        <div className="d-flex justify-content-between fixed-bottom">
                            {page > 1 && (
                                <Link to={`/movie-app/filterdmovie/${+page - 1}/${query}`}>
                                    <button
                                        className="btn btn-dark border px-4 mx-auto mt-3  shadow border-dark rounded-pill ">
                                        <FaArrowLeft /> {intl.messages.prev} {+page - 1}
                                    </button>
                                </Link>)
                            }
                            {/* 11<12-1 */}
                            {maxPageNum !== +page ? (
                                <Link to={`/movie-app/filterdmovie/${+page + 1}/${query}`}>
                                    <button
                                        className="btn btn-dark border px-4 mx-auto mt-3  shadow border-dark rounded-pill ">
                                        {intl.messages.next} {+page + 1} <FaArrowRight />
                                    </button>
                                </Link>
                            ) : null}

                        </div>
                    </div>)
            }

        </div>
    )
}
