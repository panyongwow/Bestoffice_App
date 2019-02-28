import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, NativeModules } from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ProductDao from '../../dao/product'
import CustDao from '../../dao/cust'
import Loading from '../../components/loading'
import SwiperComponent from '../../components/productDetail/swiper'
import NameDesc from '../../components/productDetail/namedesc'
import Gift from '../../components/productDetail/gift'
import Property from '../../components/productDetail/property'
import BuyNum from '../../components/productDetail/buynum'
import Desc from '../../components/productDetail/desc'
import * as shoppingcartActions from '../../actions/shoppingcartAction'

import TabBarShoppingCart from '../../components/tabBarShoppingCart'

class Product extends Component {
    constructor(props) {
        super(props)
        let { height } = Dimensions.get('window');
        let { StatusBarManager } = NativeModules;
        const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
        this.screenHeight = height - StatusBarHeight - 51;
        this.state = {
            buyNum: 1,
            data: [],
            id:0
        }
    }
    componentDidMount() {
        let {id}=this.props.navigation.state.params
        this.productGet(id)
    }

    changeBuyNum(num) {
        this.setState({
            buyNum: num
        })
    }
    //获得商品详情
    productGet(id) {
        CustDao.get()
            .then(cust=>{
                return cust?cust.custid:0
            })
            .then(custid=>ProductDao.get(id,custid))
            .then(result => {
                this.setState({
                    data: result
                })
            })
            .catch(error => {
                alert(error)
            })            
    }
    shoppingcartAdd=()=>{
        let p = this.state.data
        this.props.shoppingcartActions.shoppingcart_increase({
            id:p.id,
            name:p.name,
            measurement:p.measurement,
            cartnum:this.state.buyNum
        })
    }        
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                {
                    this.state.data.count > 0
                        ? <ScrollView style={{ height: this.screenHeight }}>
                            <SwiperComponent data={this.state.data} style={styles.viewborder} />
                            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                <NameDesc data={this.state.data} style={styles.viewborder} />
                                {
                                    this.state.data.giftnum > 0
                                        ? <Gift data={this.state.data} style={styles.viewborder} />
                                        : null
                                }
                                <Property data={this.state.data} style={styles.viewborder} />
                                {
                                    this.state.data.isgift
                                        ? null
                                        : <BuyNum
                                            buyNum={this.state.buyNum}
                                            data={this.state.data}
                                            changeBuyNum={(num) => {
                                                this.changeBuyNum(num)
                                            }}
                                            style={styles.viewborder}
                                        />
                                }

                            </View>
                            {
                                this.state.data.description.length > 0 || this.state.data.imgdes.length > 0 || this.state.data.detaildes.length > 0 || this.state.data.featuredes.length > 0
                                    ? <Desc data={this.state.data} style={styles.viewborder} />
                                    : null
                            }
                        </ScrollView>
                        : <Loading />
                }
                {
                    this.state.data.count > 0
                        ? <View style={{ flexDirection: 'row', borderTopColor: '#f3f3f3', borderTopWidth: 1 }}>
                            <TouchableOpacity
                                style={{ width: '30%', height: 50, flexDirection: 'row', justifyContent: 'center' }}
                                onPress={() => {
                                }}
                            >
                                <ShoppingCart cartnum={this.props.shoppingcartInfo.cartnum} />
                                {/* <TabBarShoppingCart /> */}
                                {/* <Text style={{ fontSize: 10 }}>购物车</Text> */}

                            </TouchableOpacity>
                            {
                                this.state.data.isgift
                                    ? <Text style={[styles.button, {flex:1, backgroundColor: '#fe9402' }]}>此商品作为赠品不能单独购买</Text>
                                    : <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <TouchableOpacity
                                            style={{ flex: 1, height: 50 }}
                                            onPress={this.shoppingcartAdd}
                                        >
                                            <Text style={[styles.button, { backgroundColor: '#fe9402' }]}>加入购物车</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={{ flex: 1, height: 50 }}
                                            onPress={() => {
                                                
                                            }}
                                        >
                                            <Text style={[styles.button, { backgroundColor: 'red' }]}>立即购买</Text>
                                        </TouchableOpacity>
                                    </View>

                            }
                        </View>
                        : null
                }

            </View>
        )
    }
}

// 左下方购物车
class ShoppingCart extends Component {
    render() {
        let {cartnum}=this.props
        return (
            <View style={styles.shoppingcart_container}>
                {
                    cartnum>0
                    ?<Text style={styles.shoppingcart_num}>{cartnum}</Text>
                    :null
                }
                
                <AntDesign name="shoppingcart" color='red' size={28} />
                <Text style={{ fontSize: 10 }}>购物车</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewborder: {
        paddingTop: 10, paddingBottom: 10, borderBottomColor: '#f3f3f3', borderBottomWidth: 2
    },
    button: {
        fontSize: 16, textAlign: 'center', lineHeight: 50, color: '#fff'
    },
    tag: {
        fontSize: 12, color: 'red', borderColor: 'red', borderWidth: 1, borderRadius: 10, height: 20, paddingLeft: 5, paddingRight: 5, textAlign: 'center', lineHeight: 20, marginRight: 5
    },
    shoppingcart_container:{
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 50, width: 70
    },
    shoppingcart_num:{
        width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'red', color: 'red', position: 'absolute', fontSize: 10, textAlign: 'center', lineHeight: 20, top: 4, left: 50 
    }
})

function mapStateToProps(state){
    return {
        shoppingcartInfo:state.shoppingcartInfo
    }
}
function mapDispatchToProps(dispatch){
    return{
        shoppingcartActions:bindActionCreators(shoppingcartActions,dispatch)
    }
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(Product)