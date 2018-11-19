import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class ListGoods extends Component{
    render(){
        const {navigation}=this.props
        const {state}=navigation
        const {params}=state
        return(
            <View>
                <View style={{height:300}}>
                   <Text>这是商品分类！</Text>
                   <Text>获得的参数：{params.id}</Text>
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