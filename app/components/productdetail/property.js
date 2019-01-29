import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

//商品单页-参数区域
export default class Property extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let p = this.props.data
        return (
                  p.attribute_detail.length > 0
                    ? <TouchableOpacity style={[this.props.style, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>参数</Text>
                            <Text style={styles.title}>编码:{p.innercode}&nbsp;&nbsp;&nbsp;</Text>
                            <Text style={styles.title}>品牌:{p.company}&nbsp;&nbsp;&nbsp;</Text>
                            <Text style={{ fontSize: 12 }}>单位:{p.measurement}</Text>
                        </View>
                        <Text style={{ textAlignVertical: 'center', fontSize: 12 }}>更多&gt;</Text>
                    </TouchableOpacity>
                    : <View style={[this.props.style, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>参数</Text>
                            <Text style={styles.title}>编码:{p.innercode}&nbsp;&nbsp;&nbsp;</Text>
                            <Text style={styles.title}>品牌:{p.company}&nbsp;&nbsp;&nbsp;</Text>
                            <Text style={{ fontSize: 12 }}>单位:{p.measurement}</Text>
                        </View>
                    </View>

        )
    }
}
const styles=StyleSheet.create({
    title:{
        fontSize: 12, marginRight: 10
    }
})
