import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator, createTabNavigator, StackNavigator } from 'react-navigation'
import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomePage from '../containers/homepage'
import My from '../containers/my'
import ShoppingCart from '../containers/shoppingcart'
import ListGoods from '../containers/listgoods'
import Welcome from '../../welcome'
import Product from '../containers/product'
import ProductList from '../containers/productlist'
import ProductSearch from '../containers/productlist/search'
import Login from '../containers/login'
import TopList from '../containers/toplist'
import News from '../containers/news'
import TabBarShoppingCart from '../components/tabBarShoppingCart'

const MainStock = createBottomTabNavigator({
    ShoppingCart: {
        screen: ShoppingCart,
        navigationOptions: {
            tabBarLabel: '购物车',
            tabBarIcon: ({ tintColor, focused }) => (
                <TabBarShoppingCart color={tintColor} />
                // <View>
                //     <AntDesign name="shoppingcart" style={{ color: tintColor }} size={26} />
                //     <Text  style={{ color: tintColor }} >123</Text>
                // </View>
            )
        }
    },
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor, focused }) => (
                <AntDesign name="home" style={{ color: tintColor }} size={26} />
            )
        }
    },
    Listgoods: {
        screen: ListGoods,
        navigationOptions: {
            tabBarLabel: '分类',
            tabBarIcon: ({ tintColor, focused }) => (
                <AntDesign name="bars" style={{ color: tintColor }} size={26} />
            )
        }
    },

    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (
                <AntDesign name="user" style={{ color: tintColor }} size={26} />
            )
        }
    },
},
    {
        navigationOptions: {
            tintColor: 'red'
        },
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray',
        },
    });

export const ProductListStock = createDrawerNavigator({
    ProductList: ProductList
    //ProductList:ProductListTemp
}, {
        contentComponent: ProductSearch,
        drawerPosition: 'right'
    })

export const RootStack = createStackNavigator({
    Main: {
        screen: MainStock,
        navigationOptions: {
            header: null
        }
    },
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null
        }
    },


    Drawer: {
        screen: ProductListStock,
        navigationOptions: {
            header: null
        }
    },
    Product: {
        screen: Product,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
})
