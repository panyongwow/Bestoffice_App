import {StackNavigator} from 'react-navigation'
import Welcome from '../../welcome'
import {RootStack} from './AppNavigators'

export const MainNavigator=StackNavigator({
    Welcome:{screen:Welcome},
    Main:{
        screen:RootStack,
        navigationOptions:({navigation})=>({
            header:null
        })
    }
},{navigationOptions:{
    header:null
}})