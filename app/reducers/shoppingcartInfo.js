import * as actionTypes from '../constants/actionTypes'
const initialState = {
    cartnum: 0
}
export default function shoppingcartInfo(state = initialState, action) {
    let cartnum = 1
    if (action.data) cartnum = action.data.cartnum
    switch (action.type) {
        case actionTypes.SHOPPINGCART_INCREASE:
            return {
                ...state,
                cartnum: state.cartnum + cartnum
            }
        case actionTypes.SHOPPINGCART_DECREASE:
            return {
                ...state,
                cartnum: state.cartnum - cartnum
            }
        case actionTypes.SHOPPINGCART_CLEAR:
            return {
                ...state,
                cartnum: 0
            }
        default:
            return state

    }
}