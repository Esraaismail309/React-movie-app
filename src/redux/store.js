import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import { rootSagas } from "./Sagas";


const sagsMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagsMiddleware))

sagsMiddleware.run(rootSagas)
export default store