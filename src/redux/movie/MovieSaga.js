import { movieAxiosInstance } from "./MovieApiCall";

import { put, call, takeLatest } from '@redux-saga/core/effects'
import { fetchMovieFail, fetchMovieSuccess } from "./MovieAction";
import { MOVIE_REQUEST } from "./MovieType";

function getMovie(id) {
    // console.log(id);
    return movieAxiosInstance.request({
        method: 'GET',
        url: `movie/${id}?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff`
    })
}

function* handleGetMovie({ payload }) {

    try {
        // Call-> promise fun 
        const response = yield call(getMovie, payload);
        // destruct response
        // console.log(response);
        const { data } = response
        yield put(fetchMovieSuccess(data));
    } catch (error) {
        yield put(fetchMovieFail(error))
        console.log(error);
    }
}

export function* movieSaga() {
    yield takeLatest(MOVIE_REQUEST, handleGetMovie)
}