import * as actionTypes from '../constants/actionTypes'
import ShoppingcartDao from '../dao/shoppingcart'

export function shoppingcart_init(cartnum){           //购物车初始化
    //let data={cartnum}
    return {
        type:actionTypes.SHOPPINGCART_INIT,
        data:{cartnum}
    }
}
export function shoppingcart_increase(data) {       //添加购物车商品，存入本地或上传至服务器（取决于当前是否登陆）   
    ShoppingcartDao.add(data)                             
    return {
        type: actionTypes.SHOPPINGCART_INCREASE,
        data
    }
}

export function shoppingcart_decrease(data) {        // 减少购物车商品，修改本地或服务器数据（取决于当前是否登陆） 
    return {
        type: actionTypes.SHOPPINGCART_DECREASE,
        data
    }
}

export function shoppingcart_sync(data){            //本地购物车商品同步至服务器上（当状态由未登录转为已登录时）
    return {
        type:actionTypes.SHOPPINGCART_SYNC,
        data
    }
}

export function shoppingcart_clear() {            //清除购物车商品
    return {
        type: actionTypes.SHOPPINGCART_CLEAR
    }
}