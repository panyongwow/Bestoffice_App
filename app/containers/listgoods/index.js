import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class ListGoods extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
    }
    componentDidMount(){

    }
    render(){
        let {navigation}=this.props
        let {state}=navigation
        let {params}=state
        let listgoodsID =navigation.getParam('id',0)
        return(
            <View>
                <View style={{height:300}}>
                   <Text>这是商品分类！</Text>
                   <Text>获得的参数：{listgoodsID}</Text>
                </View>
                <Button
                    title='返回'
                    onPress={()=>{
                        navigation.goBack()
                    }}
                />
                <View style={{height:20}}></View>
                <Button
                    title="显示ID"
                    onPress={()=>{
                        alert(typeof(params.id))
                    }}
                />
            </View>
        )
    }
}