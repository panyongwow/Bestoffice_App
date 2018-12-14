import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Button, ScrollView, TouchableHighlight } from 'react-native'

import ListGoodsDao from '../../../dao/listgoods'

import Loading from '../../../components/loading'

export default class Left extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let data = [
            { id: 1, name: '办公用纸', key: '1', isSelected: true },
            { id: 2, name: '办公文具', key: '2', isSelected: false },
            { id: 3, name: '办公耗材', key: '3', isSelected: false },
            { id: 4, name: '办公家具', key: '4', isSelected: false },
            { id: 5, name: '办公设备', key: '5', isSelected: false},
            { id: 6, name: '电脑配件', key: '6', isSelected: false },
            { id: 7, name: '数码设备', key: '7', isSelected: false },
            { id: 8, name: '日常生活', key: '8', isSelected: false }
        ]
        // let data = []
        // ListGoodsDao.get()
        //     .then(result => result.details)
        //     .then(listgoodsOne => {
        //         listgoodsOne.map((item, index) => {
        //             item.isSelected = index == 0 ? true : false
        //             data.push(item)
        //         })
        //         this.setState({
        //             data: data
        //         })
        //     })
        //     .catch(error => {
        //         alert(error)
        //     })
        this.setState({
            data:data
        })
    }
    // renderItem({ item, index }) {
    //     return (
    //         <Item item={item} index={index} />
    //     )
    // }
    // renderSpearator() {
    //     return (
    //         <View style={{ height: 1, width: 70, backgroundColor: 'white' }}></View>
    //     )
    // }
    itemSelected(index) {
        let data = []
        this.state.data.map((item, i) => {
            item = item
            item.isSelected = index === i ? true : false
            data.push(item)
        })
        this.setState({
            data: data
        })
    }
    render() {
        let selectItem = this.props.selectItem
        return (
            <ScrollView showsVerticalScrollIndicator={false} >
                {/* <FlatList
                    style={styles.flatlist}
                    data={data}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSpearator}
                /> */}
                <View style={{ height: 3}}></View>
                {
                    this.state.data.length === 0
                        ? <Loading />
                        : this.state.data.map((item, index) => {
                            return (
                                <Item key={index} item={item} pressHandle={() => {
                                    this.itemSelected(index)
                                    selectItem(item.id)
                                }} />
                            )
                        })
                }
            </ScrollView>
        )
    }
}

class Item extends Component {
    render() {
        let item = this.props.item
        return (
            <View>
                <View style={[styles.border, { backgroundColor: item.isSelected ? '#fff' : '#f7f7f7', borderLeftColor: item.isSelected ? '#f00' : '#f7f7f7' }]}>
                    <TouchableHighlight style={styles.touchable}
                        underlayColor='#fff'
                        onPress={() => this.props.pressHandle()
                        }
                    >
                        <Text style={[styles.itemtext,{backgroundColor: item.isSelected ? '#fff' : '#f7f7f7', color: item.isSelected ? '#f00' : '#000' }]}>{item.name}</Text>
                    </TouchableHighlight>

                </View>
                <View style={styles.separator}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     // backgroundColor:'gray'
    // },
    // flatlist: {
    //     // width:200,
    //     //  height:1530
    // },
    // leftitem: {
    //     height: 80,
    //     width: 70,
    //     //backgroundColor: '#f7f7f7',
    //     // borderColor: 'white',
    //     // borderWidth: 1,
    //     fontSize: 11,
    //     textAlign: 'center',
    //     textAlignVertical: 'center'
    // },
    // leftitemSelected: {
    //     backgroundColor: 'white'
    // },
    border:{
        width: 70, 
        height: 70, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        borderLeftWidth: 3
    },
    itemtext:{
        height: 70, 
        width: 30, 
        fontSize: 11, 
        textAlignVertical: 'center', 
        textAlign: 'center'
    },
    touchable:{
        width: 30,
         flexDirection: 'row', 
        justifyContent: 'center' 
    },
    separator:{
        height: 1, 
        width: 30, 
        backgroundColor: 'white'
    }
})