import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import MobileAd from '../../components/MobileAd'
import { WebView } from 'react-native-webview';
import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1
import { light, dark } from '../../../assets/theme'

const code = `<div class="sidebar left"></div>`;
const code2 = `<div id="sidebar"></div>`;
const code3 = ` <!DOCTYPE html>
 <html>
  <head>
  </head>
  <body>
  Любой текст
  </body>
 </html>`;


class CourseHtmlScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, theme: '', };
  }

static navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('title', ''),
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
 const value = await AsyncStorage.getItem('theme')
 this.setState({
   theme: value,
 })
}



getPage = (paramValue) => {
  switch (paramValue) {
    case 1:    
    title = "Что такое HTML?";
       break;
    case 2:
        title = "Структура HTML"; 
       break;
    case 3:
      title = "Создание страницы"
  }
  this.props.navigation.navigate('CourseHtmlScreen', {
    id: paramValue,
    title:title
  })
}

goNextPage = (currId) => {
  this.getPage(currId + 1);
}  
goPrevPage = (currId) => {
  this.getPage(currId - 1);
}  
goToTop = () => {
  this.scroll.scrollTo({x: 0, y: 0, animated: true});
}

combineFun = () => {
  const { params } = this.props.navigation.state;
const id = params ? params.id : '';
  this.goToTop();
  this.goNextPage(id);
}

combinePrevFun = () => {
  const { params } = this.props.navigation.state;
const id = params ? params.id : '';
  this.goToTop();
  this.goPrevPage(id);
}

getData = () => {
      const { params } = this.props.navigation.state;
const id = params ? params.id : '';
if (id == 1) {
  
  return (
    
<ScrollView
 ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Что такое HTML ?</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Html - Язык HTML интерпретируется браузерами; полученный в результате интерпретации форматированный
     текст отображается на экране монитора компьютера или мобильного устройства.</Text>
  </View>

     <Image
         source={require('../../../assets/img/criar-site-HTML5-.jpg')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />

     <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Веб страница</Text>
 <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Язык HTML является первой технологией изучения веб программирования.
    Любой веб программист изучает первым делом HTML.</Text>
   </View>

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Веб программирование</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1) <Text style={{color:'#db0202'}}>HTML</Text> - разметка, структура.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2) <Text style={{color:'#db0202'}}>CSS</Text> - оформление, дизайн.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>3) <Text style={{color:'#db0202'}}>JavaScript</Text> - функционал.</Text>
 </View>

<MobileAd />

     <View style={{  flexDirection: 'row',
    justifyContent: 'flex-end',paddingTop: 15}}>
          
          <Button
          color="red"
            title="Продолжить"
            onPress={() => this.combineFun()}
          />
        </View>

  </View>
  </ScrollView>
);
}

if (id == 2) {
  return (

    <ScrollView
    ref={(c) => {this.scroll = c}}>
      <View style={{padding:10}}>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Где писать Html код?</Text>

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
HTML код можно писать в любом текстовым редакторе ( Notepad++,Sublime Text,PhpStorm, WebStorm, Visual Studio Code и др. ).
</Text>
  </View>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Теги</Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>В Html есть начальный тег, который записывается вот так <Text style={{color:'#db0202'}}>&lt;тег></Text>.
   После контента надо закрыть тег. Чтобы закрыть тег надо добавить <Text style={{color:'#db0202'}}>/</Text>.
   У нас получится вот так &lt;тег>&lt;/тег>.
  В тег можно добавить другой тег. Например &lt;p>&lt;span>Любой текст&lt;/span>&lt;/p></Text>
  </View>


    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Class и id</Text>
    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}><Text style={{color:'#db0202'}}>Class</Text> используется, когда надо записать не одно значение, например: </Text>
    </View>

<View style={{paddingTop:10, padding:0}}>
    <SyntaxHighlighter
        {...this.props}
        style={tomorrow}
        customStyle={{paddingLeft: 10, margin: 0 }}
        language='html'
        fontSize={14}
        highlighter="prism"
      >
        {this.state.code}
      </SyntaxHighlighter>
</View>

<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}><Text style={{color:'#db0202'}}>Id</Text> используется, когда надо записать одно значение </Text>
</View>

<View style={{paddingTop:10, padding:0}}>
    <SyntaxHighlighter
        {...this.props}
        style={tomorrow}
        customStyle={{paddingLeft: 10, margin: 0 }}
        language='html'
        fontSize={14}
        highlighter="prism"
      >
      {this.state.code2}
      </SyntaxHighlighter>
</View>

    <MobileAd />

    <View style={{  flexDirection: 'row',
    justifyContent: 'space-between',paddingTop: 15}}>
          
          <Button
          color="red"
            title="Назад"
            onPress={() => this.combinePrevFun()}
          />

          <Button
          color="red"
            title="Продолжить"
            onPress={() => this.combineFun()}
          />

        </View>

    </View>
    </ScrollView>
);
}

if (id == 3) {
  return (
  <ScrollView
  ref={(c) => {this.scroll = c}}>
      <View style={{padding:10}}>
      <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Редактор</Text>
  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Как я говорил в прошлом уроке, что сайты создаются в текстовом редакторе.
    Я выбрал редактор Notepad++, и работать мы будем с ним.</Text>
    </View>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Создание файла</Text>
    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Давайте создадим свой первый сайт.
    Нам надо в нем создать свой первый файл, который надо назвать index с расширением html, и у нас получится index.html
    </Text></View>
    <Image
        source={require('../../../assets/img/creating_file_course.jpg')}
         style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
      />

      <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Создание страницы</Text>
    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В этом файле, который мы создали составим структура нашей страницы и добавим туда текст.
  </Text>
    </View>

    <View style={{paddingTop:10, padding:0}}>
        <SyntaxHighlighter
            {...this.props}
            style={tomorrow}
            customStyle={{paddingLeft: 10, margin: 0 }}
            language='html'
            fontSize={14}
            highlighter="prism"
          >
            {this.state.code3}
          </SyntaxHighlighter>
    </View>

    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Вот что у нас получилось
  </Text>
    </View>

    <Image
        source={require('../../../assets/img/result_course.jpg')}
         style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:150}}
      />

      <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Тег &lt;title></Text>
    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Тег <Text style={{color:'#db0202'}}>&lt;title></Text> дает заголовок страницы.
    </Text>
    </View>

        <MobileAd />

        <View style={{  flexDirection: 'row',
    justifyContent: 'space-between',paddingTop: 15}}>
          
          <Button
          color="red"
            title="Назад"
            onPress={() => this.combinePrevFun()}
          />

          <Button
          color="red"
            title="Продолжить"
            onPress={() => 
              this.props.navigation.goBack(null)}
          />

        </View>

    </View>
    </ScrollView>
  );
}

}

  render () {
          return (
<View>

          {this.getData()}

</View>
          );
      }

 }


 


 const styles = StyleSheet.create({

  titleText: {fontSize:20,fontFamily: 'Roboto-M',fontWeight:'700', paddingTop:10},
  textBlock: {fontFamily: 'OpenSans-R', fontSize: 15}

   });

  export default createStackNavigator(
    {
      CourseHtmlScreen: {
        screen: CourseHtmlScreen,
      },
    },
    {
      initialRouteName: 'CourseHtmlScreen',
    }
  );
