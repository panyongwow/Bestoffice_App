import React,{Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import HomePageDao from './app/dao/homepage'
import {NavigationActions} from 'react-navigation'

// const resetAction=NavigationActions.navigate({
//     index:0,
//     actions:[
//         NavigationActions.navigate({routeName:'Main'})
//     ]
// })
export default class Welcome extends Component{
    //这样写就不行，不加props参数，安装到手机上后会闪退
    // constructor(){
    //     super()
    // }

    constructor(props){
       super(props)
    }

    
    componentDidMount(){
        const {navigation}=this.props
        HomePageDao.init(()=>{
            navigation.reset([NavigationActions.navigate({ routeName: 'Main' })], 0)  
        })
    }
    render(){
        const {navigation}=this.props
        return(
            <View style={styles.container}>
                <Text>百思通办公</Text>
                <Button
                    onPress={()=>{
                        navigation.navigate("Main")
                    }}
                    title="跳转"
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        
    }
})