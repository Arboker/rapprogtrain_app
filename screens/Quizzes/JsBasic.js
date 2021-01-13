import React from 'react';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import TestComponent from '../components/TestComponent'
import { HeaderBackButton } from 'react-navigation-stack';
class JsBasic extends React.Component {
  static navigationOptions = ({ navigation }) => {

    return {
      title: "Легкий тест по JavaScript",
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
           prompt: "Какой тег используется для вставки JavaScript в HTML-страницу?", 
           answers: ['<script=’java’>',"<script>","<javascript>"],
           correct: 1,
           clicked: null
        }, 
         {
           prompt: 
           "JavaScript игнорирует лишние пробелы",
           answers: ["Да","Нет"],
           correct: 1,
           clicked: null
         },
         {
          prompt: 
          "Что из этого правильный вариант написанния массивов JavaScript?",
          answers: ['var txt = new Array(1:"arr",2:"kim",3:"jim")','var txt = new Array:1=(" arr ")2=("kim")3=("jim")',
          'var txt = new Array("arr","kim","jim")'],
          correct: 2,
          clicked: null
         },
         {
          prompt: 'Что из этого выведит "Hello World" на странице?',
          answers: ['System.out.println(“Hello World”)','print(“Hello World”)','document.write(“Hello World”)'],
          correct: 2,
          clicked: null
         },
         {
          prompt: 
          "Что из следующего используется для захвата всех событий щелчка в окне?",
          answers: ["window.captureEvents(Event.CLICK);","window.routeEvents(Event.CLICK );","window.handleEvents(Event.CLICK);"],
          correct: 0,
          clicked: null
         },
         {
          prompt: 
          "Javascript это объектно-ориентированный язык?",
          answers: ["Да","Нет"],
          correct: 0,
          clicked: null
         },
         {
          prompt: 
          'Что из перечисленного не является допустимым именем переменной JavaScript?',
          answers: ['2java','_java_and_java_names','javascirpt'],
          correct: 0,
          clicked: null
         },
         {
          prompt: "Какой из приведенных ниже способов неверен для создания даты?",
          answers: ['new Date(dateString)','new Date()','new Date(seconds)',
          'new Date(year, month, day, hours, minutes, seconds, milliseconds)'],
          correct: 2,
          clicked: null
         },
         {
          prompt: "Почему Java и JavaScript имеют одинаковые имена?",
          answers: ['JavaScript - это урезанная версия Java','Синтаксис JavaScript свободно основан на синтаксисе Java', 
          'Они оба поддерживают объектно-ориентированное программирование', 'Ни один из вышеперечисленных'],
          correct: 1,
          clicked: null
         },
         {
          prompt: "JavaScript поддерживает все логические операторы",
          answers: ['Да','Нет'],
          correct: 1,
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



export default JsBasic;