import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createTabNavigator,StackNavigator, DrawerItems, SafeAreaView} from 'react-navigation'
import React from 'react'
import {View,Button,Text,StyleSheet,ScrollView} from 'react-native'
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
    // static navigationOptions={
    //     //drawerLabel:'Info',
    //     contentComponent:<DrawerContent />
    // };
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
                    title='打开12345' 
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

class DrawerContent extends React.Component{
    render(){
        return(
            <SafeAreaView >
                <Text>你好a 12112aaaaaaa！</Text>
            </SafeAreaView >
        )
    }
}

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        {/* <DrawerItems {...props} /> */}
        <Text>123</Text>
      </SafeAreaView>
    </ScrollView>
    // <SafeAreaView><Text>你好</Text></SafeAreaView >
  );
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

const MyStack=createDrawerNavigator({
    Info:{
        screen:InfoPage,
        navigationOptions:{
            contentComponent:DrawerContent 
        }
            
    },
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