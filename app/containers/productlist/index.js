import React, { Component } from 'react'
import { View, Text, Image, Button, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Dimensions } from 'react-native'
import Header from '../../components/header'
import Foot from '../../components/foot'
import GoTop from '../../components/gotop'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ProductSmall from '../../components/product/small'
import ProductMiddle from '../../components/product/middle'
import Loading from '../../components/loading'
import ProductDao from '../../dao/product'


//处理节流
//处理显示结构的切换
//商品中图的tag显示
export default class ProductList extends Component {
    constructor(props) {
        super(props)
        //display表示商品如何显示，list为列表显示，table为表格显示
        this.state = {
            data: [],
            data_table:[],
            isrefreshing: false,
            isShowGoTop: false,
            info: '未到底部',
            y: 0,
            display: 'table'
        }
        this.search = {
            nowpage: 1,
            apagenum: 20,
            hasdata: true
        }
    }
    componentDidMount() {
        this.list()
    }
    list() {

        if (!this.search.hasdata) return

        // const {navigation}=this.props
        // const {state}=navigation
        // const {params}=state      

        let apagenum = this.search.apagenum
        let nowpage = this.search.nowpage
        let listgoodsid = this.props.navigation.state.params.id
        //let listgoodsid = 388


        ProductDao.list(listgoodsid, nowpage, apagenum)
            .then(result => {
                //alert(JSON.stringify(result))
                let data = this.state.data
                if (this.state.display === 'list') {
                    result.details.map((item, index) => {
                        data.push(item)
                    })
                } else {
                    let item = []
                    for (let i = 0, j = parseInt(result.details.length / 2); i < j; i++) {
                        item.push(result.details[i * 2])
                        item.push(result.details[i * 2 + 1])
                        data.push(item)
                        item = []
                    }
                    if (result.details.length % 2 > 0) {
                        item.push(result.details[result.details.length - 1])
                        data.push(item)
                    }
                }
                //alert(JSON.stringify(data))

                if (apagenum * nowpage >= result.totalcount) this.search.hasdata = false
                this.setState({
                    data: data,
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
    refresh = () => {
        this.setState({
            isrefreshing: true,
            isShowGoTop: false,
            data: []
        })
        this.search.nowpage = 1
        this.search.hasdata = true
        this.list()
    }
    onScroll(event) {
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
        // this.setState({
        //     y:offsetY
        // })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header isShowBack={true} navigation={this.props.navigation} />
                {/* <Header isShowBack={true} /> */}
                <ListTitle />
                <View style={{ flex: 1 }}>
                    {/* <Text>test1+{this.state.y}</Text> */}
                    <FlatList
                        // style={{backgroundColor:'#b0c4de'}}
                        ref='ProductList'
                        data={this.state.data}
                        renderItem={({ item }) => {
                            return (
                                this.state.display === 'list'
                                    ? <ProductSmall style={{ backgroundColor: 'white' }} item={item} />
                                    : <View style={{ flexDirection: 'row', justifyContent: 'center', height: 220, width: '100%',borderColor:'red',borderWidth:0 }}>
                                        {/* <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '90%',borderColor:'blue',borderWidth:1 }}> */}
                                            <ProductMiddle style={{backgroundColor:'white'}} item={item[0]} />
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
                                if (!this.state.isrefreshing) {
                                    return (
                                        this.search.hasdata
                                            ? <Loading />
                                            : <View style={{height:50,flexDirection:'column',justifyContent:'center' ,alignItems: 'center' }}>
                                                <Text style={{fontSize:14,color:'gray'}}>抱歉，没有更多商品啦~</Text>
                                                {/* <Foot /> */}
                                              </View>  
                                    )
                                } else {
                                    return null
                                }
                            }
                        }
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.isrefreshing}
                                onRefresh={this.refresh}
                                colors={['red']}
                            />
                        }
                        getItemLayout={(param, index) => (
                            this.state.display === 'list'
                                ? { length: 114, offset: 114 * index, index }
                                : { length: 220, offset: 220 * index, index }
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
    render() {
        return (
            <View style={styles.lt_container}>
                <View>
                    <Text style={{ fontWeight: 'bold', color: 'red' }}>综合</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>销量</Text>
                </View>
                <View style={styles.lt_price}>
                    <View><Text style={{ fontWeight: 'bold' }}>价格</Text></View>
                    <View style={styles.lt_arrowborder}>
                        <FontAwesome5 name='caret-up' size={9} color='black' style={{ height: 7 }} />
                        <FontAwesome5 name='caret-down' size={9} color='black' style={{ height: 7 }} />
                    </View>
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