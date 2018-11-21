import React, {Component} from 'react'
import {StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//一级目录分类显示
export default class ListgoodsTop extends Component{
    render(){
        const navigation=this.props.navigation
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={[styles.item,{justifyContent:'center',felx:1,backgroundColor:'#f0f0f0',marginTop:0,marginBottom:0,marginLeft:0,padding:8,borderBottomRightRadius:300,borderTopRightRadius:300}]}
                    onPress={()=>{
                        navigation.navigate('ListGoods',{id:6})
                    }}
                >
                    <View style={styles.iconborder}>
                        <FontAwesome5 name='comment' size={20} color='white' />
                    </View>
                    <Text style={styles.iconfont}>资讯</Text>
                </TouchableOpacity>              
                <View style={{flex:10}}>
                <View style={styles.sub_container}>
                    <TouchableOpacity 
                        style={styles.item}
                        onPress={()=>{
                            navigation.navigate('ListGoods',{id:1})
                        }}
                    >
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='file' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公用纸</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.item}
                        onPress={()=>{
                            navigation.navigate('ListGoods',{id:2})
                        }}
                    >
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='cut' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公文具</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.item}
                        onPress={()=>{
                            navigation.navigate('ListGoods',{id:3})
                        }}
                    >
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='marker' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公耗材</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.item}
                        onPress={()=>{
                            navigation.navigate('ListGoods',{id:4})
                        }}
                    >
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='box' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公家具</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sub_container}>
                <TouchableOpacity 
                        style={styles.item}
                        onPress={()=>{
                            navigation.navigate('ListGoods',{id:5})
                        }}
                    >
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='fax' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公设备</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.item}
                        onPress={()=>{
                            navigation.navigate('ListGoods',{id:6})
                        }}
                    >
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='keyboard' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>电脑配件</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.item}
                        onPress={()=>{
                            navigation.navigate('ListGoods',{id:7})
                        }}
                    >
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='headphones' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>数码设备</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.item}
                        onPress={()=>{
                            navigation.navigate('ListGoods',{id:8})
                        }}
                    >
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='university' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>日常生活</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <TouchableOpacity 
                    style={[styles.item,{justifyContent:'center',felx:1,backgroundColor:'#f0f0f0',marginTop:0,marginBottom:0,marginRight:0,padding:8,borderBottomLeftRadius:300,borderTopLeftRadius:300}]}
                    onPress={()=>{
                        navigation.navigate('TopList')
                    }}
                >
                    <View style={styles.iconborder}>
                        <FontAwesome5 name='list' size={20} color='white' />
                    </View>
                    <Text style={styles.iconfont}>热销榜</Text>
                </TouchableOpacity>    
            </View>
        ) 
    }
}

const styles=StyleSheet.create({
    container:{
        //flex:1,
        backgroundColor:'#ffffff',
        height:130,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    sub_container:{
        flexDirection:'row',
        justifyContent:'center',
        // borderWidth:1,
        // borderColor:'red'
    },
    item:{
        flexDirection:'column',
        alignItems:'center',
        margin:8
    },
    iconborder:{
        width:34,
        height:34,
        borderRadius:17,
        backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    iconfont:{
        fontSize:12
    }
})