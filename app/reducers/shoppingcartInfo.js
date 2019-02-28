import * as actionTypes from '../constants/actionTypes'
const initialState = {
    cartnum: 0
}
export default function shoppingcartInfo(state = initialState, action) {
    let cartnum = 1
    if (action.data) cartnum = action.data.cartnum
    //alert(cartnum)
    switch (action.type) {
        case actionTypes.SHOPPINGCART_INCREASE:          //购物车商品增加
            return {
                ...state,
                cartnum: state.cartnum + cartnum
            }
        case actionTypes.SHOPPINGCART_DECREASE:          //购物车商品减少
            return {
                ...state,
                cartnum: state.cartnum - cartnum
            }
        case actionTypes.SHOPPINGCART_CLEAR:              //购物车商品清除，数量变更为0
            return {
                ...state,
                cartnum: 0
            }
        case actionTypes.SHOPPINGCART_SYNC:               //购物车商品与服务器同步，变更为服务器同步后的数量
            return {
                ...state,
                cartnum
            }    
        default:
            return state

    }
}