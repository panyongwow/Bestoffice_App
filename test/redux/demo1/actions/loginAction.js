import * as types from '../constants/loginTypes'

let user={
    name:'zhangsan',
    age:24
}

export function login(){
    return dispatch=>{
        dispatch(isLogining())
        let result=fetch('https://www.baidu.com')
            .then((res)=>{
                dispatch(loginSuccess(true,user))
            })
            .catch((e)=>{
                dispatch(loginError(false))
            })
    }
}

function isLogining(){
    return{
        type:types.LOGIN_IN_DOING
    }
}

function loginSuccess(isSuccess,user){
    return{
        type:types.LOGIN_IN_DONE,
        user:user
    }
}

function loginError(isSuccess){
    return{
        type:types.LOGIN_IN_ERROR
    }
}