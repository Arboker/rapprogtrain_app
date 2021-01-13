import React from 'react';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import TestComponent from '../components/TestComponent'
import { HeaderBackButton } from 'react-navigation-stack';

class ReactBasic extends React.Component {
  static navigationOptions = ({ navigation }) => {

    return {
      title: "Легкий тест по React",
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
  constructor(props) {
    super(props);
    
    this.state = {
         questionData: [{
           prompt: "Как получить доступ к функции fetch() из элемента h1 в JSX?", 
           answers: ['<h1>{fetch()}></h1>	',"<h1><span>$</span>{fetch()}></h1>","<h1>{fetch}></h1>",
          '<h1><span>$</span>{fetch}></h1> '],
           correct: 0,
           clicked: null
        }, 
         {
           prompt: 
           "Безопасен ли JSX для типов?",
           answers: ["Да","Нет"],
           correct: 0,
           clicked: null
         },
         {
          prompt: 
          "Для чего нужен React?",
          answers: ['Для управления базой данных','Для описания внешнего вида документа',
          'Для сторительства пользовательского интерфейса'],
          correct: 2,
          clicked: null
         },
         {
          prompt: 'Какой метод в компоненте React следует переопределить, чтобы остановить обновление компонента?',
          answers: ['willComponentUpdate','shouldComponentUpdate','componentDidUpdate','componentDidMount'],
          correct: 3,
          clicked: null
         },
         {
          prompt: 
          "Что используется для передачи данных компоненту извне?",
          answers: ["setState","PropTypes","props"],
          correct: 2,
          clicked: null
         },
         {
          prompt: 
          "Какой метод в React Component вызывается после первого визуализации компонента?",
          answers: ["componentDidUpdate","componentDidMount","componentMounted","componentUpdated"],
          correct: 1,
          clicked: null
         },
         {
          prompt: 
          'Что из следующего является правильным синтаксисом для обработчика события нажатия кнопки, foo?',
          answers: ['<button onclick={this.foo()}>','<button onclick={this.foo}>','&lt;button onClick={this.foo()}>',
        '<button onClick={this.foo}>'],
          correct: 3,
          clicked: null
         },
         {
          prompt: "Что происходит, когда вы вызываете setState() внутри метода render()?",
          answers: ['На экране появляется повторяющийся вывод','Ошибка переполнения стека',
          'Ошибка повторяющегося ключа','Ничего не происходит.'],
          correct: 1,
          clicked: null
         },
         {
          prompt: "Как написать встроенный стиль, указав размер шрифта: 12 пикселей и цвет: красный; в JSX",
          answers: ["style={{font-size:12,color:'red'}}","style={{fontSize:'12px',color:'red'}}", 
          "style={fontSize:'12px',color:'red'}", "style={{font-size:12px,color:'red'}}"],
          correct: 1,
          clicked: null
         },
         {
          prompt: "Что происходит при выполнении следующего метода render()?",
          blockAnswer: 
          "render() { \n let langs = ['Ruby', 'JS', 'PHP']; \n   return ( \n     <div>\n      {lang.map(it => <p>{it}</p>)}\n     </div>\n)} ",
          answers: ['Отображает список языков в массиве','Ошибка. Невозможно использовать прямой код JavaScript в JSX',
        'Ничего не происходит','Ошибка. Должен быть заменен на for..loop для правильного вывода'],
          correct: 0,
          clicked: null
         }
          ], 
      progress: 0,
      score: 0,
      theme: ''
       }
       this.checkAnswer = this.checkAnswer.bind(this);
      this.resetQuiz = this.resetQuiz.bind(this);
      this.checkButton = this.checkButton.bind(this);
  }

  async componentDidMount() {
      
    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
    })
   }
  checkAnswer(index) {

    var { questionData } = this.state;
      questionData.forEach((item, k) => {
        item.clicked = index;
      });
      this.setState({questionData});

    }
    checkButton() {
      const clicked = this.state.questionData[this.state.progress].clicked;
      var correct = this.state.questionData[this.state.progress].correct;
      var newScore = 0, newProgress = 0;
      if (correct === clicked) {
        newScore = this.state.score + 1;
        this.setState({score: newScore});
        newProgress = this.state.progress + 1;
        this.setState({progress: newProgress});
         var { questionData } = this.state;
      questionData.forEach((item, k) => {
        item.clicked = null;
      });
      this.setState({questionData});
      } 
      else {
        newProgress = this.state.progress + 1;
        this.setState({progress: newProgress});
        var { questionData } = this.state;
        questionData.forEach((item, k) => {
          item.clicked = null;
        });
        this.setState({questionData});
      }
    }
  resetQuiz() {
    this.setState({score: 0, progress: 0});
  }
  
    render() {
        return (
           <TestComponent 
           questionData={this.state.questionData}
           progress={this.state.progress}
           score={this.state.score}
           checkAnswer={this.checkAnswer}
           resetQuiz={this.resetQuiz}
           checkButton={this.checkButton}
           theme={this.state.theme}
           />
        )
    }
}

export default ReactBasic;