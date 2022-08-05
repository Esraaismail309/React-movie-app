
import { MOVIES_REQUEST, MOVIES_FAIL, MOVIES_SUCCESS } from './AllMoviesTypes'

export const fetchMoviesRequest = (page, lang) => {
    return {
        type: MOVIES_REQUEST,
        payload: page,
        lang
    }
}
export const fetchMoviesSuccess = (movies) => {
    return {
        type: MOVIES_SUCCESS,
        payload: movies,

    }
}
export const fetchMoviesFail = (error) => {
    return {
        type: MOVIES_FAIL,
        payload: error
    }
}