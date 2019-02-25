import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'

class TabBarShoppingCart extends Component {
    render() {
        let { cartnum } = this.props.shoppingcartInfo
        return (
            <View>
                <AntDesign name="shoppingcart" style={{ color: this.props.color }} size={26} />
                {
                    cartnum > 0
                        ? <Text style={[styles.shoppingcart_num, { width: cartnum > 9 ? 20 : 16 }]}>{cartnum}</Text>
                        : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    shoppingcart_num: {
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        position: 'absolute',
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 16,
        top: 0,
        left: 25,
        color: '#f00',
        borderColor: '#f00',
        fontWeight: '500'
    }
})

function mapPropsToState(state) {
    return {
        shoppingcartInfo: state.shoppingcartInfo
    }
}


export default connect(
    mapPropsToState
)(TabBarShoppingCart)