import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createTabNavigator,StackNavigator, DrawerItems, SafeAreaView} from 'react-navigation'
import React,{Component} from 'react'
import {View,Button,Text,StyleSheet,ScrollView} from 'react-native'
import { DrawerActions } from 'react-navigation-drawer';

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
class My extends Component{
    static contentComponent=DrawerComponent
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
                <Text>This is My...</Text>
                <Button title='test1'
                    onPress={()=>{
                         this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                        // this.props.navigation.setParams({
                        //     'contentComponent':<DrawerComponent />
                        // })                        
                        // alert('ok')
                    }}
                />  
                <View style={{height:50}}></View>  
                <Button title='test122'
                    onPress={()=>{
                        alert(JSON.stringify(this.props.navigation))
                        //alert(this.refs.myStack)
                       // alert(JSON.stringify(this.props.navigation.getParam('contentComponent')))
                    }}
                />                    
            </View>
        )
    }
}
export default DrawerStack=createDrawerNavigator({
    My:{
        screen:My,
        contentComponent:DrawerComponent
    }
},
// {
//     ref:'myStack'
// }
// {
//    contentComponent:DrawerComponent
// }
)
