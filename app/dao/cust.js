import { BSTWEBURL } from '../config/config'
import Storage from '../storage'
import Post from '../fetch/post'

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
        return Post(BSTWEBURL + url,
            'account=' + account + '&password=' + password
        )
    }
    static set(data) {
        Storage.save('cust', data)
    }
    static get() {
        return new Promise((resolve, reject) => {
            Storage.get('cust')
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
    static getCustID() {
        return new Promise((resolve, reject) => {
            Storage.get('cust')
                .then(data => {
                    let custid = data ? data.custid : 0
                    resolve(custid)
                })
                .catch(error => reject(error))
        })
    }
    static clear() {
        Storage.remove('cust')
    }
}