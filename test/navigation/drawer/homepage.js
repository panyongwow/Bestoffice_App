import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class HomePage extends Component{
    render(){
        return(
            <View>
                <Text>这是HomePage</Text>
                <View style={{height:50}}></View>
                <Button
                    title='跳转到Drawer'
                    onPress={()=>{
                        this.props.navigation.navigate('Drawer')
                    }}
                />
                <View style={{height:50}}></View>
                <Button
                    title='跳转到Page1'
                    onPress={()=>{
                        this.props.navigation.navigate('Page1')
                    }}
                />                
            </View>
        )
    }
} 