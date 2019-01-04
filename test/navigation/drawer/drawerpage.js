import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import {DrawerActions} from 'react-navigation'

export class OwnComponent extends Component{
    //static ownData=''

    constructor(props){
        super(props)
        this.ownData='ownData初始值'
    }
    static setData(data){
        ownData=data
    }
    render(){
        return(
            <View>
                <View style={{height:80,backgroundColor:'gray'}}><Text>我是Header</Text></View>
                <Button
                    title='确定'
                    onPress={()=>{
                        DrawerPage.test(ownData)
                    }}
                />
                <View style={{height:50}}></View>
                <Button
                    title='关闭'
                    onPress={()=>{
                        DrawerPage.closeDrawer()
                    }}
                />                
            </View>
        )
    }
}
export default class DrawerPage extends Component{
    static test(a){
        alert(a)
    }
    static closeDrawer(){
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }
    constructor(props){
        super(props)
       // alert(JSON.stringify(this.props.navigation))
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Text>这是DrawerPage</Text>
                <View style={{height:50}}></View>
                <Button
                    title='显示123'
                    onPress={()=>{
                        //OwnComponent.setData('你好啊123！')
                        //this.props.navigation.navigate('DrawerToggle')
                        this.props.navigation.toggleDrawer()
                        //this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                        //this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                        
                    }}
                />
            </View>
        )
    }
}