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

* 跳转路由名区分大小写

* navigation相关命令：

      navigation.navigate(rountName)   跳转到指定路由，若指定路由不存在，则不会做处理；若跳转的路由是当前路由，则不会做处理
      navigation.push(rountName)      跳转到指定路由，与navigate（）的区别是，若跳转的路由是当前路由，则会重复加载。
      push()的使用场景，譬如要从一个详情页跳转到另一个详情页，它们的路由名都是“detail",只是传递的参数不同，此时就不能使用navigate()，而应使用push()

      navigation.goBack(key)    注销当前路由，返回上一个路由或指定路由，如果当前页面已经是最后一个路由，则不会做处理。key不是RountName，而是通过navigation.state.key来获取
      navigation.popToTop()  注销其他路由，直接返回最初的路由
      navigation.reset()     重置

* navigation生命周期：

      当使用navigation()或push()从A跳转到B的时候，A并不会被注销，因此不会发生componentWillUnmount事件；自然而然的，此时从B再回退到到A，那么A的componentDidmount也不会发生。
      当从B回退到A时，B会被注销，因此B会发生componentWillUnmount事件。
      因此如果需要处理navigation跳转场景中的相关事件，可以使用willFocus, willBlur, didFocus和didBlur事件
      使用示例（didFocus）：
      componentDidMount(){
          this.didFoucsHandler= this.props.navigation.addListener(
            'didFocus',
            ()=>{执行函数}
          )        
      }
      componentWillUnMount(){
          this.didFoucsHandler.remove()
      }

* 参数：

      传递：      
        navigation.navigate(路由名,{参数名:参数值})
      获取：
        this.props.navigate.getParam(参数名，默认值)
      改变（当前页面）：
        setParams()
      改变（其他页面）：
        NavigationActions.setParams()

* 设置navigationOptions

      在组件中设置静态属性navigationOptions，本例设置标题栏内容title:
      static navigationOptions=({navigation})=>{
            return({
                  title:navigation.getParam('title','默认标题')
            })  
      }
      在跳转到该组件时，传递title参数。
      this.props.navigation.navigate('details',{title:'details'})

      在组件内部改变标题：
      this.props.navigation.setParams({'title','新标题'})

      相关参数：
      title：标题内容
      headerTitle：将一个组件设置为标题栏内容，譬如 headerTitle:<TitleComponent />
      headerRight：设置标题栏右侧按钮
      headerLeft：设置标题栏左侧按钮（返回按钮）
      headerStyle：设置标题栏样式
      headerTintColor：设置标题内容字体颜色
      headerTintStyle：设置标题内容样式
      headerBackImage：设置返回按钮图片
      headerBackTitle：设置返回按钮标题（仅IOS有效）
      mode：定义渲染和转换的模式（仅IOS有意义）

      不要显示导航栏，则设置：
      headerMode: 'none'

* 导航栏按钮控制页面元素

      导航栏按钮无法直接访问页面元素，因此在按钮中使用this.setState()无效，需要借助setParams()和getParam()来实现,譬如：
      导航栏中（假设在右侧按钮的单击事件中控制界面）：
          headerRight:(
                  <Button 
                  title='+1' 
                  onPress={navigation.getParam('addCount')} 
                  />
            ),
      页面，首先在componentDidMount()中设置：
        componentDidMount(){
            this.props.navigation.setParams({addCount:this.addCount}) 
        }
      设置函数表达式addCount，以便控制state:
        addCount= () => {
            this.setState({ count: this.state.count + 1 });
       };

       也可以使用Redux之类的状态管理来实现导航栏与页面之间的组件通信
     
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
       


