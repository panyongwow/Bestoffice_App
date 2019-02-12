import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class HotTag extends Component {
    render() {
        const navigation = this.props.navigation
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>热搜:</Text>
                {
                    this.props.tag.map((tag, i) => {
                        return (
                            <Tag key={i} tag={tag} navigation={navigation} />
                        )
                    })
                }
            </View>
        )
    }
}

class Tag extends Component {
    render() {
        let tag = this.props.tag
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    this.props.navigation.navigate('ProductList', { id: tag.tagid })
                }}
            >
                <Text style={{ color: '#fff', fontSize: 12 }}>{tag.name}</Text>
            </TouchableOpacity>
        )
    }
}