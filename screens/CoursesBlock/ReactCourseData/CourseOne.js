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

const code = `<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>  
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>  `;
const code2 = `npx create-react-app app  
cd app
npm start`;
const code3 = `$(document).ready(function() {
  $("#text").text("Привет мир!"); 
 });`;
const code4 = `<div id="root"></div>`;
const code5 = `ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);>`;
const code6 = `const element = <h1>Hello, world!</h1>;`;
const code7 = `const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;`;
const code8 = `function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);`;
const code9 = ` const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);`;
const code10 = `const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);`;
const code11 = `<div id="root"></div>`;
const code12 = `const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));`;
 const code13 = `function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);`;
const code14 = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`;
const code15 = `class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`;
const code16 = `const element = <div />;`;
const code17 = `const element = <Welcome name="Sara" />;  `;
const code18 = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;`;
const code19 = `function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
    </div>
  );
}
`;
const code20 = `function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

setInterval(tick, 1000);`;
const code21 = `function Clock(props) {
  return (
    <div>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);`;
const code22 = `class Clock extends React.Component {
  render() {
    return (
      <div>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`;
const code23 = `class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`;
const code24 = `componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
}`;
const code25 = `class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`;
const code26 = `<button onclick="activateLasers()">
Activate Lasers
</button> `;
const code27 = `<button onClick={activateLasers}>
Activate Lasers
</button>`;
const code28 = `<a href="#" onclick="console.log('The link was clicked.'); return false">
Click me
</a>`;
const code29 = `function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}`;
const code30 = `class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Эта привязка необходима, чтобы заставить 'this' работать в обратном вызове
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ВКЛ' : 'ВЫКЛ'}
      </button>
    );
  }
}`;
const code31 = `class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}`;
const code32 = `handleChange(event) {
  this.setState({value: event.target.value.toUpperCase()});
}`;
const code33 = `class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <textarea value={this.state.value} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}`;
const code34 = ` <select>
<option value="grapefruit">Grapefruit</option>
<option selected value="coconut">Coconut</option>
</select>`;
const code35 = `class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <select value={this.state.value}>
            <option value="grapefruit">Grapefruit</option>
            <option value="coconut">Coconut</option>
          </select>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}`;

class CourseOneScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14,
      code15, code16, code17, code18, code19, code20, code21, code22, code23, code24, code25, code26, code27, code28, 
      code29, code30, code31, code32, code33, code34, code35, theme: '', };
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
      title = "Начало";
         break;
      case 2:
          title = "Подключаем React"; 
         break;
      case 3:
        title = "Создаем React приложение";
        break;
      case 4:
        title = "Hello World";
        break;
      case 5:
        title = "Введение в JSX";
        break;
       case 6:
        title = "Элементы рендеринга";
        break;
      case 7:
        title = "Компоненты и реквизиты";
        break;
      case 8:
        title = "Состояние и жизненный цикл";
        break;
      case 9:
        title = "Обработка событий";
        break;
      case 10:
        title = "Формы";
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
  dark.colors.color : light.colors.color}]}>Что такое React?</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  React - это фреймворк JavaScript для создания пользовательских интерфейсов. Он был разработан инженерами в Facebook.
  </Text>
  </View>

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Почему React?</Text>
   <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Вот лишь несколько причин, по которым разработчики предпочитают программировать с помощью React:
  </Text>
  </View>

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>React очень быстрый. Приложения, созданные в React,
  могут обрабатывать сложные обновления и при этом быстро реагировать.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>React является гибким. В больших программах, которые отображают много изменяющихся данных, 
React работает лучше всего.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>React популярен. Хотя эта причина, по общему признанию, имеет мало общего с качеством React, истина в том, 
  что понимание React сделает вас более работоспособным.</Text>
 </View>

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Если вы еще незнакомы или плохо знакому с JavaScript, то настоятельно рекомендую вам пройти курс JavaScript в нашем приложении.
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


if (id == 2) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Качаем React</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Чтобы добавить reaact, вы можете использовать свой собственный веб-сайт или создать пустой HTML-файл для практики.
   Там не будет никаких сложных инструментов или требований к установке - чтобы завершить этот раздел,
   вам нужно только подключение к Интернету, и минута вашего времени
  </Text>
  </View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Подключаем React через CDN</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  React можно просто подключить через cdn:
    </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code}
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
  dark.colors.color : light.colors.color}]}>Создаем React приложение</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Create React App - лучший способ начать создание нового одностраничного приложения в React. 
  Он настраивает вашу среду разработки так, чтобы вы могли использовать новейшие функции JavaScript, 
  предоставляет приятные возможности для разработчиков и оптимизирует ваше приложение для работы. 
  Вам нужно иметь Node >= 6 и npm >= 5.2 на вашей машине. Чтобы создать проект, запустите:
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code2}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Вот и все, ваше react приложение готово к написанию кода, что будет в следующий части.
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
  dark.colors.color : light.colors.color}]}>Hello World</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Сейчас, мы с вами на экран выведим "Hello World":
            </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code4}
    language="html"
   />

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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Введение в JSX</Text>

    <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        JSX является синтаксическим расширением JavaScript. Его используют, 
        чтобы описать, как должен выглядеть пользовательский интерфейс. Пример:
        </Text>
        </View>

  <TextCourseTitle
  codeText={this.state.code6}
    language="html"
   />


<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Встраивание выражений в JSX</Text>

<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    В приведенном ниже примере мы объявляем переменную с именем name и затем используем ее внутри JSX, 
    заключая ее в фигурные скобки:
    </Text>
    </View>

             <TextCourseTitle
             codeText={this.state.code7}
               language="html"
              />

<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Вы можете поместить любое допустимое выражение JavaScript в фигурные скобки в JSX.
     В приведенном ниже примере мы встраиваем результат вызова функции JavaScript.
    </Text>
    </View>


  <TextCourseTitle
  codeText={this.state.code8}
    language="html"
   />


<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>JSX объекты</Text>

<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Babel компилирует JSX до вызовов React.createElement().
    </Text>
    </View>

    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Эти два примера идентичны:
    </Text>
    </View>

             <TextCourseTitle
             codeText={this.state.code9}
               language="html"
              />

               <TextCourseTitle
             codeText={this.state.code10}
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


if (id == 6) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Элементы рендеринга</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Допустим, в вашем HTML-файле есть:
      </Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code11}
               language="html"
              />

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Мы называем это «корневым» узлом DOM, потому что все внутренние элементы будет управляться с помощью React DOM.
        </Text>
        </View>

        <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Приложения, созданные с использованием только React, обычно имеют один корневой узел DOM.
         Если вы интегрируете React в существующее приложение, у вас может быть столько изолированных корневых DOM-узлов, 
         сколько вам нужно.
        </Text>
        </View>

        <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Чтобы отобразить элемент React в корневой узел DOM, передайте оба метода ReactDOM.render():
        </Text>
        </View>

             <TextCourseTitle
             codeText={this.state.code12}
               language="html"
              />

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Элементы рендеринга</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Элементы React являются неизменяемыми. Создав элемент, вы не сможете изменить его дочерние элементы или атрибуты. 
      Элемент похож на отдельный кадр в фильме: он представляет пользовательский интерфейс в определенный момент времени.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Насколько нам известно, единственный способ обновить пользовательский интерфейс - это создать новый элемент и 
      передать его в ReactDOM.render().
      </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Рассмотрим пример тикающих часов:
      </Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code13}
               language="html"
              />

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Этот код вызывает ReactDOM.render() каждую секунду из обратного вызова setInterval().
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
  dark.colors.color : light.colors.color}]}>Функции и компоненты классов</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Самый простой способ определить компонент - написать функцию JavaScript:
      </Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code14}
               language="html"
              />

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Эта функция является допустимым компонентом React, поскольку она принимает один аргумент объекта
         «props» (который обозначает свойства) с данными и возвращает элемент React. 
         Мы называем такие компоненты «функциональными компонентами», потому что они буквально являются функциями JavaScript.
        </Text>
        </View>

        <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Вы также можете использовать класс ES6 для определения компонента:
        </Text>
        </View>

             <TextCourseTitle
             codeText={this.state.code15}
               language="html"
              />

                 <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Рендеринг компонента</Text>
                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Ранее мы встречали только элементы React, представляющие теги DOM:
                   </Text>
                   </View>
                   
                   <TextCourseTitle
                codeText={this.state.code16}
                  language="html"
                 />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Однако элементы также могут представлять определенные пользователем компоненты:
                   </Text>
                   </View>
                   
                   <TextCourseTitle
                codeText={this.state.code17}
                  language="html"
                 />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Когда React видит элемент, представляющий определенный пользователем компонент, 
                   он передает атрибуты JSX этому компоненту как один объект. Мы называем этот объект «реквизит».
                   </Text>
                   </View>

                   <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Например, этот код отображает «Hello, Sara» на странице:
                   </Text>
                   </View>
                   
                   <TextCourseTitle
                codeText={this.state.code18}
                  language="html"
                 />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Давайте посмторим, что происходит в этом примере:
                   </Text>
                   </View>

                   <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Мы вызываем ReactDOM.render () с элементом &lt;Welcome name = "Sara" />.
React вызывает компонент Welcome с name: 'Sara' в качестве реквизита.
Наш компонент Welcome возвращает в результате элемент &lt;h1> Hello, Sara &lt;/ h1>.
React DOM эффективно обновляет DOM для соответствия &lt;h1> Hello, Sara &lt;/ h1>.
                   </Text>
                   </View>

                   <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Однако элементы также могут представлять определенные пользователем компоненты:
                   </Text>
                   </View>

                   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Компоненты</Text>
                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Компоненты могут ссылаться на другие компоненты в своем выводе. Это позволяет нам использовать
                    одну и ту же абстракцию компонента для любого уровня детализации. Кнопка, форма, диалог.
                   </Text>
                   </View>

                   <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Например, мы можем создать компонент приложения, который многократно отображает приветствие:
                   </Text>
                   </View>
                   
                   <TextCourseTitle
                codeText={this.state.code19}
                  language="html"
                 />


<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Извлечение компонентов</Text>
                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Не бойтесь разбивать компоненты на более мелкие компоненты.
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

if (id == 8) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Состояние и жизненный цикл</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Рассмотрим пример тикающих часов из одного из предыдущих уроков.
       В элементах рендеринга мы изучили только один способ обновления пользовательского интерфейса. 
       Мы вызываем ReactDOM.render(), чтобы изменить визуализированный вывод:
      </Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code20}
               language="html"
              />

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        В этом уроке мы узнаем, как сделать компонент Clock действительно повторно используемым. 
        Clock будет обновляться каждую секунду.
        </Text>
        </View>


      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Мы можем начать с того, как будут выглядят часы:
        </Text>
        </View>

             <TextCourseTitle
             codeText={this.state.code21}
               language="html"
              />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Преобразование функции в класс</Text>

                    <View style={{paddingTop:10}}>
                      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                      Вы также можете преобразовать компонент функции, в класс:
                        </Text>
                      </View>

                      <View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Создайте класс ES6 с тем же именем, который расширяет React.Component.
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Добавьте к нему один пустой метод с именем render().
</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Переместите тело функции в метод render().
  </Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Переместите тело функции в метод render().
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Удалите оставшееся пустое объявление функции.
</Text>
 </View>

 <TextCourseTitle
             codeText={this.state.code22}
               language="html"
              />

<View style={{paddingTop:10}}>
                      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                      Часы теперь определены как класс, а не функция.
                        </Text>
                      </View>

                      <View style={{paddingTop:10}}>
                      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                      Метод рендеринга будет вызываться каждый раз, когда происходит обновление, 
                      но пока мы рендерим &lt;Clock /> в тот же узел DOM, будет использоваться только один экземпляр класса Clock.
                       Это позволяет нам использовать дополнительные функции, такие как локальное состояние и методы жизненного цикла.
                        </Text>
                      </View>

                      <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Добавление локального состояния в класс</Text>

                    <View style={{paddingTop:10}}>
                      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                      Мы переместим дату из реквизита в переменную state в три этапа:
                        </Text>
                      </View>

                      <View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1) Замените this.props.date на this.state.date в методе render()
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2) Добавьте конструктор класса, который назначает начальный this.state
</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>3) Удалите элемент даты из &lt;Clock />
  </Text>
 </View>

 <View style={{paddingTop:10}}>
                      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                      Результат:
                        </Text>
                      </View>

                      <TextCourseTitle
             codeText={this.state.code23}
               language="html"
              />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Добавление методов жизненного цикла в класс</Text>

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В приложениях со многими компонентами очень важно высвободить ресурсы, занятые компонентами, когда они уничтожены.
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Мы хотим установить таймер всякий раз, когда Clock отображается в DOM в первый раз. Это называется «монтаж» в React.
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Мы также хотим очистить этот таймер при удалении DOM, созданного Clock. Это называется «размонтирование» в React.
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Мы можем объявить специальные методы в классе компонента для запуска некоторого кода, когда компонент монтируется и демонтируется.
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Эти методы называются «методами жизненного цикла».
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Метод componentDidMount() запускается после визуализации вывода компонента в DOM. Это хорошее место для установки таймера:
    </Text>
  </View>

  <TextCourseTitle
             codeText={this.state.code24}
               language="html"
              />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Обратите внимание, как мы сохраняем ID таймера прямо на this.
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Хотя this.props настраивается самим React и this.state имеет особое значение, 
  вы можете добавлять дополнительные поля в класс вручную, если вам нужно сохранить что-то,
   что не участвует в потоке данных (например, идентификатор таймера).
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Мы разобьем таймер в методе жизненного цикла componentWillUnmount():
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Хотя this.props настраивается самим React и this.state имеет особое значение, 
  вы можете добавлять дополнительные поля в класс вручную, если вам нужно сохранить что-то, 
  что не участвует в потоке данных (например, идентификатор таймера).
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Мы разобьем таймер в методе жизненного цикла componentWillUnmount():
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Наконец, мы реализуем метод tick(), который компонент Clock будет запускать каждую секунду.
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Он будет использовать this.setState() для планирования обновлений локального состояния компонента:
    </Text>
  </View>


  <TextCourseTitle
             codeText={this.state.code25}
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

if (id == 9) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Обработка событий</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Обработка событий с элементами React очень похожа на обработку событий в элементах DOM.
  </Text>
  </View>

   <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Например, HTML:
  </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code26}
   language="html"
  />

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  немного отличается в React:
  </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code27}
   language="html"
  />

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Другое отличие состоит в том, что вы не можете вернуть false, чтобы предотвратить поведение по умолчанию в React.
   Вы должны вызывать warnDefault явно. Например, в обычном HTML, 
   чтобы предотвратить поведение ссылок при открытии новой страницы по умолчанию, вы можете написать:
  </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code28}
   language="html"
  />

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В React это может быть:
  </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code29}
   language="html"
  />

 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Здесь e - синтетическое событие. React определяет эти синтетические события в соответствии со спецификацией W3C, 
  поэтому вам не нужно беспокоиться о кросс-браузерной совместимости.
  </Text>
  </View>


 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  При использовании React вам обычно не нужно вызывать addEventListener для добавления прослушивателей к
   элементу DOM после его создания. Вместо этого просто предоставьте слушателя, когда элемент изначально отображается.
  </Text>
  </View>


 <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Когда вы определяете компонент с использованием класса ES6, общий шаблон для обработчика событий 
  должен быть методом класса. Например, этот компонент Toggle отображает кнопку, которая позволяет 
  пользователю переключаться между состояниями «ВКЛ» и «ВЫКЛ»:
  </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code30}
   language="html"
  />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Вы должны быть осторожны со значением this в обратных вызовах JSX. В JavaScript методы класса не 
  связаны по умолчанию. Если вы забудете связать this.handleClick и 
  передать его onClick, это будет неопределенным при вызове функции.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Это не специфичное для React поведение; это часть того, как функции работают в JavaScript. 
  Обычно, если вы ссылаетесь на метод без	() после него, такой как onClick = this.handleClick, вы должны связать этот метод.

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


if (id == 10) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={s[tyles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Контролируемые компоненты</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В HTML элементы формы, такие как &lt;input>, &lt;textarea> и &lt;select>, обычно поддерживают свое собственное состояние и
     обновляют его на основе пользовательского ввода. В React изменяемое состояние обычно сохраняется в
      свойстве состояния компонентов и обновляется только с помощью setState().

  </Text>
  </View>

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Мы можем объединить их, сделав состояние React «единственным источником истины».
   Затем компонент React, который отображает форму, также управляет тем, что происходит в 
   этой форме при последующем вводе пользователем. Элемент формы ввода, значение которого контролируется 
   React таким образом, называется «контролируемым компонентом».
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Например, если мы хотим, чтобы предыдущий пример регистрировал имя при отправке,
   мы можем написать форму в качестве контролируемого компонента:
    </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code31}
   language="html"
  />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Поскольку атрибут value установлен в нашем элементе формы, отображаемое значение всегда будет this.state.value, 
  что делает состояние React источником истины. Поскольку handleChange запускается при каждом
   нажатии клавиши для обновления состояния React,
   отображаемое значение будет обновляться по мере ввода пользователем данных.
    </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  С контролируемым компонентом каждая мутация состояния будет иметь связанную функцию-обработчик.
   Это позволяет легко изменять или проверять пользовательский ввод. Например, если мы хотим обеспечить,
   чтобы имена записывались всеми заглавными буквами, мы могли бы написать handleChange как:
    </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code32}
   language="html"
  />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Тег textarea</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В React &lt;textarea> использует вместо этого атрибут значения. Таким образом, форма, использующая &lt;textarea>,
   может быть написана очень похоже на форму, которая использует однострочный ввод:
  </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code33}
   language="html"
  />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Обратите внимание, что this.state.value инициализируется в конструкторе,
   поэтому текстовая область начинается с некоторого текста в нем.
  </Text>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Тег textarea</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В HTML &lt;select> создает раскрывающийся список. Например, этот HTML создает раскрывающийся список вариантов:
  </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code34}
   language="html"
  />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Обратите внимание, что опция Coconut изначально выбрана из-за выбранного атрибута. 
  Реагируйте, вместо того, чтобы использовать этот выбранный атрибут, использует атрибут значения в 
  корневом теге выбора. Это более удобно в контролируемом компоненте, потому что вам нужно обновить 
  его только в одном месте. Например:
  </Text>
  </View>

  <TextCourseTitle
 codeText={this.state.code35}
   language="html"
  />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  В целом, это делает так, что &lt;input type = "text">, &lt;textarea> и &lt;select> работают очень схожим образом -
     все они принимают атрибут value, который вы можете использовать для реализации управляемого компонента.
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
      CourseOneScreen: {
        screen: CourseOneScreen,
      },
    },
    {
      initialRouteName: 'CourseOneScreen',
    }
  );
