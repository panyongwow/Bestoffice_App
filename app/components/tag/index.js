import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Tag extends Component {
    render() {
        return (
            <View>
                <Text style={styles.tag}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    tag: {
        fontSize: 10,
        color: 'red',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 9,
        height: 16,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight: 3
    }
})