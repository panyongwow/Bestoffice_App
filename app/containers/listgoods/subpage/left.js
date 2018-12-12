import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet,Text } from 'react-native'

export default class Left extends Component{
    constructor(props) {
        super(props)

    }
    renderItem({ item }) {
        return (
            <Item item={item} />
        )
    }
    renderSpearator() {
        return (
            <View style={{ height: 1, width: 70, backgroundColor: 'white' }}></View>
        )
    }
    render() {
        let data = [
            { id: 1, name: '办公用纸', key: '1',selected:false },
            { id: 2, name: '办公文具', key: '2',selected:false },
            { id: 3, name: '办公耗材', key: '3' ,selected:false},
            { id: 4, name: '办公家具', key: '4',selected:false },
            { id: 5, name: '办公设备', key: '5' ,selected:false},
            { id: 6, name: '电脑配件', key: '6',selected:false },
            { id: 7, name: '数码设备', key: '7' ,selected:false},
            { id: 8, name: '日常生活', key: '8',selected:false }
        ]
        return (
            <FlatList
                style={styles.flatlist}
                data={data}
                // renderItem={({item}) =>
                //     <Text style={styles.leftitem}>{item.name}</Text>
                // }
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderSpearator}
            />
        )
    }
}

class Item extends Component{
    constructor(props){
        super(props)
        this.state={
            isSelected:false
        }
    }
    render(){
        let item=this.props.item
        return(
            <TouchableOpacity selected={false} onPress={() => {
                // this.setState({
                //     isSelected:!this.state.isSelected
                // })
                item.selected=true
            }}>
                <Text style={[styles.leftitem, { backgroundColor: item.selected ? 'white' : 'red' }]}>{item.name}</Text>
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
        // backgroundColor: '#f7f7f7',
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