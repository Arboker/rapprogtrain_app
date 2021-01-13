import React from 'react';
import * as Font from 'expo-font';
import Constants from 'expo-constants';

import { Button, View, Text, StyleSheet, Image, Dimensions,
ScrollView, TouchableOpacity, AsyncStorage, ActivityIndicator } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import CoursesFragment from './components/CoursesFragment'
import HtmlPreview from './CoursesBlock/HtmlPreview'
import CssPreview from './CoursesBlock/CssPreview'
import JavaScriptPreview from './CoursesBlock/JavaScriptPreview'
import JqueryPreview from './CoursesBlock/JqueryPreview'
import ReactPreview from './CoursesBlock/ReactPreview'
import WebSitePreview from './CoursesBlock/WebSitePreview'
import FlexboxPreview from './CoursesBlock/FlexboxPreview' 

import SafeAreaView from 'react-native-safe-area-view';

import { light, dark } from '../assets/theme'

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

class CoursesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
  imageHtml:require('../assets/img/1890026_f604_4.jpg'),
  imageCss:require('../assets/img/1*fU5ZlyVK0FNs2hNIoQMtoQ.jpeg'),
    imageJs:require('../assets/img/BrutalLifeCycleJavascript.png'),
      imageJq:require('../assets/img/banner-1c9c74d425.png'),
        imageWeb:require('../assets/img/creation_site.jpg'),
        imageReact:require('../assets/img/1780436_aa46.jpg'),
        imageFlexbox:require('../assets/img/coding-vs-programming-2.jpg'),
        theme: '',
        fontLoaded: false,
        loading: true
    }
  }

   static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Курсы",
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
        color: global.themeNow == "dark" ? "white" : "black",
        elevation: 0,
            borderBottomWidth:1,
            borderBottomColor: global.themeNow == "dark" ? "#303030" : "#dddddd",
        },
        headerTitleStyle: {
          color: navigation.getParam('Color')
        },
        cardStyle: { backgroundColor: global.themeNow == "dark" ? "#212121" : "white" },
    };
  };

    async componentDidMount() {
      

      await Expo.Font.loadAsync({
       'Roboto-M': require('../assets/fonts/Roboto-Medium.ttf'),
             'Roboto-R': require('../assets/fonts/Roboto-Regular.ttf'),
                'OpenSans-R': require('../assets/fonts/OpenSans-Regular.ttf'),
     });
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
    }


    render() {
      if (this.state.loading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }
 const { navigate } = this.props.navigation;

            return (


<SafeAreaView style={{flex:1, backgroundColor: this.state.theme == "dark" ? dark.colors.background :
          light.colors.background}}>
                  <ScrollView>

                  <View style={styles.container}>


                  <Text style={[styles.textTitle, {color:this.state.theme == "dark" ? dark.colors.color :
    light.colors.color}]}>Основы</Text>

            <View style={styles.viewImageContainer}>


            <TouchableOpacity
            activeOpacity={.7}
            onPress={() =>
            navigate('HtmlPreview')
             }>
            <CoursesFragment
            viewBox={styles.viewBox}
            imageStyle={styles.imageStyle}
            textStyle={styles.textStyle}
             imageUrl={this.state.imageHtml}
             theme={this.state.theme}
            title="HTML"
             />
             </TouchableOpacity>


             <TouchableOpacity
               activeOpacity={.7}
             onPress={() =>
              navigate('CssPreview')
              }>
             <CoursesFragment
             viewBox={styles.viewBox}
             imageStyle={styles.imageStyle}
             textStyle={styles.textStyle}
             imageUrl={this.state.imageCss}
             theme={this.state.theme}
             title="CSS"
              />
               </TouchableOpacity>



            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingTop:10, paddingBottom:20, width:'96%'}}>

            <TouchableOpacity
              activeOpacity={.7}
            onPress={() =>
            navigate('JavaScriptPreview')
             }>
            <CoursesFragment
            viewBox={styles.viewBox}
            imageStyle={styles.imageStyle}
            textStyle={styles.textStyle}
             imageUrl={this.state.imageJs}
             theme={this.state.theme}
            title="JavaScript"
             />
               </TouchableOpacity>

               <TouchableOpacity
                 activeOpacity={.7}
               onPress={() =>
              navigate('JqueryPreview')
                }>
             <CoursesFragment
             viewBox={styles.viewBox}
             imageStyle={styles.imageStyle}
             textStyle={styles.textStyle}
             imageUrl={this.state.imageJq}
             theme={this.state.theme}
             title="jQuery"
              />
               </TouchableOpacity>

            </View>

            <Text style={[styles.textTitle, {color:this.state.theme == "dark" ? dark.colors.color :
    light.colors.color}]}>Библиотеки</Text>



            <View style={{ height: 130, marginTop: 20,  width:Dimensions.get('window').width}}>
                                           <ScrollView
                                               horizontal={true}
                                               showsHorizontalScrollIndicator={false}
            >

<TouchableOpacity
               activeOpacity={.7}
             onPress={() =>
            navigate('FlexboxPreview')
              }>
             <CoursesFragment
             viewBox={styles.viewBox}
             imageStyle={styles.imageStyle}
             textStyle={styles.textStyle}
             imageUrl={this.state.imageFlexbox}
             theme={this.state.theme}
             title="Flexbox"
              />
               </TouchableOpacity>

             <TouchableOpacity
               activeOpacity={.7}
             onPress={() =>
            navigate('ReactPreview')
              }>
             <CoursesFragment
             viewBox={styles.viewBox}
             imageStyle={styles.imageStyle}
             textStyle={styles.textStyle}
             imageUrl={this.state.imageReact}
             theme={this.state.theme}
             title="React"
              />
               </TouchableOpacity>

               <TouchableOpacity
              activeOpacity={.7}
            onPress={() =>
          navigate('JqueryPreview')
             }>
            <CoursesFragment
            viewBox={styles.viewBox}
            imageStyle={styles.imageStyle}
            textStyle={styles.textStyle}
             imageUrl={this.state.imageJq}
             theme={this.state.theme}
            title="jQuery"
             />
             </TouchableOpacity>



            </ScrollView>
            </View>


            <Text style={[styles.textTitle, {color:this.state.theme == "dark" ? dark.colors.color :
    light.colors.color}]}>Веб-программирование</Text>

          <View style={styles.viewImageContainer}>

          <TouchableOpacity
            activeOpacity={.7}
            onPress={() =>
            navigate('HtmlPreview')
             }>
            <CoursesFragment
            viewBox={styles.viewBox}
            imageStyle={styles.imageStyle}
            textStyle={styles.textStyle}
             imageUrl={this.state.imageHtml}
             theme={this.state.theme}
            title="HTML"
             />
             </TouchableOpacity>


             <TouchableOpacity
               activeOpacity={.7}
             onPress={() =>
              navigate('CssPreview')
              }>
             <CoursesFragment
             viewBox={styles.viewBox}
             imageStyle={styles.imageStyle}
             textStyle={styles.textStyle}
             imageUrl={this.state.imageCss}
             theme={this.state.theme}
             title="CSS"
              />
               </TouchableOpacity>

            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between',paddingTop:10, paddingBottom:20, width:'96%'}}>

            <TouchableOpacity
     activeOpacity={.7}
   onPress={() =>
  navigate('FlexboxPreview')
    }>
 <CoursesFragment
 viewBox={styles.viewBox}
 imageStyle={styles.imageStyle}
 textStyle={styles.textStyle}
 imageUrl={this.state.imageFlexbox}
 theme={this.state.theme}
 title="Flexbox"
  />
   </TouchableOpacity>

            <TouchableOpacity
                 activeOpacity={.7}
               onPress={() =>
              navigate('WebSitePreview')
                }>
              <CoursesFragment
              viewBox={styles.viewBox}
              imageStyle={styles.imageStyle}
              textStyle={styles.textStyle}
             imageUrl={this.state.imageWeb}
             theme={this.state.theme}
              title="Создание сайта"
               />
         </TouchableOpacity>

   

</View>

                  </View>
                    </ScrollView>

                    </SafeAreaView>

            );




  }
}


  const RootStack = createStackNavigator(
    {
      Courses: {
        screen: CoursesScreen,
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
      JavaScriptPreview: {
        screen: JavaScriptPreview,
        navigationOptions: {
          header: null,
        },
      },
      JqueryPreview: {
        screen: JqueryPreview,
        navigationOptions: {
          header: null,
        },
      },
      ReactPreview: {
        screen: ReactPreview,
        navigationOptions: {
          header: null,
        },
      },
      WebSitePreview: {
        screen: WebSitePreview,
        navigationOptions: {
          header: null,
        },
      },
      FlexboxPreview: {
        screen: FlexboxPreview,
        navigationOptions: {
          header: null,
        },
      },
    },
    {
      initialRouteName: 'Courses',
    }
  );

  const AppContainer = createAppContainer(RootStack);

  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
