import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createTabNavigator,StackNavigator} from 'react-navigation'
import React from 'react'
import {Button,Image} from 'react-native'
import HomePage from '../containers/homepage'
import My from '../containers/my'
import ShoppingCart from '../containers/shoppingcart'
import ListGoods from '../containers/listgoods'
import Welcome from '../../welcome'
import Product from '../containers/product'
import TopList from '../containers/toplist'
import News from '../containers/news'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const RootStack=createStackNavigator({
    Welcome:{screen:Welcome},
    Product:{screen:Product},
    Drawer:{
        screen:createDrawerNavigator({
            TopList:{
                screen:TopList
            },
            News:{
                screen:News
            }
        },{
            drawerPosition:'right',
            drawerWidth:200,
            useNativeAnimations:true
        })
    },
    Main:{
        screen:createBottomTabNavigator({
            HomePage:{
                screen:HomePage,
                navigationOptions:{
                    tabBarLabel:'首页',
                    tabBarIcon:({tintColor,focused})=>(
                        <AntDesign name="home" style={{color:tintColor}} size={26} />
                    )
                }
            },
            Listgoods:{
                screen:ListGoods,
                navigationOptions:{
                    tabBarLabel:'分类',
                    tabBarIcon:({tintColor,focused})=>(
                        <AntDesign name="bars" style={{color:tintColor}} size={26} />
                    )            
                }
            },    
            ShoppingCart:{
                screen:ShoppingCart,
                navigationOptions:{
                    tabBarLabel:'购物车',
                    tabBarIcon:({tintColor,focused})=>(
                        <AntDesign name="shoppingcart" style={{color:tintColor}} size={26} />
                    )            
                }
            },
            My:{
                screen:My,
                navigationOptions:{
                    tabBarLabel:'我的',
                    tabBarIcon:({tintColor,focused})=>(
                        <AntDesign name="user" style={{color:tintColor}} size={26} />
                    )            
                }
            }
        },{
            navigationOptions:{
                tintColor:'red'
            },
            tabBarOptions: {
                activeTintColor: 'red',
                inactiveTintColor: 'gray',
              },    
        }),
        navigationOptions:({navigation})=>({
            header:null
        })
    }
},{navigationOptions:{
    header:null
}})
