import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

//商品单页-赠品区域
export default class Gift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }
    showModal() {
        this.setState({
            modalVisible: true
        })
    }
    render() {
        let p = this.props.data
        return (
            <View>
                <GiftModal
                    data={this.props.data}
                    showModal={this.state.modalVisible}
                    closedModal={()=>{
                        this.setState({
                            modalVisible: false
                        })
                    }}
                />                
                <TouchableOpacity style={[this.props.style, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}
                    onPress={() => {
                        this.showModal()
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>促销</Text>
                        <Text style={styles.tag}>赠品</Text>
                        <Text style={{ fontSize: 12 }}>&nbsp;购买该商品有<Text style={{ fontSize: 13, fontWeight: 'bold' }}>{p.giftnum}</Text>个赠品</Text>
                    </View>
                    <Text style={{ textAlignVertical: 'center', fontSize: 12 }}>详情&gt;</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tag: {
        fontSize: 12, color: 'red', borderColor: 'red', borderWidth: 1, borderRadius: 10, height: 20, paddingLeft: 5, paddingRight: 5, textAlign: 'center', lineHeight: 20, marginRight: 5
    }
})

//赠品详情弹出框
class GiftModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.showModal) {
            this.setState({
                modalVisible: true
            })
        }
    }

    closeModal() {
        setTimeout(() => {
            this.setState({
                modalVisible: false
            })
        })
        this.props.closedModal()
    }

    render() {
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
                        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                            <TouchableOpacity style={{ flexDirection: 'row-reverse' }}
                                activeOpacity={0.7}
                                onPress={() => {
                                    this.closeModal()
                                }}
                            >
                                <AntDesign name='close' size={22} color='gray' style={modalstyles.close} />
                            </TouchableOpacity>
                        </View>
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
        justifyContent: 'space-between', backgroundColor: '#fff', height: 390
    },
    close: {
        marginTop: 10
    },
    title: {
        fontSize: 13, fontWeight: 'bold', textAlign: 'center', color: 'gray'
    },
    info: {
        fontSize: 12, marginTop: 5
    }
})