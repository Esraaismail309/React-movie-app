import { axiosInstance } from "./MoviesApiCall";

import { put, call, takeLatest } from '@redux-saga/core/effects'
import { fetchMoviesFail, fetchMoviesSuccess } from "./AllMoviesActions";
import { MOVIES_REQUEST } from "./AllMoviesTypes";

function getMovies(search) {
    return axiosInstance.request({
        method: 'GET',
        url: `movie/popular?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&page=1&${search}`,

    })
}

function* handleGetMovies({ payload }) {
    try {
        // Call-> promise fun 

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