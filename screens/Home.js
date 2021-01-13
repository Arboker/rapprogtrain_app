import React from 'react';
import * as Font from 'expo-font';

import {
  Button, View, Text, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
  ScrollView, TouchableOpacity, Share, Platform, FlatList, Linking, AsyncStorage, sessionStorage
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { HeaderBackButton } from 'react-navigation-stack';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import CoursesScreen from './Courses'
import InfoCourses from './InfoCourses'
import { WebView } from 'react-native-webview';

import HtmlPreview from './CoursesBlock/HtmlPreview'
import CssPreview from './CoursesBlock/CssPreview'
import Profile from './Profile'
import MobileAd from './components/MobileAd'

import { ThemeContext } from './UserSet';

import AutoHeightWebView from 'react-native-autoheight-webview'
import {
  AdMobBanner
} from 'expo-ads-admob';
import { light, dark } from '../assets/theme'

import * as firebase from 'firebase';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import User from './User'

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Post from './Post'
import RecommendUser from './RecommendUser'

import * as AppAuth from 'expo-app-auth';


class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      fontLoaded: false,
      theme: '',
      logged: '',
      username: '',
      profileImage: '',
      verified: '',
      loadingUserInfo: true,
      userId: ''
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

    const value = await AsyncStorage.getItem('theme')
    ThemeContext._currentValue.setting.theme = value;
    this.setState({
      theme: value,
    })
    this.props.navigation.setParams({
      Theme: value == "dark" ? "#171717" : "white",
      Color: value == "dark" ? "white" : "black",
      BrdColor: value == "dark" ? "#303030" : "#dddddd",
    });


    await Expo.Font.loadAsync({
      'Roboto-M': require('../assets/fonts/Roboto-Medium.ttf'),
      'Roboto-R': require('../assets/fonts/Roboto-Regular.ttf'),
      'OpenSans-R': require('../assets/fonts/OpenSans-Regular.ttf'),
    });

    return fetch('http://rapprogtrain.com/server-side/test.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.getDataFireBase();
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function () {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  getDataFireBase = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        global.loggedIn = "true";
        const userId = user.uid;
        firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
          this.setState({
            username: snapshot.val().first_name,
            profileImage: snapshot.val().profile_picture,
            verified: snapshot.val().verified,
            loadingUserInfo: false
          });
        })
      }
      else {
        global.loggedIn = "false";
      }
    });

  }


  FlatListItemSeparator = () => {
    return (
      <View
      />
    );
  }

  getHeader = () => {
    return (
      <View>
        {global.loggedIn == "true" ? (
          <View>
            {this.state.loadingUserInfo ? (
              <View style={{ flex: 1, paddingTop: 20, }}>
                <ActivityIndicator />
              </View>
            ) : (


                <TouchableOpacity
                  activeOpacity={.7}
                  onPress={() =>
                    this.props.navigation.navigate('Profile')
                  }>
                  <View style={{ padding: 10 }}>
                    <View style={{
                      padding: 10, flexDirection: 'row', backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                        '#efefef', borderRadius: 4
                    }}>
                      <Image
                        source={{ uri: this.state.profileImage ? this.state.profileImage : null }}
                        style={{
                          resizeMode: 'cover', borderRadius: 50, width: 60, height: 60,
                        }}
                      />
                      <View style={{
                        flexDirection: 'column', marginLeft: 10, borderColor: this.state.theme == "dark" ?
                          "#7a7a7a" : '#dddddd', borderBottomWidth: 1, width: (Dimensions.get('window').width - 110)
                      }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                          <Text style={{
                            color: this.state.theme == "dark" ? "white" :
                              'black', fontSize: 18
                          }}>{this.state.username}</Text>
                          {this.state.verified == 1 ? (
                            <Image
                              style={{ resizeMode: 'cover', borderRadius: 50, width: 15, height: 15, marginLeft: 4 }}
                              source={require('../assets/verified_rapprogtrain.png')}
                            />
                          ) : (
                              <View></View>
                            )}
                        </View>
                        <Text style={{
                          color: this.state.theme == "dark" ? "#d6d6d6" :
                            'black', fontSize: 15, paddingTop: 5
                        }}>Хотите насписать пост?</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
          </View>

        ) : (
            <View style={{ padding: 10 }}>
              <Text style={{
                color: this.state.theme == "dark" ? "#d6d6d6" :
                  'black', fontFamily: "OpenSans-R", fontSize: 18, paddingTop: 10
              }}>Войдите! И откройте для себя экосистему приложения!</Text>
            </View>
          )}



        <View style={{ padding: 10 }}>
          <Text style={{
            fontSize: 22, fontFamily: 'Roboto-M', fontWeight: '700', color: this.state.theme == "dark" ? dark.colors.color :
              light.colors.color
          }}>Статьи:</Text>
        </View>

      </View>
    )
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{
          flex: 1, paddingTop: 20, backgroundColor: this.state.theme == "dark" ? dark.colors.background :
            light.colors.background, minHeight: Dimensions.get("screen").height
        }}>
          <ActivityIndicator />
        </View>
      )
    }
    const { navigate } = this.props.navigation;
    return (

      <View style={[styles.MainContainer, {
        backgroundColor: this.state.theme == "dark" ? dark.colors.background :
          light.colors.background
      }]}>


        <FlatList
          data={this.state.dataSource}
          initialNumToRender={0}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => {

            return (
              <View style={styles.postContainer}>
                <TouchableOpacity style={{ flex: 2 }}
                  activeOpacity={.7}
                  onPress={() => navigate('ArticleScreen', {
                    article_title: item.article_title,
                    id: item.id

                  })}
                >
                  <Image
                    source={{ uri: item.mobile_image }}
                    style={{
                      resizeMode: 'cover', width: null, height: null, flex: 1, borderRadius: 4,
                    }}
                  />

                  <Text
                    style={[styles.textOfArticle, {
                      color: this.state.theme == "dark" ? dark.colors.color :
                        light.colors.color
                    }]}
                  >
                    {item.article_title}
                  </Text>



                  <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{
                      color: this.state.theme == "dark" ? "#a1a1a1" :
                        '#727272', fontSize: 13
                    }}>{item.article_category}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Icon name="ios-eye" size={18} style={{
                        color: this.state.theme == "dark" ? "#a1a1a1" :
                          '#727272', marginRight: 3
                      }} />
                      <Text style={{
                        color: this.state.theme == "dark" ? "#a1a1a1" :
                          '#727272', fontSize: 13
                      }}>{item.views}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }
          }
          ListHeaderComponent={this.getHeader}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}



class ArticleScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.article_title : '',
      tabBarVisible: false,
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} tintColor={global.themeNow == "dark" ? "white" : "black"} />,
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
        color: global.themeNow == "dark" ? "white" : "black",
        elevation: 0,
        borderBottomWidth: 1,
        borderBottomColor: global.themeNow == "dark" ? "#303030" : "#dddddd",
      },
      headerTitleStyle: {
        color: global.themeNow == "dark" ? "white" : "black"
      },
      cardStyle: { backgroundColor: global.themeNow == "dark" ? "#212121" : "white" },

      /* These values are used instead of the shared configuration! */
    };
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
      visible: true,
      bannerError: false,
      theme: '',
      height: 0
    };
  }

  componentDidMount = async () => {
    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
    })
    this.getDataInfo();
  }

  getDataInfo = () => {
    const { params } = this.props.navigation.state;
    const id = params ? params.id : '';


    fetch("http://rapprogtrain.com/server-side/getId2.php" + '?id=' + id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function () {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  bannerError(e) {
    console.log('banner error: ');
    console.log(e);
  }
  adReceived() {
    console.log('banner ad received: ');
    this.setState({
      ...this.state,
      hasAd: true
    });
  }
  adClicked() {
    console.log('banner ad clicked: ');
  }


  FlatListItemSeparator = () => {
    return (
      <View
      />
    );
  }


  hideSpinner = () => {
    this.setState({ visible: false });
  }



  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    const uri = 'http://rapprogtrain.com/server-side/small_mobile_ad.php';
    var colorTitlw;
    var smallColor;
    if (this.state.theme == "dark") {
      colorTitlw = "#dbdbdb";
      smallColor = "#a1a1a1";
    }
    if (this.state.theme == "light") {
      colorTitlw = "black";
      smallColor = "#727272";
    }
    return (

      <SafeAreaView style={styles.MainContainer}>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={this.webViewGetItem}
          renderItem={({ item }) =>
            <View style={{ flex: 1 }}>
              <AutoHeightWebView
                style={{ flex: 1 }}
                source={{
                  html:
                    `<html><head>
           <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700&display=swap&subset=cyrillic" rel="stylesheet">
            </head>
            <style>* { padding:0;margin:0; } .code-js pre { overflow: auto; }
            .about_article_js {
              padding: 0px 0px 3% 0%;
              font-family: 'Roboto', sans-serif;font-weight: bold;
            }
            .text_JavaScript p {
               padding: 0px 0px 5% 0%;

           }
           .code-js {

               padding-bottom: 7%;
           }
            </style>

            <img src=" `+ item.mobile_image + ` " style="width: 100%;height:200px;"></img>
            <div style="padding:10;"> <div style="padding-top:2%;">

             <span style="font-family: 'Roboto', sans-serif;
             font-weight: bold;font-size:22;
             color:`+ colorTitlw + ` ">` + item.article_title + `</span>

           <div style="margin-top:15;display: flex;
           justify-content: space-between;">
           <span style="color:`+ smallColor + `;font-size:14">` + item.article_category + `</span>
           <div style="display:flex;align-items: center;">
           <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" style="fill:#727272;margin-right:3" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
           <span style="color:`+ smallColor + `;font-size:13;">` + item.views + `</span>
           </div>
           </div>

             </div>
               <div style="color:`+ colorTitlw + `;padding-top:10;font-family: 'Open Sans', sans-serif;">` + item.article_description + `</div>
            <div style="color:`+ colorTitlw + `;padding-top:10;font-family: 'Open Sans', sans-serif;">` + item.article_content + `</div></div>

            `  }}
              />
              <Text></Text>
            </View>
          }
          keyExtractor={item => item.id}
        />
        <View style={!this.state.hasAd ? { height: 0 } : {}}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center', backgroundColor: global.themeNow == "dark" ? "#212121" : "white"
          }}>
            <AdMobBanner
              bannerSize="banner"
              adUnitID="ca-app-pub-3371284819677164/9624543779" // Test ID, Replace with your-admob-unit-id
              setTestDeviceID="EMULATOR"
              servePersonalizedAds // true or false
              onDidFailToReceiveAdWithError={this.bannerError}
              onDidFailToReceiveAdWithError={this.bannerError}
              onAdViewDidReceiveAd={this.adReceived.bind(this)}
              onAdViewWillPresentScreen={this.adClicked.bind(this)} />
          </View>
        </View>
        <View style={{ height: 60, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" }}>
          <WebView
            ref={(ref) => { this.webview = ref; }}
            source={{ uri }}
            onNavigationStateChange={(event) => {
              if (event.url !== uri) {
                this.webview.stopLoading();
                Linking.openURL(event.url);
              }
            }}
            style={this.state.hasAd ? { height: 0, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" } : { height: 50, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" }}
          />
        </View>
      </SafeAreaView>
    );
  }

}


const styles = StyleSheet.create({
  cardStyle: { backgroundColor: 'transparent' },
  MainContainer: {

    // Setting up View inside content in Vertically center.
    justifyContent: 'center',
    flex: 1,
  },

  topHomeCourses: {
    fontFamily: 'Roboto-M',
    alignSelf: "center"
  },

  textOfArticle: {
    marginTop: 7,
    fontSize: 16,
    fontFamily: 'Roboto-M'
  },

  postContainer: {
    width: Dimensions.get('window').width,
    height: 250,
    paddingBottom: 10,
    padding: 10
  },

  postArticleScreen: {
    width: Dimensions.get('window').width,
    height: 200
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  viewTopBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 4,
    borderRadius: 4
  }

});


class HomePosts extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Посты",
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
        color: navigation.getParam('Color'),
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
      allUsers: [],
      allSubsUsers: [],
      loadingUsers: true,
      dataToShow: [],
      isLoading: true,
      dataNow: '',
      dataSource: [],
      postData: [],
      isTop: true,
      height: 0,
      allowToLoad: false,
      imageHeight: null,
      idUser: "",
      subs: [],
      scrolling: false,
      problem: "",
      loadedImage: false,
      loadedPage: false
    }

  }

  getActiveRoute = route => {
    if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
      return route.routeName;
    }

    const childActiveRoute = route.routes[route.index];
    return getActiveRoute(childActiveRoute);
  }


  async componentDidMount() {
    await Expo.Font.loadAsync({
      'OpenSans-R': require('../assets/fonts/OpenSans-Regular.ttf'),
    });
    this.setState({
      loadedPage: true
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        global.loggedIn = "true";
        this.setState({
          idUser: user.uid
        })
      }
      else {
        global.loggedIn = "false";
      }
    });

    const value = await AsyncStorage.getItem('theme')

    if (value == null) {
      this.onSave("dark")
      global.canLoad = true;
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
    this.getDataFireBase()

  }



  loadAllPosts = () => {
    var userId = this.state.idUser;
    var refSubs = firebase.database().ref("subscribes");
    var usersSub = [];
    refSubs.orderByChild("uidUser").equalTo(userId).once('value', snapshot => {
      if (snapshot.val() != null) {
        Object.keys(snapshot.val()).map(item => {
          usersSub = usersSub.concat(snapshot.val()[item].uidToSubscibed)
          this.setState({
            subs: this.state.subs.concat(snapshot.val()[item].uidToSubscibed)
          })

        });
      }
      console.log(JSON.stringify({ data: usersSub }))

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: usersSub })
      };

      fetch('http://rapprogtrain.com/server-side/social/all_posts.php?user=' + userId, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson)
          if (responseJson !== "no data") {
            if (typeof responseJson == "object") {

              responseJson.map(subsPost => {
                subsPost.users.map(post => {
                  firebase.database().ref('/users/' + post.user).once('value').then(data => {

                    var postData = {
                      id: post.id,
                      if_liked: post.if_liked,
                      user: post.user,
                      user_name: data.val().first_name + " " + data.val().last_name,
                      user_image: data.val().profile_picture,
                      user_verified: data.val().verified,
                      text: post.text,
                      likes: post.likes,
                      comments: post.comments,
                      image: post.image,
                      views: post.views,
                      date: post.date,
                      heightImage: ""
                    }


                    if (post.image != "") {
                      Image.getSize(post.image, (width, height) => {
                        const propImage = width / Dimensions.get('window').width;
                        const newHeight = height / propImage;
                        postData.heightImage = newHeight
                        this.setState({ loadedImage: true })
                      });
                    }

                    this.setState({
                      postData: this.state.postData.concat(postData)
                    })
                  })
                })
              })
            }
          }
          else {
            this.setState({
              problem: "К сожалению все посты в приложении закончились. Приходите позже!"
            })
          }
          this.setState({
            isLoading: false,
          });


        })
        .catch((error) => {
          console.error(error);

        });
    });
  }

  getDataFireBase = async () => {
    firebase.auth().onAuthStateChanged(user => {

      var recentPostsRef = firebase.database().ref('/users');
      recentPostsRef.limitToFirst(10).once('value').then(snapshot => {
        var numbers = snapshot.val();

        var refSubs = firebase.database().ref("subscribes");
        refSubs.orderByChild("uidUser").equalTo(user.uid).once('value', subSnapshot => {


          const shuffleArray = arr => arr
            .map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);


          if (subSnapshot.val() == null) {
            const allUs = shuffleArray(Object.keys(snapshot.val()));
            var resultArray = [];

            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ data: allUs })
            };
            fetch('http://rapprogtrain.com/server-side/social/recommend.php', requestOptions)
              .then(response => response.json())
              .then(responseJson => {
                if (responseJson != "no recommendation") {
                  // console.log(responseJson)

                  responseJson.map(item => {
                    // console.log(item.users.user)
                    resultArray = resultArray.concat(item.users.user)
                  })
                  this.setState({ allUsers: resultArray, loadingUsers: false })

                  this.state.allUsers.map(item => {

                    firebase.database().ref('/users/' + item).once('value').then(data => {

                      var userId = this.state.idUser;

                      var userData = {
                        id: item,
                        data: data.val()
                      }

                      if (userId != item) {
                        this.setState({
                          dataToShow: this.state.dataToShow.concat(userData)
                        })
                      }
                    })
                  })
                }
                else {
                  this.setState({ allUsers: [], loadingUsers: false })
                }
              });

          }
          else {
            var arraySub = [];

            Object.keys(subSnapshot.val()).map(item => {
              arraySub = arraySub.concat(subSnapshot.val()[item].uidToSubscibed)
              // console.log(subSnapshot.val()[item].uidToSubscibed)
              // console.log(numbers)
            })

            var numbers = Object.keys(snapshot.val()).filter(
              function (e) {
                return this.indexOf(e) < 0;
              },
              arraySub
            );
            const allUs = shuffleArray(numbers);

            var resultArray = [];

            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ data: allUs })
            };
            fetch('http://rapprogtrain.com/server-side/social/recommend.php', requestOptions)
              .then(response => response.json())
              .then(responseJson => {
                if (responseJson != "no recommendation") {
                  responseJson.map(item => {
                    // console.log(item.users.user)
                    resultArray = resultArray.concat(item.users.user)
                  })

                  this.setState({ allUsers: resultArray, loadingUsers: false })

                  this.state.allUsers.map(item => {

                    firebase.database().ref('/users/' + item).once('value').then(data => {

                      var userId = this.state.idUser;

                      var userData = {
                        id: item,
                        data: data.val()
                      }

                      if (userId != item) {
                        this.setState({
                          dataToShow: this.state.dataToShow.concat(userData)
                        })
                      }
                    })
                  })
                }
                else {
                  this.setState({ allUsers: [], loadingUsers: false })
                }
              });

          }
        });

        // console.log(Object.keys(numbers).map(user => user))

        this.loadAllPosts()

      })
    });
  }

  putLike = (post) => {
    var userId = this.state.idUser;
    fetch("http://rapprogtrain.com/server-side/social/like.php?user=" + userId + '&to=' + post)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          helloMes: responseJson
        })
        var dataToChange = this.state.postData.find(posts => posts.id === post);

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data: this.state.subs })
        };

        fetch('http://rapprogtrain.com/server-side/social/show_posts.php?id=' + post + "&user=" + userId)
          .then((response) => response.json())
          .then((responseJson) => {
            // var dataToChangePost = responseJson.find(id => id.id === post);

            //   console.log(dataToChangePost)

            dataToChange.likes = responseJson.likes;
            dataToChange.if_liked = responseJson.if_liked;
            this.setState({
              postData: this.state.postData
            })

          })
          .catch((error) => {
            console.error(error);

          });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 100
  };

  onViewableItemsChanged = ({ viewableItems, changed }) => {
    if (this.state.scrolling == true) {
      console.log("VIS:" + viewableItems.map(item => item.item.text))

      var userId = this.state.idUser;

      viewableItems.map(item => {
        fetch("http://rapprogtrain.com/server-side/social/views.php?user=" + userId + '&to=' + item.item.id)
          .then((response) => response.json())
          .then((responseJson) => {
          })
          .catch((error) => {
            console.error(error);
          });
      })
    }
  };

  changeTextToComponent = (text) => {
    var nowString = text;
    var checkString = text;
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(checkString);

    var findLink = '<Link href=';
    if (text.includes(findLink)) {
      const matchesNew = text.match(/\[(.*?)\]/);
      const link = matchesNew[1].match(/\(([^)]+)\)/)[1];
      if (text.includes('<Link href=[(' + link + ')]>')) {
        const dataBefore = text.substr(0, text.indexOf('<Link href=[(' + link + ')]>'));
        const afterLink = text.split('<Link href=[(' + link + ')]>')[1];
        console.log(dataBefore.replace(/\s*$/, ""))
        return (
          <View>
            {dataBefore != "" ? (
              <Text style={{
                color: this.state.theme == "dark" ? dark.colors.color :
                  light.colors.color, fontFamily: 'OpenSans-R', fontSize: 16
              }}>{dataBefore}</Text>
            ) : (
                <View></View>
              )}

            <Text style={{
              color: this.state.theme == "dark" ? "#adadad" :
                light.colors.color, fontSize: 18, color: this.state.theme == "dark" ? "#8fbaff" : "#2478ff"
            }}
              onPress={() => Linking.openURL(link)}
            >{link}</Text>

            {afterLink != "" ? (
              <Text style={{
                color: this.state.theme == "dark" ? dark.colors.color :
                  light.colors.color, fontFamily: 'OpenSans-R', fontSize: 16
              }}>{afterLink.trim()}</Text>
            ) : (
                <View></View>
              )}
          </View>
        )
      }
    }
    else {
      return (
        <Text style={{
          color: this.state.theme == "dark" ? dark.colors.color :
            light.colors.color, fontFamily: 'OpenSans-R', fontSize: 16
        }}>{text}</Text>
      )
    }
  }

  renderItem = ({ item }) => {
    return (
      <View style={{ paddingBottom: 10 }}
        ref={(divElement) => { this.divElement = divElement }}
      >
        <TouchableOpacity
          activeOpacity={.7}
          onPress={
            () => this.props.navigation.navigate("Post", { id: item.id, user: item.user })
          }>

          <View style={{
            backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
              '#f7f7f7'
          }}>

            <View>

              <TouchableOpacity
                activeOpacity={.7}
                onPress={
                  () => this.props.navigation.navigate("User", { id: item.user, user: item.user })
                }>
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <Image
                    source={{ uri: item.user_image }}
                    style={{
                      resizeMode: 'cover', borderRadius: 50, width: 50, height: 50,
                    }}
                  />
                  <View style={{ alignSelf: "center", marginLeft: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{
                        color: this.state.theme == "dark" ? dark.colors.color :
                          light.colors.color, fontFamily: 'Roboto-M', fontSize: 16, paddingBottom: 1
                      }}>{item.user_name}</Text>
                      {item.user_verified == 1 ? (
                        <Image
                          style={{
                            resizeMode: 'cover', borderRadius: 50, width: 15, height: 15, flexDirection: "column",
                            justifyContent: "center", alignSelf: "center",
                          }}
                          source={require('../assets/verified_rapprogtrain.png')}
                        />
                      ) : (
                          <View></View>
                        )}
                    </View>
                    <Text style={{
                      color: this.state.theme == "dark" ? "#adadad" :
                        light.colors.color, fontFamily: 'OpenSans-R'
                    }}>{item.date == new Date().getFullYear() + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2) + '-' +
                      ("0" + (new Date().getDate())).slice(-2) ?
                      "Сегодня" : item.date}</Text>
                  </View>

                </View>
              </TouchableOpacity>

              {item.text !== "" ? (
                <View style={{ padding: 10, paddingTop: 0 }}>
                  {/* <Text style={{
     color: this.state.theme == "dark" ? dark.colors.color :
       light.colors.color, fontFamily: 'OpenSans-R', fontSize: 16
   }}>{item.text}</Text> */}

                  {this.changeTextToComponent(item.text)}
                </View>
              ) : (
                  <View></View>
                )}


              {item.image != "" && this.state.loadedImage ? (
                <View>
                  {console.log(item.heightImage + "sf")}

                  <Image
                    source={{ uri: item.image }}
                    style={{
                      resizeMode: 'cover', width: Dimensions.get('window').width, height: Math.floor(item.heightImage) != 0 ? Math.floor(item.heightImage) : 100
                    }}
                  />
                </View>

              ) : (
                  <View>
                  </View>
                )}

              <View style={{
                padding: 10,
                paddingTop: 15, borderTopColor: this.state.theme == "dark" ? "#474747" : "#dddddd", borderTopWidth: 1,
                flexDirection: "row", justifyContent: "space-between"
              }}>

                <TouchableOpacity
                  activeOpacity={.7}
                  onPress={
                    () => this.putLike(item.id)
                  }>
                  <View style={{ flexDirection: "row" }}>
                    {item.if_liked ? (
                      <AntDesign name="heart" color={this.state.theme == "dark" ? "#ff4545" :
                        "#ff1f1f"} size={20} style={{ alignSelf: "center" }} />
                    ) : (
                        <AntDesign name="hearto" color={this.state.theme == "dark" ? "#adadad" :
                          "#8a8a8a"} size={20} style={{ alignSelf: "center" }} />
                      )}

                    <Text style={{
                      color: this.state.theme == "dark" ? item.if_liked ? '#ff4545' : "#adadad" :
                        item.if_liked ? '#ff1f1f' : "#8a8a8a", fontFamily: 'Roboto-M', fontSize: 17, paddingBottom: 1, marginLeft: 5, alignSelf: "center"
                    }}>{item.likes}</Text>
                  </View>
                </TouchableOpacity>

                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons name="comment-outline" color={this.state.theme == "dark" ? "#adadad" :
                    "#8a8a8a"} style={{ marginTop: 2 }} size={20} />
                  <Text style={{
                    color: this.state.theme == "dark" ? "#adadad" :
                      "#8a8a8a", fontFamily: 'Roboto-M', fontSize: 17, marginLeft: 5, alignSelf: "center"
                  }}>{item.comments}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <AntDesign name="eyeo" color={this.state.theme == "dark" ? "#adadad" :
                    "#8a8a8a"} size={20} style={{ alignSelf: "center" }} />
                  <Text style={{
                    color: this.state.theme == "dark" ? "#adadad" :
                      "#8a8a8a", fontFamily: 'Roboto-M', fontSize: 17, paddingBottom: 1, marginLeft: 5, alignSelf: "center"
                  }}>{item.views}</Text>
                </View>

              </View>

            </View>

          </View>
        </TouchableOpacity>
      </View>
    )
  }


  getHeader = () => {
    return (
      <View style={{ padding: this.state.dataToShow == "" ? 0 : 10, paddingBottom: this.state.dataToShow == "" ? 0 : 20 }}>
        {this.state.dataToShow == "" ? (
          <View></View>
        ) : (
            <Text style={{
              fontSize: 20, fontFamily: 'Roboto-M', fontWeight: '700', color: this.state.theme == "dark" ? dark.colors.color :
                light.colors.color, paddingBottom: 10
            }}>Интересные пользователи:</Text>
          )}
        <View style={{ flexDirection: "row" }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {this.state.dataToShow.map(user => {
              return (
                <View style={{ marginRight: 10 }}>

                  <TouchableOpacity
                    activeOpacity={.7}
                    style={{
                      alignItems: 'center',
                    }}
                    onPress={
                      () => this.props.navigation.navigate("User", { id: user.id })
                    }>
                    <View>
                      <Image
                        source={{ uri: user.data.profile_picture }}
                        style={{
                          resizeMode: 'cover', borderRadius: 50, width: 50, height: 50,
                        }}
                      />
                      {user.data.verified == 1 ? (
                        <View style={{ position: "absolute", right: 0, bottom: 5 }}>
                          <Image
                            style={{
                              resizeMode: 'cover',
                              borderRadius: 50, width: 16, height: 16
                            }}
                            source={require('../assets/verified_rapprogtrain.png')}
                          />
                        </View>
                      ) : (
                          <View></View>
                        )}
                    </View>
                    <Text
                      style={{
                        color: this.state.theme == "dark" ? "white" :
                          'black', fontSize: 13, flexDirection: 'row', flexWrap: 'wrap', maxWidth: 80, fontFamily: 'OpenSans-R', textAlign: "center", marginTop: 1
                      }}>{user.data.first_name}</Text>
                  </TouchableOpacity>

                </View>
              )
            })}

            {this.state.dataToShow.length >= 5 ? (
              <View style={{ display: "flex", justifyContent: "center" }}>
                <TouchableOpacity
                  activeOpacity={.7}
                  onPress={
                    () => this.props.navigation.navigate("RecommendUser")
                  }>
                  <AntDesign name='rightcircleo' color={this.state.theme == "dark" ? "#ededed" :
                    "#212121"} size={23} style={{ alignSelf: "center", marginLeft: 5 }} />
                </TouchableOpacity>
              </View>
            ) : (
                <View></View>
              )}


          </ScrollView>

        </View>

      </View>

    )
  }

  render() {
    return (

      <ScrollView>
        <View style={{
          backgroundColor: this.state.theme == "dark" ? dark.colors.background :
            light.colors.background, minHeight: Dimensions.get('screen').height
        }}>
          {global.loggedIn == "true" ? (
            <View>
              {this.state.loadingUsers ? (

                <View style={{ flex: 1, paddingTop: 20, }}>
                  <ActivityIndicator />
                </View>

              ) : (
                  <View>
                    <View>
                      <FlatList
                        onScroll={() => this.setState({ scrolling: true })}
                        data={this.state.postData}
                        initialNumToRender={0}
                        renderItem={this.renderItem}
                        onViewableItemsChanged={this.onViewableItemsChanged}
                        viewabilityConfig={this.viewabilityConfig}
                        ListHeaderComponent={this.getHeader}
                        keyExtractor={item => item.id}
                      />
                      {this.state.problem != "" ? (
                        <View>
                          <Text style={{
                            color: this.state.theme == "dark" ? "#adadad" :
                              "#2b2b2b", fontFamily: 'OpenSans-R', fontSize: 17, marginLeft: 5, textAlign: "center",
                            marginBottom: 10, marginTop: this.state.dataToShow == "" ? 30 : 0
                          }}>{this.state.problem}</Text>
                          <MobileAd />
                        </View>
                      ) : (
                          <View></View>
                        )}
                    </View>

                  </View>
                )}
            </View>
          ) : (
              <View style={{ padding: 10 }}>
                {this.state.loadedPage ? (
                  <Text style={{
                    color: this.state.theme == "dark" ? "#d6d6d6" :
                      'black', fontSize: 18, fontFamily: "OpenSans-R", paddingTop: 10
                  }}>Войдите, чтобы увидеть посты</Text>
                ) : (
                    <View></View>
                  )}

              </View>
            )}


        </View>

      </ScrollView>

    )
  }
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

  return (
    <View style={{
      backgroundColor: bgcklColor,
    }}>
      <View style={{ padding: 18, marginTop: 20 }}>
        <Text
          style={{
            color: global.themeNow == "dark" ? "white" :
              "black", fontWeight: "bold", fontSize: 20,
          }}
        >
          Главная
                  </Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
        {routes.map(route => {
          var iconColor;
          const isFocused = routes[index].routeName == route.routeName;
          var iconNow;
          var title = route.routeName;
          var navTitle;
          var visib
          iconColor = "#db0202";
          navTitle = "Главная";

          if (title == "Main") {
            navTitle = "СТАТЬИ";
          }
          if (title == "Posts") {
            navTitle = "ПОСТЫ";
          }

          return (
            <View>
              <TouchableOpacity
                style={{
                  borderBottomColor: !isFocused ? global.themeNow == "dark" ? "#303030" : "#dddddd" : "red", borderBottomWidth: !isFocused ? 1 : 2, width: Dimensions.get('window').width / 2,
                  padding: 10,

                }}
                activeOpacity={.8}
                onPress={() => navigation.navigate(route.routeName)}
                key={route.routeName}
              >
                <Text style={{
                  fontSize: 14, color: global.themeNow == "light" ? !isFocused ? "#636363" : "#db0202" :
                    !isFocused ? "#a1a1a1" : "#ff0000", textAlign: "center", paddingBottom: 5
                }}>{navTitle}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const TabScreen = createMaterialTopTabNavigator(
  {
    Main: {
      screen: HomeScreen,
    },
    Posts: {
      screen: HomePosts,
      navigationOptions: {
        title: 'Посты',
      },
    },
  },
  {
    tabBarComponent: TabBar,
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: global.themeNow == "dark" ? '#db0202' : "#ff0000",
      inactiveTintColor: global.themeNow == "dark" ? 'white' : "black",
      style: {
        backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: global.themeNow == "dark" ? '#db0202' : "#ff0000",
        borderBottomWidth: 2,
      },

    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

// alert(global.themeNow)
//making a StackNavigator to export as default

const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
    },
  },
  CoursesScreen: {
    screen: CoursesScreen,
    navigationOptions: {
      header: null,
    },
  },
  ArticleScreen: {
    screen: ArticleScreen,
  },
  InfoCourses: {
    screen: InfoCourses,
    navigationOptions: {
      header: null,
    },
  },
  HtmlPreview: {
    screen: HtmlPreview,
    navigationOptions: {
      header: null,
    },
  },
  CssPreview: {
    screen: CssPreview,
    navigationOptions: {
      header: null,
    },
  },
  Profile: {
    screen: Profile,
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
  Post: {
    screen: Post,
    navigationOptions: {
      header: null,
    },
  },
  RecommendUser: {
    screen: RecommendUser,
    navigationOptions: {
      header: null,
    },
  },

}
);

let TabNabTop = createAppContainer(App);

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: false
    }
  }
  async componentDidMount() {

    const value = await AsyncStorage.getItem('theme');
    global.themeNow = value;
    ThemeContext._currentValue.setting.theme = value;
    if (value == null) {
      this.onSave("dark")
    }
    this.setState({
      loaded: true
    })
  }
  onSave = async (data) => {

    await AsyncStorage.setItem("theme", data);
    global.themeNow = data
    ThemeContext._currentValue.setting.theme = data;
  }

  render() {


    if (this.state.loaded) {
      console.log("ready! " + ThemeContext._currentValue.setting.theme)
      return (
        <TabNabTop />
      )
    }
    else {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
  }
}