import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import HeaderComponent from '../../components/header'
import HomePageDao from '../../dao/homepage'

export default class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        HomePageDao.get()
            .then(result=>{
                this.setState({
                    data:result.tag
                })
            })
    }
    render(){
        return (
            <View style={{backgroundColor:'#f00'}}>
                <HeaderComponent tag={this.state.data} navigation={this.props.navigation} />
                <Button title='test1' onPress={()=>{
                    // HomePageDao.get('TAG')
                    //    .then(result=>{
                    //        alert(JSON.stringify(result))
                    //    })
                    alert(JSON.stringify(HomePageDao.get('TAG')))
                }} />
            </View>
        )
    }
}