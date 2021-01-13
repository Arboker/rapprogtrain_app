import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import MediumAdmobAd from '../../components/MobileAd'

import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1

import TextCourseTitle from '../../components/TextCourseTitle'
import { light, dark } from '../../../assets/theme'

const code = `function test() {
     //код
}`;
const code2 = `function fun() {
       alert('Все круто!');
}
 fun();`;
const code3 = `function showYear(year) {
       //код
}`;
const code4 = `function showYear(year) {
     alert('Сейчас,' + year);
}
     showYear('2018');`;
const code5 = `function fun(a,b) {
    return a + b;
}
 var num = fun(2,3);`;
const code6 = `function age(a,b) {
      var x = a+b;
         return x;
}
  alert(age(10,2) );`;
const code7 = `alert('Привет!');`;
const code8 = `var year =  prompt('Какой сейчас год?');
  alert('Сейчас 2018!');`;
const code9 = `var result = confirm('Вам 18 лет?');
      if (result == true) {
           alert('Проходи');
      }
      else {
          alert('Ты слишком маленький');
      }`;
const code10 = `function sayHi() {
   alert( this.Name );
 }`;
const code11 = `var firstName = {
  name: 'Денис',

  sayHi: function() {
    alert( this.name );
  }
};

 firstName.sayHi(); `;
const code12 = `var name = new Name("Вася");`;
const code13 = `var user = new function() {
  this.name = "Вася";
  this.canSpeak = true;
};`;
const code14 = `function sayAge(age) {
  this.age = age;

  this.sayHi = function() {
    alert( 'Мне ' + this.age );
  };
}

var vasea = new sayAge('15');

vasea.sayHi();`;


class CourseThreeScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12,
    code13, code14, theme: '', };
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
      title = "Функции";
         break;
      case 2:
          title = "Оператор return"; 
         break;
      case 3:
        title = "Alert,prompt,confirm";
        break;
      case 4:
        title = "Методы объектов this";
        break;
      case 5:
        title = "Объект new";
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
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Функции</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Для того, чтобы создать функцию, нам надо создать ключевое слово <Text style={{color:'#db0202'}}>function</Text>. После этого идет имя функциию.
   </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Чтобы выполнить функцию нам надо ее вызвать.Сейчас мы вызавим функцию fun:
    </Text>
 </View>

  <TextCourseTitle
  codeText={this.state.code2}
    language="javascript"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Параметры функции</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Для функции можно создать ее параметры.
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
      language="javascript"
     />

     <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 После определения параметров, можно их использовать внутри функции.
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

if (id == 2) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Оператор return</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Оператор <Text style={{color:'#db0202'}}>return</Text> используется для возвращения значения функций.
   </Text>
  </View>

  <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Например:
      </Text>
   </View>

  <TextCourseTitle
  codeText={this.state.code5}
    language="javascript"
   />


<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Давайте еще один пример рассмотрим.
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
  dark.colors.color : light.colors.color}]}>Alert</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В JavaScript есть три типа всплывающих окон. С одним из них мы уже ознакомились. Это Alert. Alert выполняет функцию предупреждения.
   </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code7}
    language="javascript"
   />


   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Prompt</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Prompt выполняет функцию ввода текста.
   </Text>
 </View>

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Например:
    </Text>
  </View>

 <TextCourseTitle
 codeText={this.state.code8}
   language="javascript"
  />

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Confirm</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Confirm используется для пртверждения какого-то текста.
   </Text>
</View>

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Например:
   </Text>
 </View>

<TextCourseTitle
codeText={this.state.code9}
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
  dark.colors.color : light.colors.color}]}>Вызов функции через значение this</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Значение <Text style={{color:'#db0202'}}>this</Text> используется для вызова функции.
   </Text>
  </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Например, сейчас мы вызовим функцию через значение this:
        </Text>
      </View>


  <TextCourseTitle
  codeText={this.state.code10}
    language="javascript"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Использование значения this</Text>
 <View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Сейчас я на примере покажу применение значения this:
  </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code11}
   language="javascript"
  />


   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Этот код нам выведет "Денис", потому что при вызывании функции firstName.sayHi()
 в значение this будет храниться ссылка на текущий объект firstName.
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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Объект new</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Иногда, нам приходиться создать несколько однотипных объектов. Для этого и нужен объект
  <Text style={{color:'#db0202'}}>new</Text>.
   </Text>
  </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Например:
         </Text>
      </View>


  <TextCourseTitle
  codeText={this.state.code12}
    language="javascript"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Создание функции с new</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Например, давайте создадим функцию с использование
 <Text style={{color:'#db0202'}}>new</Text>.
  </Text>
 </View>


 <TextCourseTitle
 codeText={this.state.code13}
   language="javascript"
  />

  <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   В этом клде мы используем значение this для указание функции
    </Text>
   </View>

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Сейчас, я вам покажу пример с использованием
 <Text style={{color:'#db0202'}}>new</Text>.
  </Text>
 </View>


 <TextCourseTitle
 codeText={this.state.code14}
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
