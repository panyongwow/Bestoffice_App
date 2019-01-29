import React, { Component } from 'react'
import { View,Text, TouchableOpacity,Image, StyleSheet, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

//商品单页-名称、价格、短描述、特价、直送、协议价区域
export default class NameDesc extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let p = this.props.data
        return (
            <View style={this.props.style}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: 'red', fontSize: 18 }}>
                        &yen;&nbsp;
                    <Text style={{ color: 'red', fontSize: 22, fontWeight: 'bold' }}>{p.price}</Text>
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ marginRight: 15}}
                            onPress={() => { alert('收藏') }}
                        >
                            <AntDesign name='hearto' size={18} color='red' />
                            <Text style={{ fontSize: 10, color: 'red' }}>收藏</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { alert('售后') }}
                        >
                            <Entypo name='tools' size={18} color='red' />
                            <Text style={{ fontSize: 10, color: 'red' }}>售后</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{p.name}</Text>
                {
                    p.simpledes.length > 0
                        ? <Text style={{ fontSize: 12 }}>{p.simpledes}</Text>
                        : null
                }
                {
                    p.isbargainprice || p.isdirect
                        ? <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            {p.isbargainprice ?<Text style={styles.tag}>特价</Text>:null}
                            <Text style={styles.tag}>协议价</Text>
                            {p.isdirect ?<Text style={styles.tag}>厂家直送</Text>:null}
                        </View>
                        : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tag: {
        fontSize: 12, color: 'red', borderColor: 'red', borderWidth: 1, borderRadius: 10, height: 20, paddingLeft: 5, paddingRight: 5, textAlign: 'center', lineHeight: 20, marginRight: 5
    }
})