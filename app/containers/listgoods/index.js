import React, { Component } from 'react'
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
// import Header from '../header'
import Header from '../../components/header'
import Left from'./subpage/left'

export default class ListGoods extends Component {
    constructor(props) {
        super(props)
        this.state={
            selectedID:0
        }
    }
    selectItem(id){
        this.setState({
            selectedID:id
        })
    }
    render() {
        // let { navigation } = this.props
        // let { state } = navigation
        // let { params } = state
        // let listgoodsID = navigation.getParam('id', 0)
        return (
            <View style={styles.container}>
                {/* <Header navigation={navigation}/> */}
                <Header />
                {/* <Button title='test' onPress={this.selectItem()}></Button> */}
                <View style={{flex:1,flexDirection:'row', justifyContent:'space-around'}}>
                
                <Left selectItem={(id)=>{this.selectItem(id)}} />
                
                    <View style={{backgroundColor:'red',width:200,height:100}}><Text>{this.state.selectedID}</Text></View>
                </View>
                {/* <View> */}
                {/* <ListGoodsLeft /> */}
                {/* </View> */}
                {/* <View style={{height:300}}>
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
                /> */}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    }
})