import React from 'react'
import { useSelector } from "react-redux";
import { SiFacepunch } from 'react-icons/si'
import { FaLongArrowAltLeft } from "react-icons/fa";

import Loader from '../../components/Loader';
import Movie from '../movie/Movie';
import { Link } from 'react-router-dom';

export const FilterdMovies = () => {

    const data = useSelector((res) => { return res.filterdMovies })
    // const arrLength = data?.filterdMovies?.results.length
    // console.log(arrLength);
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
        </div>
    )
}
