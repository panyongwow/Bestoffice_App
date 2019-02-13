import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button,ActivityIndicator, TextInput, StyleSheet } from 'react-native'
import { MD5KEY } from '../../config/config'
import CustDao from '../../dao/cust'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Toast, { DURATION } from 'react-native-easy-toast'
import MD5 from 'react-native-md5'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: 'panyongwow@163.com',
            password: '12345678',
            isLoging:false
        }
    }
    login=()=> {
        if (this.state.account.length === 0 || this.state.password.length === 0) {
            this.refs.toast.show('请输入登录账号和密码！')
            return false
        }
        if(this.state.isLoging){
            return false
        }
        this.setState({
            isLoging:true
        })
        let md5_password = MD5.hex_md5(this.state.password + MD5KEY)
        CustDao.login(this.state.account, md5_password)
            .then(result => {
                if (result.status === 'ERROR') {   //登录失败
                    this.refs.toast.show(result.errordetail)
                }
                else {
                    //登录成功
                    CustDao.set({...result,
                        account:this.state.account,
                        password:md5_password,
                    })
                    this.props.navigation.goBack()   //返回
                }
                this.setState({
                    isLoging:false
                })
            })
            .catch(error => {
                alert(error)
                this.setState({
                    isLoging:false
                })
            })

        //alert(MD5.hex_md5(this.state.password + MD5KEY))
    };
    register=()=>{
        CustDao.get()
            .then(result=>{alert(JSON.stringify(result))})
            .catch(error=>{alert(error)})
    }
    render() {
        return (
            <View>
                <TouchableOpacity 
                    style={styles.back}
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}
                >
                    <AntDesign name='left' size={20} />
                </TouchableOpacity>
                <View style={styles.header}>
                    <Text style={{ fontSize: 20 }}>登 录</Text>
                </View>
               
                <View style={styles.itemcontainer}>
                    <Text>账号：</Text>
                    <TextInput
                        style={styles.textinput}
                        value={this.state.account}
                        onChangeText={(text) => {
                            this.setState({ account: text })
                        }}
                        placeholder='请输入登录账号'
                    />
                </View>
                <View style={styles.itemcontainer}>
                    <Text>密码：</Text>
                    <TextInput
                        style={styles.textinput}
                        value={this.state.password}
                        onChangeText={(text) => {
                            this.setState({ password: text })
                        }}
                        placeholder='请输入登录密码'
                        secureTextEntry={true}
                    />
                </View>
                {
                    this.state.isLoging
                    ?<ActivityIndicator color='red' style={{height:20,marginTop:10}}/>
                    :<View style={{height:30}}/>
                }                
                <TouchableOpacity
                    style={[styles.itemcontainer, styles.login]}
                    onPress={this.login}
                >
                    <Text style={styles.logintext}>
                    {
                        this.state.isLoging?'登录中...':'登 录'
                    }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.register}
                    onPress={this.register}
                >
                    <Text style={styles.registertext}>新用户注册</Text>
                </TouchableOpacity>
                
                <Toast
                    ref='toast'
                    position='top'
                    positionValue={100}
                    fadeInDuration={500}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    back: {
        position: 'absolute', top: 15, left: 10, zIndex: 9999
    },
    header: {
        backgroundColor: '#fff', height: 70, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#f3f3f3', borderBottomWidth: 20
    },
    itemcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55,
        backgroundColor: '#fff',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#f3f3f3'
    },
    textinput: {
        padding: 0, flex: 1
    },
    login: {
        backgroundColor: 'red', margin: 20, justifyContent: 'center', borderRadius: 10
    },
    logintext: {
        color: '#fff', fontSize: 16, fontWeight: 'bold'
    },
    register: {
        flexDirection: 'row', justifyContent: 'center'
    },
    registertext: {
        color: 'red'
    }
})