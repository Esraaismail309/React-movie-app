import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import { rootSagas } from "./Sagas";
import { composeWithDevTools } from "redux-devtools-extension";


const sagsMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagsMiddleware)))

sagsMiddleware.run(rootSagas)
export default store