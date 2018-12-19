import React, { PureComponent, Component } from 'react'
import { View, Text, Image, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

export default class ProductSmall extends PureComponent {
    render() {
        let item = this.props.item
        return (
            <View style={{backgroundColor:'white'}}>
                <TouchableOpacity
                    onPress={() => {
                        //alert(item.id)
                    }}
                    style={styles.touchable}
                >
                    <View style={styles.imageborder}>
                        <Image style={styles.image} source={{ uri: item.picname }} />
                    </View>
                    <View style={styles.productborder}>
                        <View>
                            <Text
                                numberOfLines={2}
                                ellipsizeMode='tail'
                                style={styles.productname}
                            >
                                {item.name}
                            </Text>
                        </View>
                        <View>
                            <View style={styles.priceborder} >
                                <Text style={styles.pricepre}>&yen;</Text>
                                <Text style={styles.price}>{item.price}</Text>
                                <Text style={styles.marketprice}>&yen;{item.marketprice}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                {
                                    item.isbargainprice
                                        ? <View><Text style={styles.tag}>特价</Text></View>
                                        : null
                                }
                                {
                                    item.isdirect
                                        ? <View><Text style={styles.tag}>厂家直送</Text></View>
                                        : null
                                }
                                {
                                    item.ownstore.length>0
                                        ? <View><Text style={styles.tag}>{item.ownstore}</Text></View>
                                        : null
                                }                                
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    touchable:{
        height: 110, flex: 1, flexDirection: 'row', alignItems: 'center'
    },
    imageborder:{
        flex: 1, paddingLeft: 10, paddingRight: 10 
    },
    image:{
        height: 96, width: 114 
    },
    productborder:{
        flex: 2, flexDirection: 'column', height:110,paddingTop:10,paddingBottom:5,paddingLeft: 10, paddingRight: 10, justifyContent: 'space-between'
    },
    productname:{
        fontSize: 14, width: '100%'
    },
    priceborder: {
        flexDirection: 'row', alignItems: 'baseline', marginTop: 10
    },
    pricepre: {
        color: 'red', fontSize: 13, paddingBottom: 2
    },
    price: {
        color: 'red', fontSize: 20, marginLeft: 3
    },
    marketprice: {
        color: 'black', fontSize: 12, paddingBottom: 2, marginLeft: 6, textDecorationLine: 'line-through'
    },
    tag: {
        fontSize: 10, color: 'red', borderColor: 'red', borderWidth: 1, borderRadius: 9, height: 16, paddingLeft: 5, paddingRight: 5, textAlign: 'center', textAlignVertical: 'center', marginRight: 5
    }
})