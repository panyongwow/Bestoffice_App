import {createStore,combineReducers} from 'redux'
import loginInfo from '../reducers/loginReducers'

export default function configureStore(initialState){
    const rootReducer=combineReducers({
        loginInfo
    })
    const store=createStore(rootReducer,initialState)
    return store
}