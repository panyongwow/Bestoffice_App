import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'
import * as loginAction from '../actions/loginAction'

export default class MainPage  extends Component{
    render(){
        return(
            <View>
                <Text>这是MainPage</Text>
            </View>
        )
    }
}
