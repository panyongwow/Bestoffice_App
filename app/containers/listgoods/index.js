import React, {Component} from 'react'
import {View,Text,Button} from 'react-native'

export default class ListGoods extends Component{
    constructor(props){
        super(props)
        // this.state={
        //     id:0,
        //     navigation:null
        // }
    }
    componentWillMount(){
        // const {navigation}=this.props
        // const {state}=navigation
        // const {params}=state        
        // this.setState({
        //     id:params.id || 0,
        //     navigation:navigation
        // })
    }
    componentDidMount(){

    }
    render(){
        let {navigation}=this.props
        let {state}=navigation
        let {params}=state
        let listgoodsID =0

        // if(typeof(params.id) ==undefined) listgoodsID=0
        // else listgoodsID=params.id

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