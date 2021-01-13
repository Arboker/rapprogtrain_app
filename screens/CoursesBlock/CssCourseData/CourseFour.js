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

const code = `<style>
 #block {
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  width: 10%;
  text-align: center;
 }

  </style>
<div id="block">Привет мир!</div>`;
const code2 = `box-shadow: none|сдвиг по x сдвиг по y размытие растяжение цвет |inset|inherit;`;
const code3 = `<style>
 #block {
    box-shadow: 0 0 10px rgba(0,0,0,1);
     }
  </style>
<div id="block">Привет мир!</div>`;
const code4 = `<style>
 #txt p:first-child {
  color: red;
     }
  </style>
  <div id="txt">
<p>Привет мир!</p>
<p>Привет мир!</p>
</div>`;
const code5 = `<style>
 #txt::first-letter {
  color: red;
     }
  </style>
<p id="txt">Привет мир!</p>`;
const code6 = `<style>
 #block {
    background: red;
    width: 130px;
    word-wrap: break-word;
     }
  </style>
<div id="block">
   <p>частнопредпринимательский </p>
   <p>переосвидетельствоваться</p>
  </div>`;
  const code7 = ` <style>
   @font-face {
        font-family: 'Yanone Kaffeesatz';
        src: url(fonts/'Yanone-Kaffeesatz'.ttf);
   }
   p {
        font-family: 'Yanone Kaffeesatz';
     }
  </style>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`;
const code8 = `<style>
 #block {
    background: url(img/test.jpg) 100% 100% no-repeat;
    background-size: cover;
 }
  </style>
  <div id="block"></div>`;
const code9 = `
<style>
      #opacity-block {
    background-color: black;
    width: 10%;
    height: 100px;
    opacity: 0.5;
     }
  </style>
  <div id="inline">
  <div id="opacity-block">Прозрачный блок</div>`;

class CourseFourScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, theme: '', };
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
      title = "Что нового в CSS3?";
         break;
      case 2:
          title = "border-radius"; 
         break;
      case 3:
        title = "box-shadow";
        break;
      case 4:
        title = "Псевдоклассы и псевдоэлементы";
        break;
      case 5:
        title = "word-wrap";
        break;
      case 6:
        title = "@font-face";
        break;
      case 7:
        title = "background-size/clip";
        break;
      case 8:
        title = "Свойство opacity";
        break;
    }
    this.props.navigation.navigate('CourseFourScreen', {
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
  dark.colors.color : light.colors.color}]}>Что нового в CSS3?</Text>
<View style={{paddingTop:10}}>
  <Text style={styles.textBlock}>
 <Text style={{color:'#db0202'}}>CSS3</Text> является обновленной версией CSS3.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Главными особенностями CSS3 является:
    </Text>
    </View>

        <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Фон и границы</Text>

  <View style={{paddingTop:10}}>
    <Text style={styles.textBlock}>
CSS3 позволяет разработчикам по-новому стилизировать фон и границы HTML-элементов. Например:
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-radius</Text> - позволяет закруглять границы.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-break</Text> - заканчивает границу элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-image</Text> - устанавливает изображение как границу.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>box-shadow</Text> - добавляет тень элементу.
    </Text>
    </View>

    <Text style={styles.titleText}>Расположение элементов</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  CSS3 упрощает позиционирование элементов двумя новыми методами: шаблонное позиционирование и отображение в виде закладок.
  </Text>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Новые селекторы CSS3</Text>

<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
В CSS3 были добавлены новые виды селекторов. Например:
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>nth-child</Text> - возвращает элемент, который является n-ым по счету дочерным элементом исходного.
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>nth-last-child</Text> - выполняет то же, что и предыдущий селектор, но счет идет от последнего элемента.
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>nth-of-type</Text> - возвращает элемент, который является n-ым по счету sibling элементом того же типа.
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>only-of-type</Text> - выбирает элемент, который является ближайшим sibling элементом того же типа.
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
  dark.colors.color : light.colors.color}]}>border-radius</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>border-radius</Text> устанавливает радиус скругления уголков рамки. Значение к border-radius:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Можно использовать 1, 2, 3, или 4 значения:
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>1 значение</Text> - радиус указывается для всех четырех уголов.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>2 значение</Text> - (при использования двух значений: <Text style={{color:'#db0202'}}>border-radius: 1, 2;</Text>)
 первое значение задает радиус верхнего левого и нижнего правого уголка, второе значение — верхнего правого и нижнего левого уголка.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>3 значение</Text> - (при использования двух значений: <Text style={{color:'#db0202'}}>border-radius: 1, 2, 3;</Text>)
 первое значение задает радиус для верхнего левого уголка, второе — одновременно для верхнего правого и нижнего левого,
  а третье — для нижнего правого уголка.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>4 значение</Text> - (при использования двух значений: <Text style={{color:'#db0202'}}>border-radius: 1, 2, 3, 4;</Text>)
 по очереди устанавливает радиус для верхнего левого, верхнего правого, нижнего правого и нижнего левого уголка.
    </Text>
    </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code}
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

if (id == 3) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>box-shadow</Text>

    <TextCourseTitle
    codeText={this.state.code2}
      language="html"
     />


<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>box-shadow</Text> устанавливает тень к элементу. Значение к box-shadow:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>none</Text> - отменяет тень.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>сдвиг по x</Text> - смещение тени по горизонтали относительно элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>сдвиг по y</Text> - смещение тени по вертикали относительно элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>размытие</Text> - задает радиус размытия тени.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>растяжение</Text> - положительное значение растягивает тень, отрицательное, сжимает.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>цвет</Text> - задает цвет тени.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inset</Text> - тень выводится внутри элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует у родителя.
    </Text>
    </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code3}
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
  dark.colors.color : light.colors.color}]}>Псевдоклассы</Text>

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>Псевдоклассы CSS</Text> позволяют нам стилизовать элементы или часть элемента. Значение к псевдоклассам:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:first-child</Text> - стилизует первый дочерний элемент текущего элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:last-child</Text> - стилизует последний дочерний элемент текущего элемента.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:only-child</Text> - применяет стиль к элементу, если он единственный дочерний элемент.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:nth-child()</Text> - стилизует элемент по счету(например :nth-child(4)).
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:nth-last-child()</Text> - стилизует элемент по счету с конца.
    </Text>
    </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code4}
    language="html"
   />

   <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Этот код закрасит только первое предложение красным цветов.
    </Text>
    </View>

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Псевдоэлементы</Text>

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>Псевдоэлементы CSS</Text> задают стиль элементов не определённых в дереве элементов документа.
 Значение к Псевдоэлементам:
 </Text>
 </View>

 <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:before</Text> - устанавливает контент до элемента.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:after</Text> - устанавливает контент после элемента.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:first-letter</Text> - устанавливает стиль первому символу в тексте элемента.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>:first-line</Text> - устанавливает стиль первой строке форматированного текста.
   </Text>
   </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

 <TextCourseTitle
 codeText={this.state.code5}
   language="html"
  />

  <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Этот код закрасит только первую букву красным цветов.
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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство word-wrap</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>word-wrap</Text> указывает, переносить или нет длинные слова. Значение к word-wrap:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>normal</Text> - автоматически заданное значение.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>break-word</Text> - перенос строк добавляется автоматически.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code6}
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

if (id == 6) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство @font-face</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>@font-face</Text> позволяет определить настройки шрифтов. Значение к @font-face:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>font-family</Text> - определяет имя шрифта.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>src</Text> - определяет путь к файлу со шрифтом.
    </Text>
    </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

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

if (id == 7) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>background-size</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>background-size</Text> масштабирует фоновое изображение. Значение к псевдоклассам:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Задает размеры в любых CSS единицах(пикселы (px), сантиметры (cm), em и др).
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>cover</Text> - масштабирует изображение, чтобы ширина или высота равнялась ширине или высоте блока.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>contain</Text> - масштабирует изображение таким образом, чтобы картинка целиком поместилась внутрь блока.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>auto</Text> - автоматически вычисляется размер.
    </Text>
    </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code8}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>background-clip</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>background-clip</Text> определяет, как фон должен выводиться под границами. Значение к background-clip:
 </Text>
 </View>

 <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>border-box</Text> - фон выводится под границами.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>padding-box</Text> - фон отображается внутри границ.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>content-box</Text> - фон отображается только внутри контента.
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

if (id == 8) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство opacity</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>opacity</Text> определяет уровень прозрачности элемента. Значение к opacity:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В качестве значения выступает число из диапазона 0.0 и 1.0.
  Значение 0 устанавливает полную прозрачность, а значение 1, наоборот - непрозрачность.
    </Text>
    </View>


<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code9}
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
      CourseFourScreen: {
        screen: CourseFourScreen,
      },
    },
    {
      initialRouteName: 'CourseFourScreen',
    }
  );
