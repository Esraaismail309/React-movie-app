import { FILTERD_MOVIES_REQUEST, FILTERD_MOVIES_SUCCESS } from './SearchTypes'

export const fetchFilterdMoviesRequest = (page, query) => {
    return {
        type: FILTERD_MOVIES_REQUEST,
        page,
        query,
    }
}
export const fetchFilterdMoviesSuccess = (filterdMovies) => {
    return {
        type: FILTERD_MOVIES_SUCCESS,
        payload: filterdMovies
    }
}