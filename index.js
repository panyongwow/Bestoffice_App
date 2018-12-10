/** @format */

import {AppRegistry} from 'react-native';
//import App from './App';
//import Welcome from './welcome'
import {name as appName} from './app.json';
//import HomePage from './app/containers/homepage'

import FetchTest from './test/fetchtest'
//import {RootStack} from './test/navigation/appNavigation'
//import App from './test/navigation/appNavigation'
import App from './test/asyncstorage'
AppRegistry.registerComponent(appName, () => App);
