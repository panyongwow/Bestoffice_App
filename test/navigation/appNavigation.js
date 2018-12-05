import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createTabNavigator,StackNavigator} from 'react-navigation'
import React from 'react'
import {View,Button,Text} from 'react-native'
import HomePage from './HomePage'
import Details from './Page1'
import Setting from './Page2'

// export default createBottomTabNavigator({
//     Home:{
//         screen:createStackNavigator({
//             Home:HomePage,
//             Details:Details,
//         })
//     },
//     Setting:{
//         screen:createStackNavigator({
//             Setting:Setting,
//             Details:Details,
//         })
//     }
// });



// const HomeStack=createStackNavigator({
//     Home:HomePage,
//     Details:Details,
// },{
//     navigationOptions:({navigation})=>({
//         header:null,
//     })
// });

// const SettingStack=createStackNavigator({
//     Setting:Setting,
//     Details:Details,
// });

// const SettingStack=createDrawerNavigator({
//     Setting:Setting
// })

class InfoPage extends React.Component{
    static navigationOptions={
        drawerLabel:'Info'
    };
    constructor(){
       super()
    }
    componentDidMount(){
        this.props.navigation.openDrawer()
    }
    render(){
        return(
            <View>
                <Text>这是我的信息</Text>
                <Button 
                    title='打开' 
                    onPress={()=>{
                        this.props.navigation.openDrawer()
                    }}
                />
            </View>
        )
    }
}

class PointPage extends React.Component{
    static navigationOptions={
        drawerLabel:'Point'
    };
    render(){
        return(
            <View>
                <Text>这是我的积分</Text>
            </View>
        )
    }
}

const MyStack=createDrawerNavigator({
    Info:InfoPage,
    Point:PointPage
})

export default createBottomTabNavigator({
    Home:HomePage,
    Details:Details,
    My:MyStack
},{
    navigationOptions:({navigation})=>({
        header:null,
    })
});


// export default class App extends React.Component {
//     render() {
//       return <MainStack />;
//     }
// }