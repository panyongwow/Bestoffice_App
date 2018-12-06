import React, {Component} from 'react'
import {StyleSheet,Image,View,Text,TouchableOpacity} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ProductMiddle from '../../../components/product/middle'

//热卖商品
export default class Hot extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        
    }
    componentDidMount(){

    }
    render(){
        //const data=this.props.data
        return(
            <View>
            <View style={styles.container}>
                <View style={styles.titleborder}>
                    <FontAwesome5 name='hotjar' color='red' size={20} />
                    <Text style={styles.title}>热卖商品</Text>  
                </View> 
                <View style={styles.itemborder}>
                    {
                        this.props.ProductHot.map((item,index)=>{
                            return(
                                <ProductMiddle item={item} key={index} navigation={this.props.navigation} />
                            )
                        })
                    }
                 </View>    
            </View> 
            <View style={styles.container}>
                 <View style={styles.titleborder}>
                    <FontAwesome5 name='download' color='red' size={20} />
                    <Text style={styles.title}>特价商品</Text>  
                </View>  
                <View style={styles.itemborder}>
                    {
                        this.props.ProductBargain.map((item,index)=>{
                            return(
                                <ProductMiddle item={item} key={index} navigation={this.props.navigation} />
                            )
                        })
                    }
                 </View>   
            </View>   
            <View style={styles.container}>                          
                <View style={styles.titleborder}>
                    <FontAwesome5 name='haykal' color='red' size={20} />
                    <Text style={styles.title}>新品上市</Text>  
                </View>  
                <View style={styles.itemborder}>
                    {
                        this.props.ProductNew.map((item,index)=>{
                            return(
                                <ProductMiddle item={item} key={index} navigation={this.props.navigation} />
                            )
                        })
                    }
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
        height:910,
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start'
    },
    title:{
        fontFamily:'黑体',
        fontWeight:'bold',
        marginLeft:4
    },
    titleborder:{
        margin:4,
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:'flex-start'
    },
    itemborder:{
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap'
    }
})