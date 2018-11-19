import React, {Component} from 'react'
import {StyleSheet,Image,View,TouchableOpacity} from 'react-native'

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
                onPress={()=>{
                    this.props.navigation.navigate('Product',{id:1})
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