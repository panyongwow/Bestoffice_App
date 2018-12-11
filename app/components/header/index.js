import React, {Component} from 'react'
import {View,Image,Text,StyleSheet} from 'react-native'
import Search from  '../search'

export default class Header extends Component{

    render(){
        // const navigation=this.props.navigation
        return(
            <View style={styles.container}>
                <View style={styles.container_top}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{height:30}}>
                            <Image  tintColor='white' style={styles.image} source={require('../../res/images/logo_2.png')} />
                        </View>
                        <View style={styles.logo}>
                            <Text style={styles.tip}>百思通办公</Text>
                            <Text style={styles.tip}>400-158-1588</Text>
                        </View>
                    </View>                
                    <Search />
                </View>
            </View>                     
        )
    }
}
const styles=StyleSheet.create({
    container:{
        height:45,
        backgroundColor:'red',
        justifyContent:'space-around',
    },
    container_top:{
         flexDirection:'row',
         justifyContent:'space-between',
    },
    image:{
        width:30,
        height:30,
        marginLeft:0
    },
    tip:{
        color:'white',
        fontSize:10,
        fontWeight:'bold' 
    },
    logo:{
        marginTop:4,
        height:30, 
        color:'yellow',
        flexDirection:'column', 
        alignItems:'center'
    }
})