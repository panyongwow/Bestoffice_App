import React, { Component } from 'react'
import { View, Text, TextInput, Image, Button, WebView, Modal, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, NativeModules } from 'react-native'
import AutoHeightWebView from 'react-native-webview-autoheight'
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Tools from '../../util/tools'
import ProductDao from '../../dao/product'
import Loading from '../../components/loading'
import SwiperComponent from '../../components/productdetail/swiper'
import NameDesc from '../../components/productdetail/namedesc'
import Gift from '../../components/productdetail/gift'
import Property from '../../components/productdetail/property'
import BuyNum from '../../components/productdetail/buynum'
import Desc from '../../components/productdetail/desc'

export default class Product extends Component {
    constructor(props) {
        super(props)
        let { height } = Dimensions.get('window');
        let { StatusBarManager } = NativeModules;
        const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
        this.screenHeight = height - StatusBarHeight - 51;
        this.state = {
            buyNum: 1,
            data: []
        }
    }
    componentDidMount() {
        //let id=this.props.navigation.state.params.id
        //let id =28188
        //let id=25682
        //let id=26461
        let id = 27237
        id = 2734
       // id=29823
        this.productGet(id)
    }

    changeBuyNum(num) {
        this.setState({
            buyNum: num
        })
    }
    //获得商品详情
    productGet(id) {
        ProductDao.get(id)
            .then(result => {
                this.setState({
                    data: result
                })
               // alert(JSON.stringify(result))
            })
            .catch(error => {
                alert(error)
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
                                <BuyNum data={this.state.data}  changeBuyNum={(num) => {
                                    this.changeBuyNum(num)
                                }}
                                    style={styles.viewborder}
                                />
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
                                <ShoppingCart />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ width: '35%', height: 50 }}
                                onPress={() => {
                                }}
                            >
                                <Text style={[styles.button, { backgroundColor: '#fe9402', color: '#fff' }]}>加入购物车</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{ width: '35%', height: 50 }}
                                onPress={() => {
                                    alert(this.state.buyNum)
                                }}
                            >
                                <Text style={[styles.button, { backgroundColor: 'red', color: '#fff' }]}>立即购买</Text>
                            </TouchableOpacity>
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
        return (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 50, width: 70, borderWidth: 0, borderColor: 'red' }}>
                <Text style={{ width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: 'red', color: 'red', position: 'absolute', fontSize: 10, textAlign: 'center', lineHeight: 20, top: 4, left: 50 }}>1</Text>
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
        fontSize: 16, textAlign: 'center', lineHeight: 50
    },
    tag: {
        fontSize: 12, color: 'red', borderColor: 'red', borderWidth: 1, borderRadius: 10, height: 20, paddingLeft: 5, paddingRight: 5, textAlign: 'center', lineHeight: 20, marginRight: 5
    }

})