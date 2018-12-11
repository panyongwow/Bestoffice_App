
import { BSTURL } from '../config/config'
import Storage from '../storage'

export var FLAG_HOMEPAGE={
    TAG:'TAG'
}
export default class HomePageDao {
    static init(callback) {
        this.clear()
        const url = '/ajax/homepage/list.ashx'

        fetch(BSTURL + url)
            .then(res => res.json())
            .then(result => {
                Storage.save('HomePage', result.details)
                callback()
            })
            .catch(error => {
                throw error
            })
    }
    static get(key) {
        return new Promise((resolve,reject)=>{
            Storage.get('HomePage')
                .then(result=>{
                    let data
                    switch(key){
                        case FLAG_HOMEPAGE.TAG:
                            data=result.tag
                            break
                        default:
                            data=result
                            break
                    }
                    return resolve(data)
                })
                .catch(error=>{
                    return reject(error)
                })
        })
    }
    static clear() {
        Storage.remove('HomePage')
    }

}