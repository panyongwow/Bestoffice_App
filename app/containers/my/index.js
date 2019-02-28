import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/userAction'
import * as shoppingcartActions from '../../actions/shoppingcartAction'
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustDao from '../../dao/cust'

import Foot from '../../components/foot'

class My extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cust: null
        }
    }

    componentDidMount() {
        this.didFoucsHandler = this.props.navigation.addListener(
            'didFocus',
            () => {
                CustDao.get()
                    .then(result => {
                        this.setState({
                            cust: result
                        })
                    })
                    .catch(error => { alert(error) })
            }
        )
    }
    componentWillUnMount() {
        this.didFoucsHandler.remove()
    }
    //退出登录
    logout = () => {
        CustDao.clear()
        this.setState({
            cust: null
        })
        this.props.userActions.logout_done()
        this.props.shoppingcartActions.shoppingcart_clear()
    }
    render() {
        const { navigation } = this.props
        return (
            <ScrollView style={styles.container}>
                <View style={styles.user}>
                    <Image tintColor='red' style={styles.image} source={require('../../res/images/logo_2.png')} />
                    {
                        this.state.cust
                            ? <Text style={{ fontSize: 18 }}>{this.state.cust.account}</Text>
                            : <TouchableOpacity
                                style={styles.logincontainer}
                                onPress={() => {
                                    this.props.navigation.navigate('Login')
                                }}
                            >
                                <Text style={{ fontSize: 18 }}>登录/注册 </Text>
                                <AntDesign name='right' size={18} color='gray' />
                            </TouchableOpacity>
                    }
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.itemcontainer}
                        onPress={() => {
                            alert(JSON.stringify(this.state.cust.account))
                        }}
                    >
                        <View style={styles.itemleft}>
                            <AntDesign name='user' size={18} />
                            <Text style={styles.itemtext}>我的信息</Text>
                        </View>
                        <AntDesign name='right' size={16} color='gray' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemcontainer}>
                        <View style={styles.itemleft}>
                            <AntDesign name='profile' size={18} />
                            <Text style={styles.itemtext}>我的订单</Text>
                        </View>
                        <AntDesign name='right' size={16} color='gray' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemcontainer}>
                        <View style={styles.itemleft}>
                            <AntDesign name='gift' size={18} />
                            <Text style={styles.itemtext}>我的积分</Text>
                        </View>
                        <AntDesign name='right' size={16} color='gray' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemcontainer}>
                        <View style={styles.itemleft}>
                            <AntDesign name='folder1' size={18} />
                            <Text style={styles.itemtext}>我的收藏</Text>
                        </View>
                        <AntDesign name='right' size={16} color='gray' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemcontainer}>
                        <View style={styles.itemleft}>
                            <AntDesign name='home' size={18} />
                            <Text style={styles.itemtext}>地址列表</Text>
                        </View>
                        <AntDesign name='right' size={16} color='gray' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemcontainer}>
                        <View style={styles.itemleft}>
                            <AntDesign name='wallet' size={18} />
                            <Text style={styles.itemtext}>发票信息</Text>
                        </View>
                        <AntDesign name='right' size={16} color='gray' />
                    </TouchableOpacity>
                    {
                        this.state.cust
                            ? <TouchableOpacity
                                style={[styles.itemcontainer, styles.logout]}
                                onPress={this.logout}
                            >
                                <Text style={styles.logouttext}>退出登录</Text>
                            </TouchableOpacity>
                            : null
                    }

                </View>

                {/* <Button
                    title='返回'
                    onPress={() => {
                        navigation.goBack()
                    }}
                /> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff'
    },
    user: {
        flexDirection: 'row', alignItems: 'center', height: 100, backgroundColor: '#fff', borderBottomWidth: 5, borderBottomColor: '#f3f3f3'
    },
    logincontainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    itemcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 55,
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f3f3f3'
    },
    itemleft: {
        flexDirection: 'row', alignItems: 'center'
    },
    itemtext: {
        fontSize: 14, marginLeft: 5
    },
    image: {
        width: 40,
        height: 40,
        marginLeft: 20,
        marginRight: 20
    },
    logout: {
        backgroundColor: 'red', margin: 20, justifyContent: 'center', borderRadius: 10
    },
    logouttext:{
        color: '#fff', fontSize: 16, fontWeight: 'bold'
    }
})

function mapStateToProps(state){
    return{}
}

function mapDispatchToProps(dispatch){
    return{
        userActions:bindActionCreators(userActions,dispatch),
        shoppingcartActions:bindActionCreators(shoppingcartActions,dispatch)
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(My)