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

const code = `<!DOCTYPE HTML>
    <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <script type="text/javascript">

      </script>
    </body>
    </html>`;
const code2 = `<script src="/js/script.js"></script>`;
const code3 = `<script type="text/javascript">
// Команда говорит "Привет"

alert( 'Привет' );

</script>`;
const code4 = `<script type="text/javascript">

 /* Пример с двумя сообщениями.
 Это - многострочный комментарий.
 */
 alert( 'Rapprogtrain' );

</script>`;
const code5 = `<script type="text/javascript">

alert( 'Привет мир!' );

</script>`;
const code6 = `var x = 5;`;
const code7 = `<script type="text/javascript">
 var x = 15;
 alert(x);
</script>`;
const code8 = `"use strict";
// код`;
const code9 = `var num = 10;`;
const code10 = `var price = 10.10;`;
const code11 = `var country = "Russia";
var text = "Я живу в России";`;
const code12 = `var country = {
   city: "Moscow"
 }`;
const code13 = `var name;
var city;`;
const code14 = `var leftpricelist;`;
const code15 = `var price_left_list;`;
const code16 = `var clientName = "Вася";`;
const code17 = `var clientVasea = "Вася";`;
const code18 = `x == y`;
const code19 = `alert( 2 == 10 ); // выводет false `;
const code20 = `x != y`;
const code21 = `2 !=  1   // истина
2 !=  2   // ложь  `;
const code22 = `x > y`;
const code23 = `x >= y`;
const code24 = `x < y`;
const code25 = `x <= y`;

class CourseOneScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14, code15,
    code16, code17, code18, code19, code20, code21, code22, code23, code24, code25, theme: '', };
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
      title = "Введение в JavaScript";
         break;
      case 2:
          title = "Первый код в JavaScript"; 
         break;
      case 3:
        title = "Комментарии в JavaScript";
        break;
      case 4:
        title = "Привет мир!";
        break;
      case 5:
        title = "Переменные";
        break;
      case 6:
        title = "Использование 'use strict'";
        break;
      case 7:
        title = "Типы данных";
        break;
      case 8:
        title = "Выбор имени перемменным";
        break;
      case 9:
        title = "Операторы сравнения";
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
if (id == 1) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Что такое JavaScript ?</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>JavaScript - мультипарадигменный язык программирования.
  Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией языка ECMAScript.</Text>
  </View>
     <Image
         source={require('../../../assets/img/Java-script-structure-for-lazy-developers.jpg')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />

       <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Для чего нужен JavaScript ?</Text>
   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>JavaScript - это новый уровень веб программирования. Он нужен для красивого и функционального сайта.
     Зачем нужен JavaScript еще, например, для проверки форм на корректность заполнения без отправки данных на сервер,
      то есть вам сразу выводится сообщение, что поле заполнено неверно или например, что логин уже занят.
       Различные слайдеры, спойлеры, карусели тоже работают с помощью скриптов. Как и каждый язык программирования,
       он умеет выполнять математические операции, это в том числе используется в различных калькуляторах и конвертерах.</Text>
     </View>
        <Image
            source={require('../../../assets/img/kak_vyuchit_javascript.jpg')}
             style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
          />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Что не может JavaScript</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>JavaScript не умеет работать с файлами компьютера.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>JavaScript не может работать с файлами.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Работая в одной вкладке, вы не можете работать с другими вкладками и окнами</Text>
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
  dark.colors.color : light.colors.color}]}>Добавление код JavaScript на страницу</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Для того, чтобы писать код JavaScript, надо его подключить к html странице.
   В HTML, код JavaScript должен быть вставлен код <Text style={{color:'#db0202'}}>&lt;script type="text/javascript"></Text>.
  Для того, чтобы закрыть JavaScript код, нужно в конце вставить код <Text style={{color:'#db0202'}}>&lt;/script></Text>.
  </Text>
  </View>


  <TextCourseTitle
  codeText={this.state.code}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Внешний JavaScript</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Скрипты JavaScript могуть быть также размещены во внешних файлах. Обычно создается внешний файл, когда на странице много кода.
 </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code2}
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

if (id == 3) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Комментарии</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 В JavaScript и в других языках программирования есть комментарии. Комментарии используются для объяснения кода.
 Они объясняют что происходит и почему.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Комментарии могут находиться в любом месте программы и никак не влияют на её выполнение.
    </Text>
    </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Однострочные комментарии начинаются с двойного слэша // .
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code3}
    language="html"
   />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Многострочные комментарии</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Все многострочные комментарии начинаются слешем-звездочкой «/*» и заканчиваются звездочкой-слэшем «*/».
 </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code4}
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

if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Команда alert</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Команда <Text style={{color:'#db0202'}}>alert</Text> выводит сообщение на экран, которое вы ввели после alert.
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code5}
    language="html"
   />

   <Image
       source={require('../../../assets/img/alert1.png')}
        style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Переменные</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
     <Text style={{color:'#db0202'}}>Переменные</Text> - это контейнер где хранится значение.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Для объявления переменной используется ключевое слово <Text style={{color:'#db0202'}}>var</Text>.
        </Text>
        </View>

  <TextCourseTitle
  codeText={this.state.code6}
    language="javascript"
   />


         <View style={{paddingTop:10}}>
           <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
         Ключевому слову var присвоено значение 5.
           </Text>
           </View>

           <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Выведим переменную на экран</Text>
           <View style={{paddingTop:10}}>
             <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             Давайте происвоим значение переменной и выводим его в брузере.
             </Text>
             </View>

             <TextCourseTitle
             codeText={this.state.code7}
               language="html"
              />

   <Image
       source={require('../../../assets/img/alert2.png')}
        style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
     />

              <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Название переменной</Text>

              <View style={{paddingTop:10}}>
                <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Переменные JS должны называться правильно, иначе они не сработают.
                 </Text>
                </View>

                <View style={{paddingTop:10}}>
                  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Правило наименования переменной :
                    </Text>
                  </View>



     <View style={{paddingTop:10}}>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
1) Первым символом должна быть буква,знак доллара "$", или нижнее подчеркивание "_"
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 2) Имена переменной JS не могут содержать пробелы
        </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 3) Первый символ не должен быть цифрой.
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


if (id == 6) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>'use strict'</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
     <Text style={{color:'#db0202'}}>'use strict'</Text>, введенный в ECMAScript 5, позволяет использовать более строгий вариант JavaScript.
      Семантика используемая в strict отличается от обычной.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
       Браузеры, которые не поддерживают строгий режим будут по-другому выполнять код, поэтому не полагайтесь на строгий режим
       без тестирования поддержки используемых особенностей этого режима.
        </Text>
        </View>

           <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Активация строго режима</Text>
           <View style={{paddingTop:10}}>
             <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             Чтобы активировать строгий режим для всего скрипта, нужно поместить оператор "use strict" в начале кода.
             </Text>
             </View>

             <TextCourseTitle
             codeText={this.state.code8}
               language="javascript"
              />


                         <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Изменения</Text>
                         <View style={{paddingTop:10}}>
                           <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Больше всего изменений попадает на: преобразование ошибок в исключения, изменения eval и arguments, упрощающие вычисление переменной и т.д.
                            </Text>
                           </View>

                           <View style={{paddingTop:10}}>
                             <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Также использования strict делает невозможным создание случайных глобальных переменных, запрещает синтаксис восьмеричной системы счисления,
 заставляет присваивания выбрасывать исключения.
                               </Text>
                             </View>


                             <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Поддержка в браузерах</Text>
                             <View style={{paddingTop:10}}>
                               <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                               В большинстве браузеров строгий режим реализован, крому браузеров с Internet Explorer ниже версии 10.
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


if (id == 7) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Типы данных</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Термин тип данных ссылается на типы значений, с которыми программа может работать.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 JavaScript включает в себя 7 типов данных: Boolean, Null, Undefined, Number, String, Symbol, Object.
        </Text>
        </View>

           <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Числа</Text>
           <View style={{paddingTop:10}}>
             <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             Числа в JS могут быть указаны без или с дробной части.
             </Text>
             </View>

             <TextCourseTitle
             codeText={this.state.code9}
               language="javascript"
              />


              <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Числа с дробной частью</Text>
              <View style={{paddingTop:10}}>
                <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Числа также могут иметь дробную часть.
                </Text>
                </View>

                <TextCourseTitle
                codeText={this.state.code10}
                  language="javascript"
                 />

                 <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Строки в JS</Text>
                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Строки используются для хранения и управления текстом. Текст должен быть написан внутри кавычек:
                   </Text>
                   </View>

                   <TextCourseTitle
                   codeText={this.state.code11}
                     language="javascript"
                    />

                    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Объекты</Text>
                    <View style={{paddingTop:10}}>
                      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Объект используется для объявления более сложных сущностей.
                       </Text>
                      </View>
                      <View style={{paddingTop:10}}>
                        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Объявляются объекты при помощи фигурных скобок.
                          </Text>
                        </View>

                      <TextCourseTitle
                      codeText={this.state.code12}
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

if (id == 8) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Выбор имени перемменным</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Правивильный выбор имени переменной в JS одна из самых важных вещей.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Сейчас я вам расскажу как правильно назвать переменную.
        </Text>
        </View>

           <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Правила наименования переменной</Text>
            <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Правило 1 </Text>
           <View style={{paddingTop:10}}>
             <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Имя переменной должно быть на только английском языке.
              </Text>
             </View>

             <TextCourseTitle
             codeText={this.state.code13}
               language="javascript"
              />


              <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Почему лучше не использовать кириллицу</Text>
              <View style={{paddingTop:10}}>
                <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 1) Русские слова обычно длиннее английских (ссылка" - "link", "купить" - "buy", "страница" - "page", и т.д.).
 Но невсегда английские слова короче.
                </Text>
                <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 2) Если вы используете русский в написание переменной, то вам постоянно придется переключить клавиатуру .
                 </Text>
                </View>


                 <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Правило 2 </Text>
                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 В JS имя переменной можно писать слитно.
                    </Text>
                   </View>

                   <View style={{paddingTop:10}}>
                     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Например:
                       </Text>
                     </View>

                   <TextCourseTitle
                   codeText={this.state.code14}
                     language="javascript"
                    />


                    <View style={{paddingTop:10}}>
                      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                    А можно также писать через нижнее подчеркивание.
                        </Text>
                      </View>

                      <TextCourseTitle
                      codeText={this.state.code15}
                        language="javascript"
                       />



                    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Правило 3 </Text>
                    <View style={{paddingTop:10}}>
                      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Имя переменной должно соответствовать хранимым в ней данным.
                        </Text>
                      </View>
                      <View style={{paddingTop:10}}>
                        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Оно должно быть без лишних слов.
                           </Text>
                        </View>
                        <View style={{paddingTop:10}}>
                          <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Например если нам надо дать имя клиенту, нам надо записать вот так:
                              </Text>
                          </View>


                      <TextCourseTitle
                      codeText={this.state.code16}
                        language="javascript"
                       />

                       <View style={{paddingTop:10}}>
                         <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                         Неправильно будет назвать переменную вот так:
                             </Text>
                         </View>


                       <TextCourseTitle
                       codeText={this.state.code17}
                       language="javascript"
                       />

                       <View style={{paddingTop:10}}>
                         <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
               Теперь я надеюсь, вы разобрались, как называть преременные.
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
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Оператор равенства</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Оператор равно <Text style={{color:'#db0202'}}>"=="</Text> используется для сравнения.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Например если x равен y.
    </Text>
    </View>

  <TextCourseTitle
  codeText={this.state.code18}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Например в alert мы напишем, что 2 равняется 10 и нам выведится, что это не верно.
 </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code19}
   language="javascript"
  />

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Оператор неравенства </Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Оператор не равно <Text style={{color:'#db0202'}}>"!="</Text> возвращает true если число не равно другому.
</Text>
</View>

<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Например если x не равен y.
 </Text>
</View>

<TextCourseTitle
codeText={this.state.code20}
  language="javascript"
 />

 <TextCourseTitle
 codeText={this.state.code21}
   language="javascript"
  />

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Оператор сравнения </Text>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Больше </Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Оператор больше возвращает истину, если операнд больше правого.
</Text>
</View>

<TextCourseTitle
codeText={this.state.code22}
  language="javascript"
 />

 <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Больше или равно  </Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Оператор больше или равно, возвращает истину , если значение операнда слева больше или равно значению операнда
 справа и обозначается вот так <Text style={{color:'#db0202'}}>">="</Text>.
</Text>
</View>

<TextCourseTitle
codeText={this.state.code23}
language="javascript"
/>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Меньше </Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Оператор меньше, возвращает истину, если значение операнда слева меньше, чем значение операнда справа и обозначается вот так
 <Text style={{color:'#db0202'}}>"&lt;"</Text>.
</Text>
</View>

<TextCourseTitle
codeText={this.state.code24}
language="javascript"
/>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Меньше или равно  </Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Оператор меньше или равно, возвращает истину , если значение операнда слева меньше, или равно значению операнда справа и обозначается вот так
 <Text style={{color:'#db0202'}}>"&lt;="</Text>.
</Text>
</View>

<TextCourseTitle
codeText={this.state.code25}
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
      CourseOneScreen: {
        screen: CourseOneScreen,
      },
    },
    {
      initialRouteName: 'CourseOneScreen',
    }
  );
