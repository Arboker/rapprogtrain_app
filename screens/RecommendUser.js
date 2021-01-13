import React, { Component } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack'

import { light, dark } from '../assets/theme'
import * as firebase from 'firebase';

class RecommendUser extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: navigation.getParam('Title'),
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

      totalSubscribed: 0,
      totalSubscribes: 0,
      dataToShow: [],
      theme: '',
      loading: true,
      noData: ''
    }
  }

  async componentDidMount() {
    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
    })
    this.props.navigation.setParams({
      Title: "Пользователи"
    });
    this.getDataFireBase();
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
            this.setState({ allUsers: allUs, loadingUsers: false })

            this.state.allUsers.map(item => {

              firebase.database().ref('/users/' + item).once('value').then(data => {

                var userId = this.state.idUser;

                var userData = {
                  id: item,
                  data: data.val()
                }

                if (user.uid != item) {
                  this.setState({
                    dataToShow: this.state.dataToShow.concat(userData)
                  })
                }
              })
            })
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

                    if (user.uid != item) {
                      this.setState({
                        dataToShow: this.state.dataToShow.concat(userData)
                      })
                    }
                  })
                })
              });
          }

        });
      })
    });
  }

  renderItem = (data) => {
      return (
        <View style={{ marginRight: 10 }}>

<TouchableOpacity
activeOpacity={.6}
onPress={() =>

this.props.navigation.push('User', {id:data.item.id})
}
>
     <View style={{padding: 10, flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
       <View style={{flexDirection: "row", alignItems:"center"}}>
       <Image
source = {{ uri: data.item.data.profile_picture }}
style={{resizeMode:'cover',borderRadius:50,width: 45, height: 45,
}}
/>
     <Text style={{color: this.state.theme == "dark" ? dark.colors.color :
     light.colors.color,fontFamily: 'OpenSans-R',fontSize: 16, marginLeft: 10}}>{data.item.data.first_name}</Text>
     {data.item.data.verified == 1 ? (
<Image
style={{resizeMode:'cover',borderRadius:50,width: 17, height: 17, marginLeft: 4, flexDirection:"column",
justifyContent:"center",marginTop: 2}}
source={require('../assets/verified_rapprogtrain.png')}
/>
) : (
<View></View>
)}
</View>

<Text style={{color: this.state.theme == "dark" ? dark.colors.color :
     dark.colors.color,fontFamily: 'OpenSans-R', backgroundColor: this.state.theme == "dark" ?
     "#a10000" : "#db0202", borderRadius: 4, paddingLeft: 15, paddingRight: 15,
     paddingTop: 5, paddingBottom: 5}}>Перейти</Text>
     </View>
     </TouchableOpacity>

        </View>
      )
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataToShow}
          initialNumToRender={0}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

export default createStackNavigator(
  {
    RecommendUser: {
      screen: RecommendUser,
      // navigationOptions: {
      //   header: null,
      // },
    },
  },
  {
    initialRouteName: 'RecommendUser',
  }
);
