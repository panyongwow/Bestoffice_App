import React, { Component } from 'react'
import { View,Text,Button } from 'react-native'
import { createStackNavigator,createDrawerNavigator ,createBottomTabNavigator} from 'react-navigation'

import HomePage from './homepage'
import DrawerPage,{OwnComponent} from './drawerpage'
import Page1 from './page1'

const  DrawerStock= createDrawerNavigator({
    DrawerPage:DrawerPage
},{
    contentComponent:OwnComponent,
    drawerPosition:'right',
})


const MainStock=  createBottomTabNavigator({
    HomePage:HomePage,
    Page1:Page1,
    // Drawer:DrawerStock
    // Main:{
    //     screen:MainStock
    // }
    
})

export default createStackNavigator({
    Drawer:{
        screen:DrawerStock,
        navigationOptions:{
            header:null
        }
    }
    // ,     
    // Main:{
    //     screen:MainStock
    // }

})
