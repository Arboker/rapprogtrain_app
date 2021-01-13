import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Header } from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderBackButton } from 'react-navigation-stack';
import CoursesPlan from '../components/CoursesPlan'
import CoursesPlanView from '../components/CoursesPlanView'

import CourseOne from './SiteCourseData/CourseOne'

class WebSitePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
        theme: '',
    }
  }

  static navigationOptions = ({ navigation }) => {

    return {
      title: "Программа обучения",
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



  async componentDidMount() {
    await Expo.Font.loadAsync({
      'OpenSans-R': require('../../assets/fonts/OpenSans-Regular.ttf'),
   });
   this.setState({ fontLoaded: true });
   const value = await AsyncStorage.getItem('theme')
   this.setState({
     theme: value,
   })
 }




  render() {
    return (




          <ScrollView>
          <View style={styles.MainContainer}>


          <TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 1,
            title: "Установка и настройка Open Server",
          })
           }>

          <CoursesPlanView
            numTopBox={styles.numTopBox}
            viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
            "#7a7a7a" : '#dddddd'}]}
            theme={this.state.theme}
          topHomeCourses={styles.topHomeCourses}
    number="1"
    title="Установка и настройка Open Server"
          />

</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 2,
            title: "Шапка и футер сайта",
          })
           }>
<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
            "#7a7a7a" : '#dddddd'}]}
            theme={this.state.theme}
topHomeCourses={styles.topHomeCourses}
number="2"
title="Шапка и футер сайта"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 3,
            title: "Основная часть сайта",
          })
           }>
<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Основная часть сайта"
/>
</TouchableOpacity>

<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 4,
            title: 'Страница "О нас", "Статьи" и адаптивность',
          })
           }>
<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
            "#7a7a7a" : '#dddddd',}]}
            theme={this.state.theme}
topHomeCourses={styles.topHomeCourses}
number="4"
title='Страница "О нас", "Статьи" и адаптивность'
/>
</TouchableOpacity>

          </View>
                      </ScrollView>







    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    padding:10
  },

    topHomeCourses :{
          fontFamily: 'OpenSans-R',
          fontSize:16,
          width:'80%'
    },

ViewStyle :{
  flexDirection: 'row',
                     justifyContent: 'space-between',
                    borderWidth:1,
                    padding:10,
                    borderTopRightRadius:4,
              borderTopLeftRadius:4,
              borderBottomRightRadius:4,
            borderBottomLeftRadius:4
},
ViewStyleBox :{
  flexDirection: 'row',
     justifyContent: 'space-between',
      borderBottomWidth:1,
        borderLeftWidth:1,
            borderRightWidth:1,
      padding:10,
      borderBottomRightRadius:4,
borderBottomLeftRadius:4
},
textStyleBox :{
  fontFamily: 'OpenSans-R', marginRight:3, marginLeft:28, fontSize:16
},
numTopBox :{
   fontFamily: 'OpenSans-R', marginRight:5, marginLeft:5, fontSize:17
}

});


export default createStackNavigator(
  {
    Main: {
      screen: WebSitePlan,
    },
    CoursesPlan: {
      screen: CoursesPlan,
    },
    CoursesPlanView: {
      screen: CoursesPlanView,
    },
    CourseOne: {
      screen: CourseOne,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Main',
  }
);
