import React, { Component } from 'react'
import { View, Text, TextInput, Image, Button, WebView, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Platform, NativeModules } from 'react-native'
import AutoHeightWebView from 'react-native-webview-autoheight'
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Tools from '../../util/tools'

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
                                {/* <Image resizeMode="contain" style={{ height: 300, width: 300 }} source={{ uri: 'http://img.bestoffice.cn/product/103/25682/7902099e947c519208f61e3f9bbc02a5_l.jpg' }} /> */}
                                <Image resizeMode="contain" style={{ height: 300, width: 300 }} source={{ uri: 'http://img.bestoffice.cn/product/88/29467/20180629112028_2760_l.jpg' }} />

                            </View>
                        </Swiper>
                    </View>
                    <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                        <View style={styles.viewborder}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'red', fontSize: 18 }}>
                                    &yen;&nbsp;
                                    <Text style={{ color: 'red', fontSize: 22, fontWeight: 'bold' }}>179</Text>
                                </Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                        style={{ marginRight: 10 }}
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
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>富士施乐（Fuji Xerox） CP105B 标准容量黑色墨粉 CT202545</Text>
                            <Text style={{ fontSize: 12}}>适用机型 CP105b；CM215fw；CM215b；CM215f；CM205b；CM205f；CP215；CP215w</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={styles.tag}>特价</Text>
                                <Text style={styles.tag}>协议价</Text>
                                <Text style={styles.tag}>厂家直送</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={[styles.viewborder, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}
                            onPress={() => {
                                alert('赠品！')
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>促销</Text>
                                <Text style={styles.tag}>赠品</Text>
                                <Text style={{ fontSize: 12 }}>&nbsp;购买该商品有<Text style={{ fontSize: 13, fontWeight: 'bold' }}>1</Text>个赠品</Text>
                            </View>
                            <Text style={{ textAlignVertical: 'center', fontSize: 12 }}>详情&gt;</Text>
                        </TouchableOpacity>
                        <View style={[styles.viewborder, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>参数</Text>
                                <Text style={{ fontSize: 12, marginRight: 10 }}>编码:1030025682&nbsp;&nbsp;&nbsp;</Text>
                                <Text style={{ fontSize: 12, marginRight: 10 }}>品牌:3M&nbsp;&nbsp;&nbsp;</Text>
                                <Text style={{ fontSize: 12 }}>单位:个</Text>
                            </View>
                            <Text style={{ textAlignVertical: 'center', fontSize: 12 }}>更多&gt;</Text>
                        </View>
                        <TouchableOpacity style={[styles.viewborder, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50 }]}
                            onPress={() => {
                                alert('已选1件！')
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>已选</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>1个</Text>
                            </View>
                            <Text style={{ textAlignVertical: 'center', fontSize: 12 }}>更改&gt;</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewborder}>
                            {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */}
                                <Text style={{ fontSize: 13, color: '#adadad', marginLeft: 10 }}>商品介绍</Text>
                            {/* </View> */}
                            <AutoHeightWebView
                                originWhitelist={['*']}
                                // source={{ html: '<div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <p style="color:#222222;text-align:center;">  <span style="color:#444444;"><strong><span style="font-size:0.18rem">价格适宜,可有效降低您的办公成本;</span></strong></span><span style="color:#444444;"><strong><span style="font-size:0.18rem;"><br /> <strong>采用全自动化裁切工艺，良好的品质管理、质量稳定性好；<br /> 白度符合国际标准环保白度；<br /> 挺度好，不卡纸，经静电处理，运行性好；<br /> 适用于复印机、镭射传真机、喷墨机、印刷机等使用</strong></span></strong></span>  </p>' }}
                                source={{html:'<div style="font-size:0.8rem"><p>  功能特点：设计新颖、外观精巧、刀锋锐安全 </p></div>'}}
                            />
                            <AutoHeightWebView
                                originWhitelist={['*']}
                                //source={{html: Tools.imgHTMLAddWidth('<img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/25224/30/2405/306629/5c1c7abcE20119d2c/fb55f6107a23c920.jpg" align="absmiddle" />')}}

                                source={{html:Tools.imgHTMLAddWidth('<div style="font-size:0.8rem><p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/25224/30/2405/306629/5c1c7abcE20119d2c/fb55f6107a23c920.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/24030/18/2483/132267/5c1c7abcE6d90720b/8ca7a2a054c43cdc.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/29095/19/2399/186720/5c1c7abcEef845f14/9e772372b41f6878.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/20851/33/2417/177570/5c1c7abcE5ce1ee3f/2d0a311c05e4c055.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/28725/18/2371/186295/5c1c7abcEf44330f7/7c77f10e245e43ba.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/26621/9/2438/200861/5c1c7abcEf980b06a/2887575669250aaf.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/14789/33/2419/263276/5c1c7abcE090de2f1/3e29ca4fd7171697.jpg" align="absmiddle" /> </p></div>')}}
                            />    
                            {/* <AutoHeightWebView
                                originWhitelist={['*']}
                                source={{html:'<div style="font-size:0.8rem"><table>  <tbody>   <tr>    <td class="de-feature">     型号    </td>    <td class="de-value">     B22AA3s    </td>    <td class="de-feature">     产品规格    </td>    <td class="de-value">     10卷/提，10提/箱，245段/卷,3层    </td>    <td class="de-feature">     纸巾尺寸（cm）    </td>    <td class="de-value">     11.0 X 10.0    </td>   </tr>   <tr>    <td class="de-feature">     保质期    </td>    <td class="de-value">     3年    </td>    <td class="de-feature">     材质    </td>    <td class="de-value">     100% 原木浆    </td>    <td class="de-feature">     香型    </td>    <td class="de-value">     无香    </td>   </tr>   <tr>    <td class="de-feature">     纸品等级    </td>    <td class="de-value">     合格品    </td>    <td class="de-feature">     加工定制    </td>    <td class="de-value">     是    </td>    <td class="de-feature">     货号    </td>    <td class="de-value">     B22AA3s    </td>   </tr>   <tr>    <td class="de-feature">     层数    </td>    <td class="de-value">     3层    </td>    <td class="de-feature">     是否含香味    </td>    <td class="de-value">     否    </td>    <td class="de-feature">     片数    </td>    <td class="de-value">     10    </td>   </tr>  </tbody> </table> <br /></div>'}}
                            />                                                     */}
                        </View>                    
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
    },
    tag: {
        fontSize: 12, color: 'red', borderColor: 'red', borderWidth: 1, borderRadius: 10, height: 20, paddingLeft: 5, paddingRight: 5, textAlign: 'center', lineHeight: 20, marginRight: 5
    }

})