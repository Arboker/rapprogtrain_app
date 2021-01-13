import React from 'react';
import { Font } from 'expo';

import {
  Button, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions,
  ScrollView, TextInput, AsyncStorage, FlatList, Linking
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Courses from './Courses'

import { HeaderBackButton } from 'react-navigation-stack';
import { light, dark } from '../assets/theme'

import * as firebase from 'firebase';

import User from './User'


class Post extends React.Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Пост",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} tintColor={global.themeNow == "dark" ? "white" : "black"} />,
      /* These values are used instead of the shared configuration! */
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
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      fontLoaded: false,
      theme: '',
      postData: [],
      comment: [],
      height: 0,
      text: '',
      reply: [],
      replyAction: false,
      commentId: null,
      testState: [],
      imageHeight: null
    }
  }
  async componentDidMount() {

    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
    })

    const idPost = this.props.navigation.state.params.id;
    const userId = firebase.auth().currentUser.uid;


    fetch('http://rapprogtrain.com/server-side/social/show_posts.php?id=' + idPost + "&user=" + userId)
      .then((response) => response.json())
      .then((post) => {


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
            views: post.views,
            comments: post.comments,
            image: post.image,
            date: post.date
          }

          Image.getSize(post.image, (width, height) => {
            const propImage = width / Dimensions.get('window').width;
            const newHeight = height / propImage;
            console.log(newHeight)
            this.setState({ imageHeight: newHeight })
          });

          this.setState({
            postData: this.state.postData.concat(postData),
            loaded: true
          })

        })
        fetch("http://rapprogtrain.com/server-side/social/views.php?user=" + userId + '&to=' + post.id)
          .then((response) => response.json())
          .then((responseJson) => {
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);

      });

    this.getComments(idPost)
  }

  getComments = (idPost) => {

    this.setState({ comment: [] })

    fetch('http://rapprogtrain.com/server-side/social/comments_show.php?post=' + idPost)
      .then((response) => response.json())
      .then((comment) => {


        if (typeof comment == "object") {


          comment.map(com => {

            com.comment.map(comData => {

              firebase.database().ref('/users/' + comData.user_id).once('value').then(data => {

                var commentData = {
                  id: comData.id,
                  user_id: comData.user_id,
                  user_name: data.val().first_name + " " + data.val().last_name,
                  profile_picture: data.val().profile_picture,
                  user_verified: data.val().verified,
                  comment: comData.comment,
                  replyData: [],
                }

                // console.log(commentData)


                this.setState({
                  comment: this.state.comment.concat(commentData)
                })

                com.reply.map(reply => {
                  firebase.database().ref('/users/' + reply.user_id).once('value').then(user => {
                    const replyUserName = user.val().first_name + " " + user.val().last_name;
                    const replyPictture = user.val().profile_picture;

                    const replies = {
                      id: reply.id,
                      user_id: reply.user_id,
                      user_name: replyUserName,
                      profile_picture: replyPictture,
                      user_verified: user.val().verified,
                      comment: reply.comment,
                    }

                    const findData = this.state.comment.find(dataFind => reply.comment_id == dataFind.id);
                    findData.replyData = findData.replyData.concat(replies)


                    this.setState({
                      comment: this.state.comment
                    })
                  })
                })
              })
            })
          })
        }

      })
      .catch((error) => {
        console.error(error);

      });
  }

  putLike = () => {
    const post = this.props.navigation.state.params.id;
    var userId = firebase.auth().currentUser.uid;
    fetch("http://rapprogtrain.com/server-side/social/like.php?user=" + userId + '&to=' + post)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          helloMes: responseJson
        })
        var dataToChange = this.state.postData.find(posts => posts.id === post);


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

  commentPost = async () => {

    if (this.state.text !== '') {

      if (!this.state.replyAction) {

        console.log(JSON.stringify({ text: this.state.text }))

        await fetch('http://rapprogtrain.com/server-side/social/insert_comment.php?user=' +
          firebase.auth().currentUser.uid + "&post=" + this.props.navigation.state.params.id, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: this.state.text })
        })
          .then((response) => JSON.stringify(response.json()))
          .then((responseData) => { { this.getComments(this.props.navigation.state.params.id); this.setState({ text: '' }); console.log(responseData) } })
          .catch((err) => { console.log(err); });
      }
      else {
        await fetch('http://rapprogtrain.com/server-side/social/reply_insert.php?user=' +
          firebase.auth().currentUser.uid + "&post=" + this.props.navigation.state.params.id, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ comment_id: this.state.commentId, text: this.state.text })
        })
          .then((response) => JSON.stringify(response.json()))
          .then((responseData) => { { this.getComments(this.props.navigation.state.params.id); this.setState({ text: '' }) } })
          .catch((err) => { console.log(err); });
      }
    }

  }

  reply = (userName, id) => {
    this.setState({
      text: userName,
      replyAction: true,
      commentId: id
    });
    this.refs.inputComment.focus();
  }

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

  render = () => {
    // console.log(this.state.comment)
    return (
      <View style={{ paddingTop: 5, flex: 1 }}>

        <ScrollView>
          {this.state.postData.map(item => {
            return (
              <View style={{ paddingBottom: 15 }}
                ref={(divElement) => { this.divElement = divElement }}
              >

                <View>

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


                    {item.image != "" ? (

                      <Image
                        source={{ uri: item.image }}
                        style={{
                          resizeMode: 'cover', width: Dimensions.get('window').width, height: this.state.imageHeight
                        }}
                      />

                    ) : (
                        <View>
                        </View>
                      )}

                    <View style={{
                      padding: 10,
                      paddingTop: 15, borderBottomColor: this.state.theme == "dark" ? "#474747" : "#dddddd", borderBottomWidth: 1,
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

                  <View style={{ padding: 10, paddingBottom: 0 }}>
                    <Text style={{
                      color: this.state.theme == "dark" ? "#adadad" :
                        "#757575", fontFamily: 'OpenSans-R'
                    }}>{item.comments} комментариев</Text>
                  </View>

                  <FlatList
                    data={this.state.comment}
                    initialNumToRender={0}
                    style={{ padding: 10, paddingTop: 0 }}
                    renderItem={({ item }) => {
                      return (
                        <View style={{ flexDirection: "row", paddingTop: 20 }}>
                          <TouchableOpacity
                            activeOpacity={.6}
                            onPress={() =>

                              this.props.navigation.push('User', { id: item.user_id })
                            }
                          >
                            <Image
                              source={{ uri: item.profile_picture }}
                              style={{
                                resizeMode: 'cover', borderRadius: 50, width: 40, height: 40,
                              }}
                            />
                          </TouchableOpacity>
                          <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                              <Text style={{
                                color: this.state.theme == "dark" ? dark.colors.color :
                                  light.colors.color, fontFamily: 'Roboto-M', fontSize: 16, paddingBottom: 3
                              }}>{item.user_name}</Text>
                              {item.user_verified == 1 ? (
                                <Image
                                  style={{ resizeMode: 'cover', borderRadius: 50, width: 14, height: 14, marginLeft: 1, marginTop: 5 }}
                                  source={require('../assets/verified_rapprogtrain.png')}
                                />
                              ) : (
                                  <View></View>
                                )}
                            </View>
                            <Text style={{
                              color: this.state.theme == "dark" ? dark.colors.color :
                                light.colors.color, fontFamily: 'OpenSans-R', fontSize: 16, width: Dimensions.get('window').width - 100
                            }}>{item.comment}</Text>

                            <Text style={{
                              color: this.state.theme == "dark" ? "#adadad" :
                                "#757575", fontFamily: 'OpenSans-R', paddingTop: 5
                            }}
                              onPress={() => this.reply(item.user_name, item.id)}>Ответить</Text>


                            {item.replyData.map(user => {
                              return (
                                <View>
                                  {user.id !== null ? (

                                    <View style={{ flexDirection: "row", paddingTop: 15, paddingLeft: 10, paddingBottom: 5 }}>
                                      <TouchableOpacity
                                        activeOpacity={.6}
                                        onPress={() =>

                                          this.props.navigation.push('User', { id: user.user_id })
                                        }
                                      >
                                        <Image
                                          source={{ uri: user.profile_picture }}
                                          style={{
                                            resizeMode: 'cover', borderRadius: 50, width: 40, height: 40,
                                          }}
                                        />
                                      </TouchableOpacity>
                                      <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                        <View style={{ flexDirection: "row" }}>
                                          <Text style={{
                                            color: this.state.theme == "dark" ? dark.colors.color :
                                              light.colors.color, fontFamily: 'Roboto-M', fontSize: 16, paddingBottom: 3
                                          }}>{user.user_name}</Text>
                                          {user.user_verified == 1 ? (
                                            <Image
                                              style={{ resizeMode: 'cover', borderRadius: 50, width: 14, height: 14, marginLeft: 1, marginTop: 5 }}
                                              source={require('../assets/verified_rapprogtrain.png')}
                                            />
                                          ) : (
                                              <View></View>
                                            )}
                                        </View>
                                        <Text style={{
                                          color: this.state.theme == "dark" ? dark.colors.color :
                                            light.colors.color, fontFamily: 'OpenSans-R', fontSize: 16, width: Dimensions.get('window').width - 100
                                        }}>{user.comment}</Text>
                                      </View>
                                    </View>
                                  ) : (
                                      <View>
                                      </View>
                                    )}
                                </View>
                              )
                            })}
                          </View>

                        </View>

                      )
                    }}
                    keyExtractor={item => item.id}
                  />
                </View>

              </View>
            )
          })}
        </ScrollView>

        {!this.state.loaded ? (
          <View></View>
        ) : (
            <View style={{
              flexDirection: "row", alignItems: "center", backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                'white', borderTopWidth: this.state.theme == "dark" ? 0 : 1, borderTopColor: this.state.theme == "dark" ? "" : "#dddddd"
            }}>
              <TextInput ref="inputComment" style={{
                height: Math.max(50, this.state.height), fontFamily: 'OpenSans-R',
                color: this.state.theme == "dark" ? "#bfbfbf" :
                  'black',
                fontSize: 17, paddingLeft: 10, width: Dimensions.get('window').width - 47
              }}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                multiline={true}
                numberOfLines={4}
                value={this.state.text}
                placeholder="Комментарий"
                placeholderTextColor={this.state.theme == "dark" ? "white" : "black"}
                onContentSizeChange={(event) => {
                  this.setState({ height: event.nativeEvent.contentSize.height })
                }}
                onChangeText={(text) => {
                  this.setState({ text })
                }}
              />
              <Icon name="md-send" size={24} color={this.state.theme == "dark" ? "#adadad" :
                "#8a8a8a"} style={{ paddingLeft: 15 }} onPress={() => this.commentPost()} />
            </View>
          )}


      </View>
    )
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createStackNavigator(
  {
    Post: {
      screen: Post,
    },
    User: {
      screen: User,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Post',
  }
);
