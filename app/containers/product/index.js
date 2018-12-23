import React,{Component} from 'react'
import {View,Text,Image,Button,WebView} from 'react-native'

export default class Product extends Component{
    render(){
        const {navigation}=this.props
        const {state}=navigation
        const {params}=state        
        return(
            <View style={{flex:1}}>
                <WebView style={{height:600}} 
                originWhitelist={['*']}
                source={{html: '<div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <div> </div> <p style="color:#222222;text-align:center;">  <span style="color:#444444;"><strong><span style="font-size:0.18rem">价格适宜,可有效降低您的办公成本;</span></strong></span><span style="color:#444444;"><strong><span style="font-size:0.18rem;"><br /> <strong>采用全自动化裁切工艺，良好的品质管理、质量稳定性好；<br /> 白度符合国际标准环保白度；<br /> 挺度好，不卡纸，经静电处理，运行性好；<br /> 适用于复印机、镭射传真机、喷墨机、印刷机等使用</strong></span></strong></span>  </p>'}} />
                
                {/* <View style={{height:300}}>
                    <Text>这是商品页面12</Text>
                    <Text>获得的参数：{params.id}</Text>
                </View>
                <Button
                    title='返回'
                    onPress={()=>{
                        navigation.goBack()
                    }}
                />                 */}
            </View>
        )
    }
}