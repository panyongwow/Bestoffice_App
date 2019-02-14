import {AsyncStorage} from 'react-native'

export default class Storage{
    static save(key,data){
        AsyncStorage.setItem(
            key,
            JSON.stringify(data),
            (error)=>{}
        ) 
    }

    static get(key){
        return new Promise((resolve,reject)=>{
            AsyncStorage.getItem(key,(error,result)=>{
                if(error){
                    reject(error)
                }else{
                    if(result){
                        resolve(JSON.parse(result))
                        //resolve(result)
                    }else{
                       resolve(null)
                    }
                }
            })
        })

        // return AsyncStorage.getItem(key).then((value) => {
        //         // const jsonValue = JSON.parse(value);
        //         //      return jsonValue;
        //              return value
        //         });

        //return AsyncStorage.getItem(key)

        // AsyncStorage.getItem(key,(error,result)=>{
        //     if(error){
        //         //reject(error)
        //     }else{
        //         if(result){
        //            return JSON.parse(result)
        //         }else{

        //         }
        //     }
        // })
    }

    static remove(key){
        AsyncStorage.removeItem(key)
    }
}