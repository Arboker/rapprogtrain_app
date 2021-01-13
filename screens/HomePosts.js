import React from 'react';
import * as Font from 'expo-font';

import { Button, View, Text, StyleSheet, Image, Dimensions,
  ScrollView, TouchableOpacity, Linking, Switch, AsyncStorage, ActivityIndicator } from 'react-native';

import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'

import { light, dark } from '../assets/theme'
import * as firebase from 'firebase';

import User from './User'

class HomePosts extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Посты",
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
        color: global.themeNow == "dark" ? "white" : "black",
        elevation: 0,
            borderBottomWidth:1,
            borderBottomColor: global.themeNow == "dark" ? "#303030" : "#dddddd",
        },
        headerTitleStyle: {
          color: navigation.getParam('Color')
        },
        cardStyle: { backgroundColor: global.themeNow == "dark" ? "#212121" : "white" },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
    theme: '',
    allUsers: []
       }
       
  }



  async componentDidMount() {

   const value = await AsyncStorage.getItem('theme')

   if (value == null) {
    this.onSave("dark")
   }

   this.setState({
     theme: value,
     isEnabled: value == "dark" ? true : false,
     loading: false,
   })
   this.props.navigation.setParams({
    Theme: value == "dark" ? "#171717" : "white",
    Color: value == "dark" ? "white" : "black",
    BrdColor: value == "dark" ? "#303030" : "#dddddd",
  });
  global.themeNow = value
  this.getDataFireBase();
  }

  getDataFireBase = () => {
    var recentPostsRef = firebase.database().ref('/users');
    recentPostsRef.once('value').then(snapshot => {
        // console.log(Object.keys(snapshot.val()).map(item=>snapshot.val()[item]))
        this.setState({ allUsers: snapshot.val() })
    })
  }
  
  render() {
    return (
    
      <ScrollView style={{backgroundColor: this.state.theme == "dark" ? dark.colors.background :
      light.colors.background}}>
    <View>

{Object.keys(this.state.allUsers).map(item=>{
    return (
        <TouchableOpacity
        activeOpacity={.7}
        onPress = {
            () =>  this.props.navigation.navigate("User", {id:item})
          }>
<Text 
style={{color: this.state.theme == "dark" ? "white" :
'black'}}>{this.state.allUsers[item].first_name}</Text>
</TouchableOpacity>


    )
})}
    </View>

    </ScrollView>

    )
}
}



const RootStack = createStackNavigator(
{
    Posts: {
    screen: HomePosts,
    navigationOptions: {
        header: null,
      },
  },
  User: {
    screen: User,
    navigationOptions: {
        header: null,
      },
  },
},
{
  initialRouteName: 'Posts',
}
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
render() {
  return <AppContainer />;
}
}
