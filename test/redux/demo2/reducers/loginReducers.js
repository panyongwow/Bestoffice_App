const initialState={
    name:'李四',
    password:'',
    account:''
}

export default function login(state=initialState,action){
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.data
        default:
            return state
    }
}  