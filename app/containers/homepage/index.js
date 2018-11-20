import React, {Component} from 'react'
import {View,Text,Button,StyleSheet,ScrollView} from 'react-native'
import Header from '../../components/header'
import AD from './subpage/ad'
import ListgoodsTop from './subpage/listgoodstop'
import SubAD from './subpage/subad'
import Hot from './subpage/hot'
import HomePageDao from '../../dao/homepage'

export default class HomePage extends Component{
    constructor(props){
        super(props)
        this.state={
            Tag:[],
            AD:[],
            ViceAD:[],
            ProductHot:[]
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
                    ProductHot:result.product_hot
                })
            })
    }
    loadTag(){
        HomePageDao.get('AD')
            .then(result=>{
                this.setState({
                    Tag:result.tag
                })
            })
    }    
    render(){
        const {navigation}=this.props
        return(
            <View  style={styles.container}>
                <View style={styles.header}>
                    <Header tag={this.state.Tag} navigation={this.props.navigation} />
                </View> 
                <ScrollView>
                    <View style={{height:130}}><ListgoodsTop  navigation={this.props.navigation} /></View>
                    <View style={styles.ad}><AD data={this.state.AD} navigation={this.props.navigation} /></View>
                    {/* <View style={{height:10}}></View> */}
                    <View><SubAD data={this.state.ViceAD}  navigation={this.props.navigation}  /></View>
                    <Hot />
                    {/* <View style={{height:40}}></View> */}
                    {/* <Text>主页</Text> */}
                    {/* <View style={{height:300}}>
                    <Text>这是Homepage！</Text>
                    </View> */}
                    <View style={{height:200}}><Text>{JSON.stringify(this.state.Tag)}</Text></View>
                    <View style={{height:200}}><Text>{JSON.stringify(this.state.ProductHot)}</Text></View>                    
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
                    <Button
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
                    />   
                </ScrollView>      
            </View>               
        )
    }
}

const styles=StyleSheet.create({
    container:{
        //height:8000,
        // backgroundColor:'red' 
        flex:1
    },
    ad:{
        height:162
    },
    header:{
        // top:0,
        // left:0,
        // right:0,
        // position:'absolute'
        backgroundColor:'red'
    }
})