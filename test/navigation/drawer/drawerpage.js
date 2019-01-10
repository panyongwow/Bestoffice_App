import React,{Component} from 'react'
import {View,Text,Button,ScrollView,StyleSheet} from 'react-native'
import {DrawerActions,DrawerItems, SafeAreaView,StackActions} from 'react-navigation'

export class OwnComponent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <View style={{height:80,backgroundColor:'gray'}}><Text>我是Header</Text></View>
                <Button
                    title='确定'
                    onPress={()=>{
                        this.props.navigation.state.routes[0].params.callback('你好，123')
                    }}
                />
                <View style={{height:50}}></View>
                <Button
                    title='关闭'
                    onPress={()=>{
                        this.props.navigation.closeDrawer()
                    }}
                />       
                {/* <View style={{height:50}}></View>
                <Button
                    title='返回'
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}
                />                              */}
            </View>
        )
    }
}

export default class DrawerPage extends Component{
    test(a){
        alert(a)
    }
    constructor(props){
        super(props)
        this.props.navigation.setParams({
            title:'myTitle',
            callback:(a)=>{
                this.test(a)
            }
        })
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Text>这是DrawerPage</Text>
                <View style={{height:50}}></View>
                <Button
                    title='显示123'
                    onPress={()=>{
                        //OwnComponent.setData('你好啊123！')
                        //this.props.navigation.navigate('DrawerToggle')
                        this.props.navigation.toggleDrawer()
                        //this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                        //this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                        
                    }}
                />
                <View style={{height:50}}></View>
                <Button
                    title='返回1'
                    onPress={()=>{
                        // let routes=this.props.navigation.state.routes;
                        // let currentPageKey=routes[routes.length-1].key;
                       alert(this.props.navigation.dispatch(StackActions.pop()))
                      // alert(JSON.stringify(actionCreators))
                       // alert(JSON.stringify(this.props.navigation))
                    }}
                />                
            </View>
        )
    }
}



// export const OwnComponent = (props) => (
//     <ScrollView>
//       <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//         <DrawerItems {...props} />
//         <Button 
//             title='test'
//             onPress={()=>{
//                 alert(JSON.stringify(props))
//             }}
//         />
//         <View style={{height:30}} />
//         <Button 
//             title='关闭'
//             onPress={()=>{
//                 props.navigation.closeDrawer()
//             }}
//         />    
//         <View style={{height:30}} />        
//         <Button 
//             title='显示'
//             onPress={()=>{
//                 //alert(props.navigation.state.routes.params('title'))
//                 alert(props.navigation.state.routes[0].params.callback)
//             }}
//         />            
//         <View style={{height:30}} />        
//         <Button 
//             title='执行'
//             onPress={()=>{
//                 //alert(props.navigation.state.routes.params('title'))
//                 props.navigation.state.routes[0].params.callback('你好，123')
//             }}
//         />           
//       </SafeAreaView>
//     </ScrollView>
//   );
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//   });