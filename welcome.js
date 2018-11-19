import React,{Component} from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import HomePageDao from './app/dao/homepage'

export default class Welcome extends Component{
    constructor(){
       super()
    }
    componentDidMount(){
        const {navigation}=this.props
        HomePageDao.init(()=>{
            navigation.navigate("Main")
        })

        // setTimeout(()=>{
        //     // this.props.navigator.replace({
        //     //     component:HomePage,//具体路由的板块
        //     // });
        //     navigation.navigate("Main")
        // },2000)
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