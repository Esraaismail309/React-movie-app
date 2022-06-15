import { all } from 'redux-saga/effects'
import { moviesSaga } from './allMovies/MoviesSaga'
import { movieSaga } from './movie/MovieSaga'

export function* rootSagas() {
    yield all([moviesSaga(), movieSaga()])
}