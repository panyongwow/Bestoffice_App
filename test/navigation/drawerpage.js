import {NavigationActions,createDrawerNavigator,DrawerActions,StackActions} from 'react-navigation'
import React,{Component} from 'react'
import {View,Text,Button,TouchableOpacity} from 'react-native'
import Page1 from './Page1'
class DrawerComponent extends Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <Text>MyDrawerComponent1233456</Text>
                <Button title='Drawer'
                    onPress={()=>{
                        alert(JSON.stringify(this.props))
                       
                    }}
                />
            </View>            
        )
    }
}


export default class TestDrawer extends Component{
    drawer(){
        //alert('ok')
        this.refs.MyDrawer.info='aaaaaaaa'
        this.refs.MyDrawer.dispatch(
            DrawerActions.toggleDrawer()
            //DrawerActions.openDrawer()
        )

    }
    render(){
        return(
            <View style={{height:300,backgroundColor:'gray'}}>
                <View style={{height:300,width:'80%',position:'absolute',zIndex:99,backgroundColor:'yellow'}}>
                    <DrawerStack  ref='MyDrawer' info='my12345' />
                </View>            
            {/* <View style={{flex:1, justifyContent:'center',alignItems:'center'}}> */}
                {/* <Button style={{width:50,height:50,zIndex:999}}
                    title='弹出1'
                    onPress={()=>{
                        this.drawer()
                    }}
                /> */}
                <View style={{flexDirection:'row-reverse'}}>
                <TouchableOpacity onPress={()=>{
                    this.drawer()
                }}>
                    <Text style={{height:50,width:100,backgroundColor:'red'}}>你好1</Text>
                </TouchableOpacity>
                </View>
                <View style={{height:50}}></View>
                 <Button style={{width:50,height:50,zIndex:999}}
                    title='弹出11234'
                    onPress={()=>{
                        this.drawer()
                    }}
                />               
            {/* </View> */}

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
    //contentComponent:props=>(<DrawerComponent info={props}  />)
    contentComponent:DrawerComponent
})