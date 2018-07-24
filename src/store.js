import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from "redux-saga"
import { watcherSaga } from "./sagas/sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watcherSaga)

export default store