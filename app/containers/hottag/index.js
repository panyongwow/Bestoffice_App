import React,{Component} from 'react'
import {View} from 'react-native'
import HotTagComponent from '../../components/hottag'
import HomePageDao,{FLAG_HOMEPAGE} from '../../dao/homepage'

export default class HotTag extends Component{
    constructor(props){
        super(props)
        // this.state={
        //     data:[]
        // }
    }
    // componentDidMount(){
    //     HomePageDao.get(FLAG_HOMEPAGE.TAG)
    //         .then(result=>{
    //             this.setState({
    //                 data:result
    //             })
    //         })
    //         .catch(error=>{
    //             //alert(error)
    //         })
    // }    
    render(){
        return (
            <View style={{backgroundColor:'#f00',paddingBottom:5}}>
                {
                    this.props.data.length===0
                    ?null
                    :<HotTagComponent tag={this.props.data} navigation={this.props.navigation} />
                }
            </View>
        )        
    }
}