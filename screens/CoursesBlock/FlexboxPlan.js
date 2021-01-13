import React, { Component } from 'react';
import { StyleSheet, View, Button, Image, Text, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { Header } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { HeaderBackButton } from 'react-navigation-stack';
import CoursesPlan from '../components/CoursesPlan'
import CoursesPlanView from '../components/CoursesPlanView'

import CourseOne from './FlexboxCourseData/CourseOne'
import CourseTwo from './FlexboxCourseData/CourseTwo'
import { light, dark } from '../../assets/theme'

class FlexboxPlan extends Component {
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
title="Изучите: Введение в Flexbox"
/>



<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 1,
            title: "Настройки flex",
          })
           }>
<CoursesPlan
 styleTextBox={styles.textStyleBox}
 styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Настройки flex"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 2,
            title: "Первый взгляд на Flexbox",
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
title="Первый взгляд на Flexbox"
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Изучите: Позиционирование flex элементов"
/>





<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 3,
            title: "Flex-контейнеры",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Flex-контейнеры"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 4,
            title: "Свойство justify-content",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Свойство justify-content"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 5,
            title: "Распределение нескольких элементов Flex",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Распределение нескольких элементов Flex"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 6,
            title: "Группировка flex элементов",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title="Группировка flex элементов"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseOne', {
            id: 7,
            title: "Вертикальное выравнивание flex",
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
title="Вертикальное выравнивание flex"
/>
</TouchableOpacity>


<CoursesPlanView
  numTopBox={styles.numTopBox}
  viewStyleBox={[styles.ViewStyle,{borderColor: this.state.theme == "dark" ? 
  "#7a7a7a" : '#dddddd'}]}
topHomeCourses={styles.topHomeCourses}
theme={this.state.theme}
number="3"
title="Изучите: Расположение элементов"
/>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 1,
            title: "Свойство flex-wrap",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="1"
title="Свойство flex-wrap"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 2,
            title: "Свойство flex-direction",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="2"
title="Свойство flex-direction"
/>
</TouchableOpacity>

<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 3,
            title: "Порядок элементов в flex-контейнере",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
theme={this.state.theme}
style={styles.topHomeCourses}
number="3"
title="Порядок элементов в flex-контейнере"
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 4,
            title: "Свойство order",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd'}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="4"
title='Свойство order'
/>
</TouchableOpacity>


<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 5,
            title: "Выравнивание flex элементов",
          })
           }>
<CoursesPlan
styleTextBox={styles.textStyleBox}
styleBox={[styles.ViewStyleBox,{borderColor: this.state.theme == "dark" ? 
"#7a7a7a" : '#dddddd',}]}
style={styles.topHomeCourses}
theme={this.state.theme}
number="5"
title='Выравнивание flex элементов'
/>
</TouchableOpacity>

<TouchableOpacity
          activeOpacity={.7}
          onPress={() =>
          this.props.navigation.navigate('CourseTwo', {
            id: 6,
            title: "Свойство flex",
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
title='Свойство flex'
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
      screen: FlexboxPlan,
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
