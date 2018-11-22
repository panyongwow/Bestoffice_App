import React,{Component} from 'react'
import {View,Text,Button,AsyncStorage} from 'react-native'

export default class FeatchTest extends Component{
    constructor(){
        super()
        this.state={
            data:[]
        }
    }
    render(){
        return (
            <View>
                {/* <View style={{height:200}}>
                    <Text>{this.state.data}</Text>
                </View> */}
                <View style={{height:200,backgroundColor:'gray'}}>
                    {
                        this.state.data.map((item,i)=>{
                            return(
                                <Text key={i}>{item.picname}</Text>
                            )
                        })
                    }
                </View>
                <Button
                    title='获取网上数据并存入本地缓存'
                    onPress={()=>{
                        fetch('http://www.bestoffice.cn:8805/Ajax/homepage/list.ashx')
                            .then(res=>res.json())
                            .then(json=>{
                                // this.setState({
                                //     data:JSON.stringify(json.details)
                                // }) 
                                AsyncStorage.removeItem('tag')
                                AsyncStorage.setItem('tag',JSON.stringify(json.ad))
                                    .then(()=>{
                                        this.setState({
                                            data:[]
                                        })
                                        alert('ok')
                                    })
                                    .catch(error=>{
                                        alert(error)
                                    })
                            })
                    }}
                />
                <Button 
                    title='获取本地数据'
                    onPress={()=>{
                        AsyncStorage.getItem('tag')
                            .then((value)=>{
                                this.setState({
                                     data:JSON.parse(value)
                                })
                            })
                     }}
                />
            </View>
        )
    }
}