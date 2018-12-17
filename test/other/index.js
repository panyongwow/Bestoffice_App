import React,{Component} from 'react'
import {View,Button} from 'react-native'

export class arrowFuc extends Component{
    add(){
        let a=1
        a++
        alert(a)
    }
    add1(a){
        a++
        alert(a)
    }    
    render(){
        return(
            <View style={{flex:1,justifyContent:'space-around'}}>
                <Button title='test1'
                    onPress={()=>alert('ok')}
                />
                <Button title='test2'
                    onPress={()=>{
                        alert('ok')
                    }}
                />   
                <Button title='test3'
                    onPress={()=>{
                        let a=1
                        a++
                        alert(a)
                    }}
                />     
                <Button title='test4'
                    onPress={()=>this.add()}
                />   
                <Button title='test5'
                    onPress={()=>this.add1(3)}
                />         
            </View>
        )
    }
}