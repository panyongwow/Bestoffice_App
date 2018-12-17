import React, { Component } from 'react'
import { View, Text, SectionList, Image, TouchableOpacity, StyleSheet } from 'react-native'
import ListGoodsDao from '../../../dao/listgoods'

export default class Right extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let data = []
        ListGoodsDao.list_one_child(1)
            .then(result => result.details)
            .then(datas => {
                // datas.map((item, index) => {
                //     data.push(item)
                // })
                this.setState({
                    data: datas
                })
               // alert(JSON.stringify(this.state.data))
            })
            .catch(error => {
                alert(error)
            })
    }
    render() {
        let data = [
            {
                name: 'A4复印纸',
                data: [
                    {
                        details: [
                            { name: 'A4复印纸70克' }, { name: 'A4复印纸80克' }, { name: 'A4复印纸72克' }, { name: 'A4复印纸82克' }
                        ]
                    },
                ]
            },
            {
                name: 'A3复印纸',
                data: [
                    {
                        details: [
                            { name: 'A3复印纸70克' }, { name: 'A3复印纸80克' }
                        ]
                    },
                ]
            },
            {
                name: 'A4复印纸',
                data: [
                    {
                        details: [
                            { name: 'A4复印纸70克' }, { name: 'A4复印纸80克' }, { name: 'A4复印纸72克' }, { name: 'A4复印纸82克' }
                        ]
                    },
                ]
            },
            {
                name: 'A3复印纸',
                data: [
                    {
                        details: [
                            { name: 'A3复印纸70克' }, { name: 'A3复印纸80克' }
                        ]
                    },
                ]
            }
        ]

        // let data = [
        //     {
        //         name: 'A4复印纸',
        //         data: [
        //             { details: [{ name: 'A4复印纸70克' }, { name: 'A4复印纸80克' }, { name: 'A4复印纸72克' }] },
        //             { details: [{ name: 'A4复印纸82克' }] }
        //         ]
        //     },
        //     { name: 'A3复印纸', data: ['A3复印纸70克', 'A3复印纸80克'] },
        //     { name: '热敏纸传真纸', data: [] },
        //     { name: '特规复印纸', data: ['特规复印纸70克', '特规复印纸80克'] }
        // ]        
        return (
            this.state.data.length === 0
                ? null
                : <SectionList
                    renderItem={
                        ({ item, index, section }) => {
                            return (
                                <View>
                                    <View key={index} style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 15, backgroundColor: 'white', flexDirection: 'row', flexWrap: 'wrap', borderBottomColor: 'red', borderBottomWidth: 0 }}>
                                        {item.details.map((i, index) => {
                                            return (
                                                <View key={index} style={{ width: '33.3%', height: 40, borderWidth: 0, borderColor: 'gray', backgroundColor: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                                                    <TouchableOpacity activeOpacity={0.6} style={{ height: 40, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }} >
                                                        <Text style={{ width: 50, borderWidth: 0, borderColor: 'gray', fontSize: 10, fontWeight: 'bold', textAlign: 'center' }}>{i.name}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })}
                                    </View>
                                    <View style={{ height: 3, backgroundColor: '#f7f7f7', marginLeft: 10, marginRight: 10 }}></View>
                                </View>

                            )
                        }
                    }
                    renderSectionHeader={
                        ({ section: { name } }) => {
                            return (
                                <Text style={{ textAlign: 'left', paddingLeft: 15, paddingTop: 15, paddingBottom: 0, fontSize: 12, fontWeight: 'bold' }}>{name}</Text>
                            )
                        }
                    }
                    sections={this.state.data}
                    keyExtractor={(item, index) => item + index}
                />
        )
    }
}