import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { fetchMoviesRequest } from "../redux/allMovies/AllMoviesActions";
import Movie from "./movie/Movie";
const AllMovies = () => {
  const dispatch = useDispatch();
  const { page } = useParams()
  useEffect(() => {
    dispatch(fetchMoviesRequest(page));
  }, [page]);
  const movies = useSelector((res) => {
    return res.movies;
  });
  return (
    <div className="container mt-3">
      <h1>Popular movies</h1>
      <div className="row gy-3 text-center gx-3">
        {movies.isLoading ? (
          <Loader />
        ) : (
          <>
            {movies.movies.results.map((movie) => (
              <Movie movie={movie} key={movie.id} />))}
            <div className="d-flex justify-content-between fixed-bottom">
              {page > 1 && (
                <Link to={`/popularmovies/${+page - 1}`}>
                  <button className="btn btn-dark border px-4 mx-auto mt-3  shadow border-dark rounded-pill "><FaArrowLeft /> Prev {+page - 1}</button>
                </Link>)
              }
              <Link to={`/popularmovies/${+page + 1}`}>
                <button className="btn btn-dark border px-4 mx-auto mt-3  shadow border-dark rounded-pill ">next {+page + 1} <FaArrowRight /></button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div >
  );
}

export default AllMovies;
