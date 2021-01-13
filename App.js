import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TouchableOpacity, ActivityIndicator, Platform, InteractionManager  } from 'react-native';

import { createAppContainer } from 'react-navigation';


import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Home from './screens/Home'
import Courses from './screens/Courses'
import Editor from './screens/Editor'
import Quiz from './screens/Quiz'
import More from './screens/More'
import * as firebase from 'firebase';

import {ThemeContext} from './screens/UserSet';

  firebase.initializeApp({
    apiKey: "AIzaSyBXCtEtiHbS20WrWy2dRb7nkIWz4kvJOfg",
    authDomain: "rapprogtrain.firebaseapp.com",
    databaseURL: "https://rapprogtrain.firebaseio.com",
    projectId: "rapprogtrain",
    storageBucket: "rapprogtrain.appspot.com",
    messagingSenderId: "296352952636",
    appId: "1:296352952636:web:c36171cde76c501ba7ae39"
  })
  
  const firebaseApp = firebase;

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
  const timerFix = {};
  const runTask = (id, fn, ttl, args) => {
    const waitingTime = ttl - Date.now();
    if (waitingTime <= 1) {
      InteractionManager.runAfterInteractions(() => {
        if (!timerFix[id]) {
          return;
        }
        delete timerFix[id];
        fn(...args);
      });
      return;
    }
    const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
    timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
  };
  global.setTimeout = (fn, time, ...args) => {
    if (MAX_TIMER_DURATION_MS < time) {
      const ttl = Date.now() + time;
      const id = '_lt_' + Object.keys(timerFix).length;
      runTask(id, fn, ttl, args);
      return id;
    }
    return _setTimeout(fn, time, ...args);
  };
  global.clearTimeout = id => {
    if (typeof id === 'string' && id.startsWith('_lt_')) {
      _clearTimeout(timerFix[id]);
      delete timerFix[id];
      return;
    }
    _clearTimeout(id);
  };
}

console.disableYellowBox = true

const state = {
  borderTopColor: '#dddddd',
  colorTest: "green"
  // bgck: this.props.themeNow
}

const getActiveRoute = route => {
  if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
      return route.routeName;
  }

  const childActiveRoute = route.routes[route.index];
  return getActiveRoute(childActiveRoute);
}


const TabBar = ({ navigation }) => {
  var bgcklColor = "";
  var brdColor = "";
  if (global.themeNow == "dark") {
    bgcklColor = "#171717"
    brdColor = "#303030";
  }
  if (global.themeNow == "light") {
    bgcklColor = "white";
    brdColor = "#dddddd";
  }
  const { routes, index } = navigation.state;
  // console.log(getActiveRoute(navigation.state) )

  // if (getActiveRoute(navigation.state) == "Posts") {
  //   global.testRoute = "posts";
  //   global.currentRoute = getActiveRoute(navigation.state);
  // }
    return (
      <View style={{borderTopColor: brdColor, borderTopWidth: 1, backgroundColor: bgcklColor, flexDirection: 'row', justifyContent: "space-around", padding: 5}}>
      
      {routes.map(route => {
        var iconColor;
        const isFocused = routes[index].routeName == route.routeName;
        const homeIcon = "home";
        const courseIcon = "folder1";
        const editorIcon = "file1";
        const quizIcon = "book";
        const moreIcon = "bars";
        var iconNow;
        var title = route.routeName;
        var navTitle;
        var visib;
        if (!isFocused) {
          iconColor = "#636363";
        }
        else {
          iconColor = "#db0202";
        }
        if (title == "Home") {
          iconNow = homeIcon;
          navTitle = "Главная";
        }
        if (title == "Courses") {
          iconNow = courseIcon;
          navTitle = "Курсы";
        }
        if (title == "Editor") {
          iconNow = editorIcon;
          navTitle = "Редактор";
        }
        if (title == "Quiz") {
          iconNow = quizIcon;
          navTitle = "Тесты";
        }
        if (title == "More") {
          iconNow = moreIcon;
          navTitle = "Еще";
        }
        
        if (route.routeName == "ArticleScreen") {
           visib = false;
        }
        else {
          visib = true;
        }
      
    return (
  
 <TouchableOpacity
 activeOpacity={.8}
 onPress={() => navigation.navigate(route.routeName)}
 key={route.routeName}
>
        <View style={{justifyContent: "center", flexDirection: 'row'}}> 
       <AntDesign name={iconNow} color={global.themeNow == "light" ? !isFocused ? "#636363" : "#db0202" :
      !isFocused ? "#a1a1a1" : "#ff0000"} size={23} />
       </View>
      <Text style={{fontSize:14, color:global.themeNow == "light" ? !isFocused ? "#636363" : "#db0202" :
      !isFocused ? "#a1a1a1" : "#ff0000"}}>{navTitle}</Text>
        </TouchableOpacity>
        
      )})}
    </View>

    )
}


const TabNavigator = createBottomTabNavigator({

  Home: {
   screen: Home,
 },

  Courses:{
    screen:Courses,
  },
  Editor:{
    screen:Editor,
  },
  Quiz:{
    screen:Quiz,
  },
  More:{
    screen:More,
  },

},

{
  tabBarComponent: TabBar,

  defaultNavigationOptions: ({ navigation }) => ({
    tabBarVisible: getActiveRoute(navigation.state) !== 'Post' && getActiveRoute(navigation.state) !== 'ArticleScreen'
  }),
  tabBarOptions:{
  activeTintColor:'#db0202',
  inactiveTintColor:'grey',
  style:{
    fontSize:3,
    height:45,
    backgroundColor: "white",
    borderTopWidth:1,
    borderTopColor: state.borderTopColor
  }
}
}
);


// const getActiveRouteStateNow = function (route) {
//     if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
//         return route;
//     }

//     const childActiveRoute = route.routes[route.index];
//     return getActiveRouteStateNow(childActiveRoute);
// }

// const activeRoute = getActiveRouteStateNow(this.props.navigation.state);
// console.log(activeRoute)


let TabNab = createAppContainer(TabNavigator);


export default class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLoading: true
    }
  }
  async componentDidMount() {


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        global.loggedIn = "true";
      }
      else {
        global.loggedIn = "false";
      }


   });
   
  
 
  // var userId = firebase.auth().currentUser.uid;
  //  firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
  //   if (snapshot.val() == null) {
  //     global.loggedIn = "false";
  //   }  
  // })

  
    const value = await AsyncStorage.getItem('theme');
   global.themeNow = value;
   ThemeContext._currentValue.setting.theme = value;
   global.themeTest = "dark";
   if (value == null) {
    this.onSave("dark")
   }   
   this.setState({ 
    isLoading: false
  })
   }
   onSave = async (data) => {

        await AsyncStorage.setItem("theme", data);
        global.themeNow = data
        ThemeContext._currentValue.setting.theme = data;
}

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <TabNab />
    )
  }
}