import React, {Component} from 'react'
import {StyleSheet,Image,View,TouchableOpacity} from 'react-native'

//副广告区
export default class SubAD extends Component{
    render(){
        return(
             <View style={styles.container}>
                 <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Image resizeMode="stretch" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170109113320_8574.jpg'}} />
                    </TouchableOpacity> 
                    <TouchableOpacity> 
                        <Image resizeMode="stretch" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170109113553_3661.jpg'}} />
                    </TouchableOpacity>       
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Image resizeMode="stretch" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170831145811_2506.jpg'}} />
                    </TouchableOpacity> 
                    <TouchableOpacity> 
                        <Image resizeMode="stretch" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170824163810_2986.jpg'}} />
                    </TouchableOpacity>       
                 </View>
                 <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity>
                        <Image resizeMode="stretch" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170824163333_9028.jpg'}} />
                    </TouchableOpacity> 
                    <TouchableOpacity> 
                        <Image resizeMode="stretch" style={styles.img} source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20170109114600_4688.jpg'}} />
                    </TouchableOpacity>       
                 </View>                 
             </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red',
        // padding:5,
        margin:5
    },
    img:{
        height:55,        
        width:172,
        margin:1,
        borderWidth:1,
        borderColor:'#b0c4de'
    }
})