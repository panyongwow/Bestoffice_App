import React, { Componenet } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default class NumInput extends Componenet {
    static propTypes = {
        style: View.propTypes.style,
        buttonStyle: View.propsTypes.style,
        iconStyle: View.propsTypes.style,
        decreaseButtonStyle: View.propTypes.style,
        increaseButtonStyle: View.propTypes.style,
        decreaseIconStyle: View.propTypes.style,
        increaseIconStyle: View.propTypes.style,
        inputStyle: View.propTypes.style,
        value: PropTypes.number
    }
    static defaultProps = {

    }
    constructor(props) {
        super(props)
        this.state = {
            value: 1
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
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.decreaseNum}
                >
                    <AntDesign name='minus' size={12} color='gray' style={styles.icon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    value={item.cartnum.toString()}
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