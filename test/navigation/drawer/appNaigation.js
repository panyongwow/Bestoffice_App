import React, { Component } from 'react'
import { View,Text,Button } from 'react-native'
import { createStackNavigator,createDrawerNavigator ,createBottomTabNavigator} from 'react-navigation'

import HomePage from './homepage'
import DrawerPage,{OwnComponent} from './drawerpage'

const  DrawerStock= createDrawerNavigator({
    DrawerPage:DrawerPage
},{
    contentComponent:OwnComponent,
    //useNativeAnimations:true,
    //drawerLockMode:'unlocked',
    drawerPosition:'right',
})


const MainStock=  createBottomTabNavigator({
    HomePage:HomePage,
    // Main:{
    //     screen:MainStock
    // }
    
})

export default createStackNavigator({
    Main:{
        screen:MainStock
    },
    Drawer:{
        screen:DrawerStock
    } 
},{
    navigationOptions:{
        header:null
    }
})
