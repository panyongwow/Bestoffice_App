import {createStore} from 'redux'
import loginreducer from '../reducers/loginReducers'

export default function configureStore(initialState){
    const store=createStore(loginreducer,initialState)
    return store
}