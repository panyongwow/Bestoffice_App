import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Foot extends Component {
    render() {
        return (
            <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 10 }}>版权所有： 百思通办公 | 版权声明</Text>
                <Text style={{ fontSize: 10 }}>CopyRight @ 2010-2018 bestoffice.cn All Rights Reserved</Text>
            </View>
        )
    }
}