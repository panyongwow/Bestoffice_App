import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ProductSmall from '../../components/product/small'
import ShoppingCartDao from '../../dao/shoppingcart'

export default class ShoppingCart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            data: []
        }
        //this.flatRenderItem=this.flatRenderItem.bind(this)
    }

    componentDidMount() {
        // ShoppingCartDao.get()
        //     .then(data=>{
        //         this.setState({
        //             data
        //         })
        //     })
        this.setState({
            data: [
                { "id": 11655, "name": "UPM奥友80G A4 高白复印纸", "measurement": "包", "cartnum": 1,"price":30.3, "picname": "http://img.bestoffice.cn/product/84/11655/f49bf7ef5581c33b4fc5f39edc3af9b9.jpg" },
                { "id": 320, "name": "晨光 0.5创意中性笔GP-1008(黑色)", "measurement": "支", "cartnum": 2,"price":2.2, "picname": "http://img.bestoffice.cn/product/25/320/42741d0e6233801ef63213bb4ae2818e.jpg" }
            ]
        })
    }
    flatRenderItem(item) {
        return (
            <View style={{ height: 116, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.imageborder}>
                    <Image style={styles.image} source={{ uri: item.picname }} />
                </View>
                <View style={styles.productborder}>
                    <View>
                        <Text
                            numberOfLines={2}
                            ellipsizeMode='tail'
                            style={styles.productname}
                        >
                            {item.name}
                        </Text>
                    </View>
                </View>
                <View>
                    <View style={styles.border} >
                        <View style={styles.priceborder} >
                            <Text style={styles.pricepre}>&yen;</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.measurement}>/{item.measurement}</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
    render() {
        //const {navigation}=this.props
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <Text style={{ fontSize: 18, textAlign: 'center', lineHeight: 40 }}>购物车</Text>
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{ width: 70, height: 26, borderWidth: 1, borderColor: '#f3f3f3', borderRadius: 13 }}
                    >
                        <Text style={{ textAlign: 'center', lineHeight: 24, fontSize: 12 }}>登 录</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 12, marginLeft: 10 }}>登录后将同步手机与电脑购物车中的商品</Text>
                </View>
                <View style={{ flex: 1 }}>
                    {/* <Text>
                        {JSON.stringify(this.state.data)}
                    </Text> */}
                    <FlatList
                        ref='ShoppingCart'
                        data={this.state.data}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item }) => { return this.flatRenderItem(item) }}
                    >

                    </FlatList>
                </View>

                {
                    this.state.selected
                        ? <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                this.setState({
                                    selected: !this.state.selected
                                })
                            }}
                        >
                            <AntDesign name='checkcircle' size={20} color='red' />
                        </TouchableOpacity>
                        : <TouchableOpacity
                            activeOpacity={1}
                            style={{ width: 20, height: 20, borderWidth: 2, borderColor: 'gray', borderRadius: 10 }}
                            onPress={() => {
                                this.setState({
                                    selected: !this.state.selected
                                })
                            }}
                        />
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: 96,
        width: 114
    },
    imageborder: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    productborder: {
        flex: 2,
        flexDirection: 'column',
        height: 110,
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between'
    },
    productname: {
        fontSize: 14,
        width: '100%'
    },
    border: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceborder: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 10
    },
    pricepre: {
        color: 'red',
        fontSize: 13,
        paddingBottom: 2
    },
    price: {
        color: 'red',
        fontSize: 20,
        marginLeft: 3
    },
    measurement: {
        fontSize: 12,
        color: '#bebebe',
        paddingBottom: 2
    },    
})