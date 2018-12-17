/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import FetchTest from './test/fetchtest'

import ListGoods from './app/containers/listgoods'
import FlexTest from './test/flex'
import {ArgumentTransmit} from './test/other/argumentTransmit'
AppRegistry.registerComponent(appName, () => App);

