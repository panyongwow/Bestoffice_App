import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class Details extends Component{
    render(){
        return(
            <View>
                <Text>这是Details</Text>
                {/* <Button 
                    title='返回' 
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}
                />                
                <Button 
                    title='Go Page2'
                    onPress={()=>{
                        this.props.navigation.navigate('Page2')
                    }}
                />                 */}
            </View>
        )
    }
} 