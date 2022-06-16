import { combineReducers } from "redux";
import allMoviesReducer from "./allMovies/AllMoviesReducer";
import movieReducer from "./movie/MovieReducer";
import filterdMoviesReducer from "./searchMovie/SearchReducer";

const rootReducer = combineReducers({
    movies: allMoviesReducer,
    movie: movieReducer,
    filterdMovies: filterdMoviesReducer

})
export default rootReducer