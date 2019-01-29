import { BSTURL } from '../config/config'

export default class ProductDao {
    //根据条件查询商品，获得商品列表
    static list(s) {
        let url = '/ajax/products/list_m.ashx'

        url = url + '?nowpage=' + s.nowpage +
            '&apagenum=' + s.apagenum +
            '&listgoodsid=' + s.listgoodsid +
            '&minprice=' + s.minprice +
            '&maxprice=' + s.maxprice +
            '&name=' + s.name +
            '&company=' + s.company +
            '&orderby=' + s.orderby
        return new Promise((resolve, reject) => {
            fetch(BSTURL + url)
                .then(res =>
                    res.json()
                )
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

    //根据商品ID获得商品详情
    static get(id) {
        let url = '/ajax/products/getbyid_m.ashx'

        url = url + '?id='+id
        return new Promise((resolve, reject) => {
            fetch(BSTURL + url)
                .then(res => res.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }

}