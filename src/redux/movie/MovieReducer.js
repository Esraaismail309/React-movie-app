
import { MOVIE_REQUEST, MOVIE_FAIL, MOVIE_SUCCESS } from './MovieType'

const initialState = {
    isLoading: true,
    movies: [],
    error: ''
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
                error: ''
            }
        case MOVIE_FAIL:
            return {
                isLoading: false,
                movie: [],
                error: action.payload
            }

        default:
            return state;
    }
}
export default movieReducer