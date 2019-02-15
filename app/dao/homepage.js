
import { BSTURL } from '../config/config'
import Storage from '../storage'
import CustDao from '../dao/cust'

export var FLAG_HOMEPAGE = {
    TAG: 'TAG'
}
export default class HomePageDao {
    static init(callback) {
        this.clear()


        // fetch(BSTURL + url)
        //     .then(res => res.json())
        //     .then(result => {
        //         Storage.save('HomePage', result.details)
        //         callback()
        //     })
        //     .catch(error => {
        //         throw error
        //     })

        // CustDao.get()
        //     .then(cust => {
        //         alert(JSON.stringify(cust))
        //     })
        //     .catch(error => {
        //          alert(error)
        //     })

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
            .then(custid => {
                let url = '/ajax/homepage/list.ashx?custid=' + custid
                return fetch(BSTURL + url)
            })
            .then(res => res.json())
            .then(result => {
                Storage.save('HomePage', result.details)
                callback()
            })
            .catch(error => { alert(error) })

            
        // CustDao.get()
        //     .then(cust => {
        //         let custid = 0
        //         //alert(cust)
        //         if (cust) {
        //             CustDao.login(cust.account, cust.password)
        //                 .then(result => {
        //                     if (result.status === 'ERROR') {
        //                         CustDao.clear()   //登录已经失效
        //                     }
        //                     else {
        //                         CustDao.set(result)
        //                         custid = result.custid
        //                     }
        //                     return custid
        //                 })
        //         }
        //         return custid
        //     })
        //     .then(custid => {
        //         url = url + '?custid=' + custid
        //         fetch(BSTURL + url)
        //             .then(res => res.json())
        //             .then(result => {
        //                 Storage.save('HomePage', result.details)
        //                 callback()
        //             })
        //             .catch(error => {
        //                 throw error
        //             })
        //     })
        //     .catch(error => { alert(error) })

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