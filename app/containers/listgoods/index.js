import React, { Component } from 'react'
import { View,StyleSheet,} from 'react-native'
import Header from '../../components/header'
import Left from './subpage/left'
import Right from './subpage/right'

export default class ListGoods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedID: 0
        }
    }
    componentWillMount(){
        let { navigation } = this.props
        let listgoodsID = navigation.getParam('id', 0)   //路由传递过来的已经目录ID
        this.setState({
            selectedID:listgoodsID
        })
    }
    //左侧一级目录已经显示完毕
    //那么接下来就是在右侧显示该一级目录下相应的二级与三级目录
    parentShowComplete(id) {
        this.setState({
            selectedID: id
        })
    }

    //选择某个一级目录
    //右侧二级与三级目录刷新
    changeListgoods(id) {
        this.setState({
            selectedID: id
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ flex: 1 }}>
                        <Left
                            navigation={this.props.navigation}
                            myID={this.state.selectedID}
                            changeListgoods={(id) => { this.changeListgoods(id) }}
                            showComplete={(id) => { this.parentShowComplete(id) }}
                        />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Right
                            parentID={this.state.selectedID}
                            navigation={this.props.navigation}
                        />
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})