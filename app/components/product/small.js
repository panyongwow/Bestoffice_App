import React, { PureComponent, Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class ProductSmall extends PureComponent {
    render() {
        let item = this.props.item
        return (
            <View style={{ backgroundColor: 'white' }}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Product', { id: item.id })
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
                            <View style={styles.tagborder }>
                                {item.isbargainprice ? <Tag title='特价' /> : null}
                                {item.isdirect ? <Tag title='直送' /> : null}
                                {item.ownstore ? <Tag title={item.ownstore} /> : null}
                                {item.giftnum > 0 ? <Tag title='好礼' /> : null}
                            </View>
                            <View style={styles.border} >
                                <View style={styles.priceborder} >
                                    <Text style={styles.pricepre}>&yen;</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                    <Text style={styles.measurement}>/{item.measurement}</Text>
                                    {/* {
                                        item.isbargainprice
                                            ? <Text style={styles.marketprice}>&yen;{item.marketprice}</Text>
                                            : null
                                    } */}
                                </View>
                                <TouchableOpacity style={styles.shoppingcart}>
                                    <AntDesign name="shoppingcart" style={{ color: 'white' }} size={15} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export class Tag extends Component {
    render() {
        return (
            <View>
                <Text style={styles.tag}>{this.props.title}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    touchable: {
        height: 116,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageborder: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    image: {
        height: 96,
        width: 114
    },
    productborder: {
        flex: 2,
        flexDirection: 'column',
        height: 110,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between'
    },
    productname: {
        fontSize: 14,
        width: '100%'
    },
    tagborder:{
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        marginTop: 5 
    },
    border:{
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    priceborder: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 10
    },
    pricepre: {
        color: 'red',
        fontSize: 13,
        paddingBottom: 2
    },
    price: {
        color: 'red',
        fontSize: 20,
        marginLeft: 3
    },
    marketprice: {
        fontSize: 12,
        paddingBottom: 2,
        marginLeft: 6,
        textDecorationLine: 'line-through',
        color: '#bebebe'
    },
    measurement:{
        fontSize: 12, 
        color: '#bebebe', 
        paddingBottom: 2 
    },
    tag: {
        fontSize: 10,
        color: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 9,
        height: 16,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight: 3
    },
    shoppingcart:{
        marginTop:12, 
        width: 24, 
        height: 24, 
        borderRadius: 12, 
        backgroundColor: '#2aadfb',
         flexDirection: 'row', 
         justifyContent: 'center', 
         alignItems: 'center' 
    }
})