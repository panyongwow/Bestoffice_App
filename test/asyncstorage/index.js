import React, { Component } from 'react'
import { View, Button, AsyncStorage } from 'react-native'

export default class Storage extends Component {
    constructor(props) {
        super(props)
    }
    setData() {
        let data = {
            details: {
                tag: [
                    { 'id': 1, 'name': '硒鼓' },
                    { 'id': 2, 'name': '墨盒' },
                    { 'id': 3, 'name': 'A4' }
                ]
            }
        }
        AsyncStorage.setItem('data', JSON.stringify(data))
        alert('ok')
    }
    getData() {
        //alert(JSON.stringify(AsyncStorage.getItem('tag1')))
        //alert(AsyncStorage.getItem('tag1'))
        AsyncStorage.getItem('data')
            .then(result => {
                alert(JSON.stringify(JSON.parse(result).details.tag))
            })
    }
    render() {
        return (
            <View>
                <Button title='保存1' onPress={() => {
                    this.setData()
                }} />
                <View style={{ height: 50 }}></View>
                <Button title='获取' onPress={() => {
                    this.getData()
                }} />
            </View>
        )
    }
}