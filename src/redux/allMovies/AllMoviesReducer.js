
import { MOVIES_REQUEST, MOVIES_FAIL, MOVIES_SUCCESS } from './AllMoviesTypes'

const initialState = {
    isLoading: true,
    movies: [],
    error: ''
}


const allMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_REQUEST:
            return {
                isLoading: true,
                ...state
            }
        case MOVIES_SUCCESS:
            return {
                isLoading: false,
                movies: action.payload,
                error: ''
            }
        case MOVIES_FAIL:
            return {
                isLoading: false,
                movies: [],
                error: action.payload
            }

        default:
            return state;
    }
}
export default allMoviesReducer