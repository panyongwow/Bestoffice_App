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
            buyNum: 2,
            buyNumModalVisible: false,
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
        //id=29823
        this.productGet(id)
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
    //获得商品详情
    productGet(id) {
        ProductDao.get(id)
            .then(result => {
                this.setState({
                    data: result
                })
                //alert(JSON.stringify(result))
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
                            <BuyNumModal
                                showModal={this.state.buyNumModalVisible}
                                buyNum={this.state.buyNum}
                                changeBuyNum={(num) => { this.changeBuyNum(num) }}
                            />
                            <SwiperComponent data={this.state.data} style={styles.viewborder} />
                            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                                <NameDesc data={this.state.data} style={styles.viewborder} />
                                {
                                    this.state.data.giftnum > 0
                                        ? <Gift data={this.state.data} style={styles.viewborder} />
                                        : null
                                }
                                <Property data={this.state.data} style={styles.viewborder} />
                                <BuyNum style={styles.viewborder} />
                            </View>
                            {
                                this.state.data.description.length > 0 || this.state.data.imgdes.length > 0 || this.state.data.detaildes.length > 0 || this.state.data.featuredes.length > 0
                                    ? <Desc data={this.state.data} style={styles.viewborder} />
                                    : null
                            }
                        </ScrollView>
                        : <Loading />
                }
                {/* {
                    this.state.data.count > 0
                        ? 
                        : null
                } */}
                {/* 
                    <View style={styles.viewborder}>
                        <Text style={{ fontSize: 13, color: '#adadad', marginLeft: 10 }}>商品介绍</Text>
                        <AutoHeightWebView
                            originWhitelist={['*']}
                            source={{ html: '<div style="font-size:0.8rem"><p>  功能特点：设计新颖、外观精巧、刀锋锐安全 </p></div>' }}
                        />
                        <AutoHeightWebView
                            originWhitelist={['*']}
                            source={{ html: Tools.imgHTMLAddWidth('<div style="font-size:0.8rem><p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/25224/30/2405/306629/5c1c7abcE20119d2c/fb55f6107a23c920.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/24030/18/2483/132267/5c1c7abcE6d90720b/8ca7a2a054c43cdc.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/29095/19/2399/186720/5c1c7abcEef845f14/9e772372b41f6878.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/20851/33/2417/177570/5c1c7abcE5ce1ee3f/2d0a311c05e4c055.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/28725/18/2371/186295/5c1c7abcEf44330f7/7c77f10e245e43ba.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/26621/9/2438/200861/5c1c7abcEf980b06a/2887575669250aaf.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/14789/33/2419/263276/5c1c7abcE090de2f1/3e29ca4fd7171697.jpg" align="absmiddle" /> </p></div>') }}
                        />
                    </View> */}
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

//购买处理弹出框
class BuyNumModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            buyNum: props.buyNum
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.showModal) {
            this.setModalVisible(true)
        }
    }
    setModalVisible = (visible) => {
        // if (!visible) {
        //     this.props.changeBuyNum(this.state.buyNum)
        // }
        this.setState({ modalVisible: visible });

    }
    render() {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {

                }}
            >
                <View style={{ flex: 1, flexDirection: 'column-reverse', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <View style={{ backgroundColor: '#fff', height: 200 }}>
                        <Text
                            onPress={this.setModalVisible.bind(this, false)}
                            style={{ fontSize: 20, marginTop: 10 }}>
                            关闭
                        </Text>
                        <TextInput
                            style={{ height: 30, width: 100, borderColor: 'red', borderWidth: 1, padding: 5 }}
                            value={this.state.buyNum.toString()}
                            onChangeText={(text) => {
                                this.setState({
                                    buyNum: text
                                },
                                    this.props.changeBuyNum(text)
                                )
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={this.setModalVisible.bind(this, false)}
                    >
                        <View style={{ height: 300 }}></View>
                    </TouchableOpacity>
                </View>
            </Modal>
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