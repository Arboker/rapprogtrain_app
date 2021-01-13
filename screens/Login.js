import React from 'react';
import * as Font from 'expo-font';

import { Button, View, Text, StyleSheet, Image, Dimensions,
ScrollView, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import { HeaderBackButton } from 'react-navigation-stack';

import SafeAreaView from 'react-native-safe-area-view';
import * as AppAuth from 'expo-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';

import { light, dark } from '../assets/theme'
import * as firebase from 'firebase';
import * as Google from 'expo-google-app-auth';



const { URLSchemes } = AppAuth;

const styles = StyleSheet.create({
    container :{
    padding:10
    },
    hairline: {
  backgroundColor: '#A2A2A2',
  height: 2,
  width: 165
},
textTitle :{fontSize:22,fontFamily: 'Roboto-M',fontWeight:'700'},
  viewImageContainer :{flexDirection: 'row', justifyContent: 'space-between',paddingTop:20, width:'96%'},
  viewBox :{height: 120,  width:Dimensions.get('window').width / 2 - 22, marginRight: 10},
  imageStyle :{ flex: 1, width: null, height: null, resizeMode: 'cover',  borderTopLeftRadius: 5, borderTopRightRadius: 5,},
  textStyle :{ borderBottomLeftRadius: 5,
   borderBottomRightRadius: 5, padding:5, fontFamily:"OpenSans-R"},
  });

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        user: null
    }
  }

   static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
        title: "Войти",
        headerLeft:<HeaderBackButton onPress={() => navigation.goBack(null)} tintColor={global.themeNow == "dark" ? "white" : "black"} />,
          tabBarVisible: false,
          headerStyle: {
            backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
            color: global.themeNow == "dark" ? "white" : "black",
            elevation: 0,
                borderBottomWidth:1,
                borderBottomColor: global.themeNow == "dark" ? "#303030" : "#dddddd",
            },
            headerTitleStyle: {
              color: global.themeNow == "dark" ? "white" : "black"
            },
            cardStyle: { backgroundColor: global.themeNow == "dark" ? "#212121" : "white" },
  
  /* These values are used instead of the shared configuration! */
      };
    };

    usertExists = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
              if (
                providerData[i].providerId ===
                  firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()
              ) {
                // We don't need to reauth the Firebase connection.
                return true;
              }
            }
          }
          return false;
    }
   
    onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
        var unsubscribe = firebase.auth().onAuthStateChanged(
          function(firebaseUser) {
            unsubscribe();
            if (!this.usertExists(googleUser, firebaseUser)) {
              var credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
              );
              firebase
                .auth()
                .signInWithCredential(credential)
                .then(function(result) {
                  if (result.additionalUserInfo.isNewUser) {
                    firebase
                      .database()
                      .ref('/users/' + result.user.uid)
                      .set({
                        gmail: result.user.email,
                        profile_picture: result.additionalUserInfo.profile.picture,
                        first_name: result.additionalUserInfo.profile.given_name,
                        last_name: result.additionalUserInfo.profile.family_name
                      })
                      .then(function(snapshot) {
                      });
                  } else {
                    firebase
                      .database()
                      .ref('/users/' + result.user.uid)
                  }
                })
                .catch(function(error) {
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
            } else {
                console.log('User already signed-in Firebase.');
              }
            }.bind(this)
          );
        };
   
   
    _handleGoogleLogin = async () => {
        try {
          const result = await Google.logInAsync({
            androidClientId: '296352952636-4hp7dll1aqgb4a2elvu7v3ljua7vg3ov.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
          console.log(result)
          if (result.type === 'success') {
            this.onSignIn(result);
            return result.accessToken;
            } else {
              alert(
                'Cancelled!',
                'Login was cancelled!',
              );
              return { cancelled: true };
            }
          } catch (e) {
            alert(e);
            return { error: true };
          }
        }
    
      render() {
        return (
          <View style={styles.container}>
            <Button
              title="Login with Google"
              onPress={this._handleGoogleLogin}
            />
          </View>
        );
      }
}


  const RootStack = createStackNavigator(
    {
      Login: {
        screen: LoginScreen,
      },
    },
    {
      initialRouteName: 'Login',
    }
  );

  const AppContainer = createAppContainer(RootStack);

  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
