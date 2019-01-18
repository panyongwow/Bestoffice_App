import React, { Component } from 'react'
import { View, Text, TextInput, Image, Button, WebView, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, NativeModules } from 'react-native'
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Product extends Component {
    constructor(props) {
        super(props)
        let { height } = Dimensions.get('window');
        let { StatusBarManager } = NativeModules;
        const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
        this.screenHeight = height - StatusBarHeight - 51;
    }
    componentDidMount() {
        //let id=this.props.navigation.state.params.id
        let id = 25682
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <ScrollView style={{ height: this.screenHeight }}>
                    <View style={[styles.viewborder, { height: 300 }]}>
                        <Swiper
                            style={{ backgroundColor: 'white' }}
                            horizontal={true}
                            autoplay={true}
                            autoplayTimeout={4}
                            paginationStyle={{ bottom: 10 }}
                            showsButtons={false}
                            showsPagination={true}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image resizeMode="contain" style={{ height: 300, width: 300 }} source={{ uri: 'http://img.bestoffice.cn/product/103/25682/7902099e947c519208f61e3f9bbc02a5_l.jpg' }} />

                            </View>
                            {/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Image resizeMode="contain" style={{ height: 300, width: 300 }} source={{ uri: 'http://img.bestoffice.cn/product/106/22685/3a8eb06ba771f8b0056cb46cca9a3211_l.jpg' }} />
                        </View> */}
                        </Swiper>
                    </View>
                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <View style={styles.viewborder}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'red', fontSize: 18 }}>
                                    &yen;&nbsp;
                                <Text style={{ color: 'red', fontSize: 22, fontWeight: 'bold' }}>6.41</Text>
                                </Text>

                                <View>
                                    <TouchableOpacity
                                        onPress={() => { alert('收藏') }}
                                    >
                                        <AntDesign name='hearto' size={18} color='red' />
                                        <Text style={{ fontSize: 10, color: 'red' }}>收藏</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold'}}>3M 思高 胶带座 进口 H-127</Text>
                        </View>
                        {/* <View> */}
                        
                        {/* </View> */}
                        <View style={[styles.viewborder, { flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' }]}>
                            <Text style={{ fontSize: 12}}>编码:&nbsp;1030025682</Text>
                            <Text style={{ fontSize: 12}}>品牌:&nbsp;3M</Text>
                            <Text style={{ fontSize: 12}}>单位:&nbsp;个</Text>
                        </View>
                        <View style={styles.viewborder}>
                            <Text style={{ fontSize: 12 }}>促销:</Text>
                        </View>
                        <View style={[styles.viewborder, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50 }]}>
                            <Text style={{ fontSize: 12 }}>已选:&nbsp;
                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>1件</Text>
                            </Text>
                            <Text style={{ textAlignVertical: 'center' }}>&gt;</Text>
                            {/* <AntDesign name='minuscircleo' size={18} style={{marginLeft:10}} />
                        <TextInput value='1' style={{color:'red',fontSize:20, fontWeight:'bold', borderColor:'#f3f3f3',borderWidth:0,textAlign:'center'}} />
                        <AntDesign name='pluscircleo' size={18} style={{marginLeft:0}} /> */}
                        </View>
                    </View>
                    {/* <WebView style={{ height: 600 }}
                    originWhitelist={['*']}
                    source={{ html: '<div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <p style="color:#222222;text-align:center;">  <span style="color:#444444;"><strong><span style="font-size:0.18rem">价格适宜,可有效降低您的办公成本;</span></strong></span><span style="color:#444444;"><strong><span style="font-size:0.18rem;"><br /> <strong>采用全自动化裁切工艺，良好的品质管理、质量稳定性好；<br /> 白度符合国际标准环保白度；<br /> 挺度好，不卡纸，经静电处理，运行性好；<br /> 适用于复印机、镭射传真机、喷墨机、印刷机等使用</strong></span></strong></span>  </p>' }}
                /> */}
                </ScrollView>
                <View style={{ flexDirection: 'row', borderTopColor: '#f3f3f3', borderTopWidth: 1 }}>
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
            </View>
        )
    }
}

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
    }
})