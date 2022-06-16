
import { FILTERD_MOVIES_REQUEST, FILTERD_MOVIES_SUCCESS } from './SearchTypes'

const initialState = {
    isLoading: true,
    filterdMovies: [],

}


const filterdMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTERD_MOVIES_REQUEST:
            return {
                isLoading: true,
                filterdMovies: []
            }
        case FILTERD_MOVIES_SUCCESS:
            return {
                isLoading: false,
                filterdMovies: action.payload
            }
        default:
            return state;
    }
}
export default filterdMoviesReducer