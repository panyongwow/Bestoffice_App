import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class ShoppingCart extends Component{
    render(){
        const {navigation}=this.props
        return(
            <View>
                <Text>这是购物车！</Text>
                <Button
                    title='返回'
                    onPress={()=>{
                        navigation.goBack()
                    }}
                />                
            </View>
        )
    }
}