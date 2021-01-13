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

 const code = `<span class="txt">Привет мир!</span>
 
 <style>
  .txt {
     color: orange;
     font-size: 1.2em;
  }
 </style>
 
  <script>
    $(function() {
      $(".txt").css("color", "red");
      alert($(".txt").css("color"));
    });
  </script>`;
  const code2 = `<span class="txt">Привет мир!</span>
 
  <script>
    $(function() {
      $(".txt").css({"color": "red", "font-size": "1.2em"});
   });
  </script>`;
  const code3 = `<span id="example">Кликни</span>
  <script>
    $(function() {
      $("#example").click(function() {
       $("#example").html("Привет мир!");
      })
   });
  </script>`;
  const code4 = `<span id="example">Кликни</span>
  <script>
    $(function() {
      $("span").on("click", function() {
      $("span").html("Привет мир!");
      });
   });
  </script>`;
  const code5 = `<span id="example">Кликни</span>
  <script>
    $(function() {
      $("#example").click(function() {
        alert("Привет!");
   });
      $("#example").trigger("click");
  });
  </script>`;
  const code6 = `<button id="btn">Кликни</button>
  <span id="example">Привет, ты на сайте Rapprogtrain</span>
  <script>
    $(function() {
      $("#btn").click(function() {
        $("#example").toggle();
      })
  });
  </script>`;
  const code7 = `<div class="text color"></div>
 
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
  const code8 = `<button id="btn">Кликни</button>
  <span id="example">Привет, ты на сайте Rapprogtrain</span>
  <script>
    $(function() {
      $("#btn").click(function() {
        $("#example").slideToggle();
      })
  });
  </script>`;
  const code9 = `<span id="btn">Кликни</span>
  <style>
    #btn {
   background-color: red;
   padding:10px;
  }
  </style>
  <script>
    $(function() {
     $("#btn").click(function() {
      $("#btn").animate({padding: "3%"});
    });
  });
  </script>`;
  const code10 = `<span id="btn">Кликни</span>
  <style>
    #btn {
   background-color: red;
   padding:10px;
   }
  </style>
  <script>
    $(function() {
     $("#btn").click(function() {
      $("#btn").animate({width: "5%", height: "50px"}, 1000);
    });
  });
  </script>
 `;
 const code11 = `<span>Привет мир!</span>
 
 <style>
   .text {
     color: red;
     font-size: 1.2em;
   }
 </style>
 
  <script>
    $(function() {
    $("span").addClass("text");
    });
  </script>
`;
const code12 = `<div class="text color"></div>
 
<style>
  .text {
     color: black;
 }
  .color {
     color: red;
     font-size: 1.2em;
 }
 </style>

 <script>
   $(function() {
   $("div").removeClass("red");
   });
 </script>
`;
const code13 = `<button id="button">Кликни</button>
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
 </script>
`;

class CourseTwoScreen extends React.Component {
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
      title = "Добавление и удаление классов";
         break;
      case 2:
          title = "Свойства CSS"; 
         break;
      case 3:
        title = "Обработка событий";
        break;
      case 4:
        title = "Объект события";
        break;
      case 5:
        title = "Hide и Show";
        break;
       case 6:
        title = "Анимация";
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
  dark.colors.color : light.colors.color}]}>Метод addClass()</Text>

    <View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 В <Text style={{color:'#db0202'}}>jQuery</Text> есть несколько методов работы с CSS. В этом уроке мы изучим один из методов.
  </Text>
 </View>

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Метод <Text style={{color:'#db0202'}}>addClass()</Text> добавляет класс к выбранному элементу.
  </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code11}
   language="html"
  />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Метод removeClass()</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Метод <Text style={{color:'#db0202'}}>removeClass()</Text> добавляет класс к выбранному элементу.
  </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code12}
   language="html"
  />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Метод toggleClass()</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Метод <Text style={{color:'#db0202'}}>toggleClass()</Text> добавляет или удаляет классы. 
 Если у элемента существует определенный класс, 
 то он будет удален, а если класса нету, то он будет добавлен.
  </Text>
 </View>

 <View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Давайте я вам продемонстрирую действие с методом toggleClass().
  </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code13}
   language="html"
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
  dark.colors.color : light.colors.color}]}>Метод css()</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Метод <Text style={{color:'#db0202'}}>css()</Text> используется для получения и установления значений CSS свойств.
  </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code}
   language="html"
  />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Множество свойств</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Для установки нескольких свойств CSS используется JSON:
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
  dark.colors.color : light.colors.color}]}>Обработка событий</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Обработчик событий - это действие, при котором пользователь выполняет событие, такое как нажатие на элемент,
   движение мышки по элементу и др.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Все эти действия можно делать на JavaScript, но на jQuery это все выглядит проще и короче.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Давайти сделаем событие по клику:
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code3}
    language="html"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Вы также можете использовать <Text style={{color:'#db0202'}}>on("click")</Text> функцию. 
 Метод <Text style={{color:'#db0202'}}>on()</Text> используется для связывании одного обработчика 
 событий с множеством других событий. Также метод <Text style={{color:'#db0202'}}>on()</Text>
  используется для прикрепления событий к выбранному элементу.
 </Text>
 </View>

 <TextCourseTitle
 codeText={this.state.code4}
   language="html"
  />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Метод off()</Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Метод <Text style={{color:'#db0202'}}>off()</Text> убирает событие.
  </Text>
 </View>

 <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>click</Text> - выполняется при щелчке левой кнопкой мыши на элементе.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>dbclick</Text> - выполняется при двойном щелчке по элементу.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>mouseenter</Text> - выполняется когда указатель находится над выбранным элементе.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>mouseleave</Text> - выполняется когда указатель покидает выбранный элемент.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>onmouseover</Text> - выполняется при наведение курсора на элемент.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>keydown</Text> - выполняется при нажатии на клавишу.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>keyup</Text> - выполняетсяпри отпускании клавиши клавиатуры.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>submit</Text> - выполняется, когда форма отправлена.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>change</Text> - выполняется при изменении значения элемента.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>scroll</Text> - выполняется, когда рользователь прокручивает элемент.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>resize</Text> - выполняется при изменении размера окна браузера.
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

if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Объект событий</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Каждый обработчик событий может принять обЪект события, который содержит методы и свойства, связанные с событием:
      </Text>
      </View>

      <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>event.type</Text> - тип события.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>event.pageX, event.pageY</Text> - показывает положение мыши, относительно верхнего левого угла страницы.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>event.which</Text> - кнопка или клавиша, которая была нажата.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>event.data</Text> - любые данные, которые были переданы.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>event.target</Text> - элемент DOM, котрый инициировал событие.  
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>event.result</Text> -  последнее значение, которое было возвращено обработчиком события, если значение не было равно undefined.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>event.preventDefault()</Text> - возвращает событие по умолчанию.
   </Text>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>event.stopPropagation()</Text> - останавливает вызов события к родительским элементам.
   </Text>
   </View>

  <TextCourseTitle
  codeText={this.state.code5}
    language="javascript"
   />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Вызов событий</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>trigger()</Text> используется, когда надо вызвать событие программно.
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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Hide и Show</Text>

    <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        jQuery имеет несколько простых для применения эффектов.
        </Text>
        </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>hide()</Text> скрывает элемент, а метод 
      <Text style={{color:'#db0202'}}>show()</Text> отоброжает элемент.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Методы <Text style={{color:'#db0202'}}>hide/show/toggle</Text> могут принимать скорость воспроизведения анимации. 
      Скорость измеряется в миллисекундах.
      </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code6}
    language="html"
   />

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>attr</Text> также позволяет устанавить новое значение для атрибута.
      </Text>
      </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Fade In/Out</Text>

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>fadeIn()</Text> используется для постепенного появления анимации,
       а метод <Text style={{color:'#db0202'}}>fadeOut()</Text> используется для постепенного исчезновения анимации.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>fadeToggle()</Text> переключается между fadeIn и fadeOut.
      </Text>
      </View>

             <TextCourseTitle
             codeText={this.state.code7}
               language="html"
              />


<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Методы slideUp() и slideDown()</Text>

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Методы <Text style={{color:'#db0202'}}>slideUp() и slideDown()</Text> используется для создания эффекта скольжения.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>slideToggle()</Text> переключается между эффектами скольжения.
      </Text>
      </View>

             <TextCourseTitle
             codeText={this.state.code8}
               language="html"
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


if (id == 6) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Метод animate()</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>animate()</Text> позволяет нам устанавливать анимация к выбранному элементу. 
      Чтобы установить анимацию нам надо определить анимируемые CSS свойства в качестве параметров в формате JSON. 
      Вторым параметром надо установить скорость воспроизведения анимации.
      </Text>
      </View>

             <TextCourseTitle
             codeText={this.state.code9}
               language="html"
              />

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Множество свойств могут быть анимированы в одно время, с помощью разделения их запятыми.
      </Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code10}
               language="html"
              />

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Также можно определить относительное значение свойств с помощью знака += или -=.
      </Text>
      </View>

      <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Методы slideUp() и slideDown()</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Методы <Text style={{color:'#db0202'}}>slideUp() и slideDown()</Text> используется для создания эффекта скольжения.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Метод <Text style={{color:'#db0202'}}>slideToggle()</Text> переключается между эффектами скольжения.
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
      CourseTwoScreen: {
        screen: CourseTwoScreen,
      },
    },
    {
      initialRouteName: 'CourseTwoScreen',
    }
  );
