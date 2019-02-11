import React, {Component} from 'react'
import {StyleSheet,Image,View,TouchableOpacity} from 'react-native'
import Tools,{adType} from '../../../util/tools'

//副广告区
export default class SubAD extends Component{
    constructor(){
        super()
    }

    render(){
        const navigation=this.props.navigation
        return(

             <View style={styles.container}>
             {
                this.props.data.map((item,index)=>{
                    return(
                        <ViceAD item={item} key={index} navigation={navigation} />
                    )
                })
             }
             </View>
        )
    }
}

class ViceAD extends Component{
    render(){
        const item=this.props.item
        return(
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={()=>{
                    let adData=Tools.analyzeURL(item.picurl)
                    if(adData.type===adType.product){
                        //该广告的链接指向商品单页
                        this.props.navigation.navigate('Product',{id:adData.productID})
                    }
                    else if(adData.type===adType.productList){
                        //该广告的链接指向商品列表页
                        this.props.navigation.navigate('ProductList',{id:adData.listgoodsID,companyID:adData.companyID})
                    }
                    else{
                        alert(JSON.stringify(adData))
                    }                    
                }}
            >
                <Image resizeMode="stretch" style={styles.img} source={{uri:item.picname}} />
            </TouchableOpacity> 
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
        margin:5,
        // borderColor:'red',
        // borderWidth:1
    },
    img:{
        height:55,        
        width:172,
        margin:1,
        borderWidth:1,
        borderColor:'#b0c4de'
    }
})