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

const code = `var i;
   for (i = 0; i < 5; i++) {
      if (i == 3) {
         break;
}
   alert(i);
}`;
const code2 = `var i;
   for (i = 0; i < 5; i++) {
      if (i == 3) {
         continue;
}
   alert(i);
}`;
const code3 = `var names = ["Сережа", "Вася", "Петя"];`;
const code4 = `var names = ["Сережа", "Вася", "Петя"];

 alert( names[0] ); // Сережа
 alert( names[1] ); // Вася
 alert( names[2] ); // Петя`;
const code5 = `var names = ["Сережа", "Вася", "Петя"];

 alert( names.length );`;
const code6 = `alert(Math.PI);`;
const code7 = `var now = new Date();
     alert(now);`;
const code8 = `var now = new Date();
var minutes = now.getMinutes();
     alert(now);`;
const code9 = `var x = 8;
 if (x == 8) {
 alert('Правильно!')
}`;
const code10 = `var x = 7;
 if (x != 8) {
 alert('Плохо!')
}`;
const code11 = `if (x == 8) {
  alert('Хорошо');
}
 else {
  alert('Плохо');
}`;
const code12 = `var city = "Moscow";
  if (city == "Moscow") {
    alert('Да');
}
  else {
    alert('Нет');
}`;
const code13 = `if (x == 5) {
   alert('JavaScript');
}
 else if (x == 6) {
   alert('Html');
}
 else {
   alert('Css');
}`;
const code14 = `var age = 10;
  if (age < 10) {
      alert('Ты слишком маленький')
  }
  else if (age => 10) {
      alert('Ты слишко большой');
  }
   else {
      alert('Теперь нормально!');
   }`;
const code15 = `switch() {
   case 1:
     высказывание
     break;
   case 2:
     высказывание
     break;
   default:
     высказывание
}`;
const code16 = `var num = 3;
   switch (num) {
     case 1:
      alert('Нет');
        break;
     case 2:
      alert('Почти!');
        break;
     case 3:
      alert('О,красава');
        break;
     default:
      alert('Эх...');
   }`;
   const code17 = `for (высказывание1;высказывание2;высказывание3) {
     //идет код
}`;
   const code18 = `var i;
  for (i = 0; i < 2; i++) {
    alert(i);
}`;
   const code19 = `while (Высказывание) {
     //любой код
}`;
   const code20 = `var i = 0;
    while (i <= 5) {
     alert(i);
   i++
    }`;
   const code21 = `do {
     //код
}
  while (высказывание);`;
   const code22 = `var i = 0;
   do {
      alert(i);
   i++
}
   while (i < 2);`;


class CourseTwoScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14,
    code15, code16, code17, code18, code19, code20, code21, code22, theme: '', };
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
      title = "Оператор if и else";
         break;
      case 2:
          title = "Оператор else if"; 
         break;
      case 3:
        title = "Оператор switch";
        break;
      case 4:
        title = "Циклы while, for";
        break;
      case 5:
        title = "Break и continue";
        break;
      case 6:
        title = "Массивы";
        break;
      case 7:
        title = "Объект Math";
        break;
      case 8:
        title = "Объект Date";
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
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Оператор if</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   При написании кода вам необходимо выполнять различные действия. Для этого используются условные операторы
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Оператор <Text style={{color:'#db0202'}}>if</Text> используется для определение блока, который будет выполнен, если условие будет верным.
    </Text>
    </View>

  <TextCourseTitle
  codeText={this.state.code9}
    language="javascript"
   />

         <View style={{paddingTop:10}}>
           <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 В этом коде мы присвоили переменной x значение 8, дальше мы проверили если переменная x равно 8, то мы выведим "Правильно!".
           </Text>
           </View>

           <TextCourseTitle
           codeText={this.state.code10}
             language="javascript"
            />

                  <View style={{paddingTop:10}}>
                    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                    В этом коде мы присвоили переменной x значение 7, дальше мы проверили если переменная x не равно 8, то мы выведим "Плохо!".
                    </Text>
                    </View>


                    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Оператор else</Text>

                  <View style={{paddingTop:10}}>
                    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Оператор <Text style={{color:'#db0202'}}>else</Text> используется, если условие ложно.
                    </Text>
                    </View>

                  <TextCourseTitle
                  codeText={this.state.code11}
                    language="javascript"
                   />

                   <View style={{paddingTop:10}}>
                     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                     В этом коды переменной city мы присвоили значение "Moscow" и проверили, если переменная хранит значение "Moscow",
                     то мы выведим, что "да!", а если переменная city не хранит значение Moscow, то мы выведим "нет!".
                     </Text>
                     </View>


                                       <TextCourseTitle
                                       codeText={this.state.code12}
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
  dark.colors.color : light.colors.color}]}>Оператор else if</Text>
  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Оператор <Text style={{color:'#db0202'}}>else if</Text> используется, если первое условие ложно.
    </Text>
    </View>

  <TextCourseTitle
  codeText={this.state.code13}
    language="javascript"
   />

         <View style={{paddingTop:10}}>
           <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
           В вышеуказанном коде у нас сказано, что если x равно 5, то мы выводим "JavaScript", иначе, если x равно 6,
           то мы выведим "Html", если ни одно из условий не верно, то мы выводим "Css".
                      </Text>
           </View>

           <TextCourseTitle
           codeText={this.state.code14}
             language="javascript"
            />

            <View style={{paddingTop:10}}>
              <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
              В вышеуказанном коде было показано, как использовать else if.
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

if (id == 3) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Оператор switch</Text>
  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Оператор <Text style={{color:'#db0202'}}>switch</Text> используется, для выполнения различных действий,
    основынных на выполнения большого количества условий.
    </Text>
    </View>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис</Text>
  <TextCourseTitle
  codeText={this.state.code15}
    language="javascript"
   />

         <View style={{paddingTop:10}}>
           <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
           Выражение switch считывает правильно выражение со значения case и выполняет это до выражение break.
                      </Text>
           </View>

           <View style={{paddingTop:10}}>
             <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Рассмотрим пример использования switch
                        </Text>
             </View>

           <TextCourseTitle
           codeText={this.state.code16}
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
  dark.colors.color : light.colors.color}]}>Цикл for</Text>
  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Циклы используются для выполнение какого-то кода многократно.
    </Text>
    </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Чаще всего из циклов используется for.
       </Text>
      </View>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис</Text>
  <TextCourseTitle
  codeText={this.state.code17}
    language="javascript"
   />

   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 В качестве значений можно использовать целые числа.
  Если вы хотите, чтобы один элемент находился выше другого вам надо поставить значение больше.
     </Text>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>Высказывание1</Text> выполняется один раз, до запуска цикла.
     </Text>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>Высказывание2</Text> определяет условие для запуска цикла.
     </Text>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>Высказывание3</Text> используется после каждого условия.
     </Text>
     </View>

           <View style={{paddingTop:10}}>
             <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             Рассмотрим пример использования for:
                                     </Text>
             </View>

           <TextCourseTitle
           codeText={this.state.code18}
             language="javascript"
            />

            <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Цикл while</Text>
          <View style={{paddingTop:10}}>
            <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
         Цикл <Text style={{color:'#db0202'}}>while</Text> выполняется до тех пор, пока условие не будет верным.
            </Text>
            </View>

            <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис</Text>
          <TextCourseTitle
          codeText={this.state.code19}
            language="javascript"
           />

         <View style={{paddingTop:10}}>
           <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
           Рассмотрим пример использования while:
           </Text>
           </View>

           <TextCourseTitle
           codeText={this.state.code20}
             language="javascript"
            />

            <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Цикл do while</Text>
          <View style={{paddingTop:10}}>
            <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
         Цикл <Text style={{color:'#db0202'}}>do</Text> используется до цикла while.
            </Text>
            </View>

            <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис</Text>
          <TextCourseTitle
          codeText={this.state.code21}
            language="javascript"
           />

         <View style={{paddingTop:10}}>
           <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
           Рассмотрим пример использования do while:
                      </Text>
           </View>

           <TextCourseTitle
           codeText={this.state.code22}
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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Break</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Break уходит из цикла и продолжает выполнение с кода после цикла.
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 У нас получилось, что как только i будет равно 3, произойдет выход из цикла.
  </Text>
 </View>

 <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Continue</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Continue пропускает только одну итерацию в цикле и продолжает со следующей итерации.
</Text>
</View>

 <TextCourseTitle
 codeText={this.state.code2}
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

if (id == 6) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Массивы в JavaScript</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Массивы в JavaScript используются для хранения множества значений в одной переменной.
   </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Для создания массива используется <Text style={{color:'#db0202'}}>[]</Text>.
     </Text>
    </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Давайте создадим массив с именами:
        </Text>
      </View>


  <TextCourseTitle
  codeText={this.state.code3}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Массив names хранит в себе имена "Сережа", "Вася", "Петя".
   </Text>
 </View>

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Например вы захотели в alert вывести какое-то имя.Сделать это очень легко. Нумерация номеров в JS начинается с 0.
  Например, чтобы получить нужный элемент из массива нужно указать его номер в квадратных скобках:
    </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code4}
    language="javascript"
   />

 <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство length</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство массива <Text style={{color:'#db0202'}}>length</Text> возвращает число его элемента.
</Text>
</View>

 <TextCourseTitle
 codeText={this.state.code5}
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

if (id == 7) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Объект Math</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Объект <Text style={{color:'#db0202'}}>Math</Text> позволяет выполнять математические действия.
   </Text>
  </View>

    <View style={{paddingTop:10}}>
      <Text style={styles.textBlock}>
Например:
        </Text>
      </View>


  <TextCourseTitle
  codeText={this.state.code6}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Объект Math содержит множество методов для вычислений.
   </Text>
 </View>

 <Image
     source={require('../../../assets/img/js-math.png')}
      style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
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
  dark.colors.color : light.colors.color}]}>Объект Date</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Для работы с датами и временем в JavaScript используется <Text style={{color:'#db0202'}}>Date</Text>.
   </Text>
  </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Давайте создадим сегоднешнюю дату и время.
        </Text>
      </View>


  <TextCourseTitle
  codeText={this.state.code7}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 В JavaScript можно создавать новые объекты от указанной даты и времени.
    </Text>
 </View>

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Например получим время в минутах:
      </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code8}
    language="javascript"
   />


 <Image
     source={require('../../../assets/img/date.png')}
      style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
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
      CourseTwoScreen: {
        screen: CourseTwoScreen,
      },
    },
    {
      initialRouteName: 'CourseTwoScreen',
    }
  );
