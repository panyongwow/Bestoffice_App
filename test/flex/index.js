import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class FlexTest extends Component {
    render() {
        return (
            <View style={{ flex: 4, flexDirection: 'row' }}>
                <View style={{ flex: 1, width: 50, height: 500, backgroundColor: 'blue' }}>

                </View>
                <View style={Styles.container}>
                    <View style={Styles.child}><Text style={Styles.item}>1</Text></View>
                    <View style={Styles.child}><Text style={Styles.item}>2</Text></View>
                    <View style={Styles.child}><Text style={Styles.item}>3</Text></View>
                    <View style={Styles.child}><Text style={Styles.item}>4</Text></View>
                    <View style={Styles.child}><Text style={Styles.item}>5</Text></View>
                </View>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        height: 200,
        backgroundColor: 'gray',
        borderWidth: 2,
        borderColor: 'yellow',
        flex: 3
    },
    child: {
        width: '33.33%',
        height: 50,
        backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    item: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})