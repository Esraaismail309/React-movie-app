import { axiosInstance } from "./SearchApi";

import { put, call, takeLatest } from '@redux-saga/core/effects'
// import { MOVIES_REQUEST } from "./AllMoviesTypes";
import { FILTERD_MOVIES_REQUEST } from "./SearchTypes";
import { fetchFilterdMoviesSuccess } from "./SearchActions";

function getFilterdMovies(query) {
    return axiosInstance.request({
        method: 'GET',
        url: `search/movie?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&page=1&`,
        params: {
            query
        }

    })
}

function* handleFilterdMovies({ query }) {
    try {
        // Call-> promise fun 
        const filterdData = yield call(getFilterdMovies, query);
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