import { movieAxiosInstance } from "./MovieApiCall";

import { put, call, takeLatest, takeEvery } from '@redux-saga/core/effects'
import { fetchMovieCast, fetchMovieCastSuccess, fetchMovieFail, fetchMovieSuccess } from "./MovieAction";
import { MOVIE_REQUEST } from "./MovieType";

function getMovie(id) {

    return movieAxiosInstance.request({
        method: 'GET',
        url: `movie/${id}?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff`
    })
}
function getMovieCast(id) {
    return movieAxiosInstance.request({
        method: 'GET',
        url: `movie/${id}/credits?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff`
    })
}

function* handleGetMovie({ payload }) {

    try {
        // Call-> promise fun 
        const movieData = yield call(getMovie, payload);
        const castData = yield call(getMovieCast, payload)
        // destruct response
        const { data: movieCastData } = castData
        const { data } = movieData
        yield put(fetchMovieSuccess(data));
        yield put(fetchMovieCastSuccess(movieCastData))
    } catch (error) {
        yield put(fetchMovieFail(error))
        console.log(error);
    }
}

export function* movieSaga() {
    yield takeEvery(MOVIE_REQUEST, handleGetMovie)
}