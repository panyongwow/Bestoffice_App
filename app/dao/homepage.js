
import { BSTURL } from '../config/config'
import Storage from '../storage'
import CustDao from '../dao/cust'
import Get from '../fetch/get'

export var FLAG_HOMEPAGE = {
    TAG: 'TAG'
}
export default class HomePageDao {
    static init() {
        this.clear()
        return new Promise((resolve, reject) => {
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
                    //alert(JSON.stringify(result))
                    Storage.save('HomePage', result.details)
                    resolve()
                })
                .catch(e => reject(e))
        })

    }

    static getWebData(custid = 0) {
        let url = '/ajax/homepage/list.ashx?custid=' + custid
        return Get(BSTURL + url)
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
                .catch(e => reject(e))
        })
    }
    static clear() {
        Storage.remove('HomePage')
    }

}