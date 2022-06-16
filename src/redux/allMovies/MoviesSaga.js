import { axiosInstance, getMovies } from "./MoviesApiCall";

import { put, call, takeLatest } from '@redux-saga/core/effects'
import { fetchMoviesFail, fetchMoviesSuccess } from "./AllMoviesActions";
import { MOVIES_REQUEST } from "./AllMoviesTypes";



function* handleGetMovies({ payload }) {
    try {
        // Call-> promise fun 
        console.log(payload);
        const response = yield call(getMovies, payload);
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