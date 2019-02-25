
import { BSTURL } from '../config/config'
import Storage from '../storage'
import CustDao from '../dao/cust'

export var FLAG_HOMEPAGE = {
    TAG: 'TAG'
}
export default class HomePageDao {
    static init(callback) {
        this.clear()
         CustDao.get()
            .then(cust => {
                if (!cust) {
                    return { status: 'ERROR' }
                }
                else {
                    return CustDao.login(cust.account, cust.password)
                }
            })
            .then(result => {
                let custid = 0
                if (result.status === 'ERROR') {
                    CustDao.clear()
                }
                else {
                    CustDao.set(result)
                    custid = result.custid
                }
                return custid
            })
            .then(custid => this.getWebData(custid))
            .then(result => {
                Storage.save('HomePage', result.details)
                callback()
            })
            .catch(error => { alert(error) })        
    }

    static getWebData(custid = 0) {
        return new Promise((resolve, reject) => {
            let url = '/ajax/homepage/list.ashx?custid=' + custid
            fetch(BSTURL + url)
                .then(res => res.json())
                .then(result => {
                    return resolve(result)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }
    static get(key) {
        return new Promise((resolve, reject) => {
            Storage.get('HomePage')
                .then(result => {
                    let data
                    switch (key) {
                        case FLAG_HOMEPAGE.TAG:
                            data = result.tag
                            break
                        default:
                            data = result
                            break
                    }
                    return resolve(data)
                })
                .catch(error => {
                    return reject(error)
                })
        })
    }
    static clear() {
        Storage.remove('HomePage')
    }

}