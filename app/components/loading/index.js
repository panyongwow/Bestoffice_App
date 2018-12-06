import React, { Component } from 'react'
import { View, Text,StyleSheet,ActivityIndicator } from 'react-native'

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator color={'red'}/>
                <Text>正在加载...</Text> 
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        height: 50, justifyContent: 'center', alignItems: 'center' 
    }
})