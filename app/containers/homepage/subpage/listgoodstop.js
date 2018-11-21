import React, {Component} from 'react'
import {StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

//一级目录分类显示
export default class ListgoodsTop extends Component{
    render(){
        const navigation=this.props.navigation
        return(
            <View style={styles.container}>
                {/* 左侧咨询按钮 */}
                <TouchableOpacity 
                    activeOpacity={0.5}                
                    style={[styles.item,styles.news_item]}
                    onPress={()=>{
                        navigation.navigate('News')
                    }}
                >
                    <View style={styles.iconborder}>
                        <FontAwesome5 name='comment' size={20} color='white' />
                    </View>
                    <Text style={styles.iconfont}>资讯</Text>
                </TouchableOpacity>      
                
                {/* 商品八大类目录 */}
                <View>
                    <View style={styles.sub_container}>
                        <ListgoodsItem id={1} iconName='file' name='办公用纸' navigation={navigation} />
                        <ListgoodsItem id={2} iconName='cut' name='办公文具' navigation={navigation} />
                        <ListgoodsItem id={3} iconName='marker' name='办公耗材' navigation={navigation} />
                        <ListgoodsItem id={4} iconName='box' name='办公家具' navigation={navigation} />                                                
                    </View>
                    <View style={styles.sub_container}>
                        <ListgoodsItem id={5} iconName='fax' name='办公设备' navigation={navigation} />
                        <ListgoodsItem id={6} iconName='keyboard' name='电脑配件' navigation={navigation} />
                        <ListgoodsItem id={7} iconName='headphones' name='数码设备' navigation={navigation} />
                        <ListgoodsItem id={8} iconName='university' name='日常生活' navigation={navigation} />                      
                    </View>
                </View>
                
                {/* 右侧热销榜按钮 */}
                <TouchableOpacity 
                    activeOpacity={0.5}
                    style={[styles.item,styles.toplist_item]}
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

class ListgoodsItem extends Component{
    render(){
        return(
            <TouchableOpacity 
                activeOpacity={0.5}
                style={styles.item}
                onPress={()=>{
                    this.props.navigation.navigate('Listgoods',{id:this.props.id})
                }}
            >
                <View style={styles.iconborder}>
                    <FontAwesome5 name={this.props.iconName} size={20} color='white' />
                </View>
                <Text style={styles.iconfont}>{this.props.name}</Text>
            </TouchableOpacity>            
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
    },
    item:{
        flexDirection:'column',
        alignItems:'center',
        margin:8
    },
    news_item:{
        justifyContent:'center',
        backgroundColor:'#f0f0f0',
        marginTop:0,
        marginBottom:0,
        marginLeft:0,
        padding:8,
        borderBottomRightRadius:300,
        borderTopRightRadius:300
    },
    toplist_item:{
        justifyContent:'center',
        backgroundColor:'#f0f0f0',
        marginTop:0,
        marginBottom:0,
        marginRight:0,
        padding:8,
        borderBottomLeftRadius:300,
        borderTopLeftRadius:300
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