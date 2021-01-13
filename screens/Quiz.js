import React, { PureComponent } from 'react';
import { Button, View, Text, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
  ScrollView, WebView, TouchableOpacity, Share, Platform, AsyncStorage } from 'react-native';

const { width } = Dimensions.get('window');

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import { SafeAreaView } from "react-navigation";

import HtmlBasic from './Quizzes/HtmlBasic'
import HtmlAdvanced from './Quizzes/HtmlAdvanced'
import CssMedium from './Quizzes/CssMedium'
import JsBasic from './Quizzes/JsBasic'
import ReactBasic from './Quizzes/ReactBasic'
import JqueryMedium from './Quizzes/JqueryMedium'
class Quiz extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        theme: '',
    }
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return { 
      title: "Тесты",
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

  async componentDidMount() {
      
   const value = await AsyncStorage.getItem('theme')
   this.setState({
     theme: value,
   })
  }


  render() {

    return (
      <SafeAreaView>
        <ScrollView>
      <View>

<TouchableOpacity
activeOpacity={.6}
onPress={() =>
this.props.navigation.navigate('HtmlBasic')
}>
<View style={styles.postContainer}>
     <Image
source = {require('../assets/img/1890026_f604_4.jpg')}
style={styles.ImageStyle}
     />

<View style={[styles.ViewText, {backgroundColor: this.state.theme=="dark" ? "#2e2e2e" :'#efefef'}]}>

<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>HTML</Text>
<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>Уровень: Легкий</Text>
</View>

</View>
</TouchableOpacity>

<TouchableOpacity
activeOpacity={.6}
onPress={() =>
this.props.navigation.navigate('HtmlAdvanced')
}>
<View style={styles.postContainer}>
     <Image
source = {require('../assets/img/1890026_f604_4.jpg')}
style={styles.ImageStyle}
     />

<View style={[styles.ViewText, {backgroundColor: this.state.theme=="dark" ? "#2e2e2e" :'#efefef'}]}>

<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>HTML</Text>
<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>Уровень: Тяжелый</Text>
</View>

</View>
</TouchableOpacity>

<TouchableOpacity
activeOpacity={.6}
onPress={() =>
this.props.navigation.navigate('CssMedium')
}>
<View style={styles.postContainer}>
     <Image
source = {require('../assets/img/1*fU5ZlyVK0FNs2hNIoQMtoQ.jpeg')}
style={styles.ImageStyle}
     />

<View style={[styles.ViewText, {backgroundColor: this.state.theme=="dark" ? "#2e2e2e" :'#efefef'}]}>

<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>CSS</Text>
<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>Уровень: Средний</Text>
</View>

</View>
</TouchableOpacity>

<TouchableOpacity
activeOpacity={.6}
onPress={() =>
this.props.navigation.navigate('JsBasic')
}>
<View style={styles.postContainer}>
     <Image
source = {require('../assets/img/BrutalLifeCycleJavascript.png')}
style={styles.ImageStyle}
     />

<View style={[styles.ViewText, {backgroundColor: this.state.theme=="dark" ? "#2e2e2e" :'#efefef'}]}>

<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>JavaScript</Text>
<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>Уровень: Легкий</Text>
</View>

</View>
</TouchableOpacity>

<TouchableOpacity
activeOpacity={.6}
onPress={() =>
this.props.navigation.navigate('ReactBasic')
}>
<View style={styles.postContainer}>
     <Image
source = {require('../assets/img/1780436_aa46.jpg')}
style={styles.ImageStyle}
     />

<View style={[styles.ViewText, {backgroundColor: this.state.theme=="dark" ? "#2e2e2e" :'#efefef'}]}>

<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>React</Text>
<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>Уровень: Легкий</Text>
</View>

</View>
</TouchableOpacity>

<TouchableOpacity
activeOpacity={.6}
onPress={() =>
this.props.navigation.navigate('JqueryMedium')
}>
<View style={styles.postContainer}>
     <Image
source = {require('../assets/img/banner-1c9c74d425.png')}
style={styles.ImageStyle}
     />

<View style={[styles.ViewText, {backgroundColor: this.state.theme=="dark" ? "#2e2e2e" :'#efefef'}]}>

<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>jQuery</Text>
<Text style={{fontSize:15,
fontFamily: 'Roboto-M',color: this.state.theme == "dark" ? "white" :
'black'}}>Уровень: Средний</Text>
</View>

</View>
</TouchableOpacity>

 </View>
 </ScrollView>
      </SafeAreaView>
 
);
  }
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width
  },
  offlineText: { color: '#fff' },
  postContainer :{
    width: Dimensions.get('window').width,
    height:130,
    paddingBottom:10,
        padding:10
  },

  ImageStyle :{
    resizeMode:'cover',width:null,height:null, flex:1,   
    borderTopWidth:1,
  },

  ViewText :{padding:5, flexDirection: 'row', justifyContent: 'space-between', borderBottomLeftRadius: 5,
  borderBottomRightRadius: 5, padding:5, fontFamily:"OpenSans-R"}
});

 export default createStackNavigator(
   {
    Quiz: {
       screen: Quiz,
     },
     HtmlBasic: {
      screen: HtmlBasic,
    },
    HtmlAdvanced: {
      screen: HtmlAdvanced,
    },
    CssMedium: {
      screen: CssMedium,
    },
    JsBasic: {
      screen: JsBasic,
    },
    ReactBasic: {
      screen: ReactBasic,
    },
    JqueryMedium: {
      screen: JqueryMedium,
    },
   },
   {
     initialRouteName: 'Quiz',

   }
 );
