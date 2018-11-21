import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity, StyleSheet} from 'react-native'

//商品展示(中等大小)
export default class ProductMiddle extends Component{
    render(){
        const item=this.props.item
        return(
            <TouchableOpacity 
                activeOpacity={0.5}
                style={styles.item}
                onPress={()=>{
                    this.props.navigation.navigate('Product',{id:item.id})
                }}
            >
                <Image style={styles.image} resizeMode='stretch' source={{uri:item.picname}} />
                <Text style={styles.name} numberOfLines={2}>{item.name}</Text>
                <View style={styles.priceborder}>
                    <Text style={styles.pricepre}>¥</Text>
                    <Text style={styles.price}>{item.price.toFixed(1)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles=StyleSheet.create({
    item:{
        margin:5
    },
    image:{
        height:150,
        width:150,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
    },    
    name:{
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
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
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