import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieRequest,
  fetchMovieSuccess,
} from "../redux/movie/MovieAction";
import Loader from "../components/Loader";
import Rating from "../components/shared/Rating";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";

function Moviedetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieRequest(id));
  }, []);
  // console.log(id);

  const movie = useSelector((res) => {
    return res.movie;
  });
  console.log(movie.movie);
  return (
    <div className="container mt-5">
      <div className="row justify-content-between">
        {movie.isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="col-md-5">
              <img
                src={BASE_IMG_URL + movie.movie.backdrop_path}
                alt={movie.movie.title}
                className="w-100"
              />
            </div>
            <div className="col-md-6">
              <h1>{movie.movie.title}</h1>
              <h6>{movie.movie.tagline}</h6>
              <Rating rate={movie.movie.vote_average} />
              <h5>THE GENERS</h5>
              {/* {movie.movie.geners.map((gener) => (
                <p>{gener}</p>
              ))} */}
              {/* <p>{movie.movie.genres}</p> */}
            </div>
          </>
        )}
      </div>
    </div>

    // <div>Moviedetails{movie.id}</div>
  );
}

export default Moviedetails;
