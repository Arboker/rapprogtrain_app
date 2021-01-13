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
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Some Web Page</title>
    <link rel='stylesheet' href='styles.css'/>
  </head>
  <body>
    <div class='menu-container'>
      <div class='menu'>
        <div class='date'>Aug 14, 2016</div>
        <div class='signup'>Sign Up</div>
        <div class='login'>Login</div>
      </div>
    </div>
  </body>
</html>`;
const code2 = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu-container {
  color: #fff;
  background-color: #5995DA;  /* Blue */
  padding: 20px 0;
}

.menu {
  border: 1px solid #fff;  /* For debugging */
  width: 900px;
}`;
const code3 = `.menu-container {
  /* ... */
  display: flex;
}`;
const code4 = `.menu-container {
  /* ... */
  display: flex;
  justify-content: center;    /* Add this */
}`;
const code5 = `.menu {
  border: 1px solid #fff;
  width: 900px;
  display: flex;
  justify-content: space-around;
}`;
const code6 = `<div class='menu'>
<div class='date'>Aug 14, 2016</div>
<div class='links'>
  <div class='signup'>Sign Up</div>      <!-- This is nested now -->
  <div class='login'>Login</div>         <!-- This one too! -->
</div>
</div>`;
const code7 = `.links {
  border: 1px solid #fff;  /* Для проверки */
  display: flex;
  justify-content: flex-end;
}

.login {
  margin-left: 20px;
}`;
const code8 = `f<div class='header-container'>
<div class='header'>
  <div class='subscribe'>Subscribe &#9662;</div>
  <div class='logo'><img src='images/awesome-logo.svg'/></div>
  <div class='social'><img src='images/social-icons.svg'/></div>
</div>
</div>`;
const code9 = `.header-container {
  color: #5995DA;
  background-color: #D6E9FE;
  display: flex;
  justify-content: center;
}

.header {
  width: 900px;
  height: 300px;
  display: flex;
  justify-content: space-between;
}
`;
const code10 = `
.header {
  /* ... */
  align-items: center;  /* Добавьте это */
}
`;


class CourseOneScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, theme: '', };
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
      title = "Настройки flex";
         break;
      case 2:
          title = "Первый взгляд на Flexbox"; 
         break;
      case 3:
        title = "Flex-контейнеры";
        break;
      case 4:
        title = "Свойство justify-content";
        break;
      case 5:
        title = "Распределение нескольких элементов Flex";
        break;
       case 6:
        title = "Группировка flex элементов";
        break;
      case 7:
        title = "Вертикальное выравнивание flex";
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
  dark.colors.color : light.colors.color}]}>Настройки flex</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Весь курс мы будем делать простой проект, который будет использовать все важные свойства flexbox. 
В итоге мы получим нечто похожее на это:
  </Text>
  </View>

  <Image
         source={require('../../../assets/img/flexbox_project_rapprogtrain.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />

   <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Чтобы начать работу с flexbox нам нужен создать простой HTML файл, который не содержит ничего, кроме строки меню. Создай проект в своем текстовом редакторе с названием flexbox Затем создайте flexbox.html и добавьте следующую разметку:
</Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code}
   language="html"
  />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Далее нам нужно создать файл со всеми стилями: styles.css. Кода будет не много. Просто синяя полоса меню во всю ширину с белой рамкой. 
  Обратите внимание, что для центрирования меню мы будем использовать флексбокс.  </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code2}
   language="css"
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
  dark.colors.color : light.colors.color}]}>Первый взгляд на Flexbox
  </Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Flexbox использует два типа группировок, которые мы никогда раньше не видели: 
"flex-контейнеры“ и ”flex-элементы". Задача flex-контейнеров состоит в том, 
чтобы сгруппировать кучу flex элементов вместе и определить, как они расположены.
  </Text>
  </View>

  <Image
         source={require('../../../assets/img/flex-container-and-flex-items-6234bb.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Каждый HTML-элемент, который является прямым дочерним элементом flex-контейнера, является "элементом". Flex-элементами можно манипулировать по отдельности, но по большей части их расположение зависит от контейнера. Главная цель 
 flex-элементов - сообщить своему контейнеру, сколько предметов ему необходимо расположить.
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Во flexbox, вы выравниваете несколько flex элементов внутри контейнера, и, в свою очередь, эти элементы могут служить flex-контейнерами для своих собственных элементов.
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
  dark.colors.color : light.colors.color}]}>Flex-контейнеры</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Первым шагом в использовании flexbox является превращение одного из наших HTML-элементов 
в flex-контейнер. Мы делаем это с помощью свойства display. Давая ему значение flex, 
мы говорим браузеру, что все элементы должны отображаться с помощью flexbox.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Добавьте следующую строку к нешему .menu-container, чтобы превратить его в flex-контейнер:
 </Text>
 </View>

  <TextCourseTitle
  codeText={this.state.code3}
    language="css"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Теперь мы можем использовать flexbox, так как display: flex дало понять браузеру, 
что мы собираемся использовать flexbox для расположения элементов.
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

if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство justify-content
  </Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
После того как мы получили flex-контейнер, наша следующая задача будет определить горизонтальное выравнивание элементов. Именно для этого и существует свойство justify-content. 
Мы можем использовать это свойство, чтобы центрировать наш элемент .menu, вот так:
            </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Добавьте следующую строку к нашему .menu-container, чтобы превратить его во flex-контейнер:
            </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code4}
    language="css"
   />

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Это имеет тот же эффект, что и добавление margin: 0 auto .menu элементу. Но обратите внимание, как мы это сделали, добавив свойство к родительскому элементу (flex-контейнеру) вместо того, чтобы добавить это элементу, который мы хотели центрировать (flex элемент). Манипулирование элементами через их контейнеры, как мы сделали только что, является главной темой в flexbox, и это немного отличается от того, как мы позиционировали элементы раньше.
</Text>
      </View>

      <Image
         source={require('../../../assets/img/flex-justify-content-alignment-ea129c.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Другие значения для justify-content:
</Text>
      </View>

      <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>center</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>flex-start</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>flex-end</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>space-around</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>space-between</Text>
    </Text>
    </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Попробуйте изменить justify-content на flex-start и flex-end. Это должно выровнять меню к левой и правой староне.
</Text>
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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Распределение нескольких элементов Flex  </Text>

    <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Flexbox начинает показывать свою реальную силу, когда дела касается выравниванием нескольких элементов. 
Свойство justify-content позволяет равномерно распределять элементы внутри контейнера.
        </Text>
        </View>

        <Image
         source={require('../../../assets/img/flex-justify-content-distribution-b0ee9c.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />

<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Измените элемент .menu на следующее:
    </Text>
    </View>

  <TextCourseTitle
  codeText={this.state.code5}
    language="css"
   />

<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Это превращает элемент .menu во вложенный flex-контейнер, и значение space-around распределяет 
все элементы по всей ширине. Вы должны увидеть что-то подобное:
    </Text>
    </View>

<Image
         source={require('../../../assets/img/menu-bar-flex-space-around-e4b5a5.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />

<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
flex-контейнер автоматически распределяет дополнительное горизонтальное пространство 
по обе стороны от каждого элемента. Значени space-between похожее, но оно добавляет пространство только между элементами. Это то, что мы на самом деле для нашей странички, так что нам надо поменять значени space-around на space-between.
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
  dark.colors.color : light.colors.color}]}>Группировка flex элементов</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Flex-контейнеры умеют позиционировать элементы только на один уровень глубины (т.е. их дочерние элементы). Из-за чего нужно использовать 
      еще один дополнительный div, чтобы обернуть все элементы.
      </Text>
      </View>


<Image
         source={require('../../../assets/img/grouping-flex-items-1bb642.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />


      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Например, предположим, что вы хотите, чтобы ссылки "Зарегистрироваться" и "Войти" были в правой части страницы, как на скриншоте. 
Все, что нам нужно сделать, это поместить их в другой div:
        </Text>
        </View>

        <TextCourseTitle
  codeText={this.state.code6}
    language="html"
   />

        <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Вместо того, чтобы у .menu было 3 элемента, есть только два (.date и .links). Так как мы используем значение space-betwenn, 
наши 2 элемента будут привязаны к левой и правой стороне страницы.
        </Text>
        </View>

        <Image
         source={require('../../../assets/img/menu-bar-grouped-items-1-31c157.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />

        <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Теперь нам нужно выровнить наш элемент .links. Для этого добавьте этот код в style.css:
</Text>
        </View>

        <TextCourseTitle
  codeText={this.state.code7}
    language="html"
   />

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Вот, что у нас получиться:
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
  dark.colors.color : light.colors.color}]}>Вертикальное выравнивание flex  </Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      До сих пор мы выравнивали элементы по горизонтали, но flex-контейнеры могут 
      выравнивать элементы и по вертикали.
      </Text>
      </View>

      <Image
         source={require('../../../assets/img/grouping-flex-items-1bb642.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />
        
      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Чтобы понять это, нам нужно добавить шапку под нашим меню. 
      Добавьте следующую разметку в flexbox.html после элемента .menu-container:
       </Text>
        </View>

        <TextCourseTitle
  codeText={this.state.code8}
    language="html"
   />

        <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Затем добавьте этот код, чтобы выровнять нашу шапку:
        </Text>
        </View>

             <TextCourseTitle
             codeText={this.state.code9}
               language="css"
              />

                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Так как .header имеет ярко выраженную высоту, элементы могут располагаться внутри него вертикально.
</Text>
                   </View>

                   <Image
         source={require('../../../assets/img/header-align-items-c53758.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
       />
                   
     
<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Для выравнивания flex-контейреа по вертикали нужно добавить свойства align-items:

</Text>
                   </View>
                   
                   <TextCourseTitle
                codeText={this.state.code10}
                  language="css"
                 />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Все значения у этого свойства:
</Text>
                   </View>

               
      <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>center</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>flex-start</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>flex-end</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>stretch</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>baseline
</Text>
    </Text>
    </View>

    <Image
         source={require('../../../assets/img/flex-align-items-26abfd.png')}
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
      CourseOneScreen: {
        screen: CourseOneScreen,
      },
    },
    {
      initialRouteName: 'CourseOneScreen',
    }
  );
