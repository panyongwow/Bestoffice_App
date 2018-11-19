import React, {Component} from 'react'
import {StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//热卖商品
export default class Hot extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{margin:4,flexDirection:'row',alignItems:'baseline',justifyContent:'flex-start'}}>
                    <FontAwesome5 name='hotjar' color='red' size={20} />
                    <Text style={styles.title}>热卖商品</Text>  
                </View> 
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <TouchableOpacity style={styles.item}>
                        <Image style={styles.image} resizeMode="stretch" source={{uri:"http://www.bestoffice.cn:8806/product/25/320/42741d0e6233801ef63213bb4ae2818e_s.jpg"}} />
                        <Text style={{width:150,textAlign:'left',fontSize:13,textAlign:'justify'}}>晨光 0.5创意按动中性笔GP-1008(黑色）</Text>
                        <View style={{flexDirection:'row',margin:2,alignItems:'flex-end'}}>
                            <Text style={{color:'red',fontSize:16,fontWeight:'bold',marginRight:2}}>¥</Text>
                            <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>2.2</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Image style={styles.image} resizeMode="stretch" source={{uri:"http://www.bestoffice.cn:8806/product/84/11655/f49bf7ef5581c33b4fc5f39edc3af9b9_s.jpg"}} />
                        <Text style={{width:150,textAlign:'left',fontSize:13,textAlign:'justify'}}>UPM奥友80G A4 高白复印纸</Text>
                        <View style={{flexDirection:'row',margin:2,alignItems:'flex-end'}}>
                            <Text style={{color:'red',fontSize:16,fontWeight:'bold',marginRight:2}}>¥</Text>
                            <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>30.3</Text>
                        </View>
                    </TouchableOpacity>                    
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity style={styles.item}>
                        <Image style={styles.image} resizeMode="stretch" source={{uri:"http://www.bestoffice.cn:8806/product/84/26495/6807cd57611330f363e8d959f6f611e4_s.jpg"}} />
                        <Text style={{width:150,textAlign:'left',fontSize:13,textAlign:'justify'}}>优仕 natural A4 70G 复印纸</Text>
                        <View style={{flexDirection:'row',margin:2,alignItems:'flex-end'}}>
                            <Text style={{color:'red',fontSize:16,fontWeight:'bold',marginRight:2}}>¥</Text>
                            <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>22.0</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Image style={styles.image} resizeMode="stretch"  source={{uri:"http://www.bestoffice.cn:8806/product/127/25772/d25ce46604deabaef85a4278c7bdc553_s.jpg"}} />
                        <Text style={{width:150,textAlign:'left',fontSize:13,textAlign:'justify'}} numberOfLines={2}>马来西亚进口咖啡 CEPHEI奢啡奢斐3合1速溶白咖啡 特浓咖啡 800克</Text>
                        <View style={{flexDirection:'row',margin:2,alignItems:'flex-end'}}>
                            <Text style={{color:'red',fontSize:16,fontWeight:'bold',marginRight:2}}>¥</Text>
                            <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>38.8</Text>
                        </View>
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
        height:600,
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    title:{
        fontFamily:'黑体',
        fontWeight:'bold',
        marginLeft:4
    },
    item:{
        margin:5
    },
    image:{
        height:150,
        width:150,
        borderRadius:2,
        // borderColor:'black',
        // borderWidth:1,
        //margin:5,
        
    }
})