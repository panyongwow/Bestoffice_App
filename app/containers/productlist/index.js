import React, { Component } from 'react'
import { View, Text, Image, Button, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Dimensions } from 'react-native'
import Header from '../../components/header'
import Foot from '../../components/foot'
import GoTop from '../../components/gotop'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ProductSmall from '../../components/product/small'
import Loading from '../../components/loading'
import ProductDao from '../../dao/product'


//对于回到顶部的优化，第一次加载不显示，如果有上拉加载动作后再加载，另外如果下拉刷新的话则隐藏
export default class ProductList extends Component {
    constructor(props) {
        super(props)
        //let { height, width } = Dimensions.get('window')
        // this.setState({
        //     goTop: {...this.state.goTop,
        //         top: height - 100,
        //         left: width - 70
        //     }
        // })
        this.state = {
            data: [],
            isrefreshing: false,
            isShowGoTop:false,
            info: '未到底部',
            y:0
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
                    isShowGoTop:this.search.nowpage > 1 ? true : false,
                })
                this.search.nowpage ++
            })
            .catch(error => {
                alert(error)
            })
    }
    refresh = () => {
        this.setState({
            isrefreshing: true,
            isShowGoTop:false,
            data: []
        })
        this.search.nowpage = 1
        this.search.hasdata = true
        this.list()
    }
    onScroll(event){
        let offsetY=event.nativeEvent.contentOffset.y
        if(offsetY>200 && !this.state.isShowGoTop ){
            this.setState({
                isShowGoTop:true
            }) 
        }else if(offsetY<=200 && this.state.isShowGoTop){
            this.setState({
                isShowGoTop:false
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
                    <Text>test1+{this.state.y}</Text>
                    <FlatList
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
                        onScroll={this.onScroll.bind(this)}
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