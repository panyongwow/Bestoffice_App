import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Button } from "react-native";

export default class ModalExample extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.");
                    }}
                    // style={{backgroundColor:'gray'}}
                >
                    <View style={{flex:1,backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            >
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={{height:300,backgroundColor:'white'}}>

                        </View>
                    </View>
                </Modal>

                <Button
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                    title="显示21"
                >
                </Button>
            </View>
        );
    }
}