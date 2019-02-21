import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import LoginPage from './pages/loginPage'
import MainPage from './pages/mainPage'
import { Provider, connect } from 'react-redux'
import { createStore, bindActionCreators, combineReducers } from 'redux'
import configureStore from './store/configureStore'
//import  loginInfo from './reducers/loginReducers'
import * as loginActions from './actions/loginActions'

const App=StackNavigator({
    Main:{screen:MainPage},
    Login:{screen:LoginPage},
})

//export default App
const store=configureStore()
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
} 