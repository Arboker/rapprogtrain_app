import React from 'react';
import * as Font from 'expo-font';

import { Button, View, Text, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, Platform, FlatList, Linking, AsyncStorage } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import Courses from './Courses'
import InfoCourses from './InfoCourses'
import MyWebView from 'react-native-webview-autoheight';

import { HeaderBackButton } from 'react-navigation-stack';

import HtmlPreview from './CoursesBlock/HtmlPreview'
import CssPreview from './CoursesBlock/CssPreview'

import MediumAdmobAd from './components/MediumAdmobAd'
import AutoHeightWebView from 'react-native-autoheight-webview'
import { light, dark } from '../assets/theme'

class Answers extends React.Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: "Вопросы и ответы",
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


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
       fontLoaded: false,
       theme: '',
    }
  }



  async componentDidMount() {
    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
    })

    await Expo.Font.loadAsync({
     'Roboto-M': require('../assets/fonts/Roboto-Medium.ttf'),
     'OpenSans-R': require('../assets/fonts/OpenSans-Regular.ttf'),
      'Roboto-R': require('../assets/fonts/Roboto-Regular.ttf'),
   });
   this.setState({ fontLoaded: true });
   
   return fetch('http://rapprogtrain.com/server-side/answers.php')
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         isLoading: false,
         dataSource: responseJson
       }, function() {
         // In this block you can do something with new state.
       });
     })
     .catch((error) => {
       console.error(error);
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
    <View style={{padding:10}}>
<Text style={{color: this.state.theme == "dark" ?
 dark.colors.color : light.colors.color, fontSize:22,fontFamily: 'Roboto-M',fontWeight:'700'}}>Ответы на вопросы:</Text>
</View>

  )
}

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

 const { navigate } = this.props.navigation;
    return (


      <SafeAreaView style={[styles.MainContainer, {backgroundColor: this.state.theme == "dark" ? "#212121" : "white"}]}>

<FlatList
data={this.state.dataSource}
 ItemSeparatorComponent = {this.FlatListItemSeparator}
         renderItem={({item}) =>
         <View style={styles.stylePostContainer}>
         <View style={[styles.postContainer, {backgroundColor: this.state.theme == "dark" ?
         "#303030" : '#f2f2f2', borderColor: this.props.theme == "dark" ?
         "#1a1818" : 'silver'}]}>
              <TouchableOpacity style={{flex:2}}
              activeOpacity={.7}
              onPress={() => navigate('ArticleScreen', {
                title: item.title

              })}
              >
           <Text
           style={[styles.textOfArticle,{color: this.state.theme == "dark" ?
           dark.colors.color : light.colors.color}]}
           >
             {item.title}
           </Text>



           <View style={{marginTop:5, flexDirection: 'row', justifyContent: 'space-between'}}>
           <Text style={{color:this.state.theme == "dark" ? "#a1a1a1" :
      '#727272',fontSize:13}}>{item.category}</Text>
           <View style={{flexDirection: 'row'}}>
               <Icon name="ios-eye" size={18} style={{color:this.state.theme == "dark" ? "#a1a1a1" :
      '#727272', marginRight:3}} />
           <Text style={{color:this.state.theme == "dark" ? "#a1a1a1" :
      '#727272',fontSize:13}}>{item.views}</Text>
              </View>
           </View>
</TouchableOpacity>
  </View>
  </View>
         }
         ListHeaderComponent={this.getHeader}
         keyExtractor={item => item.id}
       />


</SafeAreaView>
    );
  }
}



class ArticleScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : '',
        tabBarVisible: false,
        headerLeft:<HeaderBackButton onPress={() => navigation.goBack(null)} tintColor={global.themeNow == "dark" ? "white" : "black"} />,
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


  state = {
        isLoading: true,
        visible: true,
        theme: ''
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
    const title = params ? params.title : '';


    fetch("http://rapprogtrain.com/server-side/answers_js_get.php" + '?title=' + title)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
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



    render(){
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
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
       <FlatList
       data={this.state.dataSource}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem={({item}) =>
                <View style={{flex:1}}>
                <AutoHeightWebView
                  style={{ flex: 1 }}
               source={{html:
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

            <div style="padding:10;"> <div style="padding-top:2%;">

            <span style="font-family: 'Roboto', sans-serif;
            font-weight: bold;font-size:22;
            color:`+colorTitlw+` ">`+item.title+`</span>

           <div style="margin-top:15;display: flex;
           justify-content: space-between;">
           <span style="color:`+smallColor+`;font-size:14">`+item.category+`</span>
           <div style="display:flex;align-items: center;">
           <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" style="fill:#727272;margin-right:3" viewBox="0 0 24 24"><path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"/></svg>
           <span style="color:`+smallColor+`;font-size:13;">`+item.views+`</span>
           </div>
           </div>

             </div>
             <div style="color:`+colorTitlw+`;padding-top:10;font-family: 'Open Sans', sans-serif;">`+item.description+`</div>
             <div style="color:`+colorTitlw+`;padding-top:10;font-family: 'Open Sans', sans-serif;">`+item.content+`</div></div>

            `  }}
           />
                <MediumAdmobAd />
            </View>
                }
                keyExtractor={item => item.id}
              />

     );
   }





}





const styles = StyleSheet.create({

  MainContainer :{
  // Setting up View inside content in Vertically center.
  justifyContent: 'center',
  flex:1
  },

  topHomeCourses :{
    fontFamily: 'OpenSans-R',
        alignSelf: "center"
  },

  textOfArticle:{
    marginTop:5,
    fontSize:16,
    fontFamily: 'OpenSans-R'
  },

  postContainer :{
    width: Dimensions.get('window').width - 20,
        padding:5,
        borderRadius:5,
        borderWidth: 1,
        justifyContent: "center",
        marginBottom: 10  
  },

  stylePostContainer :{
    width: Dimensions.get('window').width,
    justifyContent: "center",
    alignItems:'center',  
  },

  postArticleScreen :{
    width: Dimensions.get('window').width,
    height:200
  },

     rowViewContainer: {
          fontSize: 20,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
        },

  });


  export default createStackNavigator(
    {
        Answers: {
        screen: Answers
      },
      ArticleScreen: {
        screen: ArticleScreen,
      },
    },
    {
      initialRouteName: 'Answers',
    }
  );
