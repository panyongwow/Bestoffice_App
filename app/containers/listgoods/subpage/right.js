import React, { Component } from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native'

export default class Right extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let data = [
            {
                name: 'A4复印纸',
                data: [
                    { details: [{ name: 'A4复印纸70克' }, { name: 'A4复印纸80克' }, { name: 'A4复印纸72克' },{ name: 'A4复印纸82克' }]},
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
            <SectionList
                renderItem={
                    ({ item, index, section }) => {
                        return (
                            // <View key={index} style={{ width: 100, height: 150, backgroundColor: 'gray' }}>
                            //     <Text>{JSON.stringify(item.details[0])}</Text>
                            // </View>
                            <View key={index} style={{ height: 150, backgroundColor: 'gray',flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap' }}>
                            {item.details.map((i, index) => {
                                return (
                                    // <View key={index} style={{ width: 100, height: 150, backgroundColor: 'gray' }}>
                                        <Text key={index} style={{width:80,height:80,backgroundColor:'white'}}>{i.name}</Text>
                                    // </View>
                                )
                            })}
                            </View>
                            // <View key={index} style={{ width: 100, height: 150, backgroundColor: 'gray' }}>
                            //     {
                            //         item.map((details,index)=><Text>{details.length}</Text>)
                            //     }
                            //     {/* <Text style={{ width: 90, height: 140, backgroundColor: 'white' }}>{JSON.stringify(item[0].details)}</Text> */}
                            // </View>
                        )
                    }



                }
                renderSectionHeader={
                    ({ section: { name } }) => {
                        return (
                            <Text>{name}</Text>
                        )
                    }
                }
                sections={data}
                keyExtractor={(item, index) => item + index}
            />
        )
    }
}