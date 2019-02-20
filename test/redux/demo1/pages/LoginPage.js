import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import * as loginAction from '../actions/loginAction'
import MainPage from '../pages/MainPage'
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Main' })
    ]
})

class LoginPage extends Component {
    static NavigationActions = {
        title: 'LoginPage'
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status === '登录成功' && nextProps.isSuccess) {
            this.props.navigation.dispatch(resetAction)
            return false
        }
        return true
    }

    render() {
        const { login } = this.props
        return (
            <View>
                <Text>状态：{this.props.status}</Text>
                <TouchableOpacity onPress={() => login()} style={{ marginTop: 50 }}>
                    <View style={styles.loginBtn}>
                        <Text>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5FCFF'
    },
    loginBtn: {
      borderWidth: 1,
      padding: 5,
    }
  });

export default connect(
    (state)=>({
        status:state.loginIn.state,
        isSuccess:state.loginIn.isSuccess,
        
    })
)