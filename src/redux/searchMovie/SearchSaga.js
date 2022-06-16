import { axiosInstance } from "./SearchApi";
import { put, call, takeLatest } from '@redux-saga/core/effects'
import { FILTERD_MOVIES_REQUEST } from "./SearchTypes";
import { fetchFilterdMoviesSuccess } from "./SearchActions";
import { getMovies } from "../allMovies/MoviesApiCall";


function* handleFilterdMovies({ page, query }) {
    try {
        // Call-> promise fun 
        const filterdData = yield call(getMovies, page, query);
        // destruct response 
        const { data } = filterdData
        yield put(fetchFilterdMoviesSuccess(data));
    } catch (error) {
        console.log(error);
    }
}

export function* filterdMoviesSaga() {
    yield takeLatest(FILTERD_MOVIES_REQUEST, handleFilterdMovies)
}