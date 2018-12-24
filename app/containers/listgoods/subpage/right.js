import React, { Component } from 'react'
import { View, Text, SectionList, TouchableOpacity, StyleSheet } from 'react-native'
import ListGoodsDao from '../../../dao/listgoods'
import Loading from '../../../components/loading'

export default class Right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentWillReceiveProps(nextProps) {
        //当一级目录ID（parentID）发生变化的时候，重新显示所属的二级与三级目录
        let ID = nextProps.parentID
        this.getListGoods(ID)
    }
    getListGoods(ID) {
        this.setState({
            data: []
        })
        let data = []
        ListGoodsDao.list_one_child(ID)
            .then(result => result.details)
            .then(datas => {
                this.setState({
                    data: datas
                })
            })
            .catch(error => {
                alert(error)
            })
    }

    render() {
        // let data = [
        //     {
        //         name: 'A4复印纸',
        //         data: [
        //             { details: [{ name: 'A4复印纸70克' }, { name: 'A4复印纸80克' }, { name: 'A4复印纸72克' },{ name: 'A4复印纸82克' }] }
        //         ]
        //     }
        // ]        
        return (
            this.state.data.length === 0
                ? <View style={{ flex: 1, flexDirection: 'column' }}><Loading /></View>
                : <SectionList
                    renderItem={
                        ({ item, index, section }) => {
                            return (
                                <View>
                                    <View key={index} style={styles.itemborder}>
                                        {item.details.map((i, index) => {
                                            return (
                                                <View key={index} style={styles.itemview}>
                                                    <TouchableOpacity
                                                        activeOpacity={0.6}
                                                        style={styles.itemtouchable}
                                                        onPress={() => {
                                                            this.props.navigation.navigate('ProductList',{id:i.id})
                                                        }}
                                                    >
                                                        <Text style={styles.itemtext}>{i.name}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })}
                                    </View>
                                    <View style={styles.separator}></View>
                                </View>

                            )
                        }
                    }
                    renderSectionHeader={
                        ({ section: { name,id } }) => {
                            return (
                                <TouchableOpacity
                                activeOpacity={0.6}
                                style={styles.section}
                                onPress={() => {
                                    this.props.navigation.navigate('ProductList',{id:id})
                                }}
                            >
                                <Text style={styles.sectionname}>{name}</Text>
                            </TouchableOpacity>                                
                                // <Text style={styles.section}>{name+','+ id}</Text>
                            )
                        }
                    }
                    sections={this.state.data}
                    keyExtractor={(item, index) => item + index}
                />
        )
    }
}

const styles = StyleSheet.create({
    itemborder: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 15,
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemview: {
        width: '33.3%',
        height: 40,
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemtouchable: {
        height: 40,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    itemtext: {
        width: 60,
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    separator: {
        height: 3,
        backgroundColor: '#f7f7f7',
        marginLeft: 10,
        marginRight: 10
    },
    section: {
        textAlign: 'left',
        paddingLeft: 15,
        paddingTop: 15,

    },
    sectionname:{
        fontSize: 12,
        fontWeight: 'bold'        
    }
})