import React, { Component } from 'react'
import { View, Text, Image, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../../components/header'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import ProductSmall from '../../components/product/small'

export default class ProductList extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        // const {navigation}=this.props
        // const {state}=navigation
        // const {params}=state      
        let data = [
            { key: '1', id: 1, name: '易龙 241-5两等分彩色电脑打印纸有裂线', price: 61, marketprice: 73, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/20915/dcb07c785f577e0394bed940b89bd54a_s.jpg' },
            { key: '2', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: true, IsDirect: true, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
            { key: '3', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸飞毛腿 241-5 五层二等分无', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
            { key: '4', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
            { key: '5', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: true, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
            { key: '6', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
            { key: '7', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: true, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
            { key: '8', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' },
            { key: '9', id: 2, name: '飞毛腿 241-5 五层二等分无裂线电脑打印纸', price: 98, marketprice: 103, isBargin: false, IsDirect: false, img: 'http://www.bestoffice.cn:8806/product/85/15154/cbe9c817be0237f4943034b471ed8d63_s.jpg' }
        ]
        return (
            <View style={{ flex: 1 }}>
                {/* <Header isShowBack={true} navigation={navigation} /> */}
                <Header isShowBack={true} />
                <ListTitle />
                <View style={{ flex: 1 }}>
                    {/* <Text>test</Text> */}
                    <FlatList
                        // style={{ height: 300, width: 200, backgroundColor: 'red' }}
                        // data={[{ id: 1, name: '张三', key: '1' }, { id: 2, name: '李四', key: '2' }]}
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <ProductSmall item={item} />
                            )
                        }}
                        keyExtractor={(item, index) => item + index}
                        ItemSeparatorComponent={() =>
                            <View style={{ height: 4, backgroundColor: '#f3f3f3' }}></View>
                        }
                    />
                    {/* <FlatList
                        data={[{id:1,name:'张三', key: 'a' }, {id:2,name:'李四', key: 'b' }]}
                        renderItem={({ item }) => <Text>{item.name}</Text>}
                    /> */}
                </View>
                {/* <View style={{height:300}}>
                    <Text>这是商品列表页面</Text>
                    <Text>获得的参数：{params.id}</Text>
                </View>
                <Button
                    title='返回'
                    onPress={()=>{
                        navigation.goBack()
                    }}
                />                 */}
            </View>
        )
    }
}

class ListTitle extends Component {
    render() {
        return (
            <View style={styles.lt_container}>
                <View>
                    <Text style={{fontWeight:'bold', color: 'red' }}>综合</Text>
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
    lt_container:{
        height: 40, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'red'
    },
    lt_price:{
        flexDirection: 'row', width: 40, justifyContent: 'space-around', alignItems: 'center' 
    },
    lt_arrowborder:{
        flexDirection: 'column', marginBottom: 2 
    }
})