import { FILTERD_MOVIES_REQUEST, FILTERD_MOVIES_SUCCESS } from './SearchTypes'

export const fetchFilterdMoviesRequest = (query) => {
    return {
        type: FILTERD_MOVIES_REQUEST,
        query
    }
}
export const fetchFilterdMoviesSuccess = (filterdMovies) => {
    return {
        type: FILTERD_MOVIES_SUCCESS,
        payload: filterdMovies
    }
}