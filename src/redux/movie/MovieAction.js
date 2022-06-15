
import { MOVIE_REQUEST, MOVIE_FAIL, MOVIE_SUCCESS } from './MovieType'

export const fetchMovieRequest = (id) => {
    return {
        type: MOVIE_REQUEST,
        payload: id
    }
}
export const fetchMovieSuccess = (movie) => {
    return {
        type: MOVIE_SUCCESS,
        payload: movie
    }
}
export const fetchMovieFail = (error) => {
    return {
        type: MOVIE_FAIL,
        payload: error
    }
}