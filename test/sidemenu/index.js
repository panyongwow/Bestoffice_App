import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import SideMenu from 'react-native-side-menu'

class Menu extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <Text style={{ marginTop: 22 }}>aaa1</Text>
                <Button
                    title='open12'
                    onPress={() => {
                        this.props.menuOpen()
                    }}
                />
            </View>
        )
    }
}
export default class SideMenuTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }
    menuOpen() {
        this.setState({
            isOpen: false
        })
        //alert('ok123')
    }
    render() {
        // const menu = <View style={{ flex: 1, backgroundColor: 'yellow' }}><Text style={{ marginTop: 22 }}>aaa</Text></View>
        const { width, heihgt } = Dimensions.get('window')
        const offset=50
        const slidwidth=width-offset
        const menu = <Menu
            menuOpen={() => {
                this.menuOpen()
            }}
        />
        return (
            <View style={{ flex: 1 }}>
                <SideMenu
                    menu={menu}                    //抽屉内的组件
                    isOpen={this.state.isOpen}     //抽屉打开/关闭
                    hiddenMenuOffset={offset}
                    edgeHitWidth={0}
                    openMenuOffset={width}
                >
                    <View style={{ flex: 1,width:slidwidth, backgroundColor: 'gray',borderWidth:0,borderColor:'red' }}>
                        <Button
                            title='close1'
                            onPress={() => {
                                this.setState({
                                    isOpen:true
                                })
                            }}
                        />
                    </View>
                </SideMenu>

            </View>
        )
    }
}