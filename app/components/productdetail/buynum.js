import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal, Image, TextInput, TouchableHighlight, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

//商品单页-购买数量区域
export default class BuyNum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buyNum: 2,
            buyNumModalVisible: false
        }
    }
    showBuyNumModal() {
        this.setState({
            buyNumModalVisible: true
        })
    }
    changeBuyNum(num) {
        this.setState({
            buyNum: num
        })
        this.props.changeBuyNum(num)   //传递购买数量给父组件
    }
    render() {
        return (
            <View>
                <BuyNumModal
                    showModal={this.state.buyNumModalVisible}
                    buyNum={this.state.buyNum}
                    data={this.props.data}
                    changeBuyNum={(num) => {
                        this.changeBuyNum(num)
                    }}
                />

                <TouchableOpacity style={[this.props.style, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50 }]}
                    onPress={() => {
                        this.showBuyNumModal()
                    }
                    }
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>已选</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{this.state.buyNum}个</Text>
                    </View>
                    <Text style={{ textAlignVertical: 'center', fontSize: 12 }}>更改&gt;</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

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
        //this.props.changeBuyNum(this.state.buyNum)

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
                <View style={{ flex: 1, flexDirection: 'column-reverse', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                    <View style={{ justifyContent: 'space-between', backgroundColor: '#fff', height: 350 }}>
                        {/* <Text
                            onPress={() => {
                                this.closeModal()
                            }}
                            style={{ fontSize: 20, marginTop: 10 }}>
                            关闭
                        </Text>
                        <TextInput
                            style={{ height: 30, width: 100, borderColor: 'red', borderWidth: 1, padding: 5 }}
                            value={this.state.buyNum.toString()}
                            onChangeText={(text) => {
                                this.setState({
                                    buyNum: text
                                })
                            }}
                        /> */}
                        <View style={{ height: 250 }}>
                            <TouchableOpacity style={{ flexDirection: 'row-reverse' }}
                                activeOpacity={0.7}
                                onPress={() => {
                                    this.closeModal()
                                }}
                            >
                                <AntDesign name='close' size={22} color='gray' style={{ marginTop: 10, marginRight: 10 }} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={{ height: 75, width: 75, marginLeft: 10 }}
                                    source={{ uri: p.pic_detail[0].picname }}
                                />
                                <View style={{ flex: 1, justifyContent: 'space-around', height: 75, paddingLeft: 10, paddingRight: 10 }}>
                                    <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{p.name}</Text>
                                    <Text style={{ fontSize: 12}}>商品编码:&nbsp;{p.innercode}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单位:&nbsp;{p.measurement}</Text>
                                    <Text style={{ color: 'red', fontSize: 14 }}>
                                        &yen;&nbsp;
                                        <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>{p.price}</Text>
                                    </Text>

                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', margin: 10,marginTop:20,paddingTop:10,paddingBottom:10, borderBottomColor:'#f3f3f3',borderBottomWidth:1,borderTopColor:'#f3f3f3',borderTopWidth:1 }}>
                                <Text style={{ fontSize: 16 }}>购买数量</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <TouchableOpacity  style={{backgroundColor:'#f3f3f3',width:36,height:36}}>
                                        <AntDesign name='minus' size={20} color='gray' style={{lineHeight:36,marginLeft:8}} />
                                    </TouchableOpacity>
                                    <TextInput
                                        style={{ height: 30, width: 50, padding:0,textAlign: 'center',fontSize:20,fontWeight:'bold', lineHeight:30}}
                                        value={this.state.buyNum.toString()}
                                        onChangeText={(text) => {
                                            this.setState({
                                                buyNum: text
                                            })
                                        }}
                                    />
                                    <TouchableOpacity  style={{backgroundColor:'#f3f3f3',width:36,height:36}}>
                                        <AntDesign name='plus' size={20} color='gray' style={{lineHeight:36,marginLeft:8}} />
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
                            <Text style={{ backgroundColor: '#f00', color: '#fff', textAlign: 'center', lineHeight: 50, height: 50, fontSize: 16, fontWeight: 'bold' }}>加入购物车</Text>
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