import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import { fetchMoviesRequest } from "../redux/allMovies/AllMoviesActions";
import Movie from "./Movie";
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
      <div className="row gy-3 text-center">
        {movies.isLoading ? (
          <Loader />
        ) : (
          movies.movies.results.map((movie) => (<Movie movie={movie} key={movie.id} />
          ))
        )}
      </div>
    </div>
  );
}

export default AllMovies;
