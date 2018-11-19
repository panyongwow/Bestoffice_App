import {AsyncStorage} from 'react-native'

export default class Storage{
    static save(key,data){
        AsyncStorage.setItem(key,data,(error)=>{

        }) 
    }

    static get(key){
        return new Promise((resolve,reject)=>{
            AsyncStorage.getItem(key,(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    if(result){
                        resolve(JSON.parse(result))
                    }else{

                    }
                }
            })
        })
    }
}