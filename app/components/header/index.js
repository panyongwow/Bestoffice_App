import React, {Component} from 'react'
import {View,Image,Text,Button,StyleSheet,TouchableOpacity,TouchableHighlight} from 'react-native'
import Search from  '../search'

export default class Header extends Component{

    render(){
        const navigation=this.props.navigation
        return(
            <View style={styles.container}>
                <View style={styles.container_top}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{height:30}}>
                            <Image  tintColor='white' style={styles.image} source={require('../../res/images/logo_2.png')} />
                        </View>
                        <View style={{marginTop:4,height:30, color:'yellow',flexDirection:'column', alignItems:'center'}}>
                            <Text style={styles.tip}>百思通办公</Text>
                            <Text style={styles.tip}>400-158-1588</Text>
                        </View>
                    </View>                
                    <Search />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <Text style={[styles.tag,{fontWeight:'bold'}]}>热搜:</Text>
                    {/* <Text>len:{this.props.tag.length}</Text> */}
                    {
                        this.props.tag.map((tag,i)=>{
                            return( 
                                <Tag key={i} tag={tag} navigation={navigation} />
                            )
                        })
                    }
                    {/* <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('ListGoods',{id:123})
                        }}
                    >
                        <Text style={styles.tag}>档案夹</Text>
                    </TouchableOpacity>
              */}
                </View>
            </View>                     
        )
    }
}

class Tag extends Component{
    render(){
        let tag=this.props.tag
        return(
            <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate('ListGoods',{id:tag.id})
                }}
            >
                <Text style={styles.tag}>{tag.name}</Text>
            </TouchableOpacity>             
        )
    }
}

const styles=StyleSheet.create({
    container:{
        height:65,
        // flexDirection:'column',
         justifyContent:'space-around'
        //  alignItems:'center'
    },
    container_top:{
        flexDirection:'row',
        justifyContent:'space-between',
        // alignItems:'center'
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
    tag:{
        color:'white',
        fontSize:12,
        // fontWeight:'bold',
        // height:10,
        // padding:1,
        // borderRadius:2,
        // backgroundColor:'#ff0011' 
    }
})