import React, { Component } from 'react';
import RN, {
  Linking, Text, View, Image, TouchableOpacity, ScrollView, AsyncStorage,
  ActivityIndicator, FlatList, Dimensions
} from 'react-native';
import { Header } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { light, dark } from '../assets/theme'
import * as firebase from 'firebase';

import ChangeProfile from './ChangeProfile'

import { NavigationEvents } from 'react-navigation';
import Subs from './components/Subs'
import CreatePost from './CreatePost'


class Profile extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      cardStyle: { backgroundColor: global.themeNow == "dark" ? "#212121" : "white" },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      username: '',
      profileImage: '',
      verified: '',
      isLoading: true,
      totalSubscribed: 0,
      totalSubscribes: 0,
      description: '',
      webSite: '',
      instagram: '',
      vk: '',
      twitter: '',
      facebook: '',
      youtube: '',
      github: '',
      stackoverflow: '',
      postData: [],
      loadedImage: false
    }
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
    })

    this.getDataFireBase();
    this.loadAllPosts();


    firebase.database().ref(`/subscribes`)
      .once('value', snapshot => {
        if (snapshot.val() != null) {
          Object.keys(snapshot.val()).map(item => {
            var userId = firebase.auth().currentUser.uid;

            const filObj = Object.keys(snapshot.val()).map(item => snapshot.val()[item].uidToSubscibed).filter(item => userId == item)
            const subObj = Object.keys(snapshot.val()).map(item => snapshot.val()[item].uidUser).filter(item => userId == item)
            if (userId == snapshot.val()[item].uidToSubscibed) {
              this.setState({
                totalSubscribed: filObj.length,
              })
            }
            if (userId == snapshot.val()[item].uidUser) {
              this.setState({
                totalSubscribes: subObj.length,
              })
            }
          })
        }
      })

  }

  getDataFireBase = () => {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
      this.setState({
        username: snapshot.val().first_name,
        profileImage: snapshot.val().profile_picture,
        verified: snapshot.val().verified,
        isLoading: false,
        description: snapshot.val().description,
        webSite: snapshot.val().webSite,
        instagram: snapshot.val().instagram,
        vk: snapshot.val().vk,
        twitter: snapshot.val().twitter,
        facebook: snapshot.val().facebook,
        youtube: snapshot.val().youtube,
        github: snapshot.val().github,
        stackoverflow: snapshot.val().stackoverflow,
      });
    })
  }

  loadAllPosts = () => {
    var userId = firebase.auth().currentUser.uid;
    return fetch('http://rapprogtrain.com/server-side/social/id_post.php?user=' + userId + "&current=" + userId)
      .then((response) => response.json())
      .then((responseJson) => {

        if (typeof responseJson == "object") {

          responseJson.map(post => {
            firebase.database().ref('/users/' + post.user).once('value').then(data => {

              var postData = {
                id: post.id,
                if_liked: post.if_liked,
                user: post.user,
                user_name: data.val().first_name + " " + data.val().last_name,
                user_image: data.val().profile_picture,
                user_verified: data.val().varified,
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
                })
              }

              this.setState({
                postData: this.state.postData.concat(postData)
              })
            })


          })
        }
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });


      })
      .catch((error) => {
        console.error(error);

      });
  }

  putLike = (post) => {
    var userId = firebase.auth().currentUser.uid;
    fetch("http://rapprogtrain.com/server-side/social/like.php?user=" + userId + '&to=' + post)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          helloMes: responseJson
        })

        var dataToChange = this.state.postData.find(posts => posts.id === post);


        fetch('http://rapprogtrain.com/server-side/social/id_post.php?user=' + userId + "&current=" + userId)
          .then((response) => response.json())
          .then((responseJson) => {

            var dataToChangePost = responseJson.find(id => id.id === post);

            dataToChange.likes = dataToChangePost.likes;
            dataToChange.if_liked = dataToChangePost.if_liked;
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

  onViewableItemsChanged = ({ viewableItems, changed }) => {

    var userId = firebase.auth().currentUser.uid;

    viewableItems.map(item => {

      fetch("http://rapprogtrain.com/server-side/social/views.php?user=" + userId + '&to=' + item.item.id)
        .then((response) => response.json())
        .then((responseJson) => {

        })
        .catch((error) => {
          console.error(error);
        });
    })
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
                    <Text style={{
                      color: this.state.theme == "dark" ? dark.colors.color :
                        light.colors.color, fontFamily: 'Roboto-M', fontSize: 16, paddingBottom: 1
                    }}>{item.user_name}</Text>
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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20, }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (

      <ScrollView style={{ backgroundColor: this.state.theme == "dark" ? "#212121" : "white" }}>
        <NavigationEvents
          onDidFocus={() => { this.getDataFireBase();} }
        />
        <View>
          <View style={{
            backgroundColor: this.state.theme == "dark" ? "#2e2e2e" : '#efefef', paddingTop: 25, paddingBottom: 15,
          }}>
            <HeaderBackButton onPress={() => this.props.navigation.goBack(null)} tintColor={this.state.theme == "dark" ? "white" : "black"} />

            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: "center" }}>
              <Image
                source={{ uri: this.state.profileImage }}
                style={{
                  resizeMode: 'cover', borderRadius: 50, width: 80, height: 80,
                }}
              />
              <View style={{
                flex: 1,
                marginTop: 12,
                flexDirection: 'row',
                justifyContent: "center",

              }}>

                <View
                >
                  <Text
                    style={{
                      color: this.state.theme == "dark" ? "white" :
                        'black', maxWidth: Dimensions.get('window').width - 100,
                      fontSize: 21, fontFamily: 'OpenSans-R', marginTop: -2, textAlign: "center"
                    }}>{this.state.username}</Text>
                </View>
                {this.state.verified == 1 ? (
                  <Image
                    style={{
                      resizeMode: 'cover', borderRadius: 50, width: 18, height: 18, marginLeft: 4, flexDirection: "column",
                      justifyContent: "center", alignSelf: "center",
                    }}
                    source={require('../assets/verified_rapprogtrain.png')}
                  />
                ) : (
                    <View></View>
                  )}
              </View>

              <View style={{ flexDirection: "row", paddingTop: 5 }}>

                <TouchableOpacity
                  activeOpacity={.6}
                  onPress={() =>
                    this.props.navigation.navigate('Subs', { subs: false, id: firebase.auth().currentUser.uid })
                  }
                >
                  <Text style={{
                    color: this.state.theme == "dark" ? "#bfbfbf" :
                      'black', marginRight: 10, fontFamily: 'OpenSans-R'
                  }}>{this.state.totalSubscribed} подписчиков</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={.6}
                  onPress={() =>
                    this.props.navigation.navigate('Subs', { subs: true, id: firebase.auth().currentUser.uid })
                  }
                >
                  <Text style={{
                    color: this.state.theme == "dark" ? "#bfbfbf" :
                      'black', fontFamily: 'OpenSans-R'
                  }}>{this.state.totalSubscribes} подписок</Text>
                </TouchableOpacity>
              </View>

              <Text style={{
                color: this.state.theme == "dark" ? "#f2f2f2" :
                  'black', padding: this.state.description == '' ? 0 : 10, fontSize: 15, fontFamily: 'OpenSans-R', textAlign: "center"
              }}>
                {this.state.description}
              </Text>

              <View style={{
                flexDirection: "row", marginTop: this.state.description == '' ? 0 : 5
              }}>
                {this.state.webSite ? (
                  <MaterialCommunityIcons onPress={() => Linking.openURL(this.state.webSite)} name="web" size={24} color={this.state.theme == "dark" ? "#f2f2f2" :
                    'black'} style={{ marginRight: 10 }} />
                ) : (
                    <View></View>
                  )}

                {this.state.instagram ? (
                  <AntDesign name="instagram"
                    onPress={() => Linking.openURL('https://www.instagram.com/' + this.state.instagram)} size={24} color={this.state.theme == "dark" ? "#f2f2f2" :
                      'black'} style={{ marginRight: 10 }} />
                ) : (
                    <View></View>
                  )}

                {this.state.vk ? (
                  <Entypo name="vk"
                    onPress={() => Linking.openURL('https://www.vk.com/' + this.state.vk)} size={24} color={this.state.theme == "dark" ? "#f2f2f2" :
                      'black'} style={{ marginRight: 10 }} />
                ) : (
                    <View></View>
                  )}

                {this.state.twitter ? (
                  <AntDesign
                    onPress={() => Linking.openURL('https://www.twitter.com/' + this.state.twitter)} name="twitter" size={24} color={this.state.theme == "dark" ? "#f2f2f2" :
                      'black'} style={{ marginRight: 10 }} />
                ) : (
                    <View></View>
                  )}

                {this.state.facebook ? (
                  <AntDesign
                    onPress={() => Linking.openURL('https://www.facebook.com/' + this.state.facebook)} name="facebook-square" size={24} color={this.state.theme == "dark" ? "#f2f2f2" :
                      'black'} style={{ marginRight: 10 }} />
                ) : (
                    <View></View>
                  )}

                {this.state.youtube ? (
                  <AntDesign
                    onPress={() => Linking.openURL('https://www.youtube.com/' + this.state.youtube)} name="youtube" size={24} color={this.state.theme == "dark" ? "#f2f2f2" :
                      'black'} style={{ marginRight: 10 }} />
                ) : (
                    <View></View>
                  )}

                {this.state.github ? (
                  <AntDesign
                    onPress={() => Linking.openURL('https://www.github.com/' + this.state.github)} name="github" size={24} color={this.state.theme == "dark" ? "#f2f2f2" :
                      'black'} style={{ marginRight: 10 }} />
                ) : (
                    <View></View>
                  )}

                {this.state.stackoverflow ? (
                  <Zocial
                    onPress={() => Linking.openURL('https://www.stackoverflow.com/users/' + this.state.stackoverflow)} name="stackoverflow" size={20} color={this.state.theme == "dark" ? "#f2f2f2" :
                      'black'} />
                ) : (
                    <View></View>
                  )}


              </View>

              <TouchableOpacity
                activeOpacity={.6}
                onPress={() =>
                  this.props.navigation.navigate('ChangeProfile')
                }
              >
                <Text style={{
                  backgroundColor: this.state.theme == "dark" ?
                    "#a10000" : "#db0202", fontFamily: "OpenSans-R",
                  padding: 10,
                  color: 'white',
                  borderRadius: 3,
                  fontSize: 16, marginTop: this.state.description == '' || this.state.webSite == '' &&
                    this.state.instagram == '' && this.state.vk == '' && this.state.twitter == '' &&
                    this.state.facebook == '' && this.state.youtube == '' &&
                    this.state.github == '' && this.state.stackoverflow == '' ? 0 : 15
                }}>Редактировать</Text>
              </TouchableOpacity>

            </View>
          </View>

          <View style={{
            marginTop: 10, backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
              '#f7f7f7'
          }}>
            <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{ uri: this.state.profileImage }}
                style={{
                  resizeMode: 'cover', borderRadius: 50, width: 35, height: 35, marginRight: 10
                }}
              />
              <TouchableOpacity
                activeOpacity={.7}
                onPress={
                  () => this.props.navigation.navigate("CreatePost")
                }>
                <Text style={{
                  color: this.state.theme == "dark" ? "#bfbfbf" :
                    'black', borderRadius: 3, width: Dimensions.get('window').width - 70, padding: 10, fontFamily: 'OpenSans-R',
                  fontSize: 16, backgroundColor: this.state.theme == "dark" ? "#3b3b3b" :
                    '#ededed'
                }}>Что нового?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ paddingTop: 10 }}>

          <FlatList
            data={this.state.postData}
            initialNumToRender={0}
            renderItem={this.renderItem}
            onViewableItemsChanged={this.onViewableItemsChanged}
            viewabilityConfig={this.viewabilityConfig}
            ListHeaderComponent={this.getHeader}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>


    );
  }
}


export default createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
      },
    },
    ChangeProfile: {
      screen: ChangeProfile,
    },
    Subs: {
      screen: Subs
    },
    CreatePost: {
      screen: CreatePost
    }
  },
  {
    initialRouteName: 'Profile',
  }
);
