import * as actionTypes from '../constants/userinfo'
const initialState={
    isLogin:false,
    account:'',
}

export default function userInfo(state=initialState,action){
    switch(action.type){
        case actionTypes.LOGIN:
            return {
                ...state,
                isLogin:true,
                account:action.data.account,
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                isLogin:false,
                account:''
            }    
        default:
            return state    
    }
}