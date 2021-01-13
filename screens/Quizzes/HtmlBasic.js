import React from 'react';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import TestComponent from '../components/TestComponent'
import { HeaderBackButton } from 'react-navigation-stack';

class HtmlBasic extends React.Component {
  static navigationOptions = ({ navigation }) => {

    return {
      title: "Легкий тест по HTML",
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
           prompt: "HTML - это", 
           answers: ['Язык разметки',"Язык программирования","Язык описания внешнего вида"],
           correct: 0,
           clicked: null
        }, 
         {
           prompt: "Сколько тегов в обычном элементе?",
           answers: ["2","1","3"],
           correct: 0,
           clicked: null
         },
         {
          prompt: "Что из это использует пятую версию HTML",
          answers: ['<!DOCTYPE html5>','<!DOCTYPE html>'],
          correct: 1,
          clicked: null
         },
         {
          prompt: "В чем разница между открывающим и закрывающим тегами?",
          answers: ["Открывающий тег имеет / впереди","Закрывающий тег имеет / впереди","Нет никакой разницы"],
          correct: 1,
          clicked: null
         },
         {
          prompt: "<br /> Что это за тег?",
          answers: ["Тег разрыва строки","Открытый тег","Тег текста"],
          correct: 0,
          clicked: null
         },
         {
          prompt: "<body> Это открывающий тег или закрывающий тег?",
          answers: ["Открытый тег","Закрытый тег"],
          correct: 0,
          clicked: null
         },
         {
          prompt: "Где правильно задан класс?",
          answers: ['<class="название класса"></class>','<div class="название класса"></div>'],
          correct: 1,
          clicked: null
         },
         {
          prompt: "Где правильно задан id?",
          answers: ['<id="название"></id>','<div id="название"></div>'],
          correct: 1,
          clicked: null
         },
         {
          prompt: "Какой элемент не имеет закрывающего тега?",
          answers: ['Никакой','Закрытый элемент', 'Пустой элемент'],
          correct: 2,
          clicked: null
         },
         {
          prompt: "Что из следующего является примером пустого элемента?",
          answers: ['<img/>','<img></img>'],
          correct: 0,
          clicked: null
         },
         {
          prompt: "Где пишутся meta теги?",
          answers: ['В main','В body', 'В head'],
          correct: 2,
          clicked: null
         },
         {
          prompt: "Что из этого добавляет параграф?",
          answers: ['<b>','<p>', '<span>'],
          correct: 1,
          clicked: null
         },
         {
          prompt: "Для чего нужны комментарии в HTML",
          answers: ['Они нужны для того, чтобы легче ориентироватся в коде.','Они нужны для того, чтобы начать писать код.'],
          correct: 0,
          clicked: null
         },
         {
          prompt: "Что из этого добавляет заголовок первого уровня?",
          answers: ['<span1>','<h1>', '<b1>'],
          correct: 1,
          clicked: null
         },
         {
          prompt: "Где должны находится все элементы сайта?",
          answers: ['Они должны находиться в одной директории','Они нигде не должны находиться.'],
          correct: 0,
          clicked: null
         },
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



export default HtmlBasic;
