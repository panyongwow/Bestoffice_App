import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class MainPage extends Component {
    render() {
        return (
            <View>
                <Text>这是首页</Text>
                <Button
                    title='跳转到登录页'
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}
                />
            </View>
        )
    }
}