import {createStackNavigator,createDrawerNavigator,createBottomTabNavigator,createTabNavigator,StackNavigator} from 'react-navigation'
import React from 'react'
import {Button,Image} from 'react-native'
import HomePage from '../containers/homepage'
import My from '../containers/my'
import ShoppingCart from '../containers/shoppingcart'
import ListGoods from '../containers/listgoods'
import Welcome from '../../welcome'
import Product from '../containers/product'
import AntDesign from 'react-native-vector-icons/AntDesign'

export const RootStack=StackNavigator({
    Welcome:{screen:Welcome},
    Product:{screen:Product},
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
            ListGoods:{
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

export const RootStack1=createBottomTabNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:({tintColor,focused})=>(
                <AntDesign
                    name="home"
                    style={{color:tintColor}}
                    size={26}
                />
            )
        }
    },
    ListGoods:{
        screen:ListGoods,
        navigationOptions:{
            tabBarLabel:'分类',
            tabBarIcon:({tintColor,focused})=>(
                <AntDesign
                    name="bars"
                    style={{color:tintColor}}                    
                    size={26}
                />
            )            
        }
    },    
    ShoppingCart:{
        screen:ShoppingCart,
        navigationOptions:{
            tabBarLabel:'购物车',
            tabBarIcon:({tintColor,focused})=>(
                <AntDesign
                    name="shoppingcart"
                    style={{color:tintColor}}                    
                    size={26}
                />
            )            
        }
    },
    My:{
        screen:My,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({tintColor,focused})=>(
                <AntDesign
                    name="user"
                    style={{color:tintColor}}                    
                    size={26}
                />
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
})
// export const RootStack= createStackNavigator({
//     HomePage:{
//         screen:HomePage,
//         navigationOptions:{
//             title:'首页',
//             headerTintColor:'red'
//         }        
//     },
//     My:{
//         screen:My,
//         navigationOptions:{
//             title:'我的',
//             headerStyle:{
//                 backgroundColor:'red'
//             },
//             headerTintColor: 'yellow',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },            
//             headerRight:(
//                 <Button title='保存'/>
//             )
//         }
//     },
//     ShoppingCart:{
//         screen:ShoppingCart,
//         navigationOptions:{
//             title:'购物车'
//         }
//     }
// })