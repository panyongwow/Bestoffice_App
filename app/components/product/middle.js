import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Tag from '../tag'
import AntDesign from 'react-native-vector-icons/AntDesign'
import * as shoppingcartActions from '../../actions/shoppingcartAction'
import shoppingcartDao from '../../dao/shoppingcart'
import userInfo from '../../reducers/userInfo';

//商品展示(中等大小)
class ProductMiddle extends Component {
    shoppingcartAdd=()=>{
        let {item}=this.props
        shoppingcartDao.add({
            id:item.id,
            name:item.name,
            measurement:item.measurement,
            num:1
        })
        this.props.shoppingcartActions.shoppingcart_increase()
    }
    render() {
        const {item} = this.props
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.item}
                onPress={() => {
                    this.props.navigation.navigate('Product', { id: item.id })
                }}
            >
                <Image style={styles.image} resizeMode='stretch' source={{ uri: item.picname }} />
                <View style={styles.border}>
                    <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
                    <View style={styles.tagborder}>
                        {item.isbargainprice ? <Tag title='特价' /> : null}
                        {
                            this.props.userInfo.isLogin && item.eprice !== item.price
                                ? <Tag title='协议价' />
                                : null
                        }
                        {item.isdirect ? <Tag title='直送' /> : null}
                        {item.ownstore ? <Tag title={item.ownstore} /> : null}
                        {item.giftnum > 0 ? <Tag title='赠品' /> : null}
                    </View>
                    <View style={{ height: 26, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.priceborder}>
                            <Text style={styles.pricepre}>&yen;</Text>
                            <Text style={styles.price}>
                                {
                                    this.props.userInfo.isLogin
                                        ? item.eprice
                                        : item.price
                                }
                            </Text>
                            <Text style={styles.measurement}>/{item.measurement}</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.shoppingcart}
                            onPress={this.shoppingcartAdd}
                        >
                            <AntDesign name="shoppingcart" style={{ color: 'white' }} size={15} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        margin: 5
    },
    image: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },
    border: {
        backgroundColor: '#f8f8f8',
        height: 80,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    name: {
        width: 150,
        textAlign: 'left',
        fontSize: 13,
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        padding: 2,
        height: 38
    },
    tagborder: {
        flexDirection: 'row',
        marginLeft: 2
    },
    priceborder: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        backgroundColor: '#f8f8f8',
        paddingLeft: 8,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    pricepre: {
        color: 'red',
        fontSize: 14,
        marginRight: 3
    },
    price: {
        color: 'red',
        fontSize: 17,
    },
    marketprice: {
        color: 'black',
        fontSize: 12,
        paddingBottom: 1,
        marginLeft: 6,
        textDecorationLine: 'line-through',
        color: '#bebebe'
    },
    measurement: {
        fontSize: 12,
        color: '#bebebe',
        paddingBottom: 2
    },
    shoppingcart: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#2aadfb',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    }
})

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        shoppingcartActions:bindActionCreators(shoppingcartActions,dispatch)  
    }
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(ProductMiddle)