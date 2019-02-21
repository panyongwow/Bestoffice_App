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

// const App=StackNavigator({
//     Main:{screen:MainPage},
//     Login:{screen:LoginPage},
// })

//const store=configureStore({})

class App extends Component {
    render() {
        return (
            <View>
                <Text>这是App</Text>
                <Text>姓名:{this.props.loginInfo.name}</Text>
                <Text>姓名:{JSON.stringify(this.props)}</Text>
                <Button
                    title='Login'
                    onPress={() => {
                        this.props.loginActions('test','123')
                    }
                    }
                />
            </View>
        )
    }
}
const initialState = {
    name: '李四1',
    password: '',
    account: ''
}

//Reducers
function loginInfo(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.data
        default:
            return state
    }
}

//Acrtions
function login(account, password) {
    //这里面是登陆过程，fetch之类的。。。
    return {
        type: 'LOGIN_SUCCESS',
        data: {
            account,
            password,
            name: '张三'
        }
    }
}
const rootReducer = combineReducers({
    loginInfo
})

const store = createStore(rootReducer)

function mapStateToProps(state) {
    return {
        loginInfo: state.loginInfo,
        //loginInfo:'李四'
    }
}

function mapDispatchToProps(dispatch) {
    return {
       // loginActions: bindActionCreators(loginActions, dispatch)
        loginActions: bindActionCreators(login, dispatch)
        // loginActions:()=>{
        //     alert('ok!')
        // }
        //loginActions: dispatch
    }
}
let App1 = connect(
    mapStateToProps, mapDispatchToProps
)(App)

//export default App
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App1 />
            </Provider>
        )
    }
} 