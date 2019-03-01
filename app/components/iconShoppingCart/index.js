import React, { Component } from 'react'
import { View, TouchableOpacity,Text, Dimensions,StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'

class IconShoppingCart extends Component {
    constructor(props) {
        super(props)
        let { height, width } = Dimensions.get('window')
        this.state = {
            top: height - 120,
            left: width - 70,
        }
    }
    render() {
        let { cartnum } = this.props.shoppingcartInfo
        return (
            cartnum > 0
                ? <View style={{ position: 'absolute', zIndex: 9999, top: this.state.top, left: this.state.left }}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 40, height: 40, opacity: 0.5, borderColor: 'gray', borderWidth: 2, borderRadius: 20 }}
                        onPress={() => {
                            alert('ok')
                        }}
                    >
                        <AntDesign name="shoppingcart" size={30} />
                        {
                            cartnum > 0
                                ? <Text style={[styles.shoppingcart_num, { width: cartnum > 9 ? 20 : 16 }]}>{cartnum}</Text>
                                : null
                        }
                    </TouchableOpacity>
                </View>
                : null
        )

    }
}

const styles = StyleSheet.create({
    shoppingcart_num: {
        height: 16,
        borderRadius: 8,
        borderWidth: 0,
        position: 'absolute',
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 16,
        top: 7,
        left: 11,
        color: '#f00',
        borderColor: '#f00',
        fontWeight: '500'
    }
})
function mapStateToProps(state) {
    return {
        shoppingcartInfo: state.shoppingcartInfo
    }
}

export default connect(
    mapStateToProps
)(IconShoppingCart)