import React, {Component} from 'react'
import {View,TextInput,Text,StyleSheet} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Search extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    <AntDesign name='search1' size={16} color='#00f5ff'/>
                </Text>
                <TextInput
                    style={[styles.textinput,{width:this.props.width?this.props.width:200}]} 
                    placeholder='办公用品全网最低价' 
                >
                </TextInput>
            </View>                     
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        height:30,
        width:25,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        backgroundColor:'#fff',
        opacity:0.9,
        paddingTop:7,
        paddingLeft:5
    },
    textinput:{
        height:30,
        // width:200,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,
        backgroundColor:'#fff',
        opacity:0.9,
        paddingTop:0,
        paddingBottom:0,
        paddingLeft:0,
        paddingRight:10,
        marginRight:10
    }
})