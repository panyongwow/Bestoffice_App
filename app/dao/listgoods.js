

import { BSTURL } from '../config/config'

export default class ListgoodsDao {

    static get(parentID = 0) {

        let url = '/ajax/listgoods/listgoods_one.ashx'

        if (parentID > 0) {
            //如果不是获取一级目录的话，在这里更改url的值
        }

        return new Promise((resolve, reject) => {
            fetch(BSTURL + url)
                .then(res => res.json())
                .then(result => resolve(result)
                )
                .catch(error => reject(error)
                )
        })

    }
}