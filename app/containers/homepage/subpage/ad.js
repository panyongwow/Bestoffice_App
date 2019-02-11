import React, {Component} from 'react'
import {StyleSheet,Image,View,TouchableOpacity} from 'react-native'
import Tools,{adType} from '../../../util/tools'

import Swiper from 'react-native-swiper'

export default class AD extends Component{
    render(){
        return(
            <Swiper
                style={styles.swiper}
                horizontal={true}
                autoplay={true}
                height={50}
                autoplayTimeout={4} 
                paginationStyle={{bottom: 10}}
                showsButtons={false}
                showsPagination={false}                
            >
                {
                    this.props.data.map((item,index)=>{
                        return(
                            <TouchableOpacity 
                                key={index} 
                                onPress={()=>{
                                    let adData=Tools.analyzeURL(item.picurl)
                                    if(adData.type===adType.product){
                                        //该广告的链接指向商品单页
                                        this.props.navigation.navigate('Product',{id:adData.productID})
                                    }
                                    else if(adData.type===adType.productList){
                                        //该广告的链接指向商品列表页
                                        this.props.navigation.navigate('ProductList',{id:adData.listgoodsID,companyID:adData.companyID})
                                    }
                                    else{
                                        alert(JSON.stringify(adData))
                                    }
                                    
                                }}
                            >
                                <Image resizeMode="contain" style={styles.img} source={{uri:item.picname}} />
                            </TouchableOpacity>
                        )
                    })
                }
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    swiper: {
       // backgroundColor:'red',
        height:165,
    },
    img: {
        height: 162,
    }
});