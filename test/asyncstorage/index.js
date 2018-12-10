import React, { Component } from 'react'
import { View, Button, AsyncStorage } from 'react-native'

export default class Storage extends Component {
    constructor(props) {
        super(props)
    }
    set(key, data) {
        AsyncStorage.setItem(
            key,
            JSON.stringify(data),
            (error) => { }
        )
    }
    get(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    if (result) {
                        resolve(result)
                    } else {

                    }
                }
            })
        })
        // const value = await AsyncStorage.getItem(key)
        // return value
    }
    setData() {
        let data = {
            details: {
                tag: [
                    { 'id': 1, 'name': '硒鼓' },
                    { 'id': 2, 'name': '墨盒' },
                    { 'id': 3, 'name': 'A4' }
                ],
                ad: [
                    { 'id': 1, 'name': '大优惠' },
                    { 'id': 2, 'name': '买二送一' }
                ]
            }
        }
        this.set('data', data)
        alert('ok1')
    }
    getData(key) {
        return new Promise((resolve, reject) => {
            this.get('data')
                .then(result => {
                    let data
                    let r=JSON.parse(result)
                    switch (key) {
                        case 'tag':
                            data = r.details.tag
                            break
                        default:
                            data = r.details
                            break
                    }
                    resolve(data)
                })
                .catch(error=>{
                    reject(error)
                })
        })
    }
    list(key) {
        this.getData(key)
            .then(result => {
                alert(JSON.stringify(result))
            })
            .catch(error => {
                alert(error)
            })
    }
    render() {
        return (
            <View>
                <Button title='保存1' onPress={() => {
                    this.setData()
                }} />
                <View style={{ height: 50 }}></View>
                <Button title='获取tag' onPress={() => {
                    this.list('tag')
                }} />
                <View style={{ height: 50 }}></View>
                <Button title='获取all' onPress={() => {
                    this.list()
                }} />                
            </View>
        )
    }
}