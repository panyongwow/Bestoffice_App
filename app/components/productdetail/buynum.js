import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

//商品单页-购买数量区域
export default class BuyNum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buyNum: 1,
            buyNumModalVisible: false
        }
    }
    showBuyNumModal() {
        this.setState({
            buyNumModalVisible: true
        })
    }
    changeBuyNum(num) {
        this.setState({
            buyNum: num
        })
    }
    render() {
        return (
            <TouchableOpacity style={[this.props.style, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50 }]}
                onPress={this.showBuyNumModal.bind(this)}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>已选</Text>
                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{this.state.buyNum}个</Text>
                </View>
                <Text style={{ textAlignVertical: 'center', fontSize: 12 }}>更改&gt;</Text>
            </TouchableOpacity>
        )
    }
}