import React, { Component } from 'react';
import { TextInput, Text, View, Image, TouchableOpacity, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack'

import { light, dark } from '../assets/theme'
import * as firebase from 'firebase';

import * as ImagePicker from 'expo-image-picker';

export default class ChangeProfile extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Редактировать",
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} tintColor={global.themeNow == "dark" ? "white" : "black"} />,
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
        color: navigation.getParam('Color') == "dark" ? "white" : "black",
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
      theme: '',
      username: '',
      profilePicture: '',
      last_name: '',
      description: '',
      isLoading: true,
      webSite: '',
      instagram: '',
      vk: '',
      twitter: '',
      facebook: '',
      youtube: '',
      github: '',
      stackoverflow: '',
      changePicture: ""
    }
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
      loading: false
    })
    this.props.navigation.setParams({
      Theme: value == "dark" ? "#171717" : "white",
      Color: value == "dark" ? "white" : "black",
      BrdColor: value == "dark" ? "#303030" : "#dddddd",
    });

    this.getDataFireBase();

  }

  getDataFireBase = () => {
    var userId = firebase.auth().currentUser.uid;
    return firebase.database().ref('/users/' + userId).once('value').then(snapshot => {
      this.setState({
        username: snapshot.val().first_name,
        profilePicture: snapshot.val().profile_picture,
        changePicture: snapshot.val().profile_picture,
        last_name: snapshot.val().last_name,
        description: snapshot.val().description,
        webSite: snapshot.val().webSite,
        instagram: snapshot.val().instagram,
        vk: snapshot.val().vk,
        twitter: snapshot.val().twitter,
        facebook: snapshot.val().facebook,
        youtube: snapshot.val().youtube,
        github: snapshot.val().github,
        stackoverflow: snapshot.val().stackoverflow,
        isLoading: false
      });
    })
  }

  usernameChange = text => {
    this.setState({ username: text })
  }

  lastNameChange = text => {
    this.setState({ last_name: text })
  }

  descriptionChange = text => {
    this.setState({ description: text })
  }

  webSiteChange = text => {
    this.setState({ webSite: text })
  }

  instagramChange = text => {
    this.setState({ instagram: text })
  }

  vkChange = text => {
    this.setState({ vk: text })
  }

  twitterChange = text => {
    this.setState({ twitter: text })
  }

  facebookChange = text => {
    this.setState({ facebook: text })
  }

  youtubeChange = text => {
    this.setState({ youtube: text })
  }

  githubChange = text => {
    this.setState({ github: text })
  }

  stackoverflowChagnge = text => {
    this.setState({ stackoverflow: text })
  }

  saveData = async () => {
    if (this.state.username.length + this.state.last_name.length <= 30) {
      var userId = firebase.auth().currentUser.uid;
      var adaNameRef = firebase.database().ref('users/' + userId);

      var prPicture = this.state.changePicture;
      console.log(this.state.changePicture !== this.state.profilePicture)
      if (this.state.changePicture !== this.state.profilePicture) {
        const dataFile = new FormData();
        dataFile.append("image", {
          uri: this.state.profilePicture,
          name: "photo_1",
          type: "image/png",
        })

        let res = await fetch(
          'http://rapprogtrain.com/server-side/social/profile_picture.php',
          {
            method: 'post',
            body: dataFile,
            headers: {
              'Content-Type': 'multipart/form-data; ',
            },
          }
        );
        let responseJson = await res.json();
        adaNameRef.update({
          profile_picture: responseJson,
        })
      }
    }

    var httpUrl = this.state.webSite;
    if (this.state.textLink !== "" && this.state.webSite != "") {
      const withHttp = url => !/^https?:\/\//i.test(url) ? `http://${url}` : url;
      httpUrl = withHttp(httpUrl);
    }
    else { 
      httpUrl = this.state.webSite;
    }

    adaNameRef.update({
      first_name: this.state.username,
      last_name: this.state.last_name,
      description: this.state.description,
      webSite: httpUrl,
      instagram: this.state.instagram,
      vk: this.state.vk,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      youtube: this.state.youtube,
      github: this.state.github,
      stackoverflow: this.state.stackoverflow,
    });

    this.props.navigation.goBack(null)

  }

  changePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    result.height = 80;
    result.width = 80;
    if (result.uri !== undefined) {
      this.setState({
        profilePicture: result.uri,
      })
    }
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

        <View style={{ padding: 10 }}>

          <Text style={{
            fontSize: 20, fontFamily: 'Roboto-M', fontWeight: '700', color: this.state.theme == "dark" ? dark.colors.color :
              light.colors.color, paddingBottom: 10
          }}>Основное</Text>

          <View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                activeOpacity={.7}
                onPress={() => this.changePicture()}
              >
                <Image
                  source={{ uri: this.state.profilePicture }}
                  style={{
                    resizeMode: 'cover', borderRadius: 50, width: 80, height: 80, marginBottom: 7,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={{
              color: this.state.theme == "dark" ? "white" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 10,
              textAlign: "center"
            }}>Изменить аватар</Text>


            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Имя:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.username}
              onChangeText={this.usernameChange} />
          </View>

          <View style={{ paddingTop: 12 }}>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Фамилия:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.last_name}
              onChangeText={this.lastNameChange} />
          </View>


          <View style={{ paddingTop: 12 }}>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Описание:</Text>
            <TextInput style={{
              height: 150, textAlignVertical: 'top',
              justifyContent: "flex-start", fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              multiline={true}
              numberOfLines={4}
              value={this.state.description}
              onChangeText={this.descriptionChange} />
          </View>


          <Text style={{
            fontSize: 20, paddingTop: 20, fontFamily: 'Roboto-M', fontWeight: '700', color: this.state.theme == "dark" ? dark.colors.color :
              light.colors.color, paddingBottom: 10
          }}>Ссылки</Text>

          <View>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Сайт:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.webSite}
              onChangeText={this.webSiteChange} />
          </View>

          <View style={{ paddingTop: 12 }}>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Instagram:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              placeholderTextColor={this.state.theme == "dark" ? "white" : "dark"}
              placeholder="Ник"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.instagram}
              onChangeText={this.instagramChange} />
          </View>

          <View style={{ paddingTop: 12 }}>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Vk:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              placeholderTextColor={this.state.theme == "dark" ? "white" : "dark"}
              placeholder="Ник"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.vk}
              onChangeText={this.vkChange} />
          </View>

          <View style={{ paddingTop: 12 }}>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Twitter:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              placeholderTextColor={this.state.theme == "dark" ? "white" : "dark"}
              placeholder="Ник"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.twitter}
              onChangeText={this.twitterChange} />
          </View>

          <View style={{ paddingTop: 12 }}>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Facebook:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              placeholderTextColor={this.state.theme == "dark" ? "white" : "dark"}
              placeholder="Ник"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.facebook}
              onChangeText={this.facebookChange} />
          </View>

          <View style={{ paddingTop: 12 }}>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Youtube:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              placeholderTextColor={this.state.theme == "dark" ? "white" : "dark"}
              placeholder="Ник"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.youtube}
              onChangeText={this.youtubeChange} />
          </View>

          <View style={{ paddingTop: 12 }}>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>Github:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              placeholderTextColor={this.state.theme == "dark" ? "white" : "dark"}
              placeholder="Ник"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.github}
              onChangeText={this.githubChange} />
          </View>

          <View style={{ paddingTop: 12, paddingBottom: 10 }}>
            <Text style={{
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black', fontFamily: 'OpenSans-R', fontSize: 17, paddingBottom: 7
            }}>StackOverflow:</Text>
            <TextInput style={{
              height: 40, fontFamily: 'OpenSans-R',
              borderColor: this.state.theme == "dark" ? "#8a8a8a" :
                '#ddd',
              color: this.state.theme == "dark" ? "#bfbfbf" :
                'black',
              backgroundColor: this.state.theme == "dark" ? "#2e2e2e" :
                '#efefef',
              fontSize: 18, padding: 5,
              borderWidth: 1,
              borderRadius: 3
            }}
              placeholder="Ник"
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              value={this.state.stackoverflow}
              onChangeText={this.stackoverflowChagnge} />
          </View>

          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              activeOpacity={.6}
              onPress={() => this.saveData()}
            >
              <Text style={{
                backgroundColor: this.state.theme == "dark" ?
                  "#a10000" : "#db0202", fontFamily: "OpenSans-R",
                padding: 10,
                paddingRight: 50,
                paddingLeft: 50,
                color: 'white',
                borderRadius: 3,
                fontSize: 16, marginTop: 15
              }}>Сохранить</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>


    );
  }
}

