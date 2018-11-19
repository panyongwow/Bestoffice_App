import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class My extends Component{
    render(){
        const {navigation}=this.props
        return(
            <View>
                <View style={{height:300}}>
                <Text>这是My！</Text>
                </View>
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