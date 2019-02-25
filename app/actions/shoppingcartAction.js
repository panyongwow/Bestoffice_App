import * as actionTypes from '../constants/actionTypes'

export function shoppingcart_increase(data){
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