import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

//测试组件间的参数传递
export class ArgumentTransmit extends Component {
    constructor(){
        super()
        this.state={
            nowdata:0
        }
        this.setData=this.setData.bind(this)
    }
    setData(data){
        this.setState({
            nowdata:data
        })
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Nav NavSetData={this.setData} />
                </View>
                {/* <View style={{flex:1}}><Text>{this.state.nowdata}</Text></View> */}
                <View style={{ flex: 4 }} >
                    <Detail nowData={this.state.nowdata}/>
                </View>
            </View>

        )
    }
}

class Nav extends Component {
    selected(i){
        this.props.NavSetData(i)
    }
    render() {
        return (
            <View style={Styles.nav}>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <View key={index} style={Styles.child}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.selected(item)
                                    }}
                                    style={{width:'100%'}}
                                >
                                    <Text style={Styles.item}>{item}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
                {/* <View style={Styles.child}><Text style={Styles.item}>1</Text></View>
                <View style={Styles.child}><Text style={Styles.item}>2</Text></View>
                <View style={Styles.child}><Text style={Styles.item}>3</Text></View>
                <View style={Styles.child}><Text style={Styles.item}>4</Text></View>
                <View style={Styles.child}><Text style={Styles.item}>5</Text></View> */}
            </View>
        )
    }
}

class Detail extends Component {
    constructor(){
        super()
        this.state={
            data:0
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            data:nextProps.nowData
        })
        this.showInfo(nextProps.nowData)
    }
    showInfo(i){
        alert(i)
    }
    render() {
        return (
            <View style={{ height: 500, backgroundColor: 'blue' }}>
                <Text style={{color:'white'}}>{this.state.data}</Text>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    nav: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 500,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'yellow',
    },
    child: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    item: {
        height: 50,
        backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})
