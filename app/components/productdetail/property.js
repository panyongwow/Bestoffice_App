import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

//商品单页-参数区域
export default class Property extends Component {
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
            p.attribute_detail.length > 0
                ? <View>
                    <PropertyModal
                        data={this.props.data}
                        showModal={this.state.modalVisible}
                        closedModal={() => {
                            this.setState({
                                modalVisible: false
                            })
                        }}
                    />
                    <TouchableOpacity
                        style={[this.props.style, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }]}
                        onPress={() => {
                            this.showModal()
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>参数</Text>
                            <Text style={styles.title}>编码:{p.innercode}&nbsp;&nbsp;&nbsp;</Text>
                            <Text style={styles.title}>品牌:{p.company}&nbsp;&nbsp;&nbsp;</Text>
                            <Text style={{ fontSize: 12 }}>单位:{p.measurement}</Text>
                        </View>
                        <Text style={{ textAlignVertical: 'center', fontSize: 12 }}>更多&gt;</Text>
                    </TouchableOpacity>
                </View>
                : <View style={[this.props.style, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }]}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 13, color: '#adadad', marginRight: 15 }}>参数</Text>
                        <Text style={styles.title}>编码:{p.innercode}&nbsp;&nbsp;&nbsp;</Text>
                        <Text style={styles.title}>品牌:{p.company}&nbsp;&nbsp;&nbsp;</Text>
                        <Text style={{ fontSize: 12 }}>单位:{p.measurement}</Text>
                    </View>
                </View>

        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 12, marginRight: 10
    }
})

//参数详情弹出框
class PropertyModal extends Component {
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
        let p = this.props.data.attribute_detail

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
                            <ScrollView style={{ height: 370 }}>
                                {
                                    p.map((item, index) => {
                                        return (
                                            <View key={index} style={modalstyles.detailborder}>
                                                <Text style={modalstyles.title}>{item.name}</Text>
                                                <Text style={modalstyles.info}>{item.value}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>

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
        justifyContent: 'space-between', backgroundColor: '#fff', height: 400
    },
    close: {
        marginTop: 10
    },
    detailborder:{
        flexDirection:'row',marginTop:5
    },
    title: {
        width:90,fontSize: 12, color: '#adadad',textAlign:'right',paddingRight:7
    },
    info: {
        flex:1,fontSize: 12
    }
})
