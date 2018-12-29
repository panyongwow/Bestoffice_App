import React, { Component } from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Home from './HomePage'
import Page1 from './Page1'
import Page2 from './Page2'
import { Button } from 'react-native-vector-icons/AntDesign';

export default createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Page1: {
        screen: Page1
    },
    Page2: {
        screen: Page2,
        navigationOptions: (props) => {
            const { navigation } = props
            const { state, setParams } = navigation
            const { params } = state
            return {
                //此处设置的navigationOptions会覆盖组件内部设置的navigationOptions
                title: params.title ? params.title : 'This is Page2',
                headerRight: (
                    <Button 
                        style={{backgroundColor:'red', width:50,fontSize:120,padding:5}} 
                        // title={params.mode==='edit'?'保存':'编辑'}
                        title='OK'
                        color='black'
                        onPress={() => { 
                            setParams({
                                mode:params.mode==='edit'?'':'edit'
                            })
                        }} />
                )
            }
        }
    }
}, {
        //公共的navigationOptions通过组件内部设置无效

        // navigationOptions:(props)=>{
        //     const {navigation}=props
        //     const {state,setParams}=navigation
        //     const {params}=state
        //     return{
        //         //此处设置的navigationOptions会覆盖组件内部设置的navigationOptions
        //         if(params){
        //             return {
        //                 title:params.title?params.title:'This is Page2'
        //             }
        //         }
        //     }

        // }
        navigationOptions: {
            title: '标题'
        }
    })

