import React, { Component } from 'react'
import { View, Text, TouchableOpacity,Alert, TextInput, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Toast,{DURATION} from 'react-native-easy-toast'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: '',
            password: ''
        }
    }
    login(){
        if(this.state.account.length===0 || this.state.password.length===0){
            this.refs.toast.show('请输入登录账号和密码！')
            return false
        }
        
        //Alert.alert(JSON.stringify(this.state))
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.back}>
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
                        onChangeText={(text)=>{
                            this.setState({password:text})
                        }}
                        placeholder='请输入登录密码'
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity 
                    style={[styles.itemcontainer, styles.login]}
                    onPress={()=>{
                        this.login()
                    }}
                >
                    <Text style={styles.logintext}>登 录</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.register}
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
        backgroundColor: '#fff', height: 80, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#f3f3f3', borderBottomWidth: 30
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