import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Header } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import { HeaderBackButton } from 'react-navigation-stack';

import CoursesPlan from '../components/CoursesPlan'
import CoursesPlanView from '../components/CoursesPlanView'

import CourseOne from './CssCourseData/CourseOne'
import CourseTwo from './CssCourseData/CourseTwo'
import CourseThree from './CssCourseData/CourseThree'
import CourseFour from './CssCourseData/CourseFour'
import CourseFive from './CssCourseData/CourseFive'
import { light, dark } from '../../assets/theme'

class CssPlan extends Component {
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
            title: "Что такое CSS?",
          })
           }>
<CoursesPlan
 styleTextBox={styles.textStyleBox}
 styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Что такое CSS?"
/>
  </TouchableOpacity>


  <TouchableOpacity
  activeOpacity={.7}
  onPress={() =>
  this.props.navigation.navigate('CourseOne', {
    id: 2,
    title: "Подключаем CSS",
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
title="Подключаем CSS"
/>
  </TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Изучите: Селекторы"
/>



  <TouchableOpacity
  activeOpacity={.7}
  onPress={() =>
  this.props.navigation.navigate('CourseOne', {
    id: 3,
    title: "Синтаксис и селекторы",
  })
   }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Синтаксис и селекторы"
/>
  </TouchableOpacity>


  <TouchableOpacity
  activeOpacity={.7}
  onPress={() =>
  this.props.navigation.navigate('CourseOne', {
    id: 4,
    title: "Комментраии CSS",
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
title="Комментраии CSS"
/>
</TouchableOpacity>



<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
  theme={this.state.theme}
topHomeCourses={styles.topHomeCourses}
number="3"
title="Изучите: Работа с текстом

"
/>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
  id: 5,
  title: "font-family/size/weight",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title=" font-family/size/weight"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
  id: 6,
  title: "font-style/weigth и color",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="font-style/weigth и color"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
  id: 7,
  title: "Расположение текста",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Расположение текста"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
  id: 8,
  title: "text-indent/decoration/shadow",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title='text-indent/decoration/shadow'
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseOne', {
  id: 9,
  title: "white/word/letter-spacing",
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
title='white/word/letter-spacing'
/>
</TouchableOpacity>



<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="Изучите: Свойства и фон

"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 1,
  title: "Рамки",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Рамки"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 2,
  title: "Ширина и высота",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
theme={this.state.theme}
style={styles.topHomeCourses}
number="2"
title=" Ширина и высота"
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 3,
  title: "background-color/image/repeat",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="background-color/image/repeat"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 4,
  title: "background-attachment",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="background-attachment "
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 5,
  title: "Стилизация списка",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title=" Стилизация списка "
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 6,
  title: "Стилизация таблиц",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="6"
title=" Стилизация таблиц "
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 7,
  title: "Стилизация ссылок",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="7"
title=" Стилизация ссылок "
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseTwo', {
  id: 8,
  title: "Курсор мыши",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="8"
title=" Курсор мыши "
/>
</TouchableOpacity>



<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title="Изучите: Позиционирование

"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 1,
  title: "Свойство display",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title=" Свойство display "
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 2,
  title: "Свойство visibility",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title=" Свойство visibility "
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 3,
  title: "Свойство position",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Свойство position "
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 4,
  title: "Свойство float и clear",
})
 }>

<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="Свойство float и clear "
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 5,
  title: "Свойство overflow",
})
 }>

<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title=" Свойство overflow "
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseThree', {
  id: 6,
  title: "Свойство z-index",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
theme={this.state.theme}
style={styles.topHomeCourses}
number="6"
title="Свойство z-index "
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="6"
title="Изучите: Основы CSS3

"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 1,
  title: "Что нового в CSS3?",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title=' Что нового в CSS3? '
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 2,
  title: "border-radius",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}ё
theme={this.state.theme}
number="2"
title='border-radius'
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 3,
  title: "box-shadow",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="box-shadow "
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 4,
  title: "Псевдоклассы и псевдоэлементы",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title=" Псевдоклассы и псевдоэлементы"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 5,
  title: "word-wrap",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title="word-wrap"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 6,
  title: "@font-face",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="6"
title=" @font-face"
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 7,
  title: "background-size/clip",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="7"
title=" background-size/clip"
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFour', {
  id: 8,
  title: "Свойство opacity",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',borderBottomRightRadius:4,
borderBottomLeftRadius:4}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="8"
title=" Свойство opacity"
/>
</TouchableOpacity>



<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="7"
title="Изучите: Анимации

"
/>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFive', {
  id: 1,
  title: "Свойство transition",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title='Свойство transition'
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFive', {
  id: 2,
  title: "Свойство transform",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title='Свойство transform '
/>
</TouchableOpacity>


<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFive', {
  id: 3,
  title: "Правило @keyframes",
})
 }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title=" Правило @keyframes "
/>
</TouchableOpacity>



<TouchableOpacity
activeOpacity={.7}
onPress={() =>
this.props.navigation.navigate('CourseFive', {
  id: 4,
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
number="4"
title="Анимация"
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
      screen: CssPlan,
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
    initialRouteName: 'Main',
  }
);
