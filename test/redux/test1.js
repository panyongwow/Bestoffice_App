import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { createStore, combineReducers } from 'redux'

export default class ReduxTest extends Component {
    constructor(props) {
        super(props)
        // this.store.subscribe=()=>{
        //     alert(JSON.stringify(this.store.getState())) 
        // }
    
    }



    // unsubscribe(){
    //     this.store.subscribe(()=>{

    //     })
    // }
    addToCart(product, quantity, unitCost){
        return {
            type: ADD_TO_CART,
            payload: {
                product, quantity, unitCost
            }
        }
    }

    render() {
        return (
            <View>
                <Text>{JSON.stringify(initialState)}</Text>
                <Text></Text>
                <Text>{JSON.stringify(store.getState())}</Text>
                <Text></Text>
                <Button
                    title='测试'
                    onPress={() => {
                        store.dispatch(this.addToCart('Coffee 500gm', 1, 250));
                        // store.dispatch(this.addToCart('Flour 1kg', 2, 110));
                        // store.dispatch(this.addToCart('bread 700g', 5, 20));
                    }}
                />
                {/* <Button
                    title='获取'
                    onPress={()=>{
                        alert(JSON.stringify(store.getState()))
                    }}
                /> */}
            </View>
        )
    }
}

const initialState = {
    cart: [
        { product: 'bread 700g', quantity: 2, unitCost: 20 },
        { product: 'mike 500ml', quantity: 4, unitCost: 15 }
    ]
}
const ADD_TO_CART = 'ADD_TO_CART'

// const productReducer = (state = [], action) => {
//     return state
// }
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        }
        default: {
            return state
        }
    }
}

// let allReducer = {
//     products: productReducer,
//     shoppingCart: cartReducer
// }
// const rootReducer = combineReducers(allReducer)

let store = createStore(cartReducer)

store.subscribe(()=>{
    alert(JSON.stringify(store.getState())) 
})









