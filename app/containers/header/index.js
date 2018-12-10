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
        // this.setState({
        //     data:HomePageDao.get('TAG')
        // })
        // HomePageDao.get('TAG')
        //     .then(result=>{
        //         this.setState({
        //             data:result
        //         })
        //     })
        HomePageDao.get()
            .then(result=>{
                // alert(JSON.stringify(result.tag))
                this.setState({
                    data:result.tag
                })
            })
        // alert(JSON.stringify(HomePageDao.get()))               
    }
    render(){
        return (
            <View style={{backgroundColor:'#f00'}}>
                {
                    this.state.data.length===0
                    ?null
                    :<HeaderComponent tag={this.state.data} navigation={this.props.navigation} />
                }
                
                <Button title='test1' onPress={()=>{
                    // HomePageDao.get('TAG')
                    //    .then(result=>{
                    //        alert(JSON.stringify(result))
                    //    })
                    //alert(JSON.stringify(HomePageDao.get('TAG')))
                    alert(this.state.data.length)
                }} />
            </View>
        )
    }
}