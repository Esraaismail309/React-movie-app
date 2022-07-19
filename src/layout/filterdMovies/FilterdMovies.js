import React, { useState } from 'react'
import { SiFacepunch } from 'react-icons/si'
import { Link, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FormattedMessage, useIntl } from 'react-intl'
import Loader from '../../components/Loader';
import Movie from '../movie/Movie';
import { CallApi } from '../../utilits/CallApi';


export const FilterdMovies = () => {
    const intl = useIntl()

    const { page, query } = useParams()
    const [movies, setMovies] = useState([])

    const onSuccess = (data) => {
        // console.log("Sucess msg", data);
        // setUsers(data)
        setMovies(data?.data.results)
    }
    const onError = (error) => {
        console.log("Error msg");
    }
    const { data, error, isLoading, isFetching, refetch } = CallApi('filterd-movies',
        {
            method: 'get',
            url: `https://api.themoviedb.org/3/search/movie?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&page=${page}&query=${query}`,
        },
        {
            onError,
            onSuccess,
        }
    )
    console.log(movies);
    const maxPageNum = data?.data.total_pages
    console.log(maxPageNum);
    return (
        <div className='container mt-5 pt-5'>
            {isLoading ? (<Loader />) :
                movies.length === 0 ?
                    (<div className='text-center'>
                        <h2>{intl.messages.notFound}</h2>
                        <SiFacepunch className='h1 d-block m-auto' />
                        <Link
                            to={`/movie-app/popularmovies/${page}`}
                            className="btn btn-dark border px-4 mt-3  shadow border-dark rounded-pill "
                        >
                            <FaLongArrowAltLeft />  {intl.messages.back}
                        </Link>
                    </div>) :
                    (<div className='row gx-4 gy-3 '>
                        {movies.map((movie) => (
                            <Movie movie={movie} key={movie.id} />
                        ))}
                        <div className="position-relative">
                            {page > 1 && (
                                <div className='d-flex justify-content-between'>
                                    <Link to={`/movie-app/filterdmovie/${+page - 1}/${query}`}>
                                        <button
                                            onClick={refetch}
                                            className="btn btn-dark  px-4 mt-3 ms-3 position-fixed bottom-0 start-0 shadow rounded-pill">
                                            <FaArrowLeft />  <FaLongArrowAltLeft /> {intl.messages.prev} {+page - 1}
                                        </button>
                                    </Link>
                                </div>)
                            }
                            {maxPageNum !== +page ? (
                                <Link to={`/movie-app/filterdmovie/${+page + 1}/${query}`}>
                                    <button onClick={refetch}
                                        className="btn btn-dark border px-4 mx-auto mt-3  shadow border-dark rounded-pill position-fixed me-3 bottom-0 end-0">
                                        <FaLongArrowAltLeft /> {intl.messages.next} {+page + 1} <FaArrowRight />
                                    </button>
                                </Link>
                            ) : null}

                        </div>
                    </div>)
            }

        </div>
    )
}
