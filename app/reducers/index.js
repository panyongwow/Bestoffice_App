import {combineReducers} from 'redux'
import userInfo from './userInfo'
import shoppingcartInfo from './shoppingcartInfo'

const rootReducer=combineReducers({
    userInfo,
    shoppingcartInfo
})

export default rootReducer