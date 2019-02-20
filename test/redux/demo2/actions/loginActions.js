
export default function login(account,password){
    //这里面是登陆过程，fetch之类的。。。
    return {
        type:'LOGIN_SUCCESS',
        data:{
            account,
            password,
            name:'张三'
        }
    }
}