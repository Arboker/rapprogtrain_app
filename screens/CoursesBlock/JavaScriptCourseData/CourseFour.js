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

const code = `<div id="container">Текст</div>

<script>

var elem = document.getElementById('container');`;
const code2 = `<div class="ex-text">Привет!</div>

 <script>
   var text = document.getElementsByClassName('ex-text');
 </script>`;
const code3 = `<div></div>

 <script>
   var elements = document.getElementsByTagName('div');
 </script>`;
const code4 = `<div class="text">
    <span>Rapprogtrain</span>
<script>

  var txt = document.querySelectorAll('.text span:first-letter');

</script>`;
const code5 = `var txt = document.createTextNode('Привет!')`;
const code6 = `<div class="text">Привет!</div>

 <script>

   var span = document.createElement('span');
   var node = document.createTextNode('Rapprogtrain');
       span.appendChild(node);

   var txt = document.getElementsByClassName('text');
   txt.appendChild(span);

 </script>`;
const code7 = `
<div id="text">
            <p id="ex-txt1">Привет!</p>
            <p id="ex-txt2">Я Вася.</p>
        </div>

 <script>

    var txt = document.getElementById("text");
    var ex1 = document.getElementById("ex-txt1");
    txt.removeChild(ex1);

    </script>`;
const code8 = `var anim = setInterval(jump, 1000);`;
const code9 = `<style>
 #container {
   width: 400px;
   height: 300px;
   position: relative;
   background: white;
 }
 #animation {
   width: 50px;
   height: 50px;
   background-color: red;
   border-radius: 50%;
 }
 </style>

 <p>
 <button onclick="move()">Click Me</button>
 </p>

 <div id ="container">
 <div id ="animation"></div>
 </div>

 <script>
  function move() {
  var elem = document.getElementById("animation");
  var pos = 0;
  var id = setInterval(jump, 10);
     function jump() {
     if (pos == 250) {
             clearInterval(id);
     }
    else {
         pos++;
     elem.style.top = pos + "px";
         }
     }
 }
 </script>`;
 const code10 = `<button onclick="alert('Привет')">Кликни</button>`;
 const code11 = `<button id="date" onclick="date()">Кликни</button>

<script>
 function date() {
     var date = document.getElementById('date');
     var now = new Date();
     alert(now);
 }
</script>`;
 const code12 = `window.onload = function() {
 //код
 }`;
 const code13 = `elem.addEventListener("click", function() {
 //код
 }`;

class CourseFourScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, theme: '', };
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
      title = "Что такое Dom";
         break;
      case 2:
          title = "Выбор элементов"; 
         break;
      case 3:
        title = "Добавление и удаление элементов ";
        break;
      case 4:
        title = "Анимации в JavaScript";
        break;
      case 5:
        title = "Обработка событий";
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
  dark.colors.color : light.colors.color}]}>Что такое Dom?</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>Dom</Text> - это программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML и XML документов.
 DOM используется для изменения содержимого, структуру и оформление таких документов.
  </Text>
  </View>

       <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Дерево DOM</Text>
   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
     Объектая модель документа HTML DOM рассматривает HTML документ как древовидную структуру.
      Эта древовидная структура называется деревом узлов. Можно получить доступ ко всем узлам дерева. Их содержимое можно изменять, удалять,
      а также могут быть созданы новые элементы. Дерево узлов показывает набор узлов и связи между ними.
       </Text>
     </View>
        <Image
            source={require('../../../assets/img/dom_struct.png')}
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

if (id == 2) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>document.getElementById</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Если у элементу назначен атрибут id и вы хотите получить атрибут по переменной с именем из значения id, используется
  <Text style={{color:'#db0202'}}>document.getElementById</Text>.
   </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code}
    language="html"
   />

   <Text style={[styles.titleTex,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>document.getElementsByClassName</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 <Text style={{color:'#db0202'}}>document.getElementsByClassName</Text> находит все элементы по имени класса.
  </Text>
 </View>


 <TextCourseTitle
 codeText={this.state.code2}
   language="html"
  />

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>document.getElementsByTagName</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>document.getElementsByTagName</Text> находит элементы по тегу.
 </Text>
</View>


<TextCourseTitle
codeText={this.state.code3}
  language="html"
 />

 <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>document.querySelectorAll</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>document.querySelectorAll</Text> используется если внутри элемента, есть css-селекторы.
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
  dark.colors.color : light.colors.color}]}>Создание элемента</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>document.createElement</Text> создает новый узел элемента.
  <Text style={{color:'#db0202'}}>document.createTextNode</Text> создает новый текстовый узел.
   </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code5}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Этот элемент, которые мы создали, не появится в документе, пока мы его не добавим к существующему элементу.
  </Text>
 </View>


 <TextCourseTitle
 codeText={this.state.code6}
   language="html"
  />

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Элемент <Text style={{color:'#db0202'}}>appendChild(node)</Text> добавляет новый узел.
     </Text>
    </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Удаление элементов</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>removeChild</Text> удаляет элемент.
 </Text>
</View>


<TextCourseTitle
codeText={this.state.code7}
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

if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Анимация</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Метод <Text style={{color:'#db0202'}}>setInterval()</Text> используется для создание таймера функции.Вызывание функции идет в миллисекундах.
   </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code8}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Мы вызвали функцию jump() которая будет вызываться каждую 1 секунду.
  </Text>
 </View>


 <TextCourseTitle
 codeText={this.state.code9}
   language="html"
  />

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    У кнопки мы указали, что при клики, будет выполнятся функция move(). Дальше, мы указали изначальное значение 0 и у id,
     мы указали сколько будет выполнятся эта анимация и указали у нее функцию jump().
      Потом, мы проверили, если значение круга достигнет 250, мы прекратим анимацию через clearInterval().
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
  dark.colors.color : light.colors.color}]}>Обработка событий</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В JavaScript, можно выполнять события, которая будет работать по клику на что-либо, при наведении, или при загрузки страницы.
   </Text>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Функции при клике</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Чтобы выполнить событие по клику, надо добавить функцию <Text style={{color:'#db0202'}}>onclick</Text>.
  </Text>
</View>

<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Например, давайте при клике на кнопку, отобразим всплывающее окно.
   </Text>
</View>

 <TextCourseTitle
 codeText={this.state.code10}
   language="html"
  />

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Или давайте например при клике отобразим сегодняшнюю дату.
     </Text>
    </View>

    <TextCourseTitle
    codeText={this.state.code11}
      language="html"
     />

     <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Функции при заргузке страницы</Text>
   <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Функцию <Text style={{color:'#db0202'}}>onload</Text> используется когда пользователь зашел на страницу.
     </Text>
   </View>

    <TextCourseTitle
    codeText={this.state.code12}
      language="html"
     />

     <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Приемник событий</Text>
   <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Метод <Text style={{color:'#db0202'}}>addEventListener()</Text> добавляет обработчик событий к элементу. Давайте например добавим функцию клика.
     </Text>
   </View>

    <TextCourseTitle
    codeText={this.state.code13}
      language="html"
     />

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Все события:</Text>
     <View style={{paddingTop:10}}>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>onclick</Text> - выполняется при щелчке левой кнопкой мыши на элементе.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>onmouseover</Text> - выполняется при наведение курсора на элемент.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>onchange</Text> - выполняется при изменение значения элемента формы.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>onmousedown</Text> - выполняется при нажатие левой кнопки мыши.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>onmouseup</Text> - выполняется, когда левая кнопка мыши отпущена.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>onsubmit</Text> - выполняется, когда форма отправлена.
       </Text>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   <Text style={{color:'#db0202'}}>onunload</Text> - выполняется при закрытие окна.
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
