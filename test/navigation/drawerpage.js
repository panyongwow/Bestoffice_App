import {NavigationActions,createDrawerNavigator,DrawerActions} from 'react-navigation'
import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import Page1 from './Page1'
class DrawerComponent extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <Text>MyDrawerComponent1233456</Text>
                <Button title='Drawer'
                    onPress={()=>{
                        alert('Drawer!')
                       
                    }}
                />
            </View>            
        )
    }
}


export default class TestDrawer extends Component{
    drawer(){
        this.refs.MyDrawer.dispatch(
            DrawerActions.toggleDrawer()
        )
    }
    render(){
        return(
            <View >
            {/* <View style={{flex:1, justifyContent:'center',alignItems:'center'}}> */}
                <Button style={{width:50,height:50}}
                    title='弹出1'
                    onPress={()=>{
                        this.drawer()
                    }}
                />
                <View style={{height:50}}></View>
                 <Button style={{width:50,height:50}}
                    title='弹出2'
                    onPress={()=>{
                        this.drawer()
                    }}
                />               
            {/* </View> */}
            <DrawerStack style={{height:300,width:300,position:'absolute',top:1,left:1}} ref='MyDrawer' />
            </View>
        )
    }
}

class Blank extends Component{
    render(){
        return(
            <View style={{height:0}}></View>
        )
    }
}
const DrawerStack=createDrawerNavigator({
    My:Blank
},{
    contentComponent:DrawerComponent
})