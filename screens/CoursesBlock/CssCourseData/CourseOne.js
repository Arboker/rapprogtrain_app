import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import MobileAd from '../../components/MobileAd'

import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1

import TextCourseTitle from '../../components/TextCourseTitle'
import { light, dark } from '../../../assets/theme'

const code = `<p>Привет мир!</p>
  <style>
   p {
 	color: red;
 	font-size: 1.2em;
  }
  </style>`;
const code2 = `<head>
  <link rel="stylesheet" href="css/style.css" type="text/css" charset="utf-8"/>
</head>
`;
const code3 = `p {
  color: red;
}`;
const code4 = `<div id="demo">Демо</div>
 <style>
  #demo {
 	color: red;
 }
 </style>`;
const code5 = `<p class="demo">Демо</p>
 <p class="demo">Привет мир!</p>
 <style>
  .demo {
 	color: red;
 }
 </style>`;
const code6 = `<div class="block">
 <span>Ты на сайте <b>Rapprogtrain</b></span>
 </div>
 <style>
  .block span b {
 	color: red;
 }
 </style>`;
 const code7 = `</* Комментарий */`;
  const code8 = `p {
  color: orange; /* цвет абзаца*/
}`;
 const code9 = `span {
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size:  1.2em;
 }`;
  const code10 = `span {
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size:  1.2em;
 }`;
const code11 = `span {
    font-weight: bold;
 }`;
 const code12 = `<p class="italic">Привет мир!</p>
 <p class="oblique">Привет мир!</p>

 <style>
   .italic {
   	font-style: italic;
   }
   .oblique {
   	font-style: oblique;
   }
 </style>
 }`;
  const code13 = `  <span class="txt">Привет мир!</span>
 <style>
   .txt {
     font-variant: small-caps;
   }
 </style>
`;
   const code14 = `
 <span class="txt">Привет мир!</span>
 <style>
   .txt {
     color: red;
   }
 </style>`;
 const code15 = `<p>Привет мир!</p>
  <style>
   p {
 	color: red;
 	font-size: 1.2em;
  }
  </style>`;
  const code16 = `<div id="left">Выравнивание по левому краю</div>
  <div id="center">Выравнивание по центру</div>
  <div id="right">Выравнивание по правому краю</div>

 <style>
   #left { text-align: left; }
   #right { text-align: right; }
   #center { text-align: center; }
 </style>`;
const code17 = `<div id="top">Выравнивание по верху</div>

 <style>
  #top { vertical-align: top; }
 </style>`;
const code18 = `<span class="lorem"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
 Duis viverra diam non justo. Etiam neque. Sed ac dolor sit amet purus malesuada congue.
 Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. </span>

 <style>
   .lorem {text-indent: 1.5em;}
 </style>`;
const code19 = `<span id="txt">Привет мир.</span>

 <style>
   #txt {text-decoration: underline;}
 </style>`;
const code20 = `<span id="txt">Привет мир.</span>

 <style>
   #txt {text-shadow: 1px 1px 2px red;} /* Смещение тени по горизонтали,
   Смещение тени по вертикали,  радиус размытия, цвет */
 </style>
`;
const code21 = `<span class="lorem"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span>

 <style>
   .lorem {white-space: nowrap;}
 </style>`;
 const code22 = `<span class="lorem"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>

 <style>
   .lorem {word-spacing: 10px;}
 </style>
`;
  const code23 = `<span class="lorem"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </span>

 <style>
   .lorem {letter-spacing: 3px;}
 </style>`;


class CourseCssScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14, code15,
    code16, code17, code18, code19, code20, code21, code22, code23, theme: '', };
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
      title = "Что такое CSS?";
         break;
      case 2:
          title = "Подключаем CSS"; 
         break;
      case 3:
        title = "Синтаксис и селекторы";
        break;
      case 4:
        title = "Комментраии CSS";
        break;
      case 5:
        title = "font-family/size/weight";
        break;
      case 6:
        title = 'font-style/weigth и color';
        break;
      case 7:
        title = 'Расположение текста';
        break;
      case 8:
        title = 'text-indent/decoration/shadow';
        break;
      case 9:
        title = 'white/word/letter-spacing';
        break;
    }
    this.props.navigation.navigate('CourseCssScreen', {
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
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Что такое CSS ?</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>CSS - формальный язык описания внешнего вида документа. CSS означает каскадные таблицы стилей.</Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Стиль - набор параметров, задающий внешнее представление объекта.</Text>
    </View>


    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Таблица стилей - набор стилей всех элементов.</Text>
      </View>


     <Image
         source={require('../../../assets/img/css-main.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Преимущества CSS</Text>
<View style={{paddingTop:10,}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1) CSS позволяет значительно сократить размер кода и сделать его читабельным.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2) CSS позволяет легко изменять внешний вид страниц.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>3) CSS позволяет задавать такие параметры, которые нельзя задать только языком HTML.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>4) С CSS связана так называемая блочная верстка сайта. </Text>
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
  dark.colors.color : light.colors.color}]}>Вложенный CSS</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Вложеннын стили определяются с помощью элемента <Text style={{color:'#db0202'}}>&lt;style></Text> и находятся они внутри HTML страницы.
  </Text>
  </View>


  <TextCourseTitle
  codeText={this.state.code15}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Внешний CSS</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Во внешний CSS, все правила прописываются в отдельном файле с расширением css.
Потом, чтобы подключить этот файл к HTML страницы, используется тег <Text style={{color:'#db0202'}}>&lt;link></Text>.
 Располагатся должно в теге head.
 </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code2}
   language="html"
  />


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

if (id == 3) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
CSS состоит из некоторых правил стилей. Каждое правило имеет 3 части: селектор, свойства и значение.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Например:
    </Text>
    </View>



  <TextCourseTitle
codeText={this.state.code3}
language="css"
   />

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    В этом коде <Text style={{color:'#db0202'}}>p</Text> - это селектор,
    <Text style={{color:'#db0202'}}>color</Text> - это свойство и <Text style={{color:'#db0202'}}>red</Text> - это значение.
    </Text>
    </View>

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Селекторы индентификаторов и классов</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Селекторы индентификаторов позволяем нам изменять стиль у которого есть атрибут id.
 </Text>
 </View>

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Например:
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code4}
  language="html"
   />

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Селекторы классов позволяем нам изменять стиль у которого есть атрибут class.
  Важное отличие между ними это то, что к классу может быть присвоено сразу несколько элементов.
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code5}
   />

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Селектор потомков</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Селекторы потомков используются для выбора элементов, которые являются потомками других элементов.
</Text>
</View>

<TextCourseTitle
codeText={this.state.code6}
  language="html"
 />

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

if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Комментарии  </Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Комментарии используется для того, чтобы легче ориентироватся в коде. Комментарии не отображаются на странице.
  </Text>
  </View>


    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис  </Text>
  <TextCourseTitle
codeText={this.state.code7}
language="css"
   />

   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Давайте на примере покажу применение комментариев CSS
     </Text>
     </View>

   <TextCourseTitle
 codeText={this.state.code8}
 language="css"
    />

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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство font-family  </Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство <Text style={{color:'#db0202'}}>font-family </Text> задает шрифт элементу.
 Список шрифтов может включать одно или несколько названий, разделенных запятой. Если в имени шрифта содержатся пробелы (например Fjalla One),
то оно должно заключаться в одинарные или двойные кавычки (вот так 'Fjalla One').
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    В CSS пишется сразу несколько шрифтов, потому что если первого шрифта нету,
     то браузер берется за следующее имя из списка и анализирует на присутствие.
     Поэтому несколько шрифтов увеличивает вероятность, что хотя бы один из них будет обнаружен на клиентском компьютере.
    </Text>
    </View>


  <TextCourseTitle
codeText={this.state.code9}
language="css"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство font-size  </Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство <Text style={{color:'#db0202'}}>font-size</Text> устанавливает размер шрифта. Есть 2 способа устанавить размер шрифта:
 </Text>
 </View>

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Первый способ - это через задания абсолютного размера (например: xx-small, x-small, small, medium, large, x-large, xx-large).
  </Text>
  </View>

  <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Второй способ - это через задания числового размера (например: %, px, em, pt, ex и др).
   </Text>
   </View>



   <TextCourseTitle
 codeText={this.state.code10}
 language="css"
    />

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство font-weight  </Text>
 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Свойство <Text style={{color:'#db0202'}}>font-weight</Text> устанавливает толщину текста. Есть 2 способа устанавить толщину текста:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Первый способ - это через задания ключевых слов (например: bold,bolder,lighter,normal).
   </Text>
   </View>

   <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Второй способ - это через задания условных единиц (от 100 до 900).
    </Text>
    </View>



    <TextCourseTitle
  codeText={this.state.code11}
  language="css"
     />

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


if (id == 6) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство font-style  </Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство <Text style={{color:'#db0202'}}>font-style</Text> определяет начертание шрифта. Есть 3 типа начертания текста:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>normal</Text> - обычное начертание шрифта.
    </Text>
    <Text style={styles.textBlock}>
<Text style={{color:'#db0202'}}>italic</Text> - курсивное начертание текста.
    </Text>
    <Text style={styles.textBlock}>
<Text style={{color:'#db0202'}}>oblique</Text> - наклонное начертание текста.
    </Text>
    </View>


  <TextCourseTitle
codeText={this.state.code12}
language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство font-variant  </Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство <Text style={{color:'#db0202'}}>font-variant</Text> определяет, как нужно представлять строчные буквы. Есть 3 типа строчных текста:
 </Text>
 </View>

 <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>normal</Text> - обычное строчный текст.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>small-caps</Text> - модифицирует все строчные символы как заглавные уменьшенного размера.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
   </Text>
   </View>



   <TextCourseTitle
 codeText={this.state.code13}
 language="css"
    />

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство color</Text>
 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Свойство <Text style={{color:'#db0202'}}>color</Text> задает цвет тексту:
  </Text>
  </View>


    <TextCourseTitle
  codeText={this.state.code14}
  language="css"
     />

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


if (id == 7) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство text-align</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>text-align</Text> определяет горизонтальное выравнивание текста в пределах элемента.
  Значения text-align:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>center</Text> - выравнивает текст по центру.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>left</Text> - выравнивает текст по левому краю.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>right</Text> - выравнивает текст по правому краю.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>justify</Text> - выравнивает текст по ширине.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>auto</Text> - не изменяет положение элемента.
    </Text>
    </View>



  <TextCourseTitle
  codeText={this.state.code16}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство vertical-align</Text>
   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
     Свойство <Text style={{color:'#db0202'}}>vertical-align</Text> выравнивает элемент по вертикали относительно своего родителя.
      Значения vertical-align:
     </Text>
     </View>

     <View style={{paddingTop:10}}>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>baseline</Text> - выравнивает базовую линию текущего элемента по базовой линии родителя.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>bottom</Text> - выравнивает основание текущего элемента по нижней части элемента строки, расположенного ниже всех.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>middle</Text> - выравнивает средней точки элемента по базовой линии родителя плюс половина высоты родительского элемента.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>top</Text> - выравнивание верхнего края элемента по верху самого высокого элемента строки.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>sub</Text> - элемент изображается как подстрочный, в виде нижнего индекса.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>super</Text> - элемент изображается как подстрочный, в виде нижнего индекса.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>text-bottom</Text> - нижняя граница элемента выравнивается по самому нижнему краю текущей строки.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>text-top</Text> - верхняя граница элемента выравнивается по самому высокому текстовому элементу текущей строки.
       </Text>
       </View>

 <TextCourseTitle
 codeText={this.state.code17}
   language="html"
  />


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

if (id == 8) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство text-indent</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>text-indent</Text> устанавливает величину отступа первой строки блока текста. Значение к text-indent:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В качестве значений принимаются любые единицы длины, принятые в CSS (например px, in, pt, % и др).
    </Text>
    </View>



  <TextCourseTitle
  codeText={this.state.code18}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство text-decoration</Text>
   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
     Свойство <Text style={{color:'#db0202'}}>text-decoration</Text> добавляет оформление текста в виде его подчеркивания,
      перечеркивания, линии над текстом и мигания. Есть 6 типов декорации текста:
     </Text>
     </View>

     <View style={{paddingTop:10}}>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>underline</Text> - устанавливает подчеркнутый текст.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>overline</Text> - линия проходит над текстом.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>line-through</Text> - создает перечеркнутый текст.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>blink</Text> - устанавливает мигающий текст.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>none</Text> - отменяет все декорации.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>inherit</Text> - наследует значение у родителя.
       </Text>
       </View>

 <TextCourseTitle
 codeText={this.state.code19}
   language="html"
  />

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство text-shadow</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство <Text style={{color:'#db0202'}}>text-shadow</Text> добавляет тень к тексту.
</Text>
</View>



<TextCourseTitle
codeText={this.state.code20}
  language="html"
 />

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

if (id == 9) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство text-spacing</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>text-spacing</Text> устанавливает, как отображать пробелы между словами. Значение к white-spacing:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>normal</Text> - текст в окне браузера выводится как обычно.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>nowrap</Text> - используется, чтобы использовать текст в одной строке.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>pre</Text> - используется, когда надо показать текст с учетом всех пробелов и переносов.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>pre-line</Text> - используется, когда надо автоматически перенести текст на следующую строку.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>pre-wrap</Text> - используется, когда надо все пробелы и переносы.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>

  <TextCourseTitle
  codeText={this.state.code21}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство word-spacing</Text>
   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
     Свойство <Text style={{color:'#db0202'}}>word-spacing</Text> устанавливает интервал между словами. Значение к word-spacing:
     </Text>
     </View>

     <View style={{paddingTop:10}}>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Можно использовать любые единицы измерения:
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>normal</Text> - устанавливает обычный интервал у текста.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>inherit</Text> - наследует значение у родителя.
       </Text>
       </View>

 <TextCourseTitle
 codeText={this.state.code22}
   language="html"
  />

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство letter-spacing</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство <Text style={{color:'#db0202'}}>letter-spacing</Text> устанавливает интервал между буквами и символами. Значение к letter-spacing:
</Text>
</View>

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Можно использовать любые единицы измерения:
  </Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>normal</Text> - устанавливает обычный интервал у текста.
  </Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение у родителя.
  </Text>
  </View>

<TextCourseTitle
codeText={this.state.code23}
  language="html"
 />

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
      CourseCssScreen: {
        screen: CourseCssScreen,
      },
    },
    {
      initialRouteName: 'CourseCssScreen',
    }
  );
