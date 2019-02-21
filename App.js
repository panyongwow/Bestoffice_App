import React,{Component} from 'react'
import  {RootStack,ProductListStock} from './app/navigators/AppNavigators'
import configureStore from './app/store/configureStore'
import {Provider} from 'react-redux'

//import  {MainNavigator} from './app/navigators/AppNavigators'
//import {MainNavigator} from './app/navigators/MainNavigator'


const store=configureStore()

export default class Root extends Component{
    render(){
        return(
            <Provider store={store}>
                <RootStack />
            </Provider>
        )
    }
}

//export default RootStack;


//export default ProductListStock;



//export default RootStack;



