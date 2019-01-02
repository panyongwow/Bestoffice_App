import React,{Component} from 'react'
import {View,Text,Button,TextInput} from 'react-native'

export default class Page2 extends Component{
    // static navigationOptions={
    //     title:'真页面2'
    // }
    render(){
        const showText=this.props.navigation.state.params.mode==='edit'?'正在编辑':'编辑完成'
        return(
            <View>
                <Text>这是Page2</Text>
                <Button 
                    title='返回' 
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}
                />    
                <View style={{height:10}} />            
                <Button 
                    title='Go Home'
                    onPress={()=>{
                        this.props.navigation.navigate('Home')
                    }}
                />                  
                <View style={{height:10}} />            
                <Button 
                    title='Go Page11'
                    onPress={()=>{
                        this.props.navigation.navigate('Page1')
                    }}
                />                
                 <View style={{height:10}} /> 
                 <Text>{showText}</Text>
                 <TextInput
                     style={{height:50,width:300,borderColor:'black',borderWidth:1}}
                     onChangeText={text=>{
                         this.props.navigation.setParams({
                             title:text
                         })
                     }}
                  /> 
            </View>
        )
    }
} 