import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet} from 'react-native'

//商品单页-赠品区域
export default class Gift extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let p=this.props.data
        return (
            <TouchableOpacity style={[this.props.style, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}
                onPress={() => {
                    alert('赠品！')
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>促销</Text>
                    <Text style={styles.tag}>赠品</Text>
                    <Text style={{ fontSize: 12 }}>&nbsp;购买该商品有<Text style={{ fontSize: 13, fontWeight: 'bold' }}>{p.giftnum}</Text>个赠品</Text>
                </View>
                <Text style={{ textAlignVertical: 'center', fontSize: 12 }}>详情&gt;</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    tag: {
        fontSize: 12, color: 'red', borderColor: 'red', borderWidth: 1, borderRadius: 10, height: 20, paddingLeft: 5, paddingRight: 5, textAlign: 'center', lineHeight: 20, marginRight: 5
    }
})