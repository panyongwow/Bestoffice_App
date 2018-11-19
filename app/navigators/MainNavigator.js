import {StackNavigator} from 'react-navigation'
import Welcome from '../../welcome'
import Product from '../containers/product'
import {RootStack} from './AppNavigators'

export const MainNavigator=StackNavigator({
    Welcome:{screen:Welcome},
    Product:{screen:Product},
    Main:{
        screen:RootStack,
        navigationOptions:({navigation})=>({
            header:null
        })
    }
},{navigationOptions:{
    header:null
}})