import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default class NumInput extends Component {
    static propTypes = {
        style: PropTypes.object,
        buttonStyle: PropTypes.object,
        iconStyle: PropTypes.object,
        decreaseButtonStyle: PropTypes.object,
        increaseButtonStyle: PropTypes.object,
        decreaseIconStyle: PropTypes.object,
        increaseIconStyle: PropTypes.object,
        inputStyle: PropTypes.object,
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
        this.increaseNum = this.increaseNum.bind(this)
    }
    decreaseNum = () => {
        let num = this.state.value > 1 ? this.state.value - 1 : 0
        this.setState({
            value: num
        })
        this.props.onChange(num)
    }
    increaseNum = () => {
        let num = this.state.value + 1
        this.setState({
            value: num
        })
        this.props.onChange(num)
    }
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableOpacity
                    style={[styles.button, this.props.buttonStyle, this.props.decreaseButtonStyle]}
                    onPress={this.decreaseNum}
                >
                    <AntDesign name='minus' size={12} color='gray'
                        style={[styles.icon, this.props.iconStyle, this.props.decreaseIconStyle]}
                    />
                </TouchableOpacity>
                <TextInput
                    style={[styles.input, this.props.inputStyle]}
                    keyboardType='numeric'
                    value={this.state.value.toString()}
                    onChangeText={(text) => {
                        this.setState({
                            value: text
                        })
                        this.props.onChange(text)
                    }}
                />
                <TouchableOpacity
                    style={[styles.button, this.props.buttonStyle, this.props.increaseButtonStyle]}
                    onPress={this.increaseNum}
                >
                    <AntDesign name='plus' size={12} color='gray'
                        style={[styles.icon, this.props.iconStyle, this.props.increaseIconStyle]}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
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