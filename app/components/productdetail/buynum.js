import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal, Image, TextInput, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

//商品单页-购买数量区域
export default class BuyNum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buyNum: props.buyNum,
            modalVisible: false
        }
    }
    showBuyNumModal() {
        this.setState({
            modalVisible: true
        })
    }
    changeBuyNum(num) {
        this.setState({
            buyNum: num,
            modalVisible:false
        })
        this.props.changeBuyNum(num)   //传递购买数量给父组件
    }
    render() {
        return (
            <View>
                <BuyNumModal
                    showModal={this.state.modalVisible}
                    buyNum={this.state.buyNum}
                    data={this.props.data}
                    changeBuyNum={(num) => {
                        this.changeBuyNum(num)
                    }}
                />

                <TouchableOpacity style={[this.props.style, styles.container]}
                    onPress={() => {
                        this.showBuyNumModal()
                    }
                    }
                >
                    <View style={styles.inner}>
                        <Text style={styles.title}>已选</Text>
                        <Text style={styles.buynum}>{this.state.buyNum}{this.props.data.measurement}</Text>
                    </View>
                    <Text style={styles.changenum}>更改&gt;</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50
    },
    inner: {
        flexDirection: 'row', alignItems: 'center'
    },
    title: {
        fontSize: 13, color: '#adadad', marginRight: 15
    },
    buynum: {
        fontSize: 14, fontWeight: 'bold'
    },
    changenum: {
        textAlignVertical: 'center', fontSize: 12
    }
})

//购买数量弹出框
class BuyNumModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            buyNum: props.buyNum
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.showModal) {
            this.setState({
                modalVisible: true
            })
        }
    }
    componentDidMount() {
        //  alert(this.props.data.pic_detail[0].picname)
    }
    // setModalVisible = (visible) => {
    //     // if (!visible) {
    //          this.props.changeBuyNum(this.state.buyNum)
    //     // }
    //     this.setState({ modalVisible: visible });

    // }
    closeModal() {

        setTimeout(() => {
            this.setState({
                modalVisible: false
            })
        });
        this.props.changeBuyNum(this.state.buyNum)
    }
    addBuyNum() {
        this.setState({
            buyNum: parseInt(this.state.buyNum) + 1
        })
    }
    reduceBuyNum() {
        this.setState({
            buyNum: this.state.buyNum == 1
                ? 1
                : this.state.buyNum - 1
        })
    }
    render() {
        //let pic_s = this.props.data.pic_detail[0].picname.replace(/_l.jpg/g, '_s.jpg')
        let p = this.props.data
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    console.log('close')
                }}
            >
                <View style={modalstyles.container}>
                    <View style={modalstyles.container_inner}>
                        <View style={{ height: 250 }}>
                            <TouchableOpacity style={{ flexDirection: 'row-reverse' }}
                                activeOpacity={0.7}
                                onPress={() => {
                                    this.closeModal()
                                }}
                            >
                                <AntDesign name='close' size={22} color='gray' style={modalstyles.close} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={modalstyles.product_image}
                                    source={{ uri: p.pic_detail[0].picname }}
                                />
                                <View style={modalstyles.product_info}>
                                    <Text 
                                        style={modalstyles.product_name}
                                        numberOfLines={2}
                                        ellipsizeMode='tail'
                                    >
                                        {p.name}
                                    </Text>
                                    <Text style={modalstyles.product_innercode}>商品编码:&nbsp;{p.innercode}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单位:&nbsp;{p.measurement}</Text>
                                    <Text style={modalstyles.product_price_pre}>
                                        &yen;&nbsp;
                                        <Text style={modalstyles.product_price}>{p.price}</Text>
                                    </Text>

                                </View>
                            </View>
                            <View style={modalstyles.buynum_container}>
                                <Text style={{ fontSize: 16 }}>购买数量</Text>
                                <View style={modalstyles.buynum_inner}>
                                    <TouchableOpacity
                                        style={modalstyles.buynum_button}
                                        onPress={() => {
                                            this.reduceBuyNum()
                                        }}
                                    >
                                        <AntDesign name='minus' size={20} color='gray' style={modalstyles.buynum_icon} />
                                    </TouchableOpacity>
                                    <TextInput
                                        style={modalstyles.buynum_input}
                                        keyboardType='numeric'
                                        value={this.state.buyNum.toString()}
                                        onChangeText={(text) => {
                                            this.setState({
                                                buyNum: text
                                            })
                                        }}
                                    />
                                    <TouchableOpacity
                                        style={modalstyles.buynum_button}
                                        onPress={() => {
                                            this.addBuyNum()
                                        }}
                                    >
                                        <AntDesign name='plus' size={20} color='gray' style={modalstyles.buynum_icon} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                alert('加入购物车！')
                            }}
                        >
                            <Text style={modalstyles.shoppingcart}>加入购物车</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            this.closeModal()
                        }}
                    >
                        <View style={{ height: 1000 }}></View>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

const modalstyles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column-reverse', backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    container_inner: {
        justifyContent: 'space-between', backgroundColor: '#fff', height: 350
    },
    close: {
        marginTop: 10, marginRight: 10
    },
    product_image: {
        height: 75, width: 75, marginLeft: 10
    },
    product_info: {
        flex: 1, justifyContent: 'space-around', height: 75, paddingLeft: 10, paddingRight: 10
    },
    product_name: {
        fontSize: 14, fontWeight: 'bold'
    },
    product_innercode: {
        fontSize: 12
    },
    product_price_pre: {
        color: 'red', fontSize: 14
    },
    product_price: {
        color: 'red', fontSize: 18, fontWeight: 'bold'
    },
    buynum_container: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 10, marginTop: 30, paddingTop: 10, paddingBottom: 10, borderBottomColor: '#f3f3f3', borderBottomWidth: 1, borderTopColor: '#f3f3f3', borderTopWidth: 1
    },
    buynum_inner: {
        flexDirection: 'row', alignItems: 'center'
    },
    buynum_button: {
        backgroundColor: '#f3f3f3', width: 36, height: 36
    },
    buynum_icon: {
        lineHeight: 36, marginLeft: 8
    },
    buynum_input: {
        height: 30, width: 50, padding: 0, textAlign: 'center', fontSize: 20, fontWeight: 'bold', lineHeight: 30
    },
    shoppingcart: {
        backgroundColor: '#f00', color: '#fff', textAlign: 'center', lineHeight: 50, height: 50, fontSize: 16, fontWeight: 'bold'
    }
})