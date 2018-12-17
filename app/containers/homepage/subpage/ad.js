import React, {Component} from 'react'
import {StyleSheet,Image,View,TouchableOpacity} from 'react-native'

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
                                    this.props.navigation.navigate('Product',{id:1})
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