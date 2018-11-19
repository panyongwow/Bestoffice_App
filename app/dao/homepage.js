// import {fetch} from 'react'
import {BSTURL} from '../config/config'
import  Storage from '../storage'

export default class HomePageDao{
    static init(callback){
        fetch(BSTURL + "/ajax/homepage/tag_list.ashx")
            .then(res=>res.json())
            .then(result=>{
                Storage.save('TAG',result.details)
                callback()
            })
            .catch(error=>{
                throw error
            })
    }
    static get(){
        return Storage.get('TAG')
    }
}