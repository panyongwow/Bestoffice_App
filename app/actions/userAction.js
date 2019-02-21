import * as actionTypes from '../constants/userinfo'

export function login(data){
    return {
        type:actionTypes.LOGIN,
        data
    }
}

export function logout(data){
    return {
        type:actionTypes.LOGOUT,
        data
    }
}