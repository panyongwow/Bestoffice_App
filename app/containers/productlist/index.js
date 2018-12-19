import React, { Component } from 'react'
import { View, Text, Image, Button, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Dimensions } from 'react-native'
import Header from '../../components/header'
import Foot from '../../components/foot'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import ProductSmall from '../../components/product/small'
import Loading from '../../components/loading'
import ProductDao from '../../dao/product'


//对于回到顶部的优化，第一次加载不显示，如果有上拉加载动作后再加载，另外如果下拉刷新的话则隐藏
export default class ProductList extends Component {
    constructor(props) {
        super(props)
        let { height, width } = Dimensions.get('window')
        // this.setState({
        //     goTop: {...this.state.goTop,
        //         top: height - 100,
        //         left: width - 70
        //     }
        // })
        this.state = {
            data: [],
            isrefreshing: false,
            goTop: {
                top: height - 100,
                left: width - 70,
                isShow: false
            },
            info: '未到底部'
        }
        this.search = {
            nowpage: 1,
            apagenum: 20,
            hasdata: true
        }
    }
    componentDidMount() {
        // let data = [
        //     { key: '1', id: 1, name: '易龙 241-5两等分彩色电脑打印纸有裂线', price: 61, marketprice: 73, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/20915/dcb07c785f577e0394bed940b89bd54a_s.jpg' },
        //     { key: '2', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: true, IsDirect: true, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
        //     { key: '3', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸飞毛腿 241-5 五层二等分无', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
        //     { key: '4', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
        //     { key: '5', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: true, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
        //     { key: '6', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
        //     { key: '7', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: true, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
        //     { key: '8', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
        //     { key: '9', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' }
        // ]
        // this.setState({
        //     data: data
        // })
        this.list()
        // let { height, width } = Dimensions.get('window')
        // this.setState({
        //     goTop: {...this.state.goTop,
        //         top: height - 100,
        //         left: width - 70
        //     }
        // })
        // alert(height +','+width)
    }
    list() {

        if (!this.search.hasdata) return

        // const {navigation}=this.props
        // const {state}=navigation
        // const {params}=state      

        let apagenum = this.search.apagenum
        let nowpage = this.search.nowpage
        //let listgoodsid =this.props.navigation.state.params.id
        let listgoodsid = 299


        ProductDao.list(listgoodsid, nowpage, apagenum)
            .then(result => {
                //alert(JSON.stringify(result))
                let data = this.state.data
                result.details.map((item, index) => {
                    data.push(item)
                })

                if (apagenum * nowpage >= result.totalcount) this.search.hasdata = false
                this.setState({
                    data: data,
                    isrefreshing: false,
                    goTop: {
                        ...this.state.goTop,
                        isShow: this.search.nowpage > 1 ? true : false
                    }
                })
                this.search.nowpage += 1

            })
            .catch(error => {
                alert(error)
            })
    }
    refresh = () => {
        this.setState({
            isrefreshing: true,
            goTop: {
                ...this.state.goTop,
                isShow: false
            },
            data: []
        })
        // setTimeout(() => {
        //     this.list()
        // }, 500)
        this.search.nowpage = 1
        this.search.hasdata = true
        this.list()


    }
    // refresh() {
    //     this.setState({
    //         info: '到达底部！'
    //     })
    //     let newdata = [
    //         { key: '1', id: 1, name: '易龙 241-5两等分彩色电脑打印纸有裂线', price: 61, marketprice: 73, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/20915/dcb07c785f577e0394bed940b89bd54a_s.jpg' },
    //         { key: '2', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: true, IsDirect: true, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
    //         { key: '3', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸飞毛腿 241-5 五层二等分无', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
    //         { key: '4', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
    //         { key: '5', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: true, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
    //         { key: '6', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
    //         { key: '7', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: true, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
    //         { key: '8', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
    //         { key: '9', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' }
    //     ]
    //     let data = this.state.data
    //     // this.state.data.map((item,index)=>{
    //     //     data.push(item)
    //     // })
    //     newdata.map((item, index) => {
    //         data.push(item)
    //     })
    //     this.setState({
    //         data: data
    //     })
    // }
    render() {
        //alert(JSON.stringify({...this.state.goTop}))
        return (
            <View style={{ flex: 1 }}>
                <Header isShowBack={true} navigation={this.props.navigation} />
                {/* <Header isShowBack={true} /> */}
                <ListTitle />
                <View style={{ flex: 1 }}>
                    {/* <Text>test1234+{this.state.goTop.isShow == true ? 'true' : 'false'} + {this.state.isrefreshing ? 'true' : 'false'}</Text> */}
                    {/* <Text>test+{JSON.stringify(this.state.goTop)}</Text> */}
                    <FlatList
                        // style={{ height: 300, width: 200, backgroundColor: 'red' }}
                        // data={[{ id: 1, name: '张三', key: '1' }, { id: 2, name: '李四', key: '2' }]}
                        ref='ProductList'
                        data={this.state.data}
                        renderItem={({ item }) => {
                            return (
                                <ProductSmall style={{ backgroundColor: 'white' }} item={item} />
                            )
                        }}
                        keyExtractor={(item, index) => item + index}
                        ItemSeparatorComponent={() =>
                            <View style={{ height: 4, backgroundColor: '#f3f3f3' }}></View>
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
                                            : <Foot />
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
                        getItemLayout={(param, index) => ({ length: 114, offset: 114 * index, index })}
                    />
                    {/* <Button
                        title='test12'
                        onPress={() => {
                            // this.refs.ProductList.scrollToIndex({viewPosition:0,index:0})
                            //this.mytest+=1
                            //alert(this.mytest)
                            this.refs.ProductList.scrollToOffset({ offset: 0 })
                        }}
                    /> */}

                </View>
                {
                    this.state.goTop.isShow
                        ? <View style={{ position: 'absolute', top: this.state.goTop.top, left: this.state.goTop.left }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 40, height: 40, opacity: 0.4, borderColor: 'gray', borderWidth: 2, borderRadius: 20 }}
                                onPress={() => {
                                    this.refs.ProductList.scrollToOffset({ offset: 0 })
                                }}
                            >
                                <MaterialIcons name='publish' size={30} color='gray' />
                            </TouchableOpacity>
                        </View>
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
                <View>
                    <Text style={{ fontWeight: 'bold' }}>上架时间</Text>
                </View>
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