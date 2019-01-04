/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import FetchTest from './test/fetchtest'

import ListGoods from './app/containers/listgoods'
import ProductList from './app/containers/productlist'
import FlexTest from './test/flex'
import {ArgumentTransmit} from './test/other/argumentTransmit'

//import App from './test/navigation/appNavigation'
import DrawerStack from './test/navigation/drawerNavigator'
import Stack from './test/navigation/stackNavigation'
import TestDrawer from './test/navigation/drawerpage'
import SideMenuTest from './test/sidemenu'
import RootStack from './test/navigation/drawer/appNaigation'
AppRegistry.registerComponent(appName, () =>RootStack );

