import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createTabNavigator,StackNavigator} from 'react-navigation'
import React from 'react'
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

export default createBottomTabNavigator({
    Home:HomePage,
    Details:Details
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