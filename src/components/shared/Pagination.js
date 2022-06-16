import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Pagination = ({ page, query }) => {
  return (
    <div className="d-flex justify-content-between fixed-bottom">
      {page > 1 && (
        <Link to={`/filterdmovie/${+page - 1}/${query}`}>
          <button className="btn btn-dark border px-4 mx-auto mt-3  shadow border-dark rounded-pill "> <FaArrowLeft /> Prev {+page - 1}</button>
        </Link>)
      }
      <Link to={`/filterdmovie/${+page + 1}/${query}`}>
        <button className="btn btn-dark border px-4 mx-auto mt-3  shadow border-dark rounded-pill ">next {+page + 1} <FaArrowRight /></button>
      </Link>
    </div>
  );
};
