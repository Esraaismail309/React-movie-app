import { all } from 'redux-saga/effects'
import { moviesSaga } from './allMovies/MoviesSaga'

export function* rootSagas() {
    yield all([moviesSaga()])
}