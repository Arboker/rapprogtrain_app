import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Header } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderBackButton } from 'react-navigation-stack';
import CoursesPlan from '../components/CoursesPlan'
import CoursesPlanView from '../components/CoursesPlanView'

import CourseOne from './HtmlCourseData/CourseOne'
import CourseTwo from './HtmlCourseData/CourseTwo'
import CourseThree from './HtmlCourseData/CourseThree'
import CourseFour from './HtmlCourseData/CourseFour'
import CourseFive from './HtmlCourseData/CourseFive'
import { light, dark } from '../../assets/theme'

class HtmlPlan extends Component {
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
     const { navigate } = this.props.navigation;
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
    title="Изучите: Начинаем"
          />

          <TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 1,
            title: "Что такое HTML?",
          })
           }>
<CoursesPlan
 styleTextBox={styles.textStyleBox}
 styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Что такое HTML?"
/>
  </TouchableOpacity>


  <TouchableOpacity
  activeOpacity={.7}
  onPress={() =>
  this.props.navigation.navigate('CourseOne', {
    id: 2,
    title: "Структура HTML",
  })
   }>
<CoursesPlan
 styleTextBox={styles.textStyleBox}
 styleBox={[styles.ViewStyleBox, {borderColor: this.state.theme == "dark" ? 
 "#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Структура HTML"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
  id: 3,
  title: "Создание страницы",
})
 }>

<CoursesPlan
 styleTextBox={styles.textStyleBox}
 styleBox={[styles.ViewStyleBox,{  borderBottomRightRadius:4,
  borderBottomLeftRadius:4,borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
  theme={this.state.theme}
style={styles.topHomeCourses}
number="3"
title="Создание страницы"
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
theme={this.state.theme}
number="2"
title="Изучите: Основы HTML"
/>

<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 1,
  title: "Комментарии",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Комментарии"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 2,
  title: "Теги 'meta'",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{  borderBottomRightRadius:4,
  borderBottomLeftRadius:4,borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
  theme={this.state.theme}
style={styles.topHomeCourses}
number="2"
title="Теги 'meta'"
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Изучите: Работа с текстом"
/>

<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 3,
  title: "Параграфы",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Параграфы"
/>
</TouchableOpacity>

<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 4,
  title: "Заголовки",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Заголовки"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 5,
  title: "Форматирование текста",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Форматирование текста"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 6,
  title: 'Тег "hr" и "br"',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={styles.ViewStyleBox}
styleBox={[styles.ViewStyleBox,{  borderBottomRightRadius:4,
  borderBottomLeftRadius:4,borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
  theme={this.state.theme}
number="4"
title='Тег "hr" и "br"'
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="Изучите: Ссылки и работа с изоображением"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 1,
  title: 'Структура',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Структура"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 2,
  title: 'Абсолютный и относительный путь',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
theme={this.state.theme}
style={styles.topHomeCourses}
number="2"
title="Абсолютный и относительный путь"
/>
</TouchableOpacity>

<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 3,
  title: 'Добавление изоображений и ссылка',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4,}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Добавление изоображений и ссылка"
/>
</TouchableOpacity>



<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title="Изучите: Работа со списками"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 4,
  title: 'Маркированные списки',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
theme={this.state.theme}
style={styles.topHomeCourses}
number="1"
title="Маркированные списки"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 5,
  title: 'Нумерованные списки',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Нумерованные списки"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 6,
  title: 'Многоуровневые списки',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4,}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Многоуровневые списки"
/>
</TouchableOpacity>



<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
  theme={this.state.theme}
topHomeCourses={styles.topHomeCourses}
number="6"
title="Изучите: Основы HTML5"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 1,
  title: 'Элементы "header", "main", "nav", "footer"',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title='Элементы "header", "main", "nav", "footer"'
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 2,
  title: 'Элементы "article", "section", "aside"',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
theme={this.state.theme}
style={styles.topHomeCourses}
number="2"
title='Элементы "article", "section", "aside"'
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 3,
  title: 'Добавление аудио',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title=" Добавление аудио "
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 4,
  title: 'Добавление видео',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4,}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title=" Добавление видео "
/>
</TouchableOpacity>



<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="7"
title="Изучите: Форма

"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFive', {
  id: 1,
  title: 'Элемент "form"',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title='Элемент "form"'
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFive', {
  id: 2,
  title: 'Добавление полей',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title='Добавление полей'
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFive', {
  id: 3,
  title: 'Кнопки',
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4,}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title=" Кнопки "
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
    HtmlPlan: {
      screen: HtmlPlan,
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
    CourseFive: {
      screen: CourseFive,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'HtmlPlan',
  }
);
