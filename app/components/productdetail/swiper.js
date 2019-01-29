import React, { Component } from 'react'
import { View,  Image, StyleSheet,  Dimensions} from 'react-native'
import Swiper from 'react-native-swiper'

//商品单页-轮播图区域
export default class SwiperComponent extends Component {
    constructor(props) {
        super(props)
        let { width} = Dimensions.get('window')
        this.picwidth=width
    }
    componentDidMount() {
        // alert(JSON.stringify(this.props.data.pic_detail))
    }
    render() {
        return (
            <View style={[this.props.style, { height:this.picwidth }]}>
                <Swiper
                    style={{ backgroundColor: 'white' }}
                    horizontal={true}
                    autoplay={true}
                    autoplayTimeout={4}
                    paginationStyle={{ bottom: 10 }}
                    showsButtons={false}
                    showsPagination={true}
                >
                    {
                        this.props.data.pic_detail.map((item, index) => {
                            return (
                                <View key={index}  style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image resizeMode="contain" style={{ height:this.picwidth , width:this.picwidth }}source={{ uri: item.picname }} />
                                </View>
                            )
                        })
                    }


                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewborder: {
        paddingTop: 10, paddingBottom: 10, borderBottomColor: '#f3f3f3', borderBottomWidth: 2
    }
})