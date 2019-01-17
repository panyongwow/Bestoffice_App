import React, { Component } from 'react'
import { View, Text, Image, Button, WebView, StyleSheet, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Product extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //let id=this.props.navigation.state.params.id
        let id = 25682
    }
    render() {
        return (
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ height: 300 }}>
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',borderTopColor:'#f3f3f3',borderTopWidth:2 }}>
                    {/* <View style={{color:'red'}}> */}
                    <Text style={{ color: 'red', fontSize: 20, margin: 10 }}>
                        &yen;&nbsp;
                        <Text style={{ color: 'red', fontSize: 26, fontWeight: 'bold'}}>6.41</Text>
                    </Text>

                    <View>
                        <TouchableOpacity 
                            onPress={()=>{alert('收藏')}}
                            style={{margin:10}}
                        >
                            <AntDesign name='hearto' size={18} color='red' />
                            <Text style={{ fontSize: 10, color: 'red' }}>收藏</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={{fontSize:16,fontWeight:'bold',margin:10}}>3M 思高 胶带座 进口 H-127</Text>
                </View>
                {/* <WebView style={{ height: 600 }}
                    originWhitelist={['*']}
                    source={{ html: '<div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <p style="color:#222222;text-align:center;">  <span style="color:#444444;"><strong><span style="font-size:0.18rem">价格适宜,可有效降低您的办公成本;</span></strong></span><span style="color:#444444;"><strong><span style="font-size:0.18rem;"><br /> <strong>采用全自动化裁切工艺，良好的品质管理、质量稳定性好；<br /> 白度符合国际标准环保白度；<br /> 挺度好，不卡纸，经静电处理，运行性好；<br /> 适用于复印机、镭射传真机、喷墨机、印刷机等使用</strong></span></strong></span>  </p>' }}
                /> */}
            </View>
        )
    }
}