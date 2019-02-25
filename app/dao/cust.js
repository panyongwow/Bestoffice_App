import { BSTWEBURL } from '../config/config'
import Storage from '../storage'

//保存的用户信息数据格式：
// {
//     status:'OK',
//     custid:用户ID,
//     custstatus:用户状态,
//     enterpriseid:企业ID,
//     account:登录账号（邮箱）,
//     password:MD5处理后的登录密码
// }


export default class CustDao {
    static login(account, password) {
        let url = '/ajax/cust/login.ashx'
        return new Promise((resolve, reject) => {
            fetch(BSTWEBURL + url, {
                method: 'POST',
                //mode: 'cors',
                //credentials:'include',
                headers: {
                    'Accept': 'application/json,text/plain,*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    //'Accept': 'application/json',
                    //'Content-Type': 'application/json'
                },
                body: 'account=' + account + '&password=' + password
            })
                .then(res => res.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }
    static set(data) {
        Storage.save('cust', data)
    }
    static get() {
        return new Promise((resolve, reject) => {
            Storage.get('cust')
                .then(data =>{
                    resolve(data)
                } )
                .catch(error =>{
                    reject(error)
                } )
        })
    }
    static getCustID(){
        let custid=0
        Storage.get('cust')
            .then(data=>{
                if(data) custid=data.custid 
                return custid
            })
    }
    static clear() {
        Storage.remove('cust')
    }
}