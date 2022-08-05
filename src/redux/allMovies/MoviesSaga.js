import { getMovies } from "./MoviesApiCall";

import { put, call, takeLatest } from '@redux-saga/core/effects'
import { fetchMoviesFail, fetchMoviesSuccess } from "./AllMoviesActions";
import { MOVIES_REQUEST } from "./AllMoviesTypes";



function* handleGetMovies({ payload, lang }) {
    try {
        // Call-> promise fun 
        const response = yield call(getMovies, payload, lang);
        // destruct response 
        const { data } = response
        yield put(fetchMoviesSuccess(data));
    } catch (error) {
        yield put(fetchMoviesFail(error))
        console.log(error);
    }
}

export function* moviesSaga() {
    yield takeLatest(MOVIES_REQUEST, handleGetMovies)
}