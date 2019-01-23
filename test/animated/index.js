import React, { Component } from 'react'
import { View, Animated, Button, Text } from 'react-native'

class AnimatedView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topAnim: new Animated.Value(1000)
        }
    }
    // componentDidMount() {
    //     Animated.timing(
    //         this.state.topAnim, { toValue: 200 }
    //     ).start()
    // }
    componentWillReceiveProps(nextProps) {
        if (nextProps.display) {
            Animated.timing(
                this.state.topAnim, { toValue: 200 }
            ).start()
        } else {
            Animated.timing(
                this.state.topAnim, { toValue: 1000 }
            ).start()
        }
    }
    render() {
        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    top: this.state.topAnim
                }}
            >
                <Button
                    title='关闭'
                    onPress={() => {
                        Animated.timing(
                            this.state.topAnim, { toValue: 1000 }
                        ).start()
                    }}
                />
                {this.props.children}
            </Animated.View>
        )
    }
}

export default class AnimatedTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayChild: false
        }
    }
    render() {
        return (
            <View>
                <View>
                    <Button
                        title='升起'
                        onPress={() => {
                            this.setState({
                                displayChild: !this.state.displayChild
                            })
                        }}
                    />
                    <Text>{this.state.displayChild.toString()}</Text>
                    <View style={{ height: 20 }}></View>
                    <Button
                        title='测试1'
                        onPress={() => {
                            alert('OK')
                        }}
                    />
                    <AnimatedView
                        style={{ height: 500, backgroundColor: 'gray' }}
                        display={this.state.displayChild}
                    >
                        <Text>测试</Text>

                    </AnimatedView>
                </View>
            </View>
        )
    }
}