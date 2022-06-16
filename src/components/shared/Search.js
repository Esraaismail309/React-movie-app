import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchFilterdMoviesRequest } from "../../redux/searchMovie/SearchActions";

export const Search = () => {
  const [userInputSearch, setUserInputSearch] = useState('')
  const dispatch = useDispatch()
  const onClickHandler = (e) => {
    e.preventDefault()
    dispatch(fetchFilterdMoviesRequest(userInputSearch))
  }
  console.log(userInputSearch);
  return (
    <div>
      <form onSubmit={(e) => onClickHandler(e)}>
        <input
          type="text"
          className="border border-2 rounded me-2 mt-2 px-3 py-2 w-75"
          value={userInputSearch}
          onChange={(e) => { setUserInputSearch(e.target.value) }}
          placeholder='search movie ...'
        />
        <button type="submit" className="btn bg-dark mb-2">
          <Link to={`/filterdmovie/${userInputSearch}`}>
            <FiSearch className="text-white my-1 " />
          </Link>
        </button>
      </form>
    </div>
  );
};
