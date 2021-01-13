import React from 'react';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import TestComponent from '../components/TestComponent'
import { HeaderBackButton } from 'react-navigation-stack';
class HtmlAdvanced extends React.Component {
  static navigationOptions = ({ navigation }) => {

    return {
      title: "Сложный тест по HTML",
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
           prompt: "Какой новый элемент HTML5, дал возможность воспроизведения аудиофайлов в браузере?", 
           answers: ['<audio>',"<embed>","<script>"],
           correct: 0,
           clicked: null
        }, 
         {
           prompt: 
           "Какой атрибут предоставляет пользователю способ управления воспроизведением звука: запуск / остановка, переход к любой точке звуковой дорожки, отключение звука и регулировка громкости?",
           answers: ["playsong","loop","controls"],
           correct: 2,
           clicked: null
         },
         {
          prompt: 
          "Какой атрибут позволяет браузеру непрерывно воспроизводить звуковую дорожку, пока пользователь не остановит ее:",
          answers: ['repeat','controls','loop'],
          correct: 2,
          clicked: null
         },
         {
          prompt: "Какой из этого код играет фоновую музыку, которая никогда не останавливается?",
          answers: ['<audio src="audio/background.mp3" autoplay loop></audio>',
          '<p>Слушай музыку</p> <audio src="audio/song.mp3" controls autoplay></audio>'],
          correct: 0,
          clicked: null
         },
         {
          prompt: 
          "HTML5 представил элемент &lt;audio>. Цель этого нового элемента - воспроизводить аудиофайлы непосредственно в браузере. Какие это дает преимущества?",
          answers: ["Нет необходимости в установке, обслуживании и обновлении определенных плагинов для браузера.",
          "Больше согласованности в поведении между различными браузерами, версиями и платформами.",
          "Более быстрая и плавная работа, поскольку не нужно загружать подключаемые модули или JavaScript.",
        "Все из вышеперечисленного"],
          correct: 3,
          clicked: null
         },
         {
          prompt: 
          "Если браузер не поддерживает предоставленный формат видео, какой код HTML5 должен быть вставлен на страницу видео для отображения текстового уведомления вместо видео, если оно не поддерживается?",
          answers: ["Тег <source> </source>","Теги <video> </video>"],
          correct: 1,
          clicked: null
         },
         {
          prompt: 
          'Рассмотрим следующий код:&lt;input type="text" patter="/d{1,2}/\d{1,2}/\d{4}"> Какой формат информации проверяет этот шаблон?',
          answers: ['Дата','Код страны','Цена'],
          correct: 0,
          clicked: null
         },
         {
          prompt: "Какой элемент структуры HTML5 предназначен для содержания основного содержимого страницы?",
          answers: ['<body>','<section>','<div>','<main>'],
          correct: 3,
          clicked: null
         },
         {
          prompt: "Какая технология в сочетании с HTML обеспечит наиболее доступный интерфейс для вашего веб-сайта?",
          answers: ['Flash','Php', 'JavaScript'],
          correct: 2,
          clicked: null
         },
         {
          prompt: "Какой элемент HTML5 используется для группирования элементов?",
          answers: ['<main>','<section>','<article>'],
          correct: 1,
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



 export default HtmlAdvanced
