import React, { Component } from 'react'
import { View, Image, TouchableHighlight, Text, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Search from '../search'

export default class Header extends Component {

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.container_top}>
                    {
                        this.props.isShowBack
                            ? <View>
                                <TouchableHighlight
                                    activeOpacity={0.5}
                                    underlayColor='red'
                                    onPress={() => {
                                        this.props.navigation.goBack()
                                    }}
                                >
                                    <FontAwesome5 name='angle-left' size={25} color='white' style={{ paddingTop: 3 }} />
                                </TouchableHighlight>
                            </View>
                            : <View style={{ flexDirection: 'row' }}>
                                <View style={{ height: 30 }}>
                                    <Image tintColor='white' style={styles.image} source={require('../../res/images/logo_2.png')} />
                                </View>
                                <View style={styles.logo}>
                                    <Text style={styles.tip}>百思通办公</Text>
                                    <Text style={styles.tip}>400-158-1588</Text>
                                </View>
                            </View>
                    }
                    <Search width={this.props.isShowBack ? 240 : 200} />
                    {/* <View >
                        <TouchableHighlight>
                            <FontAwesome5 name='grip-vertical' size={22} color='white' style={{ paddingTop: 3 }} />
                        </TouchableHighlight>
                    </View> */}
                    <View>
                        <TouchableHighlight>
                            <FontAwesome5 name='align-justify' size={22} color='white' style={{ paddingTop: 3 }} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: 'red',
        justifyContent: 'space-around',
    },
    container_top: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    image: {
        width: 30,
        height: 30,
        marginLeft: 0
    },
    tip: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    logo: {
        marginTop: 4,
        height: 30,
        color: 'yellow',
        flexDirection: 'column',
        alignItems: 'center'
    }
})