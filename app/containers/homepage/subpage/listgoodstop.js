import React, {Component} from 'react'
import {StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//一级目录分类显示
export default class ListgoodsTop extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.sub_container}>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='file' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公用纸</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='cut' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公文具</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='marker' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公耗材</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='box' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公家具</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sub_container}>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='fax' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>办公设备</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='keyboard' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>电脑配件</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='headphones' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>数码设备</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <View style={styles.iconborder}>
                            <FontAwesome5 name='university' size={20} color='white' />
                        </View>
                        <Text style={styles.iconfont}>日常生活</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ) 
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    sub_container:{
        flexDirection:'row',
        justifyContent:'center'
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