
import { MOVIE_REQUEST, MOVIE_FAIL, MOVIE_SUCCESS, MOVIE_CAST_REQUEST, MOVIE_CAST_SUCCESS } from './MovieType'

const initialState = {
    isLoading: true,
    movies: [],
    error: '',
    movieCast: []
}


const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_REQUEST:
            return {
                isLoading: true,
                ...state
            }
        case MOVIE_SUCCESS:
            return {
                isLoading: false,
                movie: action.payload,
                error: '',
                movieCast: [],

            }
        case MOVIE_FAIL:
            return {
                isLoading: false,
                movie: [],
                error: action.payload,
                movieCast: []

            }
        case MOVIE_CAST_REQUEST:
            return {
                isLoading: true,
                movieCast: [],
                error: '',

            }
        case MOVIE_CAST_SUCCESS:
            return {
                movieCast: action.payload
            }
        default:
            return state;
    }
}
export default movieReducer