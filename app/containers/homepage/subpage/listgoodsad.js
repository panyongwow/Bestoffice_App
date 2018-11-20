import React, {Component} from 'React'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'

export default class ListgoodsAD extends Component{
    render(){
        return (
            <View>
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image style={styles.titleimage}
                        source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20150512185659_2440.jpg'}} 
                    />
                </TouchableOpacity>
                {/* <View style={styles.tags}>
                    <Text style={styles.tag}>收银纸</Text>
                    <Text style={styles.tag}>A4复印纸80g</Text>
                    <Text style={styles.tag}>热敏传真纸</Text>    
                    <Text style={styles.tag}>241mm-80列</Text> 
                    <Text style={styles.tag}>A4复印纸70g</Text>                      
                    <Text style={styles.tag}>A3复印纸80g</Text>                    
                    <Text style={[styles.tag,{fontWeight:'bold'}]}>更多>></Text>                                                  
                </View> */}
                <View style={styles.itemborder}>
                    <TouchableOpacity>
                        <Image resizeMode='stretch' style={styles.image}
                            source={{uri:'http://www.bestoffice.cn:8806/homepage/20170109133759_8001.jpg'}} 
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image resizeMode='stretch' style={styles.image}
                            source={{uri:'http://www.bestoffice.cn:8806/homepage/20180416134041_1110.jpg'}} 
                        />                
                    </TouchableOpacity>
                </View>
                <View style={styles.products}>
                    <TouchableOpacity style={styles.pitem}>
                        <Image style={styles.pimage} resizeMode='stretch' source={{uri:'http://www.bestoffice.cn:8806/product/115/7679/e4d34b8afcac1d75fdb3071611e3692c_s.jpg'}} />
                        <Text style={styles.pname} numberOfLines={2}>杰丽斯无锁雨伞架J-12</Text>
                        <View style={styles.priceborder}>
                            <Text style={styles.pricepre}>¥</Text>
                            <Text style={styles.price}>139.0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pitem}>
                        <Image style={styles.pimage} resizeMode='stretch' source={{uri:'http://www.bestoffice.cn:8806/product/84/24538/c51c4a3283129784b7166a4075d7da87_s.jpg'}} />
                        <Text style={styles.pname} numberOfLines={2}>杰丽斯无锁雨伞架J-12杰丽斯无锁雨伞架J-12</Text>
                        <View style={styles.priceborder}>
                            <Text style={styles.pricepre}>¥</Text>
                            <Text style={styles.price}>139.0</Text>
                        </View>
                    </TouchableOpacity>             
                    <TouchableOpacity style={styles.pitem}>
                        <Image style={styles.pimage} resizeMode='stretch' source={{uri:'http://www.bestoffice.cn:8806/product/115/7679/e4d34b8afcac1d75fdb3071611e3692c_s.jpg'}} />
                        <Text style={styles.pname} numberOfLines={2}>杰丽斯无锁雨伞架J-12</Text>
                        <View style={styles.priceborder}>
                            <Text style={styles.pricepre}>¥</Text>
                            <Text style={styles.price}>139.0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pitem}>
                        <Image style={styles.pimage} resizeMode='stretch' source={{uri:'http://www.bestoffice.cn:8806/product/115/7679/e4d34b8afcac1d75fdb3071611e3692c_s.jpg'}} />
                        <Text style={styles.pname} numberOfLines={2}>杰丽斯无锁雨伞架J-12</Text>
                        <View style={styles.priceborder}>
                            <Text style={styles.pricepre}>¥</Text>
                            <Text style={styles.price}>139.0</Text>
                        </View>
                    </TouchableOpacity>     
                    <TouchableOpacity style={styles.pitem}>
                        <Image style={styles.pimage} resizeMode='stretch' source={{uri:'http://www.bestoffice.cn:8806/product/115/7679/e4d34b8afcac1d75fdb3071611e3692c_s.jpg'}} />
                        <Text style={styles.pname} numberOfLines={2}>杰丽斯无锁雨伞架J-12</Text>
                        <View style={styles.priceborder}>
                            <Text style={styles.pricepre}>¥</Text>
                            <Text style={styles.price}>139.0</Text>
                        </View>
                    </TouchableOpacity>      
                    <View style={{padding:5,width:150,height:208,backgroundColor:'white', borderWidth:0,borderRadius:5,margin:5}}>
                        <Text style={styles.tip}>热搜：</Text> 
                        <View style={styles.tags}>
                            <TouchableOpacity><Text style={styles.tag}>收银纸</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.tag}>鼠标</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.tag}>A4复印纸80g</Text></TouchableOpacity>
                            <TouchableOpacity><Text style={styles.tag}>热敏传真纸</Text></TouchableOpacity>     
                            <TouchableOpacity><Text style={styles.tag}>241mm-80列</Text></TouchableOpacity> 

                            {/* <Text style={styles.tag}>A4复印纸70g</Text>                      
                            <Text style={styles.tag}>A3复印纸80g</Text>                     */}
                        </View>
                        <Text style={styles.tip}>更多>></Text>   
                    </View>                                            
                </View>
            </View>
            <View style={styles.container}>
                 <TouchableOpacity>
                    <Image style={styles.titleimage}
                        source={{uri:'http://www.bestoffice.com.cn:8806/homepage/20150512185829_4050.jpg'}} 
                    />
                </TouchableOpacity>           
            </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        borderColor:'#b0c4de',
        borderRadius:5,
        borderWidth:1,
        margin:6,
        height:860,
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    titleimage:{
        height:33,
        borderRadius:3,
        borderWidth:1,
        borderColor:'#b0c4de',
        margin:-1
    },
    tip:{
        fontSize:13,
        marginRight:1,
        marginTop:1,
        marginBottom:4,
        color:'red',
        fontWeight:'bold'
    },
    tags:{
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap'
    },
    tag:{
        fontSize:13,
        marginRight:4,
        marginBottom:4,
        color:'red',
        borderWidth:1,
        borderColor:'#b0c4de',
        padding:3,
        borderRadius:5
    },
    itemborder:{
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        marginTop:5
    },    
    image:{
        height:150,
        width:150,
        borderRadius:3,
        margin:5
    },
    products:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },

    pitem:{
        margin:5
    },
    pimage:{
        height:150,
        width:150,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
    },    
    pname:{
        width:150,
        textAlign:'left',
        fontSize:13,
        backgroundColor:'#f8f8f8',
        borderTopWidth:1,
        // borderTopColor:'#b0c4de',
        borderTopColor:'#f0f0f0',
        padding:2,
        height:38        
    },
    priceborder:{
        flexDirection:'row',
        //margin:0,
        alignItems:'flex-end',
        backgroundColor:'#f8f8f8',
        paddingLeft:8,
        borderBottomLeftRadius:3,
        borderBottomRightRadius:3,
        height:20
    },
    pricepre:{
        color:'red',
        fontSize:14,
        //fontWeight:'bold',
        marginRight:3
    },
    price:{
        color:'red',
        fontSize:15,
        //fontWeight:'bold'
    }
})