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
    //添加购物车记录
    static add(data) {
        return new Promise((resolve, reject) => {
            CustDao.get()
                .then(cust => {
                    if (!cust) {
                        this.saveToLocal(data)  //未登录，保存到本地
                    }
                    else {
                        this.saveToWeb([data], cust) //已登录，保存到服务器
                    }
                    resolve()
                })
                .catch(e => reject(e))
        })

    }
    //保存购物车记录至本地（未登录状态时购物车记录保存至本地Storage）
    static saveToLocal(data) {
        //alert(JSON.stringify(data))
        return new Promise((resolve, reject) => {
            this.get()
                .then(localData => {
                    if (!localData) {
                        localData = [data]
                    }
                    else {
                        let sameData = localData.find((item) =>
                            item.id > 0 && item.id === data.id      //线上商品
                            || item.id === 0 && data.id === 0 && item.name === data.name && item.measurement === data.measurement  //代购商品
                        )
                        if (typeof (sameData) == 'undefined') {
                            localData.push(data)
                        }
                        else {
                            sameData.cartnum += data.cartnum
                        }
                    }
                    return localData
                })
                .then(localData => {
                    Storage.save('shoppingCart', localData)
                    resolve()
                })
                .catch(e => reject(e))
        })

    }
    //同步购物车记录，当状态由未登录转为登录时，将本地的购物车记录同步至服务器
    //如果在本地与服务器上均有某种商品的购物车记录，则以本地数据为准，覆盖服务器数据
    //同步完毕后，删除本地数据
    static syncLocalToWeb() {
        return new Promise((resolve, reject) => {
            let getLocalShoppingcart = this.get()    //获取本地购物车数据
                .then(localData => {
                    if (!localData) return []
                    else return localData
                })

            let getCust = CustDao.get()
                .then(custData => {
                    if (!custData) throw new Error()
                    else return custData
                })
            Promise.all([
                getLocalShoppingcart,
                getCust
            ])
                .then(([shoppingcart, cust]) => {
                   return this.saveToWeb(shoppingcart, cust)
                })
                .then(res=>resolve(res.cartnum))
                .catch(e=>reject(e))
        })

    }
    //保存购物车记录至服务器（已登录状态时）
    static saveToWeb(data, cust) {
        return new Promise((resolve,reject)=>{
            let url = '/ajax/shoppingcar/add.ashx'
            Post(
                BSTWEBURL + url,
                'custid=' + cust.custid + '&password=' + cust.password + '&shoppingcart=' + JSON.stringify(data)
            )
                .then(res => {
                    // alert(JSON.stringify(res))
                    if (res.status === 'OK') this.clear()     //上传成功后，清除本地购物车数据
                    resolve(res)
                })
                .catch(e => reject(e))            
        })

    }
    static get() {
        return new Promise((resolve, reject) => {
            Storage.get('shoppingCart')
                .then(data =>resolve(data))
                .catch(e => reject(e))
        })
    }
    static clear() {
        Storage.remove('shoppingCart')
    }
}