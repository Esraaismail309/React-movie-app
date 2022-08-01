import React from "react";
import { Link, useParams } from "react-router-dom";
import { RiRadioButtonFill } from "react-icons/ri";
import { FaLink, FaLongArrowAltLeft, FaImdb } from "react-icons/fa";
import { BsFillPlayFill } from "react-icons/bs";
import { useIntl } from 'react-intl'
import Loader from "../../components/Loader";
import Rating from "../../components/shared/Rating";
import { Cast } from "./Cast";
import { CallApi } from "../../utilits/CallApi";
import { useContext } from "react";
import { Context } from "../../locales/Wrapper";

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";

const Moviedetails = () => {
  const { id } = useParams();
  const intl = useIntl()
  const locale = useContext(Context)


  const { data: movieDetailsData, isLoading } = CallApi(['movie-details', locale.locale],
    {
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&language=${locale.locale}`
    },

  )
  const { data: castMoviedata, isLoading: castMovieLoader } = CallApi('movie-cast',
    {
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&language=${locale.locale}`
    },

  )

  return (
    <div className="container mt-5 pt-5">
      <div className="row ">
        {isLoading ? (
          <Loader />
        ) : (
          movieDetailsData?.data && (
            <>
              <div className="col-md-5 text-center">
                <img
                  src={BASE_IMG_URL + movieDetailsData.data.poster_path}
                  alt={movieDetailsData.data.title}
                  className="w-75 rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <h1 className="fw-light mt-2">{movieDetailsData.data.title}</h1>
                <h6>{movieDetailsData.data.tagline}</h6>
                <div className="d-flex justify-content-between flex-wrap">
                  <div className="col-md-6 d-flex ">
                    <Rating rate={movieDetailsData.data.vote_average} />
                    <p className="mt-2 ms-4 fw-bold ">
                      {movieDetailsData.data.vote_average}
                    </p>
                  </div>
                  <div className="col-md-6 mt-2 text-end">
                    <p className="text-secondary fw-bold">
                      {movieDetailsData.data.spoken_languages?.map((lang) => lang.name)} /
                      {movieDetailsData.data.runtime} MIN. /
                      {movieDetailsData.data.release_date.slice(0, 4)}
                    </p>
                  </div>
                </div>
                <h5> {intl.messages.movie.geners} </h5>

                {movieDetailsData.data.genres.map((genre) => (
                  <span className="me-2 text-secondary" key={genre.id}>
                    <RiRadioButtonFill className="me-1 " />
                    {genre.name}
                  </span>
                ))}
                <h5 className="mt-4"> {intl.messages.movie.synopsis} </h5>
                <p>{movieDetailsData.data.overview}</p>
                <h5> {intl.messages.movie.cast} </h5>
                <div className="cast__item d-flex flex-wrap my-4 ">
                  {castMoviedata?.data.cast.slice(0, 7).map((cast) => (
                    <Cast cast={cast} key={cast.id} />
                  ))}
                </div>
                <div className="movie_links mt-3 d-flex flex-wrap justify-content-between">
                  <a
                    className="btn border border-2  shadow my-1 col-lg-3 border-dark rounded-pill col-5"
                    href={movieDetailsData.data.homepage}
                    target="_blank"
                    rel="noreferrer"

                  >
                    {intl.messages.movie.website}  <FaLink />
                  </a>
                  <a
                    className="btn border border-2  shadow my-1 border-dark rounded-pill col-lg-3 col-5"
                    href={`https://www.imdb.com/title/${movieDetailsData.data.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
                    target="_blank"
                    rel="noreferrer"

                  >
                    IMDB <FaImdb />
                  </a>
                  <a
                    className="btn border border-2  shadow my-1 border-dark rounded-pill col-lg-3 col-5"
                    href={`https://www.imdb.com/title/${movieDetailsData.data?.imdb_id}/?ref_=hm_fanfav_tt_i_1_pd_fp1`}
                    target="_blank"
                    rel="noreferrer"

                  >
                    {intl.messages.movie.trailer} <BsFillPlayFill />
                  </a>
                  <Link
                    to={`/movie-app/popularmovies/1`}
                    className="btn btn-dark border shadow my-1 border-dark rounded-pill  col-lg-2 col-5"
                  >
                    <FaLongArrowAltLeft /> {intl.messages.back}
                  </Link>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );
}

export default Moviedetails;
