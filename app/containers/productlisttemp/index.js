import React, { Component } from 'react'
import { View, Text, Image, Button, TextInput, FlatList, StyleSheet, TouchableOpacity, RefreshControl, ScrollView, Dimensions, Platform, NativeModules } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Header from '../../components/header'
import Foot from '../../components/foot'
import GoTop from '../../components/gotop'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ProductSmall from '../../components/product/small'
import ProductMiddle from '../../components/product/middle'
import Loading from '../../components/loading'
import ProductDao from '../../dao/product'

export class ProductDrawer extends Component {
    constructor(props) {
        super(props)
        // let { height } = Dimensions.get('window');
        // let { StatusBarManager } = NativeModules;
        // const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
        // this.screenHeight = height - StatusBarHeight - 41;
    }
    componentDidMount() {
        this.didFocusHandler = this.props.navigation.addListener(
            'didFocus',
            (a) => {
                // this.props.navigation.state.routes[0].params.title = (a) => {
                //     this.myTest(a)
                // }
                alert('didFocus123!')
            }
        )
    }
    componentWillUnmount() {
        this.didFocusHandler.remove()
    }    
    render() {
        return (
            <View>
                {/* <ScrollView style={{ height: this.screenHeight }}>
                    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
                    </SafeAreaView>
                </ScrollView>
                <View style={{ flexDirection: 'row', borderTopColor: '#f3f3f3', borderTopWidth: 1, height: 40 }}>
                    <Text style={{ width: '45%', height: 40, fontSize: 16, textAlign: 'center', lineHeight: 40 }}>重置</Text>
                    <TouchableOpacity
                        style={{ width: '55%', height: 40 }}
                        onPress={() => {
                            this.props.navigation.closeDrawer()
                            // this.props.navigation.state.routes[0].params.list(this.state.searchData)
                        }}
                    >
                        <Text style={{ height: 40, backgroundColor: 'red', fontSize: 16, textAlign: 'center', textAlignVertical: 'center' }}>确定</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }
}

export default class ProductListTemp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <Header isShowBack={true} navigation={this.props.navigation} /> */}
                <Button
                    title='设置Companys123'
                    onPress={() => {
                        //alert(JSON.stringify(this.props.navigation))
                       // this.props.navigation.state.params.showCompanys('这是新的title')
                        alert('ok')
                    }}
                />
            </View>
        )
    }
}