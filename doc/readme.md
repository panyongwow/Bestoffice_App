# 1.5 底部导航栏：tab-navigator
## npm安装：
   
      npm install react-native-tab-navigator --save

## 碰到的错误   
* view config not found for name

      要注意组件的首字母是不是没有大写

* react.children.only expected to receive a single react element child

      TabNavigator.Item内只能有且必须要有一个组件

## 其他
* 最新版的react已经不支持React.PropTypes了,而需要从prop-types库中引入
      
      import {PropTypes} from 'prop-types'

# 1.6 Navigator  
* 最新版的react-native已经不支持Navigator了，只有0.40.0及以下的react-native版本支持，创建指定版本的react-native的命令：
      
       react-native init 项目名 --version 0.40.0    

* resetTo() 方法，跳转的同时会重置栈中的路由

# 2.x react-navigation
* 创建底部菜单栏用createBottomTabNavigator

* 安装react-native-vector-icons后，需要重新编译部署项目。也就是把手机上的app卸载掉，重新react-native run-android来安装

# 4.1 ListView
* ListView的数据源DataSource创建时，必须要有rowHasChanged函数声明 ？？？

# 5.2 react-native-scrollable-tab-view
* 报错：undefined is not an object(evaluating 'ViewPropTypes.style')

      找到node_modules目录下的react-native-scrollable-tab-view，将出问题的js文件中的ViewPropTypes.style 改为View.propTypes.style
      但是又报另一个错误：listener is not supported for native driven events

      最后没办法，降级安装0.7.0版本。（最新版是0.9.0）

* 当Tab页比较多，超过了屏幕宽度时，此时应该要使用ScrollableTabBar，这样可以水平滚动tab页，否则超出屏幕的部分就选择不了了   

      引入： import {ScrollableTabBar} from 'react-native-scrollable-tab-view'
      使用： <ScrollableTableView renderTabBar={() => <ScrollableTabBar />}> 
                ...
             <ScrollableTableView />
             
# 5.8 react-native-check-box
* 安装：

      npm install react-native-check-box --save
* 版本问题：

      旧版RN（0.40）使用2.0.2或以下版本
       


