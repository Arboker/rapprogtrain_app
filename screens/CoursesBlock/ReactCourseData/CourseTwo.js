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

const code = `class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  // Компонент Toolbar должен принимать дополнитеольное свойство "theme"
  // и передавать его в компонент ThemedButton. Это может стать настоящей головной болью
  // если каждая отдельная кнопка в приложении нуждается в значении свойства theme,
  // потому что оно должно быть передано через все компоненты.
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

function ThemedButton(props) {
  return <Button theme={props.theme} />;
}`;
const code2 = `// Контекст позволяет нам передавать значение глубоко в дерево компонентов
// без его явной передачи через каждый компонент.
// Создайте контекст для текущей темы (значение "light" по умолчанию).
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    // Используйте Provider, чтобы передать текущую тему вглубь дерева.
    // Любой компонент может считать её, вне зависимости от того как глубоко она находится.
    // В данном примере, мы передаем "dark" как текущее значение.
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

// Промежуточному компоненту необязательно
// явно передавать тему кому-либо далее.
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton(props) {
  // Используйте Consumer, чтобы считать текущий контекст темы.
  // React будет искать выше ближайший поставщик (Provider) темы и использует его значение.
  // В данном примере текущая тема имеет значение "dark".
  return (
    <ThemeContext.Consumer>
      {theme => <Button {...props} theme={theme} />}
    </ThemeContext.Consumer>
  );
}`;
 const code3 = `const MyContext = React.createContext(defaultValue);   `;
 const code4 = `<MyContext.Provider value={/* some value */}> `;
const code5 = `class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* выполнить побочный эффект при монтировании, используя значение MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* сделать что-то на основе значения MyContext */
  }
}
MyClass.contextType = MyContext;`;
const code6 = `class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }`;
const code7 = `const node = this.myRef.current;`;
const code8 = `function FancyButton(props) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  );
}`;
const code9 = `const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;`;
const code10 = `render() {
  // React устанавливает новый div и отображает в нем детей элемента
  return (
    <div>
      {this.props.children}
    </div>
  );
}`;
const code11 = `render() {
  // React does *not* create a new div. It renders the children into 'domNode'.
  // 'domNode' is any valid DOM node, regardless of its location in the DOM.
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}`;
const code12 = `<html>
<body>
  <div id="app-root"></div>
  <div id="modal-root"></div>
</body>
</html>`;
const code13 = `// Эти два контейнера являются братьями и сестрами в DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Элемент портала вставляется в дерево DOM после
    // дети модулей установленны, означает, что дети
    // будет установлен на отдельном узле DOM. Если ребенок
    // компонент должен быть присоединен к дереву DOM
    // сразу после установки, например, для измерения
    // DOM узел, или использует 'autoFocus' в потомке, добавляем
    // устанавливаем Modal и отображаем потомков только когда Modal
    // вставляется в дерево DOM.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Это будет срабатывать при нажатии кнопки в Child,
    // обновляем состояние родителя, даже если кнопка
    // не является прямым потомком в DOM.
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

function Child() {
  // Событие нажатия на эту кнопку будет всплывать до родителя,
  // потому что не определен атрибут 'onClick'
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);`;
const code14 = `import React from 'react';

function ExampleApplication() {
  return (
    <div>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </div>
  );
}`;
const code15 = `const node = this.myRef.current;`;

class CourseTwoScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14,
      code15, theme: '', };
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
      title = "Контекст";
         break;
      case 2:
          title = "Создание ссылок"; 
         break;
      case 3:
        title = "Переадресация ссылок";
        break;
      case 4:
        title = "Порталы";
        break;
      case 5:
        title = "Строгий режим";
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
  dark.colors.color : light.colors.color}]}>Контекст</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Контекст обеспечивает способ передачи данных через дерево компонентов без 
  необходимости передавать свойства вручную на каждом уровне.
  </Text>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Когда использовать контекст</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Контекст предназначен для совместного использования данных, которые можно считать «глобальными» для дерева
   компонентов React, таких как текущий аутентифицированный пользователь, тема или предпочитаемый язык. Например, 
  в приведенном ниже коде мы вручную пропустили пропеллер «theme» для стилизации компонента Button:
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code}
    language="javascript"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Используя контекст, мы можем избежать передачи свойств через промежуточные элементы:
 </Text>
 </View>

 <TextCourseTitle
  codeText={this.state.code2}
    language="javascript"
   />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>API</Text>
<Text style={s[tyles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>React.createContext</Text>

<TextCourseTitle
  codeText={this.state.code3}
    language="javascript"
   />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  React.createContext создает объект Context. Когда React рендерит компонент, 
  который подписывается на этот объект Context, он будет считывать текущее 
  значение контекста из ближайшего соответствующего провайдера над ним в дереве.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Аргумент defaultValue используется только тогда, когда у компонента нет соответствующего провайдера над ним в дереве. 
  Это может быть полезно для тестирования компонентов в отдельности без их переноса.
  </Text>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Context.Provider</Text>

  <TextCourseTitle
  codeText={this.state.code4}
    language="javascript"
   />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Каждый объект Context поставляется с компонентом Provider React, 
  который позволяет потребляющим компонентам подписываться на изменения контекста.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Принимает свойство value для передачи потребляющим компонентам, которые являются потомками этого провайдера. Один провайдер может быть подключен ко многим потребителям. 
  Поставщики могут быть вложенными, чтобы переопределять значения глубже в дереве.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Все потребители, которые являются потомками провайдера, будут перерисовывать каждый раз, 
  когда изменяется значение провайдера. Распространение от провайдера к его дочерним 
  потребителям не подчиняется методу shouldComponentUpdate, 
  поэтому потребитель обновляется, даже когда компонент-предок выходит из состояния обновления.
  </Text>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Class.contextType</Text>

<TextCourseTitle
codeText={this.state.code5}
  language="javascript"
 />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойству contextType класса может быть назначен объект Context, созданный с помощью React.createContext(). 
  Это позволяет вам использовать ближайшее текущее значение этого типа контекста, используя this.context.
   Вы можете ссылаться на это в любом из методов жизненного цикла, включая функцию рендеринга.
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
  dark.colors.color : light.colors.color}]}>Создание ссылок</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Ссылки создаются с использованием React.createRef () и прикрепляются к элементам React через атрибут ref.
            </Text>
      </View>

  <TextCourseTitle
  codeText={this.state.code6}
    language="html"
   />

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Доступ к ссылкам</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Когда ссылка передается элементу в рендере, ссылка на узел становится доступной в текущем атрибуте ссылки.
            </Text>
      </View>


<TextCourseTitle
  codeText={this.state.code7}
    language="javascript"
   />

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Значение ref отличается в зависимости от типа узла:
            </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Когда атрибут ref используется в элементе HTML, ссылка, созданная в конструкторе с помощью React.createRef(),
       получает базовый элемент DOM в качестве текущего свойства.
            </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Когда атрибут ref используется в пользовательском компоненте класса, объект ref получает 
      подключенный экземпляр компонента в качестве текущего.
            </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Вы не можете использовать атрибут ref в компонентах функций, потому что у них нет экземпляров.
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
  dark.colors.color : light.colors.color}]}>Переадресация ссылок на компоненты DOM</Text>

    <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Рассмотрим компонент FancyButton, который отображает элемент встроенной кнопки DOM:
        </Text>
        </View>

  <TextCourseTitle
  codeText={this.state.code8}
    language="html"
   />


<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Компоненты React скрывают детали своей реализации, в том числе выводимые данные.
     Другие компоненты, использующие FancyButton, обычно не нуждаются в получении ссылки на элемент DOM внутренней кнопки. 
    Это хорошо, потому что не позволяет компонентам слишком полагаться на структуру DOM друг друга.
    </Text>
    </View>

    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Хотя такая инкапсуляция желательна для компонентов уровня приложения, таких как FeedStory или Comment, 
    она может быть неудобной для многократно используемых «листовых» компонентов, таких как FancyButton или MyTextInput.
     Эти компоненты, как правило, используются во всем приложении аналогично обычной кнопке и входу DOM, 
    и доступ к их узлам DOM может быть неизбежен для управления фокусом, выбором или анимацией.
    </Text>
    </View>

    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Переадресация ссылок является опциональной функцией, которая позволяет некоторым компонентам принимать ссылку, 
    которую они получают, и передавать ее дальше (другими словами, «пересылать») ребенку.
    </Text>
    </View>

    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    В приведенном ниже примере FancyButton использует React.forwardRef для получения переданного ему ref, 
    а затем перенаправляет его на кнопку DOM, которую он отображает:
    </Text>
    </View>

             <TextCourseTitle
             codeText={this.state.code9}
               language="html"
              />

<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Таким образом, компоненты, использующие FancyButton, могут получить ссылку на базовый DOM-узел кнопки и получить
     к ней доступ при необходимости, как если бы они использовали кнопку DOM напрямую.
    </Text>
    </View>


<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Вот пошаговое объяснение того, что происходит в приведенном выше примере:
    </Text>
    </View>

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1) Мы создаем ссылку React, вызывая React.createRef и присваивая его переменной ref.
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2) Мы передаем наш ref в &lt;FancyButton ref = ref>, указав его в качестве атрибута JSX.
</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>3) React передает ref в функцию (props, ref) => ... внутри forwardRef в качестве второго аргумента.
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>4) Мы передаем этот аргумент ref до &lt;button ref = ref>, указав его как атрибут JSX.
</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>5) Когда ссылка прикреплена, ref.current будет указывать на узел DOM &lt;button>.
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


if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Использование</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Обычно, когда вы возвращаете элемент из метода рендеринга компонента, он устанавливается в 
      DOM как дочерний элемент ближайшего родительского узла:
      </Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code10}
               language="javascript"
              />

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Однако иногда полезно вставить дочерний элемент в другое место в DOM:
        </Text>
        </View>

        <TextCourseTitle
             codeText={this.state.code11}
               language="javascript"
              />

        <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Типичным вариантом использования порталов является случай, когда родительский 
        компонент имеет переполнение: скрытый стиль или стиль z-index, но вам нужно, чтобы дочерний элемент 
        визуально «вырвался» из своего контейнера. Например, диалоговые окна, карты наведения и подсказки.
        </Text>
        </View>


    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Построение событий через порталы</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Хотя портал может находиться где угодно в дереве DOM, он ведет себя как обычный 
      дочерний элемент React во всех других отношениях. Такие функции, как контекст,
       работают одинаково независимо от того, является ли дочерний портал порталом, 
      поскольку портал все еще существует в дереве React независимо от положения в дереве DOM.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Это включает в себя барботирование событий. Событие, инициируемое внутри портала, 
      будет распространяться на предков в содержащем дереве React,
       даже если эти элементы не являются предками в дереве DOM. Предполагая следующую структуру HTML:
      </Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code12}
               language="html"
              />

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Родительский компонент в #app-root мог бы перехватить неперехваченное всплывающее событие от узла-брата #modal-root.
      </Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code13}
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


if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Строгий режим</Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Вы можете включить строгий режим для любой части вашего приложения. Например:
      </Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code14}
               language="html"
              />

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        В приведенном выше примере строгие проверки режима не будут выполняться для элементов header и footer. 
        Тем не менее, ComponentOne и Component Two, а также все их потомки, будут иметь проверки.
        </Text>
        </View>

             <TextCourseTitle
             codeText={this.state.code15}
               language="html"
              />
                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Значение ref отличается в зависимости от типа узла.
                   </Text>
                   </View>

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Когда атрибут ref используется в элементе HTML, ссылка, созданная в конструкторе с помощью 
                   React.createRef(), получает базовый элемент DOM в качестве текущего свойства.
                   </Text>
                   </View>

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Когда атрибут ref используется в пользовательском компоненте класса, объект
                    ref получает подключенный экземпляр компонента в качестве текущего.
                   </Text>
                   </View>

                   <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Вы не можете использовать атрибут ref в компонентах функций, потому что у них нет экземпляров.
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
