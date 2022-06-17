import { combineReducers } from "redux";
import allMoviesReducer from "./allMovies/AllMoviesReducer";
import movieReducer from "./movie/MovieReducer";
import filterdMoviesReducer from "./searchMovie/SearchReducer";
import WishListReducer from "./wishlist/WishlistReducers";

const rootReducer = combineReducers({
    movies: allMoviesReducer,
    movie: movieReducer,
    filterdMovies: filterdMoviesReducer,
    wishlist: WishListReducer

})
export default rootReducer