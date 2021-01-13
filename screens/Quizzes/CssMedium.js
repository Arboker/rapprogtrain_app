import React from 'react';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import TestComponent from '../components/TestComponent'
import { HeaderBackButton } from 'react-navigation-stack';

class CssMedium extends React.Component {
  static navigationOptions = ({ navigation }) => {

    return {
      title: "Средний тест по CSS",
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
           prompt: "Какое свойство вы используете для создания пространства между элементами HTML?", 
           answers: ['margin',"spacing","padding"],
           correct: 0,
           clicked: null
        }, 
         {
           prompt: 
           "Какое свойство используется для установки цвета текста?",
           answers: ["text-color","text:color","color"],
           correct: 2,
           clicked: null
         },
         {
          prompt: 
          "Что означает аббревиатура CSS?",
          answers: ['Каскадные таблицы стилей','Коррелированная система стилей','Система для укладки холста'],
          correct: 0,
          clicked: null
         },
         {
          prompt: "Какое свойство вы можете использовать, чтобы установить интервал между строками текста?",
          answers: ['line-spacing','line-height','letter-spacing'],
          correct: 1,
          clicked: null
         },
         {
          prompt: 
          "Какое свойство вы используете, чтобы установить цвет фона?",
          answers: ["color","background-color","background:color"],
          correct: 1,
          clicked: null
         },
         {
          prompt: 
          "Какое свойство вы бы использовали, чтобы изменить стиль списка, чтобы показывать римские цифры вместо обычных чисел?",
          answers: ["list-style-type:upper-roman;","list-type:roman;","list-bullet-type:roman-numerals;",
        "list-style:roman;"],
          correct: 0,
          clicked: null
         },
         {
          prompt: 
          'Какое свойство вы бы использовали для установки изображения вместо стандартного маркера в списке?',
          answers: ['list-image:','image-list:','list-style-image:'],
          correct: 2,
          clicked: null
         },
         {
          prompt: "Какое свойство необходимо для установки изображения в фоновом режиме?",
          answers: ['image','background-image','background:image','image:background'],
          correct: 1,
          clicked: null
         },
         {
          prompt: "Если вы хотите расположить элемент справа, какое допустимое CSS-свойство использовать?",
          answers: ['display:right;','float-right:0px;', 'display-right:0px;', 'float:right;'],
          correct: 3,
          clicked: null
         },
         {
          prompt: "Как задать эффект при наведении курсором на элемент?",
          answers: [':onHover',':hover',':mouseOver',':over'],
          correct: 1,
          clicked: null
         },
         {
          prompt: 'Что из этого правильно ссылается на класс "city"?',
          answers: ['city{}','class.city{}','.city{}'],
          correct: 2,
          clicked: null
         },
         {
          prompt: "Какое свойство вы бы использовали, чтобы изменить размер границы HTML-элемента?",
          answers: ['border-size:5px;','border:width:5px;','border-width:5px;','border:size:5px;'],
          correct: 2,
          clicked: null
         },
         {
          prompt: "Как установить определенный стиль для ссылки, на которую пользователь уже заходил?",
          answers: ['a:active','a:visited','a:previous','a:already'],
          correct: 1,
          clicked: null
         },
         {
          prompt: 'Как установить стиль для определенного элемента с идентификатором "city"?',
          answers: ['#city{}','id.city{}','element.id.city{}'],
          correct: 0,
          clicked: null
         },
         {
          prompt: "Как добавить рамку элементу?",
          answers: ['border:','scope:','border: none;'],
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


 export default CssMedium;