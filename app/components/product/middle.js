import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Tag } from './small'

//商品展示(中等大小)
export default class ProductMiddle extends Component {
    render() {
        const item = this.props.item
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.item, { flexDirection: 'column', justifyContent: 'center' }]}
                onPress={() => {
                    this.props.navigation.navigate('Product', { id: item.id })
                }}
            >
                <Image style={styles.image} resizeMode='stretch' source={{ uri: item.picname }} />
                <View style={{ backgroundColor: '#f8f8f8', height: 80, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
                    <View style={styles.priceborder}>
                        <Text style={styles.pricepre}>&yen;</Text>
                        <Text style={styles.price}>{item.price.toFixed(1)}</Text>
                        <Text style={styles.marketprice}>&yen;{item.marketprice.toFixed(1)}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',flexWrap:'wrap', marginBottom: 2, marginLeft: 2 }}>
                        {item.isbargainprice ? <Tag title='特价' /> : null}
                        {item.isdirect ? <Tag title='直送' /> : null}
                        {item.ownstore ? <Tag title={item.ownstore} /> : null}
                        {item.giftnum > 0 ? <Tag title='好礼' /> : null}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        //width:'48%',
        //height:160
    },
    image: {
        height: 150,
        width: 150,
        //width:'100%',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        // backgroundColor: 'white'
    },
    name: {
        width: 150,
        textAlign: 'left',
        fontSize: 13,
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        // borderTopColor:'#b0c4de',
        borderTopColor: '#f0f0f0',
        padding: 2,
        height: 38
    },
    priceborder: {
        flexDirection: 'row',
        //margin:0,
        alignItems: 'flex-end',
        backgroundColor: '#f8f8f8',
        paddingLeft: 8,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    pricepre: {
        color: 'red',
        fontSize: 14,
        //fontWeight:'bold',
        marginRight: 3
    },
    price: {
        color: 'red',
        fontSize: 17,
        //fontWeight:'bold'
    },
    marketprice: {
        color: 'black',
        fontSize: 12,
        paddingBottom: 1,
        marginLeft: 6,
        textDecorationLine: 'line-through'
    }
})