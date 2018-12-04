import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class Setting extends Component{
    render(){
        return(
            <View>
                <Text>这是Setting</Text>
                <Button 
                    title='Go Details'
                    onPress={()=>{
                        this.props.navigation.navigate('Details')
                    }}
                />                 
            </View>
        )
    }
} 