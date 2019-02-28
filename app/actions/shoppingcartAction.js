import * as actionTypes from '../constants/actionTypes'
import ShoppingcartDao from '../dao/shoppingcart'

export function shoppingcart_increase(data) {
    // alert(JSON.stringify(data))
    // ShoppingcartDao.add(data)     //添加购物车商品，存入本地或上传至服务器（取决于当前是否登陆）
    //     .then(()=>{
    //         type:actionTypes.SHOPPINGCART_INCREASE,
    //         data            
    //     })
    //     .catch(error=>{
    //         type:actionTypes.SHOPPINGCART_INCREASE,
    //         data  
    //     })
    ShoppingcartDao.add(data)     //添加购物车商品，存入本地或上传至服务器（取决于当前是否登陆）        
    return {
        type: actionTypes.SHOPPINGCART_INCREASE,
        data
    }
}

export function shoppingcart_decrease(data) {
    return {
        type: actionTypes.SHOPPINGCART_DECREASE,
        data
    }
}

export function shoppingcart_sync(data){
    return {
        type:actionTypes.SHOPPINGCART_SYNC,
        data
    }
}

export function shoppingcart_clear() {
    return {
        type: actionTypes.SHOPPINGCART_CLEAR
    }
}