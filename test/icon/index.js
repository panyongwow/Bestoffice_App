import React,{Component} from 'react'
import {View,Text} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class IconTest extends Component{
    render(){
        return(
            <View>
                <Text>12334556</Text>
                <FontAwesome5 name='accessible-icon' size={40} color='red' />
                <AntDesign name='caretright' size={40} color='blue' />
            </View>
        )
    }
}