import * as actionTypes from '../constants/actionTypes'
import ShoppingcartDao from '../dao/shoppingcart'

export function shoppingcart_increase(data){
    ShoppingcartDao.setToWeb()
    return {
        type:actionTypes.SHOPPINGCART_INCREASE,
        data
    }
}

export function shoppingcart_decrease(data){
    return {
        type:actionTypes.SHOPPINGCART_DECREASE,
        data
    }
}

export function shoppingcart_clear(){
    return {
        type:actionTypes.SHOPPINGCART_CLEAR
    }
}