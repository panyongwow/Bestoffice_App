import * as actionTypes from '../constants/userinfo'

export function login_done(data){
    return {
        type:actionTypes.LOGIN_DONE,
        data
    }
}

export function logout_done(){
    return {
        type:actionTypes.LOGOUT_DONE,
        
    }
}