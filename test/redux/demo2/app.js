import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {StackNavigator} from 'react-navigation'
import LoginPage from './pages/loginPage'
import MainPage from './pages/mainPage'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

const App=StackNavigator({
    Main:{screen:MainPage},
    Login:{screen:LoginPage},
})

const store=configureStore()

//export default App
export default class Root extends Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
} 