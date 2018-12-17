import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, ScrollView, Button } from 'react-native'
import ListGoodsDao from '../../../dao/listgoods'

export default class Left extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // let data = [
        //     { id: 1, name: '办公用纸', key: '1', isSelected: true },
        //     { id: 2, name: '办公文具', key: '2', isSelected: false },
        //     { id: 3, name: '办公耗材', key: '3', isSelected: false },
        //     { id: 4, name: '办公家具', key: '4', isSelected: false },
        //     { id: 5, name: '办公设备', key: '5', isSelected: false},
        //     { id: 6, name: '电脑配件', key: '6', isSelected: false },
        //     { id: 7, name: '数码设备', key: '7', isSelected: false },
        //     { id: 8, name: '日常生活', key: '8', isSelected: false }
        // ]
        this.didFoucsHandler = this.props.navigation.addListener(
            'didFocus',
            () => { this.showData() }
        )
    }
    componentWillUnmount() {
        this.didFoucsHandler.remove()
    }
    showData() {
        let data = []
        let showID = 0
        let myID = this.props.myID
        let hasSelected = false
        let isScrollToEnd = false
        ListGoodsDao.get()
            .then(result => result.details)
            .then(listgoodsOne => {
                listgoodsOne.map((item, index) => {
                    if (item.id === myID) {
                        item.isSelected = true
                        showID = item.id
                        hasSelected = true
                        if (index > 4 && !isScrollToEnd) isScrollToEnd = true   //滚动到底部的标志
                    }
                    data.push(item)
                })

                //传入的一级目录ID不正确，默认显示第一个一级目录
                if (!hasSelected) {
                    data[0].isSelected = true
                    showID = data[0].id
                }

                //绑定显示数据
                this.setState({
                    data: data
                })

                //一级目录显示完毕，传递给需要显示子元素的ID给父组件，以便父组件能显示子元素
                this.props.showComplete(showID)

                //滚动到列表底部或顶部
                setTimeout(() => {
                    if (isScrollToEnd) this.nav.scrollToEnd()
                    else this.nav.scrollTo({ x: 0, y: 0, animated: true })
                })
            })
            .catch(error => {
                alert(error)
            })
    }

    //切换商品目录
    changeListgoods(index) {
        let data = []
        let selectedID = 0
        this.state.data.map((item, i) => {
            item = item
            if (index === i) {
                item.isSelected = true
                selectedID = item.id
            }
            else {
                item.isSelected = false
            }
            data.push(item)
        })
        this.setState({
            data: data
        })

        this.props.changeListgoods(selectedID)  //传递给父元素当前选中的商品目录ID
    }
    render() {
        return (
            <View>
                <ScrollView
                    ref={(view) => { this.nav = view }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ height: 3 }}></View>
                    {
                        this.state.data.length === 0
                            ? null
                            : this.state.data.map((item, index) => {
                                return (
                                    <Item key={index} item={item} pressHandle={() => {
                                        this.changeListgoods(index)
                                    }} />
                                )
                            })
                    }
                </ScrollView>
            </View>
        )
    }
}

class Item extends Component {
    render() {
        let item = this.props.item
        return (
            <View>
                <View style={[styles.border, { backgroundColor: item.isSelected ? '#fff' : '#f7f7f7', borderLeftColor: item.isSelected ? '#f00' : '#f7f7f7' }]}>
                    <TouchableOpacity style={styles.touchable}
                        underlayColor='#fff'
                        onPress={() => this.props.pressHandle()
                        }
                    >
                        <Text style={[styles.itemtext, { backgroundColor: item.isSelected ? '#fff' : '#f7f7f7', color: item.isSelected ? '#f00' : '#000' }]}>{item.name}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.separator}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    border: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 3
    },
    itemtext: {
        height: 70,
        width: 30,
        fontSize: 11,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    touchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    separator: {
        height: 1,
        backgroundColor: 'white'
    }
})