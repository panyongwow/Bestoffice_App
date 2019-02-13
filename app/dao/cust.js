import { BSTWEBURL } from '../config/config'
import Storage from '../storage'

export default class CustDao {
    static login(account, password) {
        let url = '/ajax/cust/login.ashx'

        url = url + '?account=' + account + '&password=' + password

        return new Promise((resolve, reject) => {
            fetch(BSTWEBURL + url,{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({account:account,password:password})
            })
                .then(res => res.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })        
    }
    static set(data){
        Storage.save('cust',data)
    }
    static get() {
        return new Promise((resolve,reject)=>{
            Storage.get('cust')
                .then(data=>resolve(data))
                .catch(error=> reject(error))
        })
    }
    static clear(){
        Storage.remove('cust')
    }
}