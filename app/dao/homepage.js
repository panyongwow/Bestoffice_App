
import { BSTURL } from '../config/config'
import Storage from '../storage'

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
    // static get() {
    //     return Storage.get('HomePage')
    // }
    static get(key) {
        let data;
        switch (key) {
            case 'TAG':
                // Storage.get("HomePage")
                //     .then(result=>{
                //         data=result.tag
                //     })
                data= Storage.get("HomePage")
                //alert(JSON.stringify(data))
                break
            default:
                data= Storage.get("HomePage")
                // Storage.get("HomePage")
                //     .then(result=>{
                //         data=result
                //     })
                // break
        }
        return data

    }
    static clear() {
        Storage.remove('HomePage')
    }

}