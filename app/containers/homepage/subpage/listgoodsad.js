import React, {Component} from 'React'
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import ProductMiddle from '../../../components/product/middle'
import Tools,{adType} from '../../../util/tools'

export default class ListgoodsAD extends Component{
    adClick(URL){
        let adData=Tools.analyzeURL(URL)
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
    }
    render(){
        return (
            <View>
                {
                    this.props.data.map((item,index)=>{
                        return(
                            <View key={index} style={styles.container}>
                                {/* 顶部广告图 */}
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    onPress={()=>{
                                        this.props.navigation.navigate('Listgoods',{id:item.id})
                                    }}
                                >
                                    <Image style={styles.titleimage} source={{uri:item.image_top.picname}} />
                                </TouchableOpacity>
                            
                                <View style={styles.itemborder}>
                                    {/* 左侧推荐商品图 */}
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        onPress={()=>{
                                            this.adClick(item.image_left.picurl)
                                        }}
                                    >
                                        <Image resizeMode='stretch' style={styles.image} source={{uri:item.image_left.picname}}/>
                                    </TouchableOpacity>
                                    {/* 右侧推荐商品图 */}
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        onPress={()=>{
                                            this.adClick(item.image_right.picurl)  
                                        }}                                    
                                    >
                                        <Image resizeMode='stretch' style={styles.image} source={{uri:item.image_right.picname}}/>                
                                    </TouchableOpacity>                                    
                                </View>    
                                {/* 推荐商品 */}
                                <View style={styles.products}>
                                    {
                                        item.products.map((product,i)=>{
                                            return(
                                                <ProductMiddle item={product} key={i} navigation={this.props.navigation} />
                                            )
                                        })
                                    }
                                    {/* 推荐分类 */}
                                    <View style={styles.tagsborder}>
                                        <Text style={styles.tip}>热搜：</Text> 
                                        <View style={styles.tags}>
                                            {
                                                item.tags.map((tag,index)=>{
                                                    return(
                                                        <TouchableOpacity 
                                                            activeOpacity={0.5} 
                                                            key={index}
                                                            onPress={()=>{
                                                                this.props.navigation.navigate('ProductList',{id:tag.tagid})
                                                            }}
                                                        >
                                                            <Text style={styles.tag}>{tag.name}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </View>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={()=>{
                                                this.props.navigation.navigate('Listgoods',{id:item.id})
                                            }}
                                        >
                                            <Text style={styles.tip}>更多>></Text>   
                                        </TouchableOpacity>
                                    </View>    
                                </View>                        
                            </View>                            
                        )
                    })
                }
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
        height:930,
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        //backgroundColor:'red'
    },
    titleimage:{
        height:33,
        borderRadius:3,
        borderWidth:1,
        borderColor:'#b0c4de',
        margin:-1
    },
    tip:{
        fontSize:13,
        marginRight:1,
        marginTop:1,
        marginBottom:4,
        color:'red',
        fontWeight:'bold'
    },
    tagsborder:{
        padding:5,
        width:150,
        height:230,
        backgroundColor:'white', 
        borderWidth:0,
        borderRadius:5,
        margin:5
    },
    tags:{
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap'
    },
    tag:{
        fontSize:13,
        marginRight:4,
        marginBottom:4,
        color:'red',
        borderWidth:1,
        borderColor:'#b0c4de',
        padding:3,
        borderRadius:5
    },
    itemborder:{
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        marginTop:5
    },    
    image:{
        height:150,
        width:150,
        borderRadius:3,
        margin:5,
        //borderWidth:1,
        //borderColor:'white'
    },
    products:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center'
    },
})