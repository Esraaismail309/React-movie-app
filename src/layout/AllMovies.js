import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Pagination } from "../components/shared/Pagination";
import { fetchMoviesRequest } from "../redux/allMovies/AllMoviesActions";
import Movie from "./movie/Movie";
function AllMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesRequest());
  }, []);

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
            <Pagination />
          </>
        )}
      </div>
    </div >
  );
}

export default AllMovies;
