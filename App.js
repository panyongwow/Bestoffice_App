
//import  {RootStack} from './app/navigators/AppNavigators'
//import  {MainNavigator} from './app/navigators/AppNavigators'
//import {MainNavigator} from './app/navigators/MainNavigator'

//export default RootStack;


import React from "react";
import { View, Text,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomePage from './app/containers/homepage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

class LogoTitle extends React.Component{
  render(){
    return(
      <View>
        <FontAwesome5 name='cut' size={20} color='white' />
        <Text>主页</Text>
      </View>
    )
  }
}
class HomeScreen extends React.Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }
  static navigationOptions=({navigation})=>{
    return{
    //title:'主页',
    headerTitle:<LogoTitle />,
    headerRight:(
      <Button 
          title='+1' 
          onPress={navigation.getParam('addCount')} 
      />
    ),
    headerStyle:{
      backgroundColor:'red',
      textAlign:'center'
    },
    headerTintColor:'white',
    headerTitleStyle:{
      fontWeight:'bold',
      textAlign:'center',
      fontSize:14
    }
  }
  }
  
  componentDidMount(){
      this.props.navigation.setParams({addCount:this.addCount.bind(this)}) 
  }

  // addCount(){
  //   this.setState({
  //     count:this.state.count+1
  //   })
  // }

  addCount= () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  // addCount=function(){
  //   this.setState({ count: this.state.count + 2 });
  // }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Text>Count:{this.state.count}</Text>
        <Button 
            title='Go Detail' 
            onPress={()=>{
              this.props.navigation.navigate('Details',{id:2,title:'new detail'})
            }} 
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions=({navigation})=>{
      return({
        title:navigation.getParam('title','detail'),
        headerBackTitle:'返回',
        headerTruncatedBackTitle:'返回1',
        headerBackImage:(<FontAwesome5 name='cut' size={20} color='red' />),
        headerLeft:(
          <Button 
              title='返回' 
              onPress={()=>{navigation.goBack()}} 
          />
        ),
      })  
  }  
    constructor(){
      super()
      this.state={
        datetime:'',
        id:0,
        name:''
      }
      this.didFoucsHandler=null
    }
    componentDidMount(){
      //this.showTime() 
      this.didFoucsHandler= this.props.navigation.addListener(
        'didFocus',
        ()=>{this.showTime()
        }
      )        
      this.setState({
        id:this.props.navigation.getParam('id'),
        name:this.props.navigation.getParam('name','张三')
      })
    }
    componentWillUnMount(){
      this.didFoucsHandler.remove()
    }
    showTime(){
      let datetime=new Date()
      this.setState({
        datetime:'开始时间:' + datetime.getMinutes() + ":" + datetime.getSeconds()
      })
    }
    componentWillUnmount(){
      //alert('注销了！')
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen12</Text>
          <Text>Time:{this.state.datetime}</Text>
          <Text>ID:{this.state.id}</Text>
          <Text>Name:{this.state.name}</Text>
          <View style={{flex:1, flexDirection:'column', justifyContent:'space-around'}}>
            <Button title='Go Back' onPress={()=>{this.props.navigation.goBack()}} />
            <Button title='Go Detail' onPress={()=>{this.props.navigation.navigate('Details')}} />
            <Button title='Push Detail' onPress={()=>{this.props.navigation.push('Details')}} />
            <Button title='Pop To Top' onPress={()=>{this.props.navigation.popToTop()}} />
            <Button title='更改标题栏' onPress={()=>{this.props.navigation.setParams({title:'新标题'})}} />
          </View>
        </View>
      );
    }
  }

const RootStack = createStackNavigator({
    Details:DetailsScreen,    
    Home:HomeScreen,
  },{
      initialRouteName:'Home',
      // mode: 'modal',
      //headerMode: 'none',
  }
);

//export default RootStack;

export default class App extends React.Component {
    render() {
      return <RootStack />;
    }
  }


