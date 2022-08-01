import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { CallApi } from "../utilits/CallApi";
import { useIntl, FormattedMessage } from 'react-intl'
import Movie from "./movie/Movie";
import { Context } from "./../locales/Wrapper";


const AllMovies = () => {
  const locale = useContext(Context)
  const [lang, setlang] = useState('')
  useEffect(() => {
    setlang(locale.locale)
  }, [locale.locale])

  const { page } = useParams()
  const intl = useIntl()
  const [movies, setMovies] = useState([])
  const onSuccess = (data) => {
    setMovies(data?.data.results)
  }
  const onError = (error) => {
    console.log("Error msg");
  }
  const { data, isLoading, isFetching, refetch } = CallApi(['allMovies', lang, page],
    {
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&language=${locale.locale}`,
      params: {
        page: page
      },
    },
    {
      onError,
      onSuccess,
    }
  )
  return (
    <div className="container mt-5 pt-5">
      <h1 className="mb-5"><FormattedMessage id="title" /></h1>
      <div className="row gy-3 text-center gx-3">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data.data?.results.map((movie) => (
              <Movie movie={movie} key={movie.id} page={page} />))}
            <div className="position-relative">
              {page > 1 && (
                <div className="d-flex justify-content-between ">
                  <Link to={`/movie-app/popularmovies/${+page - 1}`}>
                    <button className="btn btn-dark  px-4 mt-3 ms-3 position-fixed bottom-0 start-0 shadow rounded-pill  ">
                      {intl.messages.prev} {+page - 1}</button>
                  </Link>
                </div>
              )
              }
              <Link to={`/movie-app/popularmovies/${+page + 1}`}>
                <button className="btn btn-dark px-4 mx-auto  position-fixed me-3 bottom-0  end-0 shadow rounded-pill ">{intl.messages.next} {+page + 1} </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div >
  );
}

export default AllMovies;
