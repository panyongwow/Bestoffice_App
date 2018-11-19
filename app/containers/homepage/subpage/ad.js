import React, {Component} from 'react'
import {StyleSheet,Image,View} from 'react-native'
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
                
                {/* <Image source={require('../../../res/images/ic_star.png')} style={styles.img}/>
                <Image source={require('../../../res/images/ic_favorite.png')} style={styles.img}/> */}
                <Image resizeMode="contain" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20150908142808_3704.jpg'}} />
                <Image resizeMode="contain" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170810125519_6228.jpg'}} />
                <Image resizeMode="contain" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170109125650_1879.jpg'}} />
                <Image resizeMode="contain" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170509102920_0312.jpg'}} />
                <Image resizeMode="contain" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170109175416_8006.jpg'}} />
                <Image resizeMode="contain" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170810120512_6588.jpg'}} />
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    swiper: {
        backgroundColor:'red',
        height:165,
    },
    img: {
        // width: 300,
        height: 162,
    }
});