import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createTabNavigator,StackNavigator} from 'react-navigation'
import React from 'react'
import HomePage from './HomePage'
import Page1 from './Page1'
import Page2 from './Page2'

export const RootStack=createStackNavigator({
    HomePage:{
        screen:HomePage
    },
    Page1:{
        screen:Page1
    },
    Page2:{
        screen:Page2
    }
},{
    navigationOptions:{
        
    }
})