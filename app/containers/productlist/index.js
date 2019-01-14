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


export class ProductSearch extends Component {
    constructor(props) {
        super(props)
        let { height } = Dimensions.get('window');
        let { StatusBarManager } = NativeModules;
        const StatusBarHeight = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
        this.screenHeight = height - StatusBarHeight - 41;

        this.state = {
            searchData: {
                name: '',
                mixPrice: 0,
                MaxPrice: 0
            },
            testInfo: 'test'
        }
    }
    searchDataChange(data) {
        this.setState({
            //testInfo:this.state.searchData[data.key]
            searchData: {
                ...this.state.searchData, ...data
            }
        })
    }
    render() {
        return (
            <View>
                <ScrollView style={{ height: this.screenHeight }}>
                    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
                        <View>
                            <Text>商品名称/型号</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <TextInput
                                    style={[styles.search_input, { width: '80%' }]}
                                    onChangeText={(text) => {
                                        this.searchDataChange({ name: text })
                                    }}
                                />
                            </View>
                            <Text>{JSON.stringify(this.state.searchData)}</Text>
                        </View>
                        <View>
                            <Text>价格区间</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TextInput
                                    placeholder='最低价'
                                    keyboardType='numeric'
                                    value={this.state.searchData.minPrice}
                                    style={[styles.search_input, { width: '30%' }]}
                                    onChangeText={(text) => {
                                        this.searchDataChange({ minPrice: text.replace(/[^\d|.]+/, '') })
                                    }}
                                />
                                <Text style={{ width: 20, textAlign: 'center' }}>-</Text>
                                <TextInput
                                    placeholder='最高价'
                                    keyboardType='numeric'
                                    value={this.state.searchData.maxPrice}
                                    style={[styles.search_input, { width: '30%' }]}
                                    onChangeText={(text) => {
                                        this.searchDataChange({ maxPrice: text.replace(/[^\d|.]+/, '') })
                                    }}
                                />
                            </View>
                        </View>

                    </SafeAreaView>
                </ScrollView>
                <View style={{ flexDirection: 'row', borderTopColor: '#f3f3f3', borderTopWidth: 1, height: 40 }}>
                    <Text style={{ width: '45%', height: 40, fontSize: 16, textAlign: 'center', lineHeight: 40 }}>重置</Text>
                    <TouchableOpacity
                        style={{ width: '55%', height: 40 }}
                        onPress={() => {
                            this.props.navigation.closeDrawer()
                            this.props.navigation.state.routes[0].params.list(this.state.searchData)
                        }}
                    >
                        <Text style={{ height: 40, backgroundColor: 'red', fontSize: 16, textAlign: 'center', textAlignVertical: 'center' }}>确定</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_list: [],        //存放以列表形式展现的数据
            data_table: [],       //存放以块状形式展现的数据
            isShowGoTop: false,   //是否显示“回到顶端”的图标
            display: 'list'       //商品如何显示，list为列表显示，table为表格块状显示
        }

        //商品搜索条件
        this.search = {
            nowpage: 1,        //第几页
            apagenum: 20,      //每页显示多少条数据
            orderby: 0,        //排序方式，0 综合，1 销量，2 价格由高到低，3 价格由低到高
            hasdata: true,      //是否还有数据，以便控制底部
            minprice:0,
            maxprice:0,
            name:''

        }
        this.timeoutId         //滚动节流控制ID，处理“回到顶端”图标的显隐  

        this.props.navigation.setParams({
            list:(searchData)=>{
                this.refresh(0,searchData)
            }
        })
    }
    test(searchdata){
        alert(JSON.stringify(searchdata))
    }
    componentDidMount() {
        this.list()
        //this.props.navigation.toggleDrawer()
    }

    //查找显示数据
    list(searchData) {
        if (!this.search.hasdata) return

        let apagenum = this.search.apagenum
        let nowpage = this.search.nowpage
        let orderby = this.search.orderby
        //let listgoodsid = this.props.navigation.state.params.id
        let listgoodsid = 29900
        this.search={...this.search,...searchData,listgoodsid:299}

        //ProductDao.list(listgoodsid, nowpage, apagenum, orderby)
        ProductDao.list(this.search)
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
                if (apagenum * nowpage >= result.totalcount) {
                    this.search.hasdata = false   //已经到数据的末尾了，后面没有数据了
                }
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
                //alert(error)
            })
    }

    //刷新，重新显示数据
    refresh = (orderby,searchData) => {
        this.setState({
            //isrefreshing: true,
            isShowGoTop: false,
            data_list: [],
            data_table: []
        })
        this.search.nowpage = 1
        this.search.hasdata = true
        if (orderby != undefined) this.search.orderby = orderby
        this.list(searchData)
    }

    //滚动监听，滚动距离超过200后才显示“回到顶部”的图标，进行了节流处理
    onScroll(event) {
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
                {/* <Button 
                    title='返回1'
                    onPress={()=>{
                        alert(JSON.stringify(this.props.navigation)) 
                    }}
                /> */}
                {/* <Header isShowBack={true} /> */}
                <View>
                    <Text>测试123</Text>
                </View>
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
                    <Text style={{ fontWeight: 'bold', color: this.state.orderby === 0 ? '#f00' : '#000' }}>综合12</Text>
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
    },
    search_input: {
        height: 30, borderColor: '#f3f3f3', borderWidth: 1, borderRadius: 15, fontSize: 14, paddingLeft: 10, paddingTop: 0, paddingBottom: 0, paddingRight: 10
    }
})