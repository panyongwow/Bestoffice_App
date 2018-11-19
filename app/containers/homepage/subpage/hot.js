import React, {Component} from 'react'
import {StyleSheet,Image,View,Text} from 'react-native'
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
                    <View>
                        <Image style={styles.image} resizeMode="stretch" source={{uri:"http://www.bestoffice.cn:8806/product/25/320/42741d0e6233801ef63213bb4ae2818e_s.jpg"}} />
                        <Text style={{backgroundColor:'gray', width:150,textAlign:'left',fontSize:13,textAlign:'justify'}}>晨光 0.5创意按动中性笔GP-1008(黑色）</Text>
                        <View style={{flexDirection:'row',margin:2,alignItems:'flex-end'}}>
                            <Text style={{color:'red',fontSize:16,fontWeight:'bold',marginRight:2}}>¥</Text>
                            <Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>2.2</Text>
                        </View>
                    </View>
                    <View>
                        <Image style={styles.image} resizeMode="stretch" source={{uri:"http://www.bestoffice.cn:8806/product/84/11655/f49bf7ef5581c33b4fc5f39edc3af9b9_s.jpg"}} />
                        <Text style={{backgroundColor:'gray', width:150,textAlign:'left',fontSize:13,textAlign:'justify'}}>UPM奥友80G A4 高白复印纸</Text>
                        <View style={{flexDirection:'row',margin:2,alignItems:'flex-end'}}>
                            <Text style={{color:'red',fontSize:16,fontWeight:'bold',marginRight:2}}>¥</Text>
                            <Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>30.3</Text>
                        </View>
                    </View>                    
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <View>
                        <Image style={styles.image} resizeMode="stretch" source={{uri:"http://www.bestoffice.cn:8806/product/25/320/42741d0e6233801ef63213bb4ae2818e_s.jpg"}} />
                    </View>
                    <View>
                        <Image style={styles.image} resizeMode="stretch" source={{uri:"http://www.bestoffice.cn:8806/product/84/11655/f49bf7ef5581c33b4fc5f39edc3af9b9_s.jpg"}} />
                    </View>                    
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
    image:{
        height:150,
        width:150,
        borderRadius:2,
        // borderColor:'black',
        // borderWidth:1,
        margin:3,
        
    }
})