import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class HomePage extends Component{
    render(){
        return(
            <View>
                <Text>这是主页</Text>
                <Button 
                    title='Go Page1' 
                    onPress={()=>{
                        this.props.navigation.navigate('Page1')
                    }}
                />
                <Button 
                    title='Go Page2' 
                    onPress={()=>{
                        this.props.navigation.navigate('Page2')
                    }}
                />                
            </View>
        )
    }
} 