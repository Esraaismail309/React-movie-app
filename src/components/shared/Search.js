import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFilterdMoviesRequest } from "../../redux/searchMovie/SearchActions";

export const Search = () => {
  const intl = useIntl();

  const [userInputSearch, setUserInputSearch] = useState('')
  const dispatch = useDispatch()
  const onClickHandler = (e) => {
    e.preventDefault()
    dispatch(fetchFilterdMoviesRequest(1, userInputSearch))

  }

  const resetFun = () => {
    setUserInputSearch('')
  }
  return (

    <form onSubmit={(e) => {
      onClickHandler(e)

    }}
      className='d-flex mt-5  pt-5 justify-content-center'>
      <input
        type="text"
        className="border border-2 rounded me-2 px-3 w-50"
        value={userInputSearch}
        onChange={(e) => { setUserInputSearch(e.target.value) }}
        placeholder={intl.messages.search}
      />
      {userInputSearch !== '' ? (
        <>
          <button type="submit" className="btn bg-dark py-2">
            <Link to={`/movie-app/filterdmovie/1/${userInputSearch}`}>
              <FiSearch className="text-white my-1 " />
            </Link>
          </button>
          {/* <Link
            to={`/movie-app/popularmovies/1`}
            className="btn btn-dark border shadow  border-dark ms-2 col-4 py-2 h-100 "
            onClick={resetFun}
          >
            <FaLongArrowAltLeft /> Back Home
          </Link> */}
        </>
      ) : <button type="submit" className="btn bg-dark disabled py-2">
        <Link to={`/movie-app/filterdmovie/1/${userInputSearch}`}>
          <FiSearch className="text-white my-1 " />
        </Link>
      </button>}


    </form>
  );
};
