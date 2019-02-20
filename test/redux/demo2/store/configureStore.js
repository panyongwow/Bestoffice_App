import {createStore} from 'redux'
import loginInfo from '../reducers/loginReducers'

export default function configureStore(initialState){
    const store=createStore(loginInfo,initialState)
    return store
}