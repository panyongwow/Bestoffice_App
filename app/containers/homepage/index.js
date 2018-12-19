import React, {Component} from 'react'
import {View,Text,Button,StyleSheet,ScrollView,Image,TouchableOpacity,RefreshControl} from 'react-native'
// import Header from '../../components/header'
import Header from '../../components/header'
import Foot from '../../components/foot'
import HotTag from '../hottag'
import AD from './subpage/ad'
import ListgoodsTop from './subpage/listgoodstop'
import ListgoodsAD from './subpage/listgoodsad'
import SubAD from './subpage/subad'
import Hot from './subpage/hot'
import HomePageDao from '../../dao/homepage'
import Loading from './../../components/loading'

export default class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={
            Tag:[],
            AD:[],
            ViceAD:[],
            ProductHot:[],
            ProductBargain:[],
            ProductNew:[],
            ListgoodsAD:[],
            IsShowHot:true,
            IsShowListgoodsAD:false,
        }
    }
    componentDidMount(){
        this.loadData()
    }
    //获取首页相关数据
    loadData(){
        HomePageDao.get()
            .then(result=>{
                this.setState({
                    Tag:result.tag,
                    AD:result.ad,
                    ViceAD:result.vice_ad,
                    ProductHot:result.product_hot,
                    ProductBargain:result.product_bargain,
                    ProductNew:result.product_new,
                    ListgoodsAD:result.listgoods_ad
                })
            })
    }
    render(){
        const {navigation}=this.props
        return(
            <View  style={styles.container}>
                <View>
                    <Header navigation={this.props.navigation} />
                </View> 
                <HotTag navigation={this.props.navigation} />
                <ScrollView
                    onMomentumScrollEnd={(e)=>{
                        let offsetY=e.nativeEvent.contentOffset.y
                        let contentSizeHeight=e.nativeEvent.contentSize.height
                        let scrollHeight=e.nativeEvent.layoutMeasurement.height
                        if(offsetY+scrollHeight>=contentSizeHeight-5){
                            if(!this.state.IsShowHot){
                                this.setState({
                                    IsShowHot:true
                                })                        
                            }else{
                                if(!this.state.IsShowListgoodsAD){
                                    this.setState({
                                        IsShowListgoodsAD:true
                                    })
                                }
                            }    
                        }
                    }}
                    
                >
                    <ListgoodsTop navigation={this.props.navigation} />
                    <View style={styles.ad}>
                        <AD data={this.state.AD}  navigation={this.props.navigation}  />
                    </View>
                    <SubAD data={this.state.ViceAD}  navigation={this.props.navigation}  />
                    {
                        this.state.IsShowHot
                        ?<Hot  
                            ProductHot={this.state.ProductHot}  
                            ProductBargain={this.state.ProductBargain}
                            ProductNew={this.state.ProductNew}
                            navigation={this.props.navigation} 
                        />
                        :<Loading />  
                    }
                    {
                        this.state.IsShowListgoodsAD
                        ?<ListgoodsAD  data={this.state.ListgoodsAD}  navigation={this.props.navigation} />
                        : this.state.IsShowHot ? <Loading />:null  
                    }
                    
                    {
                        this.state.IsShowListgoodsAD
                        ?<Foot />
                        :null
                    }



                    {/* <View style={{height:200}}><Text>{JSON.stringify(this.state.Tag)}</Text></View>
                    <View style={{height:200}}><Text>{JSON.stringify(this.state.ProductHot)}</Text></View>                     */}
                    {/* <Button
                        title='获取tag数据'
                        onPress={()=>{
                            this.loadTag()
                        }}
                    />   
                    <Button
                        title='获取AD数据'
                        onPress={()=>{
                            this.loadAD()
                        }}
                    />                                       */}
                    {/* <Button
                        title='go to 我的'
                        onPress={()=>{
                            navigation.navigate('My')
                        }}
                    />
                    <Button
                        title='go to 分类'
                        onPress={()=>{
                            navigation.navigate('ListGoods')
                        }}
                    />                      
                    <Button
                        title='go to 购物车'
                        onPress={()=>{
                            navigation.navigate('ShoppingCart')
                        }}
                    />    */}
                </ScrollView>      
            </View>               
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    ad:{
        height:162
    },
    iconborder:{
        width:34,
        height:34,
        borderRadius:17,
        backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})