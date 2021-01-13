import React from 'react';
import * as Font from 'expo-font';

import {
  Button, View, Text, StyleSheet, Image, Dimensions,
  ScrollView, TouchableOpacity, Linking, Switch, AsyncStorage, ActivityIndicator
} from 'react-native';

import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from './UserSet';

import Constants from 'expo-constants';

import Answers from './Answers'
import About from './About'
import Login from './Login'

import * as Updates from 'expo-updates';

import * as firebase from 'firebase';
import * as Google from 'expo-google-app-auth';

import { light, dark } from '../assets/theme'
import * as AppAuth from 'expo-app-auth';

class MoreScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Еще",
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
        color: global.themeNow == "dark" ? "white" : "black",
        elevation: 0,
        borderBottomWidth: 1,
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
      elements: [{
        link: 'About',
        title: 'О приложении',
        icon: 'ios-apps'
      },
      {
        url: 'mailto:info@rapprogtrain.com',
        title: 'Обратная связь',
        icon: 'md-contact'
      },
      {
        url: 'https://play.google.com/store/apps/details?id=com.inad.rapprogtrain',
        title: 'Оставить отзыв',
        icon: 'md-star'
      },
      {
        url: 'http://rapprogtrain.com/privacy-policy.php',
        title: 'Политика конфиденциальности',
        icon: 'md-lock'
      },
      {
        url: 'http://rapprogtrain.com/',
        title: 'Сайт',
        icon: 'ios-globe'
      },

      ],
      isEnabled: '',
      theme: '',
      loading: true,
      logged: "false",
      loadingLogged: false
    }

  }



  async componentDidMount() {

    const value = await AsyncStorage.getItem('theme')

    if (value == null) {
      this.onSave("dark")
      ThemeContext._currentValue.setting.theme = "dark";
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
    ThemeContext._currentValue.setting.theme = value;
  }

  onSave = async (data) => {
    const { text } = this.state

    await AsyncStorage.setItem("theme", data);
    this.setState({
      theme: data
    })
    global.themeNow = data
    ThemeContext._currentValue.setting.theme = data;
    ThemeContext._currentValue.setting.anotherTheme = data;
    Updates.reloadAsync()
  }

  toggleSwitch = () => {
    this.setState({
      isEnabled: this.state.isEnabled ? false : true,
    })
    if (this.state.isEnabled) {
      this.onSave("light")
      this.props.navigation.setParams({
        Theme: "white",
        Color: "black",
        BrdColor: "#dddddd"
      });
    }
    else {
      this.onSave("dark")
      this.props.navigation.setParams({
        Theme: "#171717",
        Color: "white",
        BrdColor: "#303030"
      });
    }
  }


  onSignIn = googleUser => {
    this.setState({
      loadingLogged: true
    })
    console.log('Google Auth Response', googleUser);
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function (firebaseUser) {
        unsubscribe();

        var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(function (result) {

            if (result.additionalUserInfo.isNewUser) {

              firebase
                .database()
                .ref('/users/' + result.user.uid)
                .set({
                  gmail: result.user.email,
                  profile_picture: result.additionalUserInfo.profile.picture,
                  first_name: result.additionalUserInfo.profile.given_name == undefined ? "" : result.additionalUserInfo.profile.given_name,
                  last_name: result.additionalUserInfo.profile.family_name == undefined ? "" : result.additionalUserInfo.profile.family_name,
                  description: '',
                  webSite: '',
                  instagram: '',
                  vk: '',
                  twitter: '',
                  facebook: '',
                  youtube: '',
                  github: '',
                  stackoverflow: '',
                  verified: 0,
                })
                .then(function (snapshot) {
                  firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                      firebase.database().ref('subscribes/' + user.uid + "LBweCe2uzUMdCmCT1HXKEQ7j8PJ2").set({
                        uidUser: user.uid,
                        uidToSubscibed: "LBweCe2uzUMdCmCT1HXKEQ7j8PJ2",
                      }).then((data) => {             
                      }).catch((error) => {
                        //error callback
                        console.log('error ', error)
                      })
                    }
                    else {
                      console.log("hello")
                    }
                  })
                  Updates.reloadAsync()
                  this.setState({
                    loadingLogged: false
                  })
                  alert("log in")
                  global.loggedIn = "true";
                 
                });
            } else {
              firebase
                .database()
                .ref('/users/' + result.user.uid)
                Updates.reloadAsync()
              global.loggedIn = "true";
              // Updates.reloadAsync()
            }
          })
          .catch(function (error) {
            alert(error)
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

      }.bind(this)
    );
  };


  _handleGoogleLogin = async () => {
    // try {
    //   const result = await Google.logInAsync({
    //     behavior: 'web',
    //     androidClientId: '296352952636-vp7m3deh0hfgslgi1vrvu2dbd3c9mmlc.apps.googleusercontent.com',
    //     scopes: ['profile', 'email'],
    //   });
    //   if (result.type === 'success') {
    //     this.onSignIn(result);
    //     return result.accessToken;
    //   } else {
    //     alert(
    //       'Cancelled!',
    //       'Login was cancelled!',
    //     );
    //     return { cancelled: true };
    //   }
    // } catch (e) {
    //   alert(e);
    //   return { error: true };
    // }
    let config = {
      issuer: 'https://accounts.google.com',
      scopes: ['openid', 'profile'],
      /* This is the CLIENT_ID generated from a Firebase project */
      clientId: '296352952636-vp7m3deh0hfgslgi1vrvu2dbd3c9mmlc.apps.googleusercontent.com',
    };
    let authState = await AppAuth.authAsync(config);
    this.onSignIn(authState);
  }


  signOutUser = async () => {
    try {
      await firebase.auth().signOut();
      global.loggedIn = "false";
      Updates.reloadAsync()
    } catch (e) {
      console.log(e);
    }
  }




  render() {
    if (this.state.loading) {
      return (

        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    const { navigate } = this.props.navigation;
    return (

      <View>

        {this.state.loadingLogged ? (
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            <View>
              <ActivityIndicator size="large" color={this.state.theme == "dark" ? "white" : "black"} style={{
                backgroundColor: this.state.theme == "dark" ? '#3d3d3d' : '#e8e8e8', width: 50, height: 50,
                borderRadius: 6, margin: 10, width: 80, height: 80, zIndex: 9
              }} />
            </View>
          </View>
        ) : (
            <View></View>
          )}


        <ScrollView style={{
          backgroundColor: this.state.theme == "dark" ? dark.colors.background :
            light.colors.background
        }}>
          <View>
            <View style={{
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" : '#f2f2f2', paddingTop: 20, paddingBottom: 21
            }}>

              <View style={styles.viewTopVersion}>
                <Image
                  style={{ width: 120, height: 120 }}
                  source={require('../assets/icon.png')}
                />
                <Text style={[styles.textVersion, {
                  color: this.state.theme == "dark" ? dark.colors.color :
                    light.colors.color
                }]}>Rapprogtrain v{Constants.manifest.version}</Text>
              </View>
            </View>


            <View style={styles.main}>

              <View style={styles.menuView}>


                {global.loggedIn == "true" ? (
                  <View></View>
                ) : (

                    <TouchableOpacity style={{ marginBottom: 20 }}
                      activeOpacity={.7}
                      onPress={this._handleGoogleLogin}>
                      <Text style={{
                        color: this.state.theme == "dark" ? dark.colors.color :
                          light.colors.color, backgroundColor: this.state.theme == "dark" ? "#061e33" : "#033c6e", width: "100%",
                        borderRadius: 3, fontFamily: "OpenSans-R", fontSize: 17, textAlign: "center", padding: 10,
                        backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                          '#efefef', borderColor: this.state.theme == "dark" ? '#4a4a4a' : 'silver', borderWidth: 1
                      }}>Войти</Text>
                    </TouchableOpacity>
                  )}




                <View style={styles.menuList}>
                  <Text style={[styles.menuItem, {
                    color: this.state.theme == "dark" ? dark.colors.color :
                      light.colors.color
                  }]}>Темный фон</Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#9e0000" }}
                    thumbColor={this.state.isEnabled ? "#f20000" : "#f4f3f4"}
                    onValueChange={this.toggleSwitch}
                    value={this.state.isEnabled}
                    style={{ marginLeft: 10 }}
                  />
                </View>

              </View>


              <View style={[styles.menuView, styles.paddingView]}>
                <Text style={styles.titleMenu}>
                  <Text style={[styles.menuItemTitle, {
                    color: this.state.theme == "dark" ? dark.colors.color :
                      light.colors.color
                  }]}>Другие страницы</Text>
                </Text>


                <TouchableOpacity
                  activeOpacity={.8}
                  onPress={() =>
                    navigate('Answers')
                  }>
                  <View style={styles.menuList}>
                    <Icon name="ios-book" color={this.state.theme == "dark" ? '#757575' : '#636363'} size={24} style={{ marginRight: 10 }} />
                    <Text style={[styles.menuItem, {
                      color: this.state.theme == "dark" ? dark.colors.color :
                        light.colors.color
                    }]}>Вопросы и ответы</Text>
                  </View>
                </TouchableOpacity>

              </View>

              <View style={[styles.menuView, styles.paddingView]}>
                <Text style={styles.titleMenu}>
                  <Text style={[styles.menuItemTitle, {
                    color: this.state.theme == "dark" ? dark.colors.color :
                      light.colors.color
                  }]}>Другое</Text>
                </Text>


                {this.state.elements.map((e, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      style={{ paddingBottom: 15 }}
                      activeOpacity={.8}
                      onPress={() => { e.link ? navigate(e.link) : Linking.openURL(e.url) }
                      }>
                      <View style={styles.menuList}>
                        <Icon name={e.icon} color={this.state.theme == "dark" ? '#757575' : '#636363'} size={24} style={{ marginRight: 10 }} />
                        <Text style={[styles.menuItem, {
                          color: this.state.theme == "dark" ? dark.colors.color :
                            light.colors.color
                        }]}>{e.title}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                })}

              </View>

              <View style={[styles.menuView, styles.paddingViewTwo]}>
                <Text style={styles.titleMenu}>
                  <Text style={[styles.menuItemTitle, {
                    color: this.state.theme == "dark" ? dark.colors.color :
                      light.colors.color
                  }]}>Мы в соц. сетях</Text>
                </Text>

                <TouchableOpacity
                  style={{ paddingBottom: 15 }}
                  activeOpacity={.8}
                  onPress={() =>
                    Linking.openURL('https://vk.com/rapprogtrain')
                  }>
                  <View style={styles.menuList}>
                    <Icon name="logo-vk" color={this.state.theme == "dark" ? '#757575' : '#636363'} size={24} style={{ marginRight: 10 }} />
                    <Text style={[styles.menuItem, {
                      color: this.state.theme == "dark" ? dark.colors.color :
                        light.colors.color
                    }]}>Группа в вк</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ paddingBottom: 15 }}
                  activeOpacity={.8}
                  onPress={() =>
                    Linking.openURL('https://www.facebook.com/rapprogtrain/')
                  }>
                  <View style={styles.menuList}>
                    <Icon name="logo-facebook" color={this.state.theme == "dark" ? '#757575' : '#636363'} size={24} style={{ marginRight: 10 }} />
                    <Text style={[styles.menuItem, {
                      color: this.state.theme == "dark" ? dark.colors.color :
                        light.colors.color
                    }]}>Страничка в Facebook</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ paddingBottom: 15 }}
                  activeOpacity={.8}
                  onPress={() =>
                    Linking.openURL('https://twitter.com/rapprogtrain')
                  }>
                  <View style={styles.menuList}>
                    <Icon name="logo-twitter" color={this.state.theme == "dark" ? '#757575' : '#636363'} size={24} style={{ marginRight: 10 }} />
                    <Text style={[styles.menuItem, {
                      color: this.state.theme == "dark" ? dark.colors.color :
                        light.colors.color
                    }]}>Страничка в твиттере</Text>
                  </View>
                </TouchableOpacity>

                {global.loggedIn == "true" ? (
                  <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => this.signOutUser()}>
                    <View style={styles.menuList}>
                      <Icon name="ios-exit" color={this.state.theme == "dark" ? '#757575' : '#636363'} size={24} style={{ marginRight: 10 }} />
                      <Text style={[styles.menuItem, {
                        color: this.state.theme == "dark" ? dark.colors.color :
                          light.colors.color
                      }]}>Выйти</Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                    <View></View>
                  )}

              </View>






            </View>

          </View>

        </ScrollView>
      </View>

    )
  }
}


const styles = StyleSheet.create({

  main: {
    padding: 10
  },

  viewTopVersion: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  textVersion: {
    fontFamily: "OpenSans-R",
    fontSize: 17,
  },

  menuView: {
    paddingTop: 10,
  },

  paddingView: {
    paddingTop: 30
  },

  paddingViewTwo: {
    paddingTop: 15
  },

  titleMenu: {
    borderBottomColor: 'silver',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },

  menuList: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuItem: {
    fontFamily: "OpenSans-R",
    fontSize: 16
  },


  menuItemTitle: {
    fontFamily: "OpenSans-R",
    fontSize: 17
  }

})


const RootStack = createStackNavigator(
  {
    MoreScreen: {
      screen: MoreScreen,
    },
    Answers: {
      screen: Answers,
      navigationOptions: {
        header: null,
      },
    },
    About: {
      screen: About,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'MoreScreen',
  }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
