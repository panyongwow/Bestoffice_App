import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class Page1 extends Component{
    render(){
        return(
            <View>
                <Text>这是Page1</Text>
                <Button 
                    title='返回' 
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}
                />    
                <View style={{height:50}} />            
                <Button 
                    title='Go Home'
                    onPress={()=>{
                        this.props.navigation.navigate('Home')
                    }}
                />                  
                <View style={{height:50}} />            
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