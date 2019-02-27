import { BSTWEBURL } from '../config/config'
import Storage from '../storage'
import CustDao from './cust'
import Post from '../fetch/post'

//本地存储的购物车数据结构：
// [
//     {id:10,name:'打印机xxxx',num:12,measurement:'台'},
//     {id:0,name:'代购商品xxx',num:1,measurement:'个'},
//     ...
// ]

export default class ShoppingcartDao {
    static add(newData) {
        CustDao.getCustID()
            .then(custid => {
                if (custid === 0) {
                    this.saveToLocal(newData)  //未登录，保存到本地
                }
                else {
                    this.saveToWeb(newData) //已登录，保存到服务器
                }
            })
    }
    static saveToLocal(newData) {
        this.get()
            .then(localData => {
                if (!localData) {
                    localData = [newData]
                }
                else {
                    let data = localData.find((item) =>
                        item.id > 0 && item.id === newData.id      //线上商品
                        || item.id === 0 && newData.id === 0 && item.name === newData.name && item.measurement === newData.measurement  //代购商品
                    )
                    if (typeof (data) == 'undefined') {
                        localData.push(newData)
                    }
                    else {
                        data.num += newData.num
                    }
                }
                return localData
            })
            .then(localData => {
                Storage.save('shoppingCart', localData)
            })
            .catch(error => {
                alert(error)
            })
    }
    static saveToWeb(newData) {

    }
    static setToWeb() {
        let getLocalShoppingcart = this.get()    //获取本地购物车数据
            .then(localData => {
                if (!localData) throw new Error()
                else return localData
            })

        let getCust = CustDao.get()             //获取用户信息
            .then(custData => {
                if (!custData) throw new Error()
                else return custData
            })

        Promise.all([
            getLocalShoppingcart,
            getCust
        ])
            .then(([shoppingcart, cust]) => {
                //向服务器提交购物车数据
                //alert(JSON.stringify(shoppingcart) + "," + JSON.stringify(cust))
                let url = '/ajax/shoppingcar/add.ashx'
                return Post(
                    BSTWEBURL + url,
                    'custid=' + cust.custid + '&password=' + cust.password + '&shoppingcart=' + JSON.stringify(shoppingcart)
                )
            })
            .then(res => alert(res))
            .catch(e => e)
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
    static clear() {
        Storage.remove('shoppingCart')
    }
}