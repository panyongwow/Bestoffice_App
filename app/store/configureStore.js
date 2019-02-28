import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers'

export default function configureStore(initialState){
    const store=createStore(
        rootReducer,
        applyMiddleware(promiseMiddleware),
        initialState
    )
    return store
}
