import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaLink, FaLongArrowAltLeft, FaImdb } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import {
  fetchMovieCastRequest,
  fetchMovieRequest,
} from "../../redux/movie/MovieAction";
import Loader from "../../components/Loader";
import Rating from "../../components/shared/Rating";
import { Cast } from "./Cast";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";

const Moviedetails = () => {
  const { id, page } = useParams();
  console.log(page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieCastRequest(id));
    dispatch(fetchMovieRequest(id));
  }, []);

  const movie = useSelector((res) => {
    return res.movie;
  });
  const movieCast = useSelector((res) => {
    return res.movie.movieCast;
  });

  return (
    <div className="container mt-5 pt-5">
      <div className="row ">
        {movie.isLoading ? (
          <Loader />
        ) : (
          // movie.movie && (
          <>
            <div className="col-md-5 text-center">
              <img
                src={BASE_IMG_URL + movie.movie.poster_path}
                alt={movie.movie.title}
                className="w-75 rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h1 className="fw-light mt-2">{movie.movie.title}</h1>
              <h6>{movie.movie.tagline}</h6>
              <div className="d-flex justify-content-between">
                <div className="col-md-6 d-flex ">
                  <Rating rate={movie.movie.vote_average} />
                  <p className="mt-2 ms-4 fw-bold">
                    {movie.movie.vote_average}
                  </p>
                </div>
                <div className="col-md-6 mt-2 text-end">
                  <p className="text-secondary fw-bold">
                    {movie.movie.spoken_languages?.map((lang) => lang.name)} /
                    {movie.movie.runtime} MIN. /
                    {movie.movie.release_date.slice(0, 4)}
                  </p>
                </div>
              </div>
              <h5>THE GENERS</h5>
              {movie.movie.genres.map((genre) => (
                <span className="me-2 text-secondary" key={genre.id}>
                  <RiRadioButtonFill className="me-1 " />
                  {genre.name}
                </span>
              ))}
              <h5 className="mt-4">THE SYNOPSIS</h5>
              <p>{movie.movie.overview}</p>
              <h5>THE CAST</h5>
              <div className="cast__item d-flex flex-wrap my-4 ">
                {movieCast.cast.slice(0, 8).map((cast) => (
                  <Cast cast={cast} key={cast.id} />
                ))}
              </div>
              <div className="movie_links mt-3 d-flex flex-wrap justify-content-between">
                <a
                  className="btn border border-2  shadow my-1 col-lg-3 border-dark rounded-pill col-5"
                  href={movie.movie.homepage}
                  target="_blank"
                >
                  Website <FaLink />
                </a>
                <a
                  className="btn border border-2  shadow my-1 border-dark rounded-pill col-lg-3 col-5"
                  href={`https://www.imdb.com/title/${movie.movie.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
                  target="_blank"
                >
                  IMDB <FaImdb />
                </a>
                <a
                  className="btn border border-2  shadow my-1 border-dark rounded-pill col-lg-3 col-5"
                  href={`https://www.imdb.com/title/${movie.movie?.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
                  target="_blank"
                >
                  Trailer <BsFillPlayFill />
                </a>
                <Link
                  to={`/movie-app/moviedetails/${page}`}
                  className="btn btn-dark border shadow my-1 border-dark rounded-pill  col-lg-2 col-5"
                >
                  <FaLongArrowAltLeft /> Back
                </Link>
              </div>
            </div>
          </>
          // )
        )}
      </div>
    </div>
  );
}

export default Moviedetails;
