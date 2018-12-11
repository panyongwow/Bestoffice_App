import React, { Component } from 'react'
import { View, Text, Button, FlatList,StyleSheet } from 'react-native'
// import Header from '../header'
import Header from '../../components/header'

export default class ListGoods extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
    }
    componentDidMount() {

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
                <ListGoodsLeft />
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

class ListGoodsLeft extends Component {
    render() {
        let data = [
            { id: 1, name: '办公用纸', key: '1' },
            { id: 2, name: '办公文具', key: '2' },
            { id: 2, name: '办公耗材', key: '2' },
            { id: 2, name: '办公家具', key: '2' },
            { id: 2, name: '办公设备', key: '2' },
            { id: 2, name: '电脑配件', key: '2' },
            { id: 2, name: '数码设备', key: '2' },
            { id: 2, name: '日常生活', key: '2' }                                                            
        ]
        return (
            <View>
                <Text>左侧listgoods1</Text>
                <FlatList
                    style={styles.flatlist}
                    data={data}
                    renderItem={({item}) =>
                        <Text style={{height:80,width:100,backgroundColor:'#f7f7f7'}}>{item.name}</Text>
                    }
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    flatlist:{
        width:200,
        height:500
    }
})