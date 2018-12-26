import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import SideMenu from 'react-native-side-menu'

export default class SideMenuTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }    
    render() {
        const menu = <View style={{flex:1,backgroundColor:'yellow'}}><Text style={{ marginTop: 22 }}>aaa</Text></View>
        return (
            <View style={{flex:1}}>
            <SideMenu
                menu={menu}                    //抽屉内的组件
                isOpen={this.state.isOpen}     //抽屉打开/关闭
                style={{height:300,backgroundColor:'gray'}}
            >
                {/* <View style={{flex:1,backgroundColor:'gray'}}>
                    <Text style={{color:'red'}} onPress={() => { this.setState({ isOpen: true }) }}>
                        Open Draw!
         </Text>
                    <Text style={{color:'blue'}}>
                        To get started, edit App.js
         </Text>
                </View> */}
                <Button title='open' onPress={()=>{
    this.setState({isOpen:true})
}}></Button>
            </SideMenu>

            </View>
        )
    }
}