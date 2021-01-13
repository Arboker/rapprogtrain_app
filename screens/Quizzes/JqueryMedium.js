import React from 'react';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import TestComponent from '../components/TestComponent'
import { HeaderBackButton } from 'react-navigation-stack';

class JqueryMedium extends React.Component {
  static navigationOptions = ({ navigation }) => {

    return {
      title: "Средний тест по jQuery",
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
           prompt: "Какая метод используется, чтобы скрыть элемент и отобразить?", 
           answers: ['.hover()',".stopPropagation()",".toggle()"],
           correct: 2,
           clicked: null
        }, 
         {
           prompt: 
           "Какой метод  действует на объекты JQuery и переводит соответствующий элемент DOM в строку запроса, которую можно передать вместе с запросом AJAX.",
           answers: [".serialize()",".serializeAll()",".synchronized()","Ничего из этого"],
           correct: 0,
           clicked: null
         },
         {
          prompt: 
          "Какой из следующих методов используется, чтобы скрыть выбранные элементы?",
          answers: ['visible(false)','.hide()',
          'display(none)'],
          correct: 1,
          clicked: null
         },
         {
          prompt: 'Сколько существует способов изменить ширину элемента в jquery.',
          answers: ['Два','Один','Три'],
          correct: 0,
          clicked: null
         },
         {
          prompt: 
          "Какой метод используется при наведении курсором на элемент?",
          answers: [".hide()",".hover()",".toggle()"],
          correct: 2,
          clicked: null
         },
         {
          prompt: 
          "На каком языке написан JQuery?",
          answers: ["java","javascript","html"],
          correct: 2,
          clicked: null
         },
         {
          prompt: 
          'Какой метод производит обход всех элементов?',
          answers: ['.all()','.each()','.hide()'],
          correct: 2,
          clicked: null
         },
         {
          prompt: "Сколько типов селекторов доступно в jquery.",
          answers: ['3','1',
          '2','4'],
          correct: 0,
          clicked: null
         },
         {
          prompt: "По умолчанию метод .clone () копирует любое событие.",
          answers: ["Да","Нет"],
          correct: 1,
          clicked: null
         },
         {
          prompt: "Какой метод работает для принятия массива элементов DOM и помещения их в стек.",
         answers: ['pop()','pushStack()',
        'popStack()','push()'],
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



export default JqueryMedium;
