import { BSTWEBURL } from '../config/config'
import Storage from '../storage'
import CustDao from './cust'

//本地存储的购物车数据结构：
// [
//     {id:10,name:'打印机xxxx',num:12,measurement:'台'},
//     {id:0,name:'代购商品xxx',num:1,measurement:'个'},
//     ...
// ]

export default class ShoppingcartDao {
    static add(newData) {
        CustDao.get()
            .then(cust => {
                if (!cust) return 0
                else return cust.id
            })
            .then(custid => {
                if (custid === 0) {
                    //未登录，保存到本地
                    //  alert('保存到本地')
                    this.saveToLocal(newData)
                }
                else {
                    //已登录，保存到服务器
                }
            })
    }
    static saveToLocal(newData) {
        this.get().then(localData => {
            let hasSame = false
            if (!localData) localData = []
            localData.map((item) => {
                if (item.id > 0 && item.id === newData.id
                    || item.id === 0 && newData === 0 && item.name === newData.name && item.measurement === newData.measurement) {
                    item.num += newData.num
                    hasSame = true

                }
            })

            if (!hasSame) {
                localData.push(newData)
            }

            // let data=localData.find((item)=>{
            //     item.id > 0 && item.id === newData.id
            //     || item.id === 0 && newData === 0 && item.name === newData.name && item.measurement === newData.measurement
            // })
            // if(typeof(data)=='undefined'){
            //     localData.push(newData)
            // }
            // else{
            //     data.num+=newData.num
            // }
            return localData
        })
            .then(localData => {
                Storage.save('shoppingCart', localData)
            })
            .catch(error => {
                alert(error)
            })
    }
    static get() {
        return new Promise((resolve, reject) => {
            Storage.get('shoppingCart')
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}