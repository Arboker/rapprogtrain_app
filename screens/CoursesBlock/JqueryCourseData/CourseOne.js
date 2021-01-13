import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'

import MediumAdmobAd from '../../components/MobileAd'

import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1

import TextCourseTitle from '../../components/TextCourseTitle'
import { light, dark } from '../../../assets/theme'

const code = `<!DOCTYPE html>
<html>
 <head>
   <title>!DOCTYPE</title>
   <meta charset="utf-8">
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1 /jquery.min.js"></script>
 </head>
 <body>
 </body> 
</html>`;
const code2 = `$(document).ready(function() {
  // jQuery код
});`;
const code3 = `$(document).ready(function() {
  $("#text").text("Привет мир!"); 
 });`;
const code4 = `$("div")`;
const code5 = `<div class="text"></div>
<div id="block"></div>

<script>
 $(".text")
 $("#block")
</script>`;
const code6 = `$("div.block") // выбирает все div элементы с классом block
$("span.first") // выбирает первый <span> элемент
$("p, span, h1") // выбирает <p> <span> <h1> элементы`;
const code7 = `<div id="txt">Привет мир</div>

<script>
 $(function() {
  var val = $("div").attr("id");
  alert(val);
  });
</script>`;
const code8 = `<a href="https://www.test.com/">Кликни</a>

<script>
 $(function() {
  $("a").attr("href", "http://rapprogtrain.ru/");
 });
</script>`;
const code9 = ` <iframe id="test" width="10%" height="100px" 
frameborder="0"> </iframe>
 <script>
$(function() {
  $("iframe").removeAttr("frameborder");
})

 </script>`;
const code10 = `<p>Hello</p>
 
<script>
 $(function() {
   var val = $("p").html();
    alert(val);
})
</script>`;
const code11 = `<p id="txt">Hello</p>
<script>
   $(function() {
$("#txt").html("Hi");
   })
</script>`;
const code12 = `var country = {
   city: "Moscow"
 }`;
 const code13 = `<span>Привет мир!</span>
 
<style>
  .text {
    color: red;
  }
</style>

 <script>
   $(function() {
   $("span").addClass("text");
   });
 </script>`;
const code14 = `<div class="text color"></div>
 
<style>
  .text {
     color: black;
 }
  .color {
     color: red;
 }
 </style>

 <script>
   $(function() {
   $("div").removeClass("red");
   });
 </script>`;
const code15 = `<button id="button">Кликни</button>
<span id="test-text">Привет</span>

<style>
   .none {
   display: none;
 }
 </style>

 <script>
   $(function() {
     $("#button").click(function() {
       $("#test-text").toggleClass("none");
     });
   });
 </script>`;

class CourseOneScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12,
    code13, code14, code15, theme: '', };
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
      title = "Что такое jQuery?";
         break;
      case 2:
          title = "Подключаем jQuery"; 
         break;
      case 3:
        title = "Начало";
        break;
      case 4:
        title = "Селекторы";
        break;
      case 5:
        title = "Метод attr";
        break;
      case 6:
        title = "Удаление атрибутов";
        break;
      case 7:
        title = "Получение и установка контента";
        break;
      case 8:
        title = "Атрибут val()";
        break;
      case 9:
        title = "Добавление контента";
        break;
    }
    this.props.navigation.navigate('CourseOneScreen', {
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
}

getData = () => {
      const { params } = this.props.navigation.state;
const id = params ? params.id : '';
if (id == 1) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Что такое jQuery?</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>jQuery - библиотека JavaScript, фокусирующаяся на взаимодействии JavaScript и HTML.
   Библиотека jQuery помогает легко получать доступ к любому элементу DOM, 
  обращаться к атрибутам и содержимому элементов DOM, манипулировать ими.</Text>
  </View>
     <Image
         source={require('../../../assets/img/Logo_jQuery.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Что умеет jQuery</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Работать с событиями.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Легко осуществлять различные визуальные эффекты.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Обращаться к любому элементу DOM.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Работать с AJAX.</Text>
 </View>

     <MediumAdmobAd />

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
  dark.colors.color : light.colors.color}]}>Подключаем jQuery</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  jQuery можно подключить несколькоми способами. 
  Его можно скачать через их официальный сайт ( https://jquery.com/ ). Или вы можете его подключить его через CDN.
  </Text>
  </View>


<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Я буду подключать jQuery через CDN. Его я буду подключать через их официального сайта.
 </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code}
   language="html"
  />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Внешний доступ</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Подключить jQuey, через внешний доступ, можно также, как и в JavaScript.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  При подключение jQuery к внешниму доступу, CDN надо подключить к главной странице.
  </Text>
  </View>

     <MediumAdmobAd />

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
            onPress={() => this.props.navigation.goBack(null)}
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
  dark.colors.color : light.colors.color}]}>Начало работы</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Для полной загрузке документа в jQuery мы используем событие <Text style={{color:'#db0202'}}>ready</Text>.
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code2}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Для получения доступа к jQuery мы используем знак <Text style={{color:'#db0202'}}>$</Text>.
 </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code3}
   language="javascript"
  />

     <MediumAdmobAd />

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

if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Селекторы</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Базовым селектором является селектор, которые выбирают все элементы.
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code4}
    language="javascript"
   />

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Есть селектор, которые выбирают элементы по их id и class:
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code5}
    language="html"
   />
   
   <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Также есть вот такие селекторы:
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code6}
    language="javascript"
   />
  
     <MediumAdmobAd />

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
            onPress={() => this.props.navigation.goBack(null)}
          />

        </View>


  </View>
  </ScrollView>
);
}

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Атрибуты</Text>

    <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        В jQuery мы можем управлять всеми атрибутами Html.
        </Text>
        </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>attr</Text> используется для получения значения атрибута.
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code7}
    language="html"
   />


<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>attr</Text> также позволяет устанавить новое значение для атрибута.
      </Text>
      </View>
             <TextCourseTitle
             codeText={this.state.code8}
               language="html"
              />


     <MediumAdmobAd />

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
            onPress={() => this.props.navigation.goBack(null)}
          />

        </View>

  </View>
  </ScrollView>
);
}


if (id == 6) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Удаление</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      В jQuery вы также можете удалять атрибуты.  
      </Text>
      </View>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Для удаления атрибута используется атрибут <Text style={{color:'#db0202'}}>removeAttr</Text>.
        </Text>
        </View>

             <TextCourseTitle
             codeText={this.state.code9}
               language="html"
              />

     <MediumAdmobAd />

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


if (id == 7) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Получение контента</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      В jQuery есть несколько методов управления содержимым HTML.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Для получения содержимого html элемента используется <Text style={{color:'#db0202'}}>html()</Text>.
        </Text>
        </View>

             <TextCourseTitle
             codeText={this.state.code10}
               language="html"
              />

              <View style={{paddingTop:10}}>
                <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                Место метода <Text style={{color:'#db0202'}}>html()</Text> вы можете использовать
                 <Text style={{color:'#db0202'}}>text()</Text>.
                </Text>
                </View>

                 <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Установка контента</Text>
                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Также методы <Text style={{color:'#db0202'}}>html()</Text> и <Text style={{color:'#db0202'}}>text()</Text>
                    используются для изменения содержимого HTML элемента.
                   </Text>
                   </View>
                   
                   <TextCourseTitle
                codeText={this.state.code11}
                  language="html"
                 />

     <MediumAdmobAd />

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

if (id == 8) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Атрибут val()</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Атрибут <Text style={{color:'#db0202'}}>val()</Text> нам позволяет получать и устанавливать значения полей форм.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Чтобы проверить, как работает этот атрибут, мы выполним одну функцию.
        </Text>
        </View>

             <TextCourseTitle
             codeText={this.state.code12}
               language="html"
              />

                    <View style={{paddingTop:10}}>
                      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                      По клику, мы видем, что в alert выводятся значения из input. 
                      Чтобы получить эти значения мы и используем атрибут <Text style={{color:'#db0202'}}>val()</Text>.
                        </Text>
                      </View>

                   


     <MediumAdmobAd />

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


if (id == 9) {
  return (
<ScrollView>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Добавление контента</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В jQuery есть методы, которые используются для получения и установления контента.
   Но есть методы, которые добавляют контент к элементу. О них сейчас и пойдет речь
  </Text>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Метод prepend()</Text>
   <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>prepend()</Text> добавляет контент в начало HTML элемента.
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code13}
    language="html"
   />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Метод append()</Text>
   <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>append()</Text> добавляет контент в конец HTML элемента.
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code14}
    language="html"
   />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Метод after() и before()</Text>
   <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>after() и before()</Text> добавляют контент до и после HTML элемент.
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code15}
    language="html"
   />


     <MediumAdmobAd />

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
            onPress={() => this.props.navigation.goBack(null)}
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
  textBlock: {fontFamily: 'OpenSans-R', fontSize: 15},
  editorStyle: {paddingLeft: 10, margin: 0 },
  editorViewStyle: {paddingTop:10, padding:0}

   });

  export default createStackNavigator(
    {
      CourseOneScreen: {
        screen: CourseOneScreen,
      },
    },
    {
      initialRouteName: 'CourseOneScreen',
    }
  );
