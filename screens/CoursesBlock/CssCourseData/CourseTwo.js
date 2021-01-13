import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import MobileAd from '../../components/MobileAd'
import { createStackNavigator } from 'react-navigation-stack'
import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1

import TextCourseTitle from '../../components/TextCourseTitle'
import { light, dark } from '../../../assets/theme'

 const code1 = `border: border-width  border-style  border-color;`;
const code2 = `<span id="brd">Привет, ты на сайте Rapprogtrain</span>

  <style>
   #brd {
    border: 2px solid #212121;
   }
   </style>`;
   const code3 = `<div class="block-container">
  <span id="block">Привет, ты на сайте Rapprogtrain</span>
 </div>

  <style>
   .block-container {
    width: 10%;
   }
  </style>`;
      const code4 = `<div class="block-container">
  <span id="block">Привет, ты на сайте Rapprogtrain</span>
 </div>

  <style>
   .block-container {
    height: 50px;
   }
  </style>`;
  const code5 = `<span class="block">Привет, ты на сайте Rapprogtrain</span>

  <style>
   .block {background-color: red;}
  </style>`;
const code6 = `<span class="block">Привет, ты на сайте Rapprogtrain</span>

  <style>
   .block {background-image: url(img/test.jpg);}
  </style>`;
const code7 = `<span class="block">Привет, ты на сайте Rapprogtrain</span>

  <style>
   .block {background-image: url(img/test.jpg);background-repeat: repeat-x; }
  </style>
`;
const code8 = `<span class="block">Привет, ты на сайте Rapprogtrain</span>

  <style>
   .block {
    background-image: url(img/test.jpg);
    background-repeat: repeat-x;
    background-attachment: fixed;
   }
  </style>`;
const code9 = ` list-style: list-style-type list-style-position list-style-image;`;
const code10 = `<ul class="list">
   <li>HTML</li>
   <li>CSS</li>
   <li>JS</li>
  </ul>

  <style>
   .list {
    list-style: circle inside none;
   }
  </style>`;
const code11 = `<style>
   table {
    width: 15%;
    border: 4px double black;
    border-collapse: collapse;
  </style>
  <table>
   <tr>
    <th>Текс</th>
   </tr>
  </table>`;
const code12 = `p {
  text-decoration: none;
}`;
const code13 = `<span id="txt">Привет, ты на сайте Rapprogtrain</span>

  <style>
   #txt:hover {
    color: red;
   }
  </style>`;
  const code14 = `<style>
    .help { cursor: help;}
  </style>
   <a href="help.php" class="help">СПРАВКА 1</a>`;

class CourseTwoScreen extends React.Component {
  constructor() {
    super();
    this.state = { code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14,
    theme: '', };
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
      title = "Рамки";
         break;
      case 2:
          title = "Ширина и высота"; 
         break;
      case 3:
        title = "background-color/image/repeat";
        break;
      case 4:
        title = "background-attachment";
        break;
      case 5:
        title = "Стилизация списка";
        break;
      case 6:
        title = "Стилизация таблиц";
        break;
      case 7:
        title = "Стилизация ссылок";
        break;
      case 8:
        title = "Курсор мыши";
        break;
    }
    this.props.navigation.navigate('CourseTwoScreen', {
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
  dark.colors.color : light.colors.color}]}>Свойство border</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>border</Text> позволяет изменить рамки HTML.
  </Text>
  </View>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис:</Text>

  <TextCourseTitle
  codeText={this.state.code1}
    language="css"
   />

   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>border-width</Text> - устанавливает толщину границы.
     </Text>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>border-style</Text> - устанавливает вид границы.
     </Text>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>border-color</Text> - устанавливает цвет границы.
     </Text>
     </View>

     <TextCourseTitle
     codeText={this.state.code2}
       language="css"
      />

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Значение border-style</Text>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>border-style</Text> может принимать следующие значения:
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-style:</Text> none;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-style:</Text> dotted;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-style:</Text> dashed;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-style:</Text> double;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-style:</Text> groove;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-style:</Text> ridge;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-style:</Text> inset;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-style:</Text> outset;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-style:</Text> hidden;
    </Text>
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
  dark.colors.color : light.colors.color}]}>Свойство width</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>width</Text> устанавливает ширину блока.
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code3}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство height</Text>
 <View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Свойство <Text style={{color:'#db0202'}}>height</Text> устанавливает высоту блока.
 </Text>
 </View>
<TextCourseTitle
 codeText={this.state.code4}
   language="html"
  />

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>min-width</Text> - минимальная ширина элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>max-width</Text> - максимальная ширина элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>min-height</Text> - минимальная высота элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>max-height</Text> - минимальная высота элемента.
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
  dark.colors.color : light.colors.color}]}>Свойство background-color</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>background-color</Text> определяет цвет фона элемента.
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code5}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство background-image</Text>
 <View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Свойство <Text style={{color:'#db0202'}}>background-image</Text> устанавливает фоновое изображение для элемента.
 </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code6}
   language="html"
  />

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство background-repeat</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство <Text style={{color:'#db0202'}}>background-repeat</Text> устанавливает повторение фонового изоображения. Значения к background-repeat:
</Text>
</View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>no-repeat</Text> - устанавливает одно фоновое изображение в элементе без его повторений.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>repeat</Text> - фоновое изображение повторяется по горизонтали и вертикали.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>repeat-x</Text> - фоновый рисунок повторяется только по горизонтали.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>repeat-y</Text> - фоновый рисунок повторяется только по вертикали.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>round</Text> - повторяется пока не заполнится область.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>space</Text> - повторяется пока в область не поместься целое число рисунков.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>

    <TextCourseTitle
    codeText={this.state.code7}
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

if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство background-attach[ment</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>background-attachment</Text> устанавливает,
  будет ли прокручиваться фоновое изображение вместе с содержимым элемента.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>fixed</Text> - делает фоновое изображение элемента неподвижным.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>scroll</Text> - позволяет перемещаться фону вместе с содержимым.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>local</Text> - фон фиксируется с учётом поведения элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Давайте на примере покажу применение комментариев CSS:
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code8}
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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство list-style</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>list-style</Text> позволяет одновременно задать стиль маркера, его положение,
   а также изображение, которое будет использоваться в качестве маркера.
  </Text>
  </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис:</Text>

  <TextCourseTitle
  codeText={this.state.code9}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример:</Text>

     <TextCourseTitle
     codeText={this.state.code10}
       language="html"
      />

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>circle</Text> - Маркер в виде кружка.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>square</Text> - Маркер в виде квадрата.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>decimal</Text> - Арабские числа.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>disc</Text> - Маркер в виде точки.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>upper-alpha</Text> - Заглавные латинские буквы.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>lower-alpha</Text> - Строчные латинские буквы.
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
  dark.colors.color : light.colors.color}]}>Свойство border-collapse</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>border-collapse</Text> устанавливает границы вокруг ячеек таблицы. Значения к border-collapse:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>collapse</Text> - устанавливает только одну линию между ячейками.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>separate</Text> - устанавливает собственную рамку вокруг каждой ячейки.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>


  <TextCourseTitle
  codeText={this.state.code11}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство caption-side</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Свойство <Text style={{color:'#db0202'}}>caption-side</Text> определяетположение заголовка таблицы.
 Добавить заголовок в таблицу можно с помощью тега caption-side:
 </Text>
 </View>


  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>top</Text> - распологает заголовок таблицы над таблицей.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>bottom</Text> - распологает заголовок таблицы под таблицей.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>initial</Text> - устанавливает значение свойства в значение по умолчанию.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>initial</Text> - наследует значение родителя.
    </Text>
    </View>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство table-layout</Text>
 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>table-layout</Text> определяет,
  как браузер должен вычислять ширину ячеек таблицы. Значения table-layout:
  </Text>
  </View>


   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>auto</Text> - автоматически подсчитывает ширину столбца или ячейки.
     </Text>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>fixed</Text> - определяет фиксированную ширину.
     </Text>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>initial</Text> - устанавливает значение свойства в значение по умолчанию.
     </Text>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>initial</Text> - наследует значение родителя.
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
  dark.colors.color : light.colors.color}]}>Стиль ссылки</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Ссылки могут быть стилизованы. Также они могут стилизованы от других состояний. Все псевдоселекторы:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:link</Text> - устанавливает только одну линию между ячейками.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:visited</Text> - устанавливает собственную рамку вокруг каждой ячейки.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:active</Text> - наследует значение родителя.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:hover</Text> - наследует значение родителя.
    </Text>
    </View>

    <TextCourseTitle
    codeText={this.state.code12}
      language="html"
     />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Удаление подчеркивания</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 При добавления ссылки у нас появляется автоматически нижнее подчеркивание. Сейчас я вам покажу, как ее удалить.
 </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code13}
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

if (id == 8) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Курсор мыши</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Курсор мыши устанавливает форму курсора, когда он находится в пределах элемента.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Виды курсоров:
    </Text>
    </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> default;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> crosshair;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> help;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> move;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> progress;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> pointer;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> text;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> wait;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> n-resize;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> ne-resize;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> e-resize;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> se-resize;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> s-resize;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> sw-resize;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> w-resize;
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cursor:</Text> nw-resize;
    </Text>
    </View>


   <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример применения:</Text>

 <TextCourseTitle
 codeText={this.state.code14}
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
      CourseTwoScreen: {
        screen: CourseTwoScreen,
      },
    },
    {
      initialRouteName: 'CourseTwoScreen',
    }
  );
