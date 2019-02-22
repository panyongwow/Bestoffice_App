import * as actionTypes from '../constants/userinfo'
const initialState={
    isLogin:false,
    account:'',
    custid:0
}

export default function userInfo(state=initialState,action){
    switch(action.type){
        case actionTypes.LOGIN_DONE:
            return {
                ...state,
                isLogin:true,
                account:action.data.account,
                custid:action.data.custid
            }
        case actionTypes.LOGOUT_DONE:
            return{
                ...state,
                isLogin:false,
                account:'',
                custid:0
            }    
        default:
            return state    
    }
}