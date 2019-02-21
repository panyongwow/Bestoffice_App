import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            change: false,
            count: 0,
            nextProps:''
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            change: true,
            count: this.state.count + 1,
            nextProps:JSON.stringify(nextProps)
        })
    }
    render() {
        return (
            <View>
                <Text>这是首页</Text>
                <Text>数据发生改变：{this.state.change.toString()},次数：{this.state.count}</Text>
                <Text>nextProps：{this.state.nextProps}</Text>
                <Text>用户信息：{JSON.stringify(this.props.loginInfo)}</Text>
                <Button
                    title='跳转到登录页'
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginInfo: state.loginInfo
    }
}

export default connect(
    mapStateToProps
)(MainPage)
