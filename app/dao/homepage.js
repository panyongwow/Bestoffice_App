
import {BSTURL} from '../config/config'
import  Storage from '../storage'

export default class HomePageDao{
    static init(callback){
        this.clear()
        const url='/ajax/homepage/list.ashx'

        fetch(BSTURL + url)
            .then(res=>res.json())
            .then(result=>{
                Storage.save('HomePage',result.details)
                callback()
            })
            .catch(error=>{
                throw error
            })            
    }
    static get(){
        return Storage.get('HomePage')
    }

    static clear(){
        Storage.remove('HomePage')
    }
}