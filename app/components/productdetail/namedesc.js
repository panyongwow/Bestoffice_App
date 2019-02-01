import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import Tag from '../../components/tag'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

//商品单页-名称、价格、短描述、特价、直送、协议价区域
export default class NameDesc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }
    }
    showService() {
        this.setState({
            modalVisible: true
        })
    }
    render() {
        let p = this.props.data
        return (
            <View style={this.props.style}>
                <ServiceModal
                    showModal={this.state.modalVisible}
                    closedModal={() => {
                        this.setState({
                            modalVisible: false
                        })
                    }}
                />
                <View style={styles.inner}>
                    {/* {
                        p.isgift
                            ? <Text></Text>
                            : <Text style={styles.price_pre}>
                                &yen;&nbsp;<Text style={styles.price}>{p.price}</Text>
                            </Text>
                    } */}
                    <Text style={styles.price_pre}>
                        &yen;&nbsp;
                        <Text style={styles.price}>
                            {p.isgift ? 0 : p.price}
                        </Text>
                    </Text>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ marginRight: 15 }}
                            onPress={() => { alert('收藏') }}
                        >
                            <AntDesign name='hearto' size={18} color='red' />
                            <Text style={styles.icon}>收藏</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.showService()
                            }}
                        >
                            <Entypo name='tools' size={18} color='red' />
                            <Text style={styles.icon}>售后</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.name}>{p.name}</Text>
                {
                    p.simpledes.length > 0
                        ? <Text style={styles.simpledes}>{p.simpledes}</Text>
                        : null
                }
                {
                    p.isbargainprice || p.isdirect
                        ? <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            {p.isbargainprice ? <Tag title='特价' /> : null}
                            <Tag title='协议价' />
                            {p.isdirect ? <Tag title='厂家直送' /> : null}
                        </View>
                        : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inner: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    price_pre: {
        color: 'red', fontSize: 18
    },
    price: {
        color: 'red', fontSize: 22, fontWeight: 'bold'
    },
    icon: {
        fontSize: 10, color: 'red'
    },
    name: {
        fontSize: 15, fontWeight: 'bold'
    },
    simpledes: {
        fontSize: 12
    },
    // tag: {
    //     fontSize: 12, color: 'red', borderColor: 'red', borderWidth: 1, borderRadius: 10, height: 20, paddingLeft: 5, paddingRight: 5, textAlign: 'center', lineHeight: 20, marginRight: 5
    // }
})

//售后服务协议弹出框
class ServiceModal extends Component {
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
                            <View>
                                <Text style={[modalstyles.title, { marginTop: 5 }]}>服务承诺</Text>
                                <Text style={modalstyles.info}>百思通办公承诺，商品自售出之日（以实际收货日期为准）起7日内可以退货，15日内可以换货，客户可与百思通的客服中心联系办理退换货事宜，客服热线：<Text style={{ color: '#f00', fontWeight: 'bold', fontSize: 13 }}>400-158-1588</Text></Text>
                                <Text style={modalstyles.info}>本网站所售产品均为厂商正品，如有任何问题可与我们客服人员联系，我们会在第一时间跟您沟通处理。我们将争取以最低的价格、最优的服务来满足您最大的需求。</Text>
                                <Text style={modalstyles.info}>开箱验货：签收时在付款后与配送人员当面核对：商品及配件、应付金额、商品数量及发货清单、发票（如有）、赠品（如有）等； 如存在包装破损、商品错误、商品短缺、商品存在质量问题等影响签收的因素，您可以拒收全部或部分商品，相关的赠品，配件或 捆绑商品应一起当场拒收；为了保护您的权益，建议您尽量不要委托他人代为签收；如由他人代为签收商品而没有在配送人员在场的情况 下验货，则视为您所订购商品的包装无任何问题。</Text>
                                <Text style={[modalstyles.title, { marginTop: 10 }]}>温馨提示</Text>
                                <Text style={modalstyles.info}>由于部分商品包装更换较为频繁，因此您收到的货品有可能与图片不完全一致，请您以收到的商品实物为准，同时我们会尽量做到及时更新， 由此给您带来不便多多谅解，谢谢！</Text>
                            </View>
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
