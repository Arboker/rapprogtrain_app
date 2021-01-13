import React, { Component } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
import { HeaderBackButton } from 'react-navigation-stack'

import { light, dark } from '../../assets/theme'
import * as firebase from 'firebase';

export default class Subs extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: navigation.getParam('Title'),
      headerLeft:<HeaderBackButton onPress={() => navigation.goBack(null)} tintColor={global.themeNow == "dark" ? "white" : "black"} />,
      /* These values are used instead of the shared configuration! */
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
    };
  };

  constructor(props) {
    super(props);
    this.state = {

       totalSubscribed: 0,
       totalSubscribes: 0,
       subs: [],
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

   
    var refSubs = firebase.database().ref("subscribes");
    var userId = this.props.navigation.state.params.id;

    if (this.props.navigation.state.params.subs) {

      this.props.navigation.setParams({
        Title: "Подписки"
       });   

       refSubs.orderByChild("uidUser").equalTo(userId).once('value', snapshot => {
         if (snapshot.val() == null) {
          this.setState({
            loading: false,
            noData: 'Страница ни на кого не подписана'
          })
         }
         else {
          Object.keys(snapshot.val()).map(item=>{
            firebase.database().ref('/users/' + snapshot.val()[item].uidToSubscibed).once('value').then(data => {
              if (snapshot.val()[item].uidToSubscibed != userId) {
                var userData = {
                id: snapshot.val()[item].uidToSubscibed,
                data: data.val()
              }
              this.setState({
                subs: this.state.subs.concat(userData),
                loading: false
              })
            }
          })
          });
         }
});
    }
    else {
      this.props.navigation.setParams({
        Title: "Подписчики"
       });
   
      refSubs.orderByChild("uidToSubscibed").equalTo(userId).once('value', snapshot => {
         if (snapshot.val() == null) {
          this.setState({
            loading: false,
            noData: 'На страницу никто не подписан'
          })
         }
         else {
          Object.keys(snapshot.val()).map(item=>{
            firebase.database().ref('/users/' + snapshot.val()[item].uidUser).once('value').then(data => {
              if (snapshot.val()[item].uidUser != userId) {
              var userData = {
                id: snapshot.val()[item].uidUser,
                data: data.val()
              }
              console.log(userData)
              this.setState({
                subs: this.state.subs.concat(userData),
                loading: false
              })
            }
          })
          });
         }
});
    }
  }


  renderItem = (item) => {
    return (
      <Text style={{color: 'white'}}>{item.first_name}{item.last_name}</Text>
    )
  }

  render() {
    return (
      <View>
       
       {!this.state.loading ? (
           <View>
          {this.state.noData == '' ? (
 <FlatList
 data={this.state.subs}
 initialNumToRender={0}
 renderItem={({item}) => {
   return (
     <TouchableOpacity
activeOpacity={.6}
onPress={() =>

this.props.navigation.push('User', {id:item.id})
}
>
     <View style={{padding: 10, flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
       <View style={{flexDirection: "row", alignItems:"center"}}>
       <Image
source = {{ uri: item.data.profile_picture }}
style={{resizeMode:'cover',borderRadius:50,width: 45, height: 45,
}}
/>
     <Text style={{color: this.state.theme == "dark" ? dark.colors.color :
     light.colors.color,fontFamily: 'OpenSans-R',fontSize: 16, marginLeft: 10}}>{item.data.first_name}</Text>
     {item.data.verified == 1 ? (
<Image
style={{resizeMode:'cover',borderRadius:50,width: 17, height: 17, marginLeft: 4, flexDirection:"column",
justifyContent:"center",marginTop: 2}}
source={require('../../assets/verified_rapprogtrain.png')}
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
   )
 }}
 keyExtractor={item => item.id}
/>
          ) : (
<Text style={{color: this.state.theme == "dark" ? dark.colors.color :
           light.colors.color, fontFamily: 'OpenSans-R',fontSize: 20, textAlign: "center", marginTop: 20}}>{this.state.noData}</Text>
          )} 
       
   </View>
       ) : (
        <ActivityIndicator size="large" style={{paddingTop: 10}} />
       )}
         

      </View>
    )
  }
}
