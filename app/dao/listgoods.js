

import { BSTURL } from '../config/config'

export default class ListgoodsDao {

    //获得指定目录下的指定目录，ID为0表明获取一级目录 
    static get(parentID = 0) {

        let url = '/ajax/listgoods/listgoods_one.ashx'

        if (parentID > 0) {
            //如果不是获取一级目录的话，在这里更改url的值
        }

        return new Promise((resolve, reject) => {
            fetch(BSTURL + url)
                .then(res => res.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

    //获得指定一级目录的子目录，包括二级与三级目录
    static list_one_child(ID) {
        let url = '/ajax/listgoods/list_one_child.ashx?id=' + ID

        return new Promise((resolve, reject) => {
            fetch(BSTURL + url)
                .then(res => res.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }
}