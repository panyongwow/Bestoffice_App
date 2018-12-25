import React, { Component } from 'react'
import { View, Text, Image, Button, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Dimensions } from 'react-native'
import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createTabNavigator,StackNavigator, DrawerItems, SafeAreaView} from 'react-navigation'
import Header from '../../components/header'
import Foot from '../../components/foot'
import GoTop from '../../components/gotop'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ProductSmall from '../../components/product/small'
import ProductMiddle from '../../components/product/middle'
import Loading from '../../components/loading'
import ProductDao from '../../dao/product'


//处理显示结构的切换
//商品中图的tag显示
class DrawerContent extends Component {
    render() {
        return (
            <View>
                <Text>你好！</Text>
            </View>
        )
    }
}
export default class ProductList extends Component {
    static navigationOptions = {
        contentComponent: DrawerContent,
        header:null
    }
    constructor(props) {
        super(props)
        //display表示商品如何显示，list为列表显示，table为表格显示
        this.state = {
            data_list: [],
            data_table: [],
            // isrefreshing: false,
            isShowGoTop: false,
            info: '未到底部',
            y: 0,
            display: 'list'
        }
        this.search = {
            nowpage: 1,
            apagenum: 20,
            orderby: 0,
            hasdata: true
        }
        this.timeoutId

        
    }
    componentDidMount() {
        this.list()
        this.props.navigation.openDrawer()
    }
    list() {

        if (!this.search.hasdata) return

        // const {navigation}=this.props
        // const {state}=navigation
        // const {params}=state      

        let apagenum = this.search.apagenum
        let nowpage = this.search.nowpage
        let orderby = this.search.orderby
        let listgoodsid = this.props.navigation.state.params.id
        //let listgoodsid = 29900


        ProductDao.list(listgoodsid, nowpage, apagenum, orderby)
            .then(result => {
                //alert(JSON.stringify(result))
                let data_list = this.state.data_list
                let data_table = this.state.data_table

                result.details.map((item, index) => {
                    data_list.push(item)
                })

                let item = []
                for (let i = 0, j = parseInt(result.details.length / 2); i < j; i++) {
                    item.push(result.details[i * 2])
                    item.push(result.details[i * 2 + 1])
                    data_table.push(item)
                    item = []
                }
                if (result.details.length % 2 > 0) {
                    item.push(result.details[result.details.length - 1])
                    data_table.push(item)
                }


                // if (this.state.display === 'list') {
                //     result.details.map((item, index) => {
                //         data.push(item)
                //     })
                // } else {
                //     let item = []
                //     for (let i = 0, j = parseInt(result.details.length / 2); i < j; i++) {
                //         item.push(result.details[i * 2])
                //         item.push(result.details[i * 2 + 1])
                //         data.push(item)
                //         item = []
                //     }
                //     if (result.details.length % 2 > 0) {
                //         item.push(result.details[result.details.length - 1])
                //         data.push(item)
                //     }
                // }


                if (apagenum * nowpage >= result.totalcount) this.search.hasdata = false
                this.setState({
                    data_list: data_list,
                    data_table: data_table,
                    isrefreshing: false,
                    isShowGoTop: this.search.nowpage > 1 ? true : false,
                })
                this.search.nowpage++
            })
            .catch(error => {
                this.setState({
                    hasdata: false
                })
                alert(error)
            })
    }
    refresh = (orderby) => {
        this.setState({
            //isrefreshing: true,
            isShowGoTop: false,
            data_list: [],
            data_table: []
        })
        this.search.nowpage = 1
        this.search.hasdata = true
        if (orderby != undefined) this.search.orderby = orderby
        this.list()
    }
    onScroll(event) {
        //节流
        if (this.timeoutId) clearTimeout(this.timeoutId)
        event.persist()
        this.timeoutId = setTimeout(() => {
            let offsetY = event.nativeEvent.contentOffset.y
            if (offsetY > 200 && !this.state.isShowGoTop) {
                this.setState({
                    isShowGoTop: true
                })
            } else if (offsetY <= 200 && this.state.isShowGoTop) {
                this.setState({
                    isShowGoTop: false
                })
            }
        }, 100)

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header isShowBack={true} navigation={this.props.navigation} />
                {/* <Header isShowBack={true} /> */}
                <ListTitle
                    display={this.state.display}
                    displaychange={
                        (display) => {
                            this.setState({
                                display: display
                            })
                        }
                    }
                    orderbychange={
                        (orderby) => {
                            this.refresh(orderby)
                        }
                    }
                />
                <View style={{ flex: 1 }}>
                    {/* <Text>test123+{this.state.y}</Text> */}
                    <FlatList
                        // style={{backgroundColor:'#b0c4de'}}
                        ref='ProductList'
                        data={this.state.display === 'list' ? this.state.data_list : this.state.data_table}
                        renderItem={({ item }) => {
                            return (
                                this.state.display === 'list'
                                    ? <ProductSmall style={{ backgroundColor: 'white' }} item={item} />
                                    : <View style={{ flexDirection: 'row', justifyContent: 'center', height: 240, width: '100%', borderColor: 'red', borderWidth: 0 }}>
                                        {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '90%',borderColor:'blue',borderWidth:1 }}> */}
                                        <ProductMiddle style={{ backgroundColor: 'white' }} item={item[0]} />
                                        {
                                            item.length > 1 ? <ProductMiddle item={item[1]} /> : null
                                        }
                                        {/* </View> */}
                                    </View>
                            )
                        }}
                        keyExtractor={(item, index) => item + index}
                        ItemSeparatorComponent={() =>
                            this.state.display === 'list'
                                ? <View style={{ height: 4, backgroundColor: '#f3f3f3' }}></View>
                                : null
                        }
                        onEndReachedThreshold={0.2}
                        onEndReached={() => {
                            this.list()
                        }}
                        ListFooterComponent={
                            () => {
                                // if (!this.state.isrefreshing) {
                                return (
                                    this.search.hasdata
                                        ? <Loading />
                                        : <View style={{ height: 100, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f3f3' }}>
                                            <Text style={{ fontSize: 14, color: 'gray', backgroundColor: 'white', width: '100%', height: 42, textAlign: 'center', textAlignVertical: 'center' }}>抱歉，没有更多商品啦~</Text>
                                            <Foot />
                                        </View>
                                )
                                // } else {
                                //     return null
                                // }
                            }
                        }
                        refreshControl={
                            <RefreshControl
                                // refreshing={this.state.isrefreshing}
                                refreshing={false}
                                onRefresh={this.refresh}
                                colors={['red']}
                            />
                        }
                        getItemLayout={(param, index) => (
                            this.state.display === 'list'
                                ? { length: 114, offset: 114 * index, index }
                                : { length: 240, offset: 240 * index, index }
                        )}
                        onScroll={this.onScroll.bind(this)}
                    />
                    {/* <Button
                        title='test'
                        onPress={() => {
                            this.setState({
                                display:this.state.display==='list'?'table':'list'
                            })
                        }}
                    /> */}

                </View>
                {
                    this.state.isShowGoTop
                        ? <GoTop scrollTop={() => {
                            this.refs.ProductList.scrollToOffset({ offset: 0 })
                        }} />
                        : null
                }
            </View>
        )
    }
}

class ListTitle extends Component {
    constructor(props) {
        super(props)

        //orderby:排序模式，0 综合，1 销量，2 价格由高到低，3 价格由低到高
        this.state = {
            display: 'list',
            orderby: 0
        }
    }
    componentDidMount() {
        this.setState({
            display: this.props.display
        })
    }
    render() {
        return (
            <View style={styles.lt_container}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        this.setState({
                            orderby: 0
                        })
                        this.props.orderbychange(0)
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: this.state.orderby === 0 ? '#f00' : '#000' }}>综合</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        this.setState({
                            orderby: 1
                        })
                        this.props.orderbychange(1)
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: this.state.orderby === 1 ? '#f00' : '#000' }}>销量</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.lt_price}
                    onPress={() => {
                        let orderby = this.state.orderby === 2 ? 3 : 2
                        this.setState({
                            orderby: orderby
                        })
                        this.props.orderbychange(orderby)
                    }}
                >
                    <View><Text style={{ fontWeight: 'bold', color: this.state.orderby === 2 || this.state.orderby === 3 ? '#f00' : '#000' }}>价格</Text></View>
                    <View style={styles.lt_arrowborder}>
                        <FontAwesome5 name='caret-up' size={9} color={this.state.orderby === 2 ? '#f00' : '#000'} style={{ height: 7 }} />
                        <FontAwesome5 name='caret-down' size={9} color={this.state.orderby === 3 ? '#f00' : '#000'} style={{ height: 7 }} />
                    </View>
                </TouchableOpacity>
                <View style={{ width: 20 }}>
                    <TouchableOpacity
                        onPress={() => {
                            let display = this.state.display === 'list' ? 'table' : 'list'
                            this.setState({
                                display: display
                            })
                            this.props.displaychange(display)
                        }}
                    >
                        {
                            this.state.display === "list"
                                ? <FontAwesome5 name='grip-vertical' size={20} color='gray' />
                                : <FontAwesome5 name='align-justify' size={22} color='gray' />
                        }

                    </TouchableOpacity>
                </View>
                {/* <View>
                    <Text style={{ fontWeight: 'bold' }}>上架时间</Text>
                </View> */}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    lt_container: {
        height: 40, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#f3f3f3'
    },
    lt_price: {
        flexDirection: 'row', width: 40, justifyContent: 'space-around', alignItems: 'center'
    },
    lt_arrowborder: {
        flexDirection: 'column', marginBottom: 2
    }
})