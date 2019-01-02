import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import {createBottomTabNavigator,createDrawerNavigator} from 'react-navigation'

export default class HomePage extends Component{
    // static navigationOptions=({navigation})=>{
    //     return({
    //         header:null
    //     })
    // }

    static navigationOptions={
        title:'首页'
    }

    render(){
        return(
            <View>
                <Text>这是主页</Text>
                <Button 
                    title='返回' 
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}
                />    
                <View style={{height:50}} />                    
                <Button 
                    title='Go Page1' 
                    onPress={()=>{
                        this.props.navigation.navigate('Page1')
                    }}
                />
                <View style={{height:50}} />
                <Button 
                    title='Go Page22' 
                    onPress={()=>{
                        this.props.navigation.navigate('Page2',{title:'页面211',mode1:'edit'})
                    }}
                />                
            </View>
        )
    }
} 