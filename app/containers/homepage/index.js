import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, RefreshControl, StatusBar } from 'react-native'
import Toast from 'react-native-easy-toast'
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
import CustDao from '../../dao/cust'
import Loading from './../../components/loading'
import * as userActions from '../../actions/userAction'
import { BSTURL } from '../../config/config'
import Storage from '../../storage'
import shoppingcartDao from '../../dao/shoppingcart'
import ShoppingcartDao from '../../dao/shoppingcart';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Tag: [],
            AD: [],
            ViceAD: [],
            ProductHot: [],
            ProductBargain: [],
            ProductNew: [],
            ListgoodsAD: [],
            IsShowHot: true,
            IsShowListgoodsAD: false,
            // isChange: '未改变'
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.userInfo.isLogin && !this.props.userInfo.isLogin) {
            //如果状态由未登录改为已登录时，重新获取首页数据，以便刷新用户的协议价格
            // this.setState({
            //     isChange: '已改变'
            // })
            HomePageDao.getWebData(nextProps.userInfo.custid)
                .then(result => {
                    Storage.save('HomePage', result.details)
                    this.setState({
                        ProductHot: result.details.product_hot,
                        ProductBargain: result.details.product_bargain,
                        ProductNew: result.details.product_new,
                        ListgoodsAD: result.details.listgoods_ad
                    })
                })
                .catch(error => { alert(error) })
        }

    }
    componentDidMount() {
        CustDao.get()
            .then(cust => {
                if (cust !== null) {
                    if (cust.custid > 0) {
                        this.props.userActions.login_done({
                            account: cust.account,
                            custid: cust.custid
                        })
                    }
                }

            })
            .catch(error => {
                alert(error)
            })
        this.loadData()
    }
    //获取首页相关数据
    loadData() {
        HomePageDao.get()
            .then(result => {
                this.setState({
                    Tag: result.tag,
                    AD: result.ad,
                    ViceAD: result.vice_ad,
                    ProductHot: result.product_hot,
                    ProductBargain: result.product_bargain,
                    ProductNew: result.product_new,
                    ListgoodsAD: result.listgoods_ad
                })
            })

    }
    addToShoppingCart = () => {
        this.refs.toast.show("加入购物车成功！")
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <StatusBar
                    //translucent={true}
                    backgroundColor='rgba(255,0,0,1)'
                    barStyle='dark-content'

                />
                {/* <Text>账号：{this.props.userInfo.account} 用户ID：{+this.props.userInfo.custid}</Text>
                <Text>改变状态：{this.state.isChange}</Text>*/}
                {/* <Button
                    title='test'
                    onPress={() => {
                        shoppingcartDao.get()
                            .then(data => {
                                alert(JSON.stringify(data))
                            })
                    }}
                />
                <Button
                    title='clear'
                    onPress={() => {
                        shoppingcartDao.clear()
                        alert('ok')
                    }}
                />
                <Button
                    title='getCustID'
                    onPress={() => {
                        // CustDao.getCustID()
                        //     .then(custid=>{
                        //         alert(custid)
                        //     })
                        ShoppingcartDao.setToWeb()
                        // .then(info=>{alert(info)})    
                    }}
                /> */}
                <View>
                    <Header navigation={this.props.navigation} />
                </View>
                <HotTag data={this.state.Tag} navigation={this.props.navigation} />
                <ScrollView
                    onMomentumScrollEnd={(e) => {
                        let offsetY = e.nativeEvent.contentOffset.y
                        let contentSizeHeight = e.nativeEvent.contentSize.height
                        let scrollHeight = e.nativeEvent.layoutMeasurement.height
                        if (offsetY + scrollHeight >= contentSizeHeight - 5) {
                            if (!this.state.IsShowHot) {
                                this.setState({
                                    IsShowHot: true
                                })
                            } else {
                                if (!this.state.IsShowListgoodsAD) {
                                    this.setState({
                                        IsShowListgoodsAD: true
                                    })
                                }
                            }
                        }
                    }}

                >
                    <ListgoodsTop navigation={this.props.navigation} />
                    <View style={styles.ad}>
                        <AD data={this.state.AD} navigation={this.props.navigation} />
                    </View>
                    <SubAD data={this.state.ViceAD} navigation={this.props.navigation} />
                    {
                        this.state.IsShowHot
                            ? <Hot
                                ProductHot={this.state.ProductHot}
                                ProductBargain={this.state.ProductBargain}
                                ProductNew={this.state.ProductNew}
                                navigation={this.props.navigation}
                                addToShoppingCart={this.addToShoppingCart}
                            />
                            : <Loading />
                    }
                    {
                        this.state.IsShowListgoodsAD
                            ? <ListgoodsAD
                                data={this.state.ListgoodsAD}
                                navigation={this.props.navigation}
                                addToShoppingCart={this.addToShoppingCart}
                            />
                            : this.state.IsShowHot ? <Loading /> : null
                    }

                    {
                        this.state.IsShowListgoodsAD
                            ? <Foot />
                            : null
                    }
                </ScrollView>
                <Toast
                    ref='toast'
                    position='bottom'
                    positionValue={150}
                    fadeInDuration={100}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ad: {
        height: 162
    },
    iconborder: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(HomePage)