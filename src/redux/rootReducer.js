import { combineReducers } from "redux";
import allMoviesReducer from "./allMovies/AllMoviesReducer";

const rootReducer = combineReducers({
    movies: allMoviesReducer
})
export default rootReducer