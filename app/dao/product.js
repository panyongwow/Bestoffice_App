import { BSTURL } from '../config/config'

export default class ProductDao {
    static list(listgoodsid,nowpage,apagenum){
        let url='/ajax/products/list.ashx'
        let wherestr=' isshelves=1 and isdisplay=1'
        
        url=url+'?nowpage='+nowpage +'&apagenum='+apagenum+'&listgoodsid='+listgoodsid+'&wherestr='+wherestr
        return new Promise((resolve, reject) => {
            fetch(BSTURL + url)
                .then(res => res.json())
                .then(result => resolve(result))
                .catch(error => reject(error))
        })
    }    
}