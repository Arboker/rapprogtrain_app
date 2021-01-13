import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Header } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderBackButton } from 'react-navigation-stack';
import CoursesPlan from '../components/CoursesPlan'
import CoursesPlanView from '../components/CoursesPlanView'

import CourseOne from './JqueryCourseData/CourseOne'
import CourseTwo from './JqueryCourseData/CourseTwo'
import { light, dark } from '../../assets/theme'

class JqueryPlan extends Component {
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




          <CoursesPlanView
            numTopBox={styles.numTopBox}
            viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
            "#7a7a7a" : '#dddddd'}]}
          topHomeCourses={styles.topHomeCourses}
          theme={this.state.theme}
    number="1"
    title="Изучите: Введение"
          />


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 1,
            title: "Что такое jQuery?",
          })
           }>
<CoursesPlan
 styleTextBox={styles.textStyleBox}
 styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
 "#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title=" Что такое jQuery? "
/>
</TouchableOpacity>



<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 2,
            title: "Подключаем jQuery",
          })
           }>
<CoursesPlan
 styleTextBox={styles.textStyleBox}
 styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title=" Подключаем jQuery "
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Изучите: Основы"
/>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 3,
            title: "Начало",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Начало"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 4,
            title: "Селекторы",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title=" Селекторы"
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Изучите: Работа с атрибутами"
/>

<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 5,
            title: "Метод attr",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Метод attr"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 6,
            title: "Удаление атрибутов",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title=" Удаление атрибутов"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 7,
            title: "Получение и установка контента",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
 styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Получение и установка контента"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 8,
            title: "Атрибут val()",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title=' Атрибут val()'
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 9,
            title: "Добавление контента",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title='Добавление контента'
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="Изучите: Работа с CSS"
/>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 1,
            title: "Добавление и удаление классов",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Добавление и удаление классов"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 2,
            title: "Свойства CSS",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title=" Свойства CSS"
/>
</TouchableOpacity>

<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
            "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title="Изучите: События"
/>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 3,
            title: "Обработка событий",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Обработка событий"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 4,
            title: "Объект события",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Объект события"
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
  theme={this.state.theme}
topHomeCourses={styles.topHomeCourses}
number="6"
title="Изучите: Эффекты"
/>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 5,
            title: "Hide и Show",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title='Hide и Show'
/>
</TouchableOpacity>

<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 6,
            title: "Анимация",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title='Анимация'
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
              borderTopLeftRadius:4
},
ViewStyleBox :{
  flexDirection: 'row',
     justifyContent: 'space-between',
      borderBottomWidth:1,
        borderLeftWidth:1,
            borderRightWidth:1,
      padding:10,
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
      screen: JqueryPlan
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
    CourseTwo: {
      screen: CourseTwo,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Main',
  }
);
