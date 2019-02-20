import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import login from '../actions/loginActions'


class LoginPage extends Component {
    render() {
        return (
            <View>
                <Text>这是登录页面</Text>
                <Text>姓名：{JSON.stringify(this.props.loginInfo)}</Text>
                <Button
                    title='跳转到首页'
                    onPress={() => {
                        this.props.navigation.navigate('Main')
                    }}
                />
                <View style={{height:30}}></View>
                <Button
                    title='登录'
                    onPress={() => {
                        let actions=this.props.loginActions
                        actions.login('test','123456')
                        //this.props.loginActions.login('王五','123456')
                        alert('ok')
                    }}
                />
            </View>
        )
    }
}


const  mapStateToProps=(state)=>{
    return{
        loginInfo:state.loginInfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        loginActions:bindActionCreators(login,dispatch)
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(LoginPage)

