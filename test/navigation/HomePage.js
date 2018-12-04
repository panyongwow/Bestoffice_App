import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import {createBottomTabNavigator,createDrawerNavigator} from 'react-navigation'

export default class HomePage extends Component{
    // static navigationOptions=({navigation})=>{
    //     return({
    //         header:null
    //     })
    // }
    
    render(){
        return(
            <View>
                <Text>这是主页</Text>
                <Button 
                    title='Go Settings' 
                    onPress={()=>{
                        this.props.navigation.navigate('Settings')
                    }}
                />
                {/* <Button 
                    title='Go Page2' 
                    onPress={()=>{
                        this.props.navigation.navigate('Page2')
                    }}
                />                 */}
            </View>
        )
    }
} 