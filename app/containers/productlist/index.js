import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native'
import Header from '../../components/header'
import Foot from '../../components/foot'
import GoTop from '../../components/gotop'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ProductSmall from '../../components/product/small'
import ProductMiddle from '../../components/product/middle'
import Loading from '../../components/loading'
import ProductDao from '../../dao/product'
import CustDao from '../../dao/cust'

export default class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_list: [],        //存放以列表形式展现的数据
            data_table: [],       //存放以块状形式展现的数据
            //data_company: [],      //该商品目录下所属的品牌
            isShowGoTop: false,   //是否显示“回到顶端”的图标
            display: 'list'       //商品如何显示，list为列表显示，table为表格块状显示
        }

        //商品搜索条件
        this.search = {
            nowpage: 1,        //第几页
            apagenum: 20,      //每页显示多少条数据
            custid: 0,          //用户ID
            listgoodsid: 0,     //所属商品目录，即navigation传入的商品目录ID
            orderby: 0,        //排序方式，0 综合，1 销量，2 价格由高到低，3 价格由低到高
            hasdata: true,      //是否还有数据，以便控制底部
            minprice: 0,        //最低价 
            maxprice: 0,        //最高价
            name: '',           //关键字（名称、编码） 
            company: ''          //所属品牌ID，可以多个ID排列，如'3,24,56'

        }
        this.timeoutId         //滚动节流控制ID，处理“回到顶端”图标的显隐  

        this.props.navigation.setParams({   //绑定给抽屉页面的查询方法
            search: (searchData) => {
                this.searchData(searchData)
            }
        })
        this.props.navigation.setParams({   //绑定给抽屉页面的重置方法
            reset: () => {
                this.listAll()
            }
        })
    }
    componentDidMount() {
        // let { navigation } = this.props
        // let listgoodsID = navigation.getParam('id', 0)   //路由传递过来的已经目录ID

        //let listgoodsid = this.props.navigation.state.params.id
        let listgoodsid = this.props.navigation.getParam('id', 0)
        let companyID = this.props.navigation.getParam('companyID', 0)
        this.search.listgoodsid = listgoodsid
        this.search.company = companyID

        CustDao.get()
            .then(cust => cust ? cust.custid : 0)
            .then(custid => {
                this.search.custid = custid
                this.list()
            })
        //this.list()
    }

    //重置、下拉刷新，显示全部数据
    listAll() {
        this.search = { ...this.search, nowpage: 1, minprice: 0, maxprice: 0, name: '', company: '', hasdata: true }
        this.setState({
            isShowGoTop: false,
            data_list: [],
            data_table: []
        },
            this.list()
        )
    }
    //查询，抽屉页调用
    searchData(search) {
        this.search = { ...this.search, ...search, nowpage: 1, hasdata: true }
        this.setState({
            isShowGoTop: false,
            data_list: [],
            data_table: []
        },
            this.list()
        )
    }
    //排序更改
    orderbychange(orderby) {
        this.search = { ...this.search, nowpage: 1, orderby: orderby, hasdata: true }
        this.setState({
            isShowGoTop: false,
            data_list: [],
            data_table: []
        },
            this.list()
        )
    }

    //查找显示数据
    list(searchData) {
        if (!this.search.hasdata) return     //没有数据了，已经显示到了数据的最后一页
        ProductDao.list(this.search)
            .then(result => {
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
                if (this.search.apagenum * this.search.nowpage >= result.totalcount) {
                    this.search.hasdata = false   //已经到数据的末尾了，后面没有数据了
                }
                this.setState({
                    data_list: data_list,
                    data_table: data_table,
                    isrefreshing: false,
                    isShowGoTop: this.search.nowpage > 1 ? true : false,
                })
                this.search.nowpage++

                //以下代码经过反复测试，得出一个比较奇怪的结论：
                //必须经过一个异步延时处理，这样才能保证在调用showCompanys的时候，抽屉页面的didFocus已经将showCompanys绑定好了，
                //否则不做异步延时处理，showComoanys会在didFocus之前执行，导致数据传递失败。
                //另外，如果在在导航器中将该抽屉导航放在第一顺位的话，就不会出现该情况。
                setTimeout(() => {
                    this.props.navigation.state.params.showCompanys(result.companys)   //传递品牌数据给抽屉页,showCompanys方法的实现是在search.js中
                }, 1000)
                //this.props.navigation.state.params.showCompanys(result.companys)   //如果直接这样写，那么第一次调用将失败
            })
            .catch(error => {
                this.setState({
                    hasdata: false
                })
                //alert(error)
            })
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
                <ListTitle
                    display={this.state.display}
                    displaychange={          //显示方式发生改变
                        (display) => {
                            this.setState({
                                display: display
                            })
                        }
                    }
                    orderbychange={    //排序发生改变
                        (orderby) => {
                            this.orderbychange(orderby)
                        }
                    }
                    openDrawer={    //打开抽屉，显示查找详情
                        () => {
                            this.props.navigation.toggleDrawer()
                        }
                    }
                />
                <View style={{ flex: 1 }}>
                    <FlatList
                        ref='ProductList'
                        data={this.state.display === 'list' ? this.state.data_list : this.state.data_table}
                        renderItem={({ item }) => {
                            return (
                                this.state.display === 'list'
                                    ? <ProductSmall style={{ backgroundColor: 'white' }} item={item} navigation={this.props.navigation} />
                                    : <View style={styles.productmiddleborder}>
                                        <ProductMiddle style={{ backgroundColor: 'white' }} item={item[0]} navigation={this.props.navigation} />
                                        {
                                            item.length > 1 ? <ProductMiddle item={item[1]} navigation={this.props.navigation} /> : null
                                        }
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
                        onEndReached={() => {    //列表滑动到底部继续加载更多
                            this.list()
                        }}
                        ListFooterComponent={
                            () => {
                                return (
                                    this.search.hasdata
                                        ? <Loading />
                                        : <View style={styles.footborder}>
                                            <Text style={styles.foot}>抱歉，没有更多商品啦~</Text>
                                            <Foot />
                                        </View>
                                )
                            }
                        }
                        refreshControl={    //下拉刷新
                            <RefreshControl
                                refreshing={false}
                                onRefresh={() => { this.listAll() }}
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
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        this.props.openDrawer()
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: this.state.orderby === 1 ? '#f00' : '#000' }}>筛选</Text>
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
            </View>
        )
    }
}


const styles = StyleSheet.create({
    productmiddleborder: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 240,
        width: '100%'
    },
    footborder: {
        height: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3'
    },
    foot: {
        fontSize: 14,
        color: 'gray',
        backgroundColor: 'white',
        width: '100%',
        height: 42,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    lt_container: {
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3'
    },
    lt_price: {
        flexDirection: 'row',
        width: 40,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    lt_arrowborder: {
        flexDirection: 'column',
        marginBottom: 2
    }
})