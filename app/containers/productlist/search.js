import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Platform, NativeModules } from 'react-native'
import { SafeAreaView } from 'react-navigation'

export default class ProductSearch extends Component {
    constructor(props) {
        super(props)
        let { height } = Dimensions.get('window');
        let { StatusBarManager } = NativeModules;
        const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
        this.screenHeight = height - StatusBarHeight - 41;

        this.state = {
            searchData: {},
            companys: []

        }
    }
    setCompanys(data) {
        this.setState({
            companys: data
        })
    }
    componentDidMount() {
        this.didFocusHandler = this.props.navigation.addListener(
            'didFocus',
            (a) => {
                this.props.navigation.state.routes[0].params.showCompanys = (a) => {
                    this.setCompanys(a)
                }
            }
        )
    }
    componentWillUnmount() {
        this.didFocusHandler.remove()
    }

    searchDataChange(data) {
        this.setState({
            searchData: {
                ...this.state.searchData, ...data
            }
        })
    }
    componyClick(index) {    //单击了品牌
        let data = []
        let item
        let selectedID = ''
        for (let i = 0, j = this.state.companys.length; i < j; i++) {
            item = this.state.companys[i]
            if (i == index) {
                item.selected = !item.selected
            }
            data.push(item)
            if (item.selected) {
                selectedID += selectedID.length === 0 ? item.id : ',' + item.id
            }
        }
        this.setState({
            companys: data
        })
        this.searchDataChange({ company: selectedID })
    }
    render() {
        return (
            <View>
                <ScrollView style={{ height: this.screenHeight }}>
                    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
                        <View>
                            <Text style={styles.title}>关键字</Text>
                            <View >
                                <TextInput
                                    style={[styles.search_input, { width: '90%', marginLeft: 10 }]}
                                    placeholder='商品名称、型号、编码'
                                    value={this.state.searchData.name}
                                    onChangeText={(text) => {
                                        this.searchDataChange({ name: text })
                                    }}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.title}>价格区间</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    placeholder='最低价'
                                    keyboardType='numeric'
                                    value={this.state.searchData.minprice}
                                    style={[styles.search_input, { width: '30%', marginLeft: 10, textAlign: 'center' }]}
                                    onChangeText={(text) => {
                                        this.searchDataChange({ minprice: text.replace(/[^\d|.]+/, '') })
                                    }}
                                />
                                <Text style={{ width: 20, textAlign: 'center', textAlignVertical: 'center' }}> - </Text>
                                <TextInput
                                    placeholder='最高价'
                                    keyboardType='numeric'
                                    value={this.state.searchData.maxprice}
                                    style={[styles.search_input, { width: '30%', textAlign: 'center' }]}
                                    onChangeText={(text) => {
                                        this.searchDataChange({ maxprice: text.replace(/[^\d|.]+/, '') })
                                    }}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={styles.title}>品牌</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {
                                    this.state.companys.map((item, index) => {
                                        return (
                                            <TouchableOpacity
                                                activeOpacity={0.9}
                                                key={index}
                                                onPress={() => {
                                                    this.componyClick(index)
                                                }}
                                            >
                                                <Text style={[styles.company, { borderColor: item.selected ? 'red' : '#f3f3f3' }]} ellipsizeMode='tail' numberOfLines={1}>{item.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </SafeAreaView>
                </ScrollView>
                <View style={{ flexDirection: 'row', borderTopColor: '#f3f3f3', borderTopWidth: 1, height: 40 }}>
                    <TouchableOpacity
                        style={{ width: '45%', height: 40 }}
                        onPress={() => {
                            this.props.navigation.closeDrawer()
                            this.setState({
                                searchData:{
                                    maxprice:'',
                                    minprice:'',
                                    company:'',
                                    name:''
                                }
                            },
                                this.props.navigation.state.routes[0].params.reset()
                            )

                        }}
                    >
                        <Text style={styles.button}>重置</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{ width: '55%', height: 40 }}
                        onPress={() => {
                            this.props.navigation.closeDrawer()
                            this.props.navigation.state.routes[0].params.search(this.state.searchData)
                        }}
                    >
                        <Text style={[styles.button, {backgroundColor: 'red'}]}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold', fontSize: 14, margin: 10
    },
    search_input: {
        height: 30,
        borderColor: '#f3f3f3',
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 14,
        paddingLeft: 10,
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 10
    },
    company: {
        height: 30,
        width: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor: '#f3f3f3',
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 12,
        paddingLeft: 10,
        //paddingTop: 5, 
        //paddingBottom: 0, 
        paddingRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        borderWidth: 1
    },
    button:{
        fontSize: 16, textAlign: 'center', lineHeight: 40 
    }
})