import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import MobileAd from '../../components/MobileAd'
import { createStackNavigator } from 'react-navigation-stack'
import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1
import { light, dark } from '../../../assets/theme'

import TextCourseTitle from '../../components/TextCourseTitle'


   const code = `<style>
    p {
    	display: inline-block;
    }
  </style>
  <p>Первый параграф</p>
  <p>Второй параграф</p>
  <p>Третий параграф</p>`;
  const code2 = `<style>
    #hidden {
      visibility: hidden;
    }
  </style>
  <div id="hidden">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
  <div id="visible">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>`;
  const code3 = `<style>
#block2 {
  position: absolute;
  top: 0;
}
  </style>
  <div id="block2">
    <span>Текст</span>
  </div>`;
  const code4 = `<style>
  #block1 {
    width: 15%;
    float: left;
  }
    </style>
    <div id="block1">
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
    </div>`;
  const code5 = `<style>
  #block {
      overflow: scroll;
      width: 200px;
      height: 100px;
  }
    </style>
    <div id="block">
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
    </div>`;
  const code6 = `<style>
    #txt1 {
     z-index: 1;
   }
    #txt2 {
     z-index: 2;
   }
    </style>
  <span id="txt1">Абзац 1</span>
  <span id="txt2">Абзац 2</span>`;

class CourseThreeScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, theme: '', };
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
      title = "Свойство display";
         break;
      case 2:
          title = "Свойство visibility"; 
         break;
      case 3:
        title = "Свойство position";
        break;
      case 4:
        title = "Свойство float и clear";
        break;
      case 5:
        title = "Свойство overflow";
        break;
      case 6:
        title = "Свойство z-index";
        break;
    }
    this.props.navigation.navigate('CourseThreeScreen', {
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
  dark.colors.color : light.colors.color}]}>Свойство display</Text>
 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>display</Text> определяет, как элемент должен быть показан в документе. Значение к display:
  </Text>
  </View>


  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>block</Text> - показывает элемент как блочный.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inline</Text> - элемент отображается как встроенный.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inline-block</Text> - элемент генерирует строковый блок.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inline-table</Text> - элемент определяет структурный блок, который генерирует строковый блок.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>list-item</Text> - элемент генерирует структурный блок, который отображается как элемент списка.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>table</Text> - элемент генерирует структурный блок.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>table-column-group</Text> - элемент объединяет один или несколько столбцов.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>table-cell</Text> - указывает, что элемент представляет собой ячейку таблицы.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>none</Text> - прячет элемент.
    </Text>
    </View>


   <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

 <TextCourseTitle
 codeText={this.state.code}
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

if (id == 2) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство visibility</Text>
 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>visibility</Text> определяет, элемент скрыт или виден. Значение к visibility:
  </Text>
  </View>


  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>visible</Text> - отображает элемент как видимый.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>hidden</Text> - элемент становится прозрачным.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>collapse</Text> - строки и колонки убираются, а таблица перестраивается по новой.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>


 <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

 <TextCourseTitle
 codeText={this.state.code2}
   language="html"
  />

  <View style={{paddingTop:10}}>
 <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Блок с id hidden скроется, но его месте останеться пустой блок.
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
  <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство position</Text>
 <View style={{paddingTop:10}}>
<Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>position</Text> позиционирует элемент относительно окна браузера или других объектов на веб-странице.
   Значение к position:
  </Text>
  </View>


  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>static</Text> - элементы отображаются как обычно.
    </Text>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>relative</Text> - положение элемента устанавливается относительно его исходного места.
    </Text>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>fixed</Text> - у элементы элементов фиксированная позиция и размещается она относительно окна браузера.
Она не двигается при прокрутки страницы.
    </Text>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>absolute</Text> - позиционируется относительно других элементов.
    </Text>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>


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
    <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство float</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>float</Text> определяет, по какой стороне будет выравниваться элемент. Значение к float:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>left</Text> - выравнивает элемент по левому краю.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>right</Text> - выравнивает элемент по правому краю.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>none</Text> - нету обтекание элемента.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>

<Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code4}
    language="html"
   />

   <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство clear</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Свойство <Text style={{color:'#db0202'}}>clear</Text> устанавливает, с какой стороны элемента запрещено его обтекание другими элементами.
  Значение к clear:
 </Text>
 </View>

 <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>left</Text> - отменяет обтекание с левого края элемента.
   </Text>
   <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>right</Text> - отменяет обтекание с правой стороны элемента.
   </Text>
   <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>both</Text> - отменяет обтекание элемента одновременно с правого и левого края.
   </Text>
   <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>none</Text> - отменяет действие свойства clear.
   </Text>
   <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - устанавливает значение родителя.
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
    <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство overflow</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>overflow</Text> управляет поведением блочных элементов,
   если его размер превышает допустимую длину и ширину. Значение к overflow:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>visible</Text> - отображается все содержание элемента.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>hidden</Text> - отображается только область внутри элемента.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>scroll</Text> - всегда добавляются полосы прокрутки.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>auto</Text> - полосы прокрутки добавляются только при необходимости.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>

<Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code5}
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
    <Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство z-index</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>z-index</Text> накладывает элементы друг на друга. Значение к z-index:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
В качестве значений можно использовать целые числа.
 Если вы хотите, чтобы один элемент находился выше другого вам надо поставить значение больше.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>auto</Text> - порядок элементов строится автоматически.
    </Text>
    <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>

<Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code6}
    language="html"
   />

   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    В этом коде id txt2 будет находиться поверх id txt1
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
      CourseThreeScreen: {
        screen: CourseThreeScreen,
      },
    },
    {
      initialRouteName: 'CourseThreeScreen',
    }
  );
