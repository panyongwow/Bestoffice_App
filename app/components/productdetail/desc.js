import React, { Component } from 'react'
import { View, Text} from 'react-native'
import Tools from '../../util/tools'
import AutoHeightWebView from 'react-native-webview-autoheight'

//商品单页-描述区域
export default class Desc extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let p = this.props.data
        return (
            <View style={this.props.style}>
                <Text style={{ fontSize: 13, color: '#adadad', marginLeft: 10 }}>商品介绍</Text>
                {p.description.length > 0
                    ? <AutoHeightWebView
                        originWhitelist={['*']}
                        source={{ html: Tools.adjustHTML(p.description) }}
                    />
                    : null
                }
                {p.imgdes.length > 0
                    ? <AutoHeightWebView
                        originWhitelist={['*']}
                        source={{ html: Tools.adjustHTML(p.imgdes) }}
                    />
                    : null
                }
                {p.detaildes.length > 0
                    ? <AutoHeightWebView
                        originWhitelist={['*']}
                        source={{ html: Tools.adjustHTML(p.detaildes) }}
                    />
                    : null
                }   
                {p.featuredes.length > 0
                    ? <AutoHeightWebView
                        originWhitelist={['*']}
                        source={{ html: Tools.adjustHTML(p.featuredes) }}
                    />
                    : null
                }                               
                {/* <AutoHeightWebView
                    originWhitelist={['*']}
                    source={{ html: Tools.imgHTMLAddWidth('<div style="font-size:0.8rem><p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/25224/30/2405/306629/5c1c7abcE20119d2c/fb55f6107a23c920.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/24030/18/2483/132267/5c1c7abcE6d90720b/8ca7a2a054c43cdc.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/29095/19/2399/186720/5c1c7abcEef845f14/9e772372b41f6878.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/20851/33/2417/177570/5c1c7abcE5ce1ee3f/2d0a311c05e4c055.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/28725/18/2371/186295/5c1c7abcEf44330f7/7c77f10e245e43ba.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/26621/9/2438/200861/5c1c7abcEf980b06a/2887575669250aaf.jpg" align="absmiddle" /> </p> <p>  <img class="" src="https://img10.360buyimg.com/imgzone/jfs/t1/14789/33/2419/263276/5c1c7abcE090de2f1/3e29ca4fd7171697.jpg" align="absmiddle" /> </p></div>') }}
                /> */}
            </View>
        )
    }
}