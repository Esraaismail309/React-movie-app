
import { MOVIE_REQUEST, MOVIE_FAIL, MOVIE_SUCCESS, MOVIE_CAST_REQUEST, MOVIE_CAST_SUCCESS } from './MovieType'

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
export const fetchMovieCastRequest = (id) => {
    return {
        type: MOVIE_CAST_REQUEST,
        payload: id
    }
}
export const fetchMovieCastSuccess = (movieCast) => {
    return {
        type: MOVIE_CAST_SUCCESS,
        payload: movieCast
    }
}