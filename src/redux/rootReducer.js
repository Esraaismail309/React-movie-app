import { combineReducers } from "redux";
import allMoviesReducer from "./allMovies/AllMoviesReducer";
import movieReducer from "./movie/MovieReducer";

const rootReducer = combineReducers({
    movies: allMoviesReducer,
    movie: movieReducer,

})
export default rootReducer