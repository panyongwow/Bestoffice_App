import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet, Text, Button, ScrollView,TouchableHighlight } from 'react-native'

export default class Left extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let data = [
            { id: 1, name: '办公用纸1', key: '1', isSelected: false },
            { id: 2, name: '办公文具', key: '2', isSelected: false },
            { id: 3, name: '办公耗材', key: '3', isSelected: false },
            { id: 4, name: '办公家具', key: '4', isSelected: false },
            { id: 5, name: '办公设备', key: '5', isSelected: false},
            { id: 6, name: '电脑配件', key: '6', isSelected: false },
            { id: 7, name: '数码设备', key: '7', isSelected: false },
            { id: 8, name: '日常生活', key: '8', isSelected: false }
        ]
        this.setState({
            data:data
        })
    }
    renderItem({ item, index }) {
        return (
            <Item item={item} index={index} />
        )
    }
    renderSpearator() {
        return (
            <View style={{ height: 1, width: 70, backgroundColor: 'white' }}></View>
        )
    }
    itemSelected(index){
        let data = []
        this.state.data.map((item, i) => {
            item = item
            item.isSelected = index===i?true:false
            data.push(item)
        })
        this.setState({
            data: data
        })
    }
    render() {

        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{width:70}}>
                {/* <Button title='test' onPress={() => {
                    let data = []
                    let item
                    this.state.data.map((item, index) => {
                        item = item
                        item.isSelected = !item.isSelected
                        data.push(item)
                    })
                    this.setState({
                        data: data
                    })
                }} /> */}
                {/* <FlatList
                    style={styles.flatlist}
                    data={data}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSpearator}
                /> */}
                {
                    this.state.data.length === 0
                        ? null
                        : this.state.data.map((item, index) => {
                            return (
                                <View key={index}>
                                    <TouchableHighlight style={{width:70}}
                                        underlayColor='#fff'
                                        onPress={()=>{
                                             this.itemSelected(index)
                                        }}
                                        // onPress={this.itemSelected(index)}
                                    >
                                        <Text style={[styles.leftitem, { backgroundColor: item.isSelected ? '#fff' : '#f7f7f7' }]}>{item.name}</Text>
                                    </TouchableHighlight>
                                    <View style={{ height:1, width: 70, backgroundColor: 'white' }}></View>
                                </View>
                            )
                        })
                }
            </ScrollView>
        )
    }
}

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false
        }
    }
    render() {
        let item = this.props.item
        return (
            <TouchableOpacity onPress={() => {
                alert(this.props.index)
                this.setState({
                    isSelected: !this.state.isSelected
                })
                //item.selected=true
            }}>
                <Text style={[styles.leftitem, { backgroundColor: this.state.isSelected ? 'white' : 'red' }]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'gray'
    },
    flatlist: {
        // width:200,
        //  height:1530
    },
    leftitem: {
        height: 80,
        width: 70,
        //backgroundColor: '#f7f7f7',
        // borderColor: 'white',
        // borderWidth: 1,
        fontSize: 11,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    leftitemSelected: {
        backgroundColor: 'white'
    }
})