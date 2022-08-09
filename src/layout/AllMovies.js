import React, { useContext, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { fetchMoviesRequest } from "../redux/allMovies/AllMoviesActions";
import { FormattedMessage, useIntl } from 'react-intl'
import Movie from "./movie/Movie";
import { Context } from "../locales/Wrapper";


const AllMovies = () => {
  const intl = useIntl()
  const dispatch = useDispatch();
  let { page } = useParams()
  // page ? : page==page
  if (page === undefined) {
    page = 1
  }

  const locale = useContext(Context)
  const lang = locale.locale
  useEffect(() => {
    dispatch(fetchMoviesRequest(page, lang));
  }, [page, lang]);
  const movies = useSelector((res) => {

    return res.movies;
  });

  return (
    <div className="container mt-5 pt-5">
      <h1 className="mb-5"><FormattedMessage id="title" /></h1>
      <div className="row gy-3 text-center gx-3">
        {movies.isLoading ? (
          <Loader />
        ) : (
          <>
            {movies.movies.results?.map((movie) => (
              <Movie movie={movie} key={movie.id} page={page} />))}
            <div className="position-relative">
              {page >= 1 && (
                <div className="d-flex justify-content-between ">
                  <Link to={`/movie-app/popularmovies/${+page - 1}`}>
                    <button className="btn btn-dark  px-4 mt-3 ms-3 position-fixed bottom-0 start-0 shadow rounded-pill  ">
                      <FaArrowLeft /> {intl.messages.prev} {+page - 1}</button>
                  </Link>
                </div>
              )
              }
              <Link to={`/movie-app/popularmovies/${+page + 1}`}>
                <button className="btn btn-dark px-4 mx-auto  position-fixed me-3 bottom-0  end-0 shadow rounded-pill ">{intl.messages.next} {+page + 1} <FaArrowRight /></button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div >
  );
}

export default AllMovies;
