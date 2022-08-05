import { FILTERD_MOVIES_REQUEST, FILTERD_MOVIES_SUCCESS } from './SearchTypes'

export const fetchFilterdMoviesRequest = (page, query, language) => {
    return {
        type: FILTERD_MOVIES_REQUEST,
        page,
        query,
        language
    }
}
export const fetchFilterdMoviesSuccess = (filterdMovies) => {
    return {
        type: FILTERD_MOVIES_SUCCESS,
        payload: filterdMovies
    }
}