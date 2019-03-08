import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default class NumInput extends Component {
    static propTypes = {
        style: PropTypes.object,
        buttonStyle: PropTypes.object,
        // iconStyle: PropTypes.style,
        // decreaseButtonStyle: PropTypes.style,
        // increaseButtonStyle: PropTypes.style,
        // decreaseIconStyle: PropTypes.style,
        // increaseIconStyle: PropTypes.style,
        // inputStyle: PropTypes.style,
        value: PropTypes.number
    }
    // static defaultProps = {

    // }
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value
        }
        this.decreaseNum = this.decreaseNum.bind(this)
        this.increaseNum=this.increaseNum.bind(this)
    }
    decreaseNum = () => {
        this.setState({
            value: this.state.value > 1 ? this.state.value - 1 : 0
        })
    }
    increaseNum = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    render() {
        return (
            <View style={[styles.container,this.props.style]}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.decreaseNum}
                >
                    <AntDesign name='minus' size={12} color='gray' style={styles.icon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    value={this.state.value.toString()}
                    onChangeText={(text) => {
                        this.setState({
                            value: text
                        })
                    }}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.increaseNum}
                >
                    <AntDesign name='plus' size={12} color='gray' style={styles.icon} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    button: {
        width: 24,
        height: 24
    },
    icon: {
        lineHeight: 22,
        marginLeft: 6
    },
    input: {
        backgroundColor: '#f3f3f3',
        height: 20,
        width: 40,
        padding: 0,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: 20
    },
})