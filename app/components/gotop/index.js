import React,{Component} from 'react'
import {View,TouchableOpacity,Dimensions} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class GoTop extends Component {
    constructor(props) {
        super(props)
        let { height, width } = Dimensions.get('window')
        this.state = {
            top: height - 100,
            left: width - 70,
        }
    }
    render() {
        return (
            <View style={{ position: 'absolute', zIndex: 9999, top: this.state.top, left: this.state.left }}>
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', width: 40, height: 40, opacity: 0.5, borderColor: 'gray', borderWidth: 2, borderRadius: 20 }}
                    onPress={() => {
                        this.props.scrollTop()
                    }}
                >
                    <MaterialIcons name='publish' size={30} color='gray' />
                </TouchableOpacity>
            </View>
        )
    }
}