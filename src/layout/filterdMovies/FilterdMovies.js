import React from 'react'
import { useSelector } from "react-redux";
import Loader from '../../components/Loader';
import Movie from '../movie/Movie';

export const FilterdMovies = () => {

    const data = useSelector((res) => { return res.filterdMovies })
    // const arrLength = data?.filterdMovies?.results.length
    console.log(data.filterdMovies.results);
    return (
        <div className='container mt-5 pt-5'>
            {data?.isLoading ? (<Loader />) :
                (<div className='row gx-4 gy-3 '>
                    {data?.filterdMovies.results?.map((movie) => (
                        <Movie movie={movie} key={movie.id} />
                    ))}
                </div>)

            }
        </div>
    )
}
