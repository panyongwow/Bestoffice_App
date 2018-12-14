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
            { id: 1, name: '办公用纸', key: '1', isSelected: true },
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
        let selectItem=this.props.selectItem 
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={{width:70}}>
                {/* <FlatList
                    style={styles.flatlist}
                    data={data}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.renderSpearator}
                /> */}
                <View style={{height:5}}></View>
                {
                    this.state.data.length === 0
                        ? null
                        : this.state.data.map((item, index) => {
                            return (
                                <View key={index}>
                                <View style={{width:70,height:70,flexDirection:'row',justifyContent:'center',borderLeftWidth:3, backgroundColor: item.isSelected ? '#fff' : '#f7f7f7',borderLeftColor:item.isSelected?'#f00':'#f7f7f7' }}>
                                    <TouchableHighlight style={{width:60,flexDirection:'row',justifyContent:'center'}}
                                        underlayColor='#fff'
                                        onPress={()=>{
                                             this.itemSelected(index)
                                             selectItem(item.id)
                                        }}
                                    >
                                        <Text style={[{height:70,width:30,fontSize:11,textAlignVertical:'center',textAlign:'center', backgroundColor: item.isSelected ? '#fff' : '#f7f7f7',color:item.isSelected?'#f00':'#000' }]}>{item.name}</Text>
                                    </TouchableHighlight>
                                    
                                </View>
                                <View style={{ height:1, width: 70, backgroundColor: 'white' }}></View>
                                </View>
                            )
                        })
                }
            </ScrollView>
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