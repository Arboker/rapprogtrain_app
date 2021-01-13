import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Header } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import { HeaderBackButton } from 'react-navigation-stack';

import CoursesPlan from '../components/CoursesPlan'
import CoursesPlanView from '../components/CoursesPlanView'

import CourseOne from './JavaScriptCourseData/CourseOne'
import CourseTwo from './JavaScriptCourseData/CourseTwo'
import CourseThree from './JavaScriptCourseData/CourseThree'
import CourseFour from './JavaScriptCourseData/CourseFour'
import { light, dark } from '../../assets/theme'

class JavaScriptPlan extends Component {
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
          title: "Введение в JavaScript",
        })
         }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Введение в JavaScript"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
id: 2,
title: "Первый код в JavaScript",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Первый код в JavaScript"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
id: 3,
title: "Комментарии в JavaScript",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Комментарии в JavaScript"
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
id: 4,
title: "Привет мир!",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Привет мир!"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
id: 5,
title: "Переменные",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
theme={this.state.theme}
style={styles.topHomeCourses}
number="2"
title="Переменные"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
id: 6,
title: "Использование 'use strict'",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Использование 'use strict'"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
id: 7,
title: "Типы данных",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="Типы данных"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
id: 8,
title: "Выбор имени перемменным",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title="Выбор имени перемменным"
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
id: 9,
title: "Операторы сравнения",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="6"
title="Операторы сравнения"
/>
</TouchableOpacity>



<CoursesPlanView
numTopBox={styles.numTopBox}
viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Изучите: Циклы"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
id: 1,
title: "Оператор if и else",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title=" Оператор if и else"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
id: 2,
title: "Оператор else if",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title=" Оператор else if"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
id: 3,
title: "Оператор switch",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Оператор switch"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
id: 4,
title: "Циклы while, for",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title='Циклы while,for'
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
id: 5,
title: "Break и continue",
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
title='Break и continue'
/>
</TouchableOpacity>


<CoursesPlanView
numTopBox={styles.numTopBox}
viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="Изучите: Массивы"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
id: 6,
title: "Массивы",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Массивы"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
id: 7,
title: "Объект Math",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Объект Math"
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
id: 8,
title: "Объект Date",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Объект Date"
/>
</TouchableOpacity>


<CoursesPlanView
numTopBox={styles.numTopBox}
viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title="Изучите: Методы и функции"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
id: 1,
title: "Функции",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Функции"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
id: 2,
title: "Оператор return",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Оператор return"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
id: 3,
title: "Alert,prompt,confirm",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Alert,prompt,confirm"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
id: 4,
title: "Методы объектов this",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="Методы объектов this"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
id: 5,
title: "Объект new",
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
title="Объект new"
/>
</TouchableOpacity>


<CoursesPlanView
numTopBox={styles.numTopBox}
viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="6"
title="Изучите: Dom"
/>

<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
id: 1,
title: "Что такое Dom",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title='Что такое Dom'
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
id: 2,
title: "Выбор элементов",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title='Выбор элементов'
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
id: 3,
title: "Добавление и удаление элементов",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Добавление и удаление элементов"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
id: 4,
title: "Анимации в JavaScript",
})
}>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="Анимации в JavaScript"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
id: 5,
title: "Обработка событий",
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
title="Обработка событий"
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
                     borderColor:'#dddddd',
                    borderWidth:1,
                    padding:10,
                    borderTopRightRadius:4,
              borderTopLeftRadius:4
},
ViewStyleBox :{
  flexDirection: 'row',
     justifyContent: 'space-between',
      borderColor:'#dddddd',
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
      screen: JavaScriptPlan,
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
    CourseThree: {
      screen: CourseThree,
      navigationOptions: {
        header: null,
      },
    },
    CourseFour: {
      screen: CourseFour,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Main',
  }
);
