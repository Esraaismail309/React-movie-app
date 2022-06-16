import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import Movie from "../../layout/movie/Movie";
export const Pagination = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const getData = (page) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&page=${page}`
      )
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const nextPagehandle = () => {
    setPage(page + 1);
    getData(page);
  };

  const prevPagehandle = () => {
    setPage(page - 1);
    getData(page);
  };

  return (
    <div className="container">
      <div className="mt-5 pt-5">
        <div className="d-flex justify-content-between mb-5 ms-3 fixed-bottom ">
          <button
            type="button"
            id="btn"
            className="btn btn-dark rounded-pill col-1 shadow"
            onClick={(e) => nextPagehandle(e)}
          >
            next <FaArrowRight />
          </button>
          {page > 1 ? (
            <button
              type="button"
              className="btn btn-dark rounded-pill col-1 shadow"
              onClick={() => prevPagehandle()}
            >
              <FaArrowLeft />
              prev
            </button>
          ) : null}
        </div>

        <div className="row">
          {data?.data?.results.map((movie) => (
            <Movie movie={movie} key={movie.id} className="m-3" />
          ))}
        </div>
      </div>
    </div>
  );
};
