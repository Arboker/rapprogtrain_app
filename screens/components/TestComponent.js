import React from 'react';
import * as Font from 'expo-font';

import { Button, View, Text, StyleSheet, Image, Dimensions,
ScrollView, TouchableOpacity } from 'react-native';
import { light, dark } from '../../assets/theme'

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    
       this.onclickCheckAnswer = this.onclickCheckAnswer.bind(this);
      this.onclickResetQuiz = this.onclickResetQuiz.bind(this);
      this.onclickCheckButton = this.onclickCheckButton.bind(this);
  }

  onclickCheckAnswer(index) {
    this.props.checkAnswer(index);
  }

  onclickCheckButton() {
    this.props.checkButton();
  }

  onclickResetQuiz() {
    this.props.resetQuiz();
  }

  render() { 
    var questionDatum = this.props.questionData[this.props.progress];
    var questionLength = this.props.questionData.length;
    var percentage = this.props.score/questionLength*100;
    percentage = Math.round(percentage);
    return (
      <ScrollView>
      <View style={styles.main}>
            {questionLength > this.props.progress ? 
            (
            <View>
              <View style={styles.viewQuesProg}>
              <Score theme={this.props.theme} score={this.props.score} />
           <Progress theme={this.props.theme} progress={this.props.progress} questLength={questionLength} />
           </View>
           <Questions theme={this.props.theme} questionDatum={questionDatum} />
           {questionDatum.blockAnswer ? (
             <View style={{flexDirection: 'row', justifyContent:'center',     paddingBottom:35,}}>
             <View style={[styles.viewBlockCode, {backgroundColor: this.props.theme == "dark" ?
             "#303030" : '#f2f2f2'}]}>
               <Text style={{fontFamily:"OpenSans-R"}}>{questionDatum.blockAnswer}</Text>
               </View>
               </View>
           ) : (<Text></Text>)}
           <AnswerList theme={this.props.theme} dataProgressClicked={questionDatum.clicked} progress={this.props.progress} questionData={this.props.questionData} 
           answers={questionDatum.answers} answerCallback={this.onclickCheckAnswer} />
          <View style={{alignSelf: 'center', paddingTop: 50}} >
           <TouchableOpacity
     style={styles.solvedButton}
      activeOpacity={.7}
      onPress={this.onclickCheckButton}>
          <Text
            style={[styles.nextButton, {backgroundColor: this.props.theme == "dark" ?
            "#303030" : '#f2f2f2', borderColor: this.props.theme == "dark" ?
            "#1a1818" : 'silver', color: this.props.theme == "dark" ?
            dark.colors.color : light.colors.color}]}>
           Далее
           </Text>
       </TouchableOpacity>
          </View>
         </View> 
            ):(
           <View>
             <View style={[styles.topSolved, {backgroundColor: this.props.theme == "dark" ?
           "#303030" : '#f2f2f2', borderColor: this.props.theme == "dark" ? "#1a1818" : "silver"}]}> 
              <Text style={[styles.titleOver, {color: this.props.theme == "dark" ?
      dark.colors.color : light.colors.color}]}>Тест закончен!</Text>
              <Text style={[styles.solvedRight, percentage >= 50 ? 
              this.props.theme == "dark" ? styles.greenTheme : styles.green : 
              this.props.theme == "dark" ? styles.redTheme : styles.red]}>{percentage}% Очков</Text>
             <View>
               <Text style={[styles.testOverText,{color: this.props.theme == "dark" ?
      dark.colors.color : light.colors.color}]}>{percentage >= 50 ? "Тест был пройден успешно" : 
               "Тест не был пройден успешно" }</Text>
               <Text style={{paddingTop:20, fontFamily:"OpenSans-R", textAlign:"center", color: this.props.theme == "dark" ?
      dark.colors.color : light.colors.color}}>Из
               <Text> {questionLength} вопросов </Text>, 
               правильно решили <Text style={percentage >= 50 ? 
               this.props.theme == "dark" ? styles.greenTheme : styles.green : 
                this.props.theme == "dark" ? styles.redTheme : styles.red}>{this.props.score} вопросов </Text>
               и неправильно {questionLength-this.props.score} </Text>
              </View> 
              <View style={{ alignSelf: 'center', paddingTop: 25}} >
    <TouchableOpacity
     style={styles.solvedButton}
      activeOpacity={.7}
      onPress={this.onclickResetQuiz}>
          <Text
            style={[styles.buttonTextSolved, {backgroundColor: this.props.theme == "dark" ? "#033c6e" : "#337ab7"}]}>
           Начать заново
           </Text>
       </TouchableOpacity>
       </View>
          
       </View>

       <View style={styles.viewEndQueList}>
      <EndQuestionList 
      theme={this.props.theme}
      question={this.props.questionData}
      />
      </View>
       </View>
            )}
            </View>
            </ScrollView>
    )
  }

}

class Score extends React.Component {

  render() {
    return (
      <View style={[styles.progressView, {backgroundColor: this.props.theme == "dark" ?
      "#303030" : '#f2f2f2', borderColor: this.props.theme == "dark" ?
      "#1a1818" : 'silver'}]}>
      <Text style={[styles.progressText, {color: this.props.theme == "dark" ?
      dark.colors.color : light.colors.color}]}>Очки: {this.props.score}</Text>
      </View>
    )
  }
};

class Progress extends React.Component {
  render() {
    return (
      <View style={[styles.progressView, {backgroundColor: this.props.theme == "dark" ?
      "#303030" : '#f2f2f2', borderColor: this.props.theme == "dark" ?
      "#1a1818" : 'silver'}]}>
      <Text style={[styles.progressText, {color: this.props.theme == "dark" ?
      dark.colors.color : light.colors.color}]}>{this.props.progress + 1} / {this.props.questLength}</Text>
      </View>
    )
  }
};

class Questions extends React.Component {
  render() {
    return (
      <View style={styles.viewTitle}>
      <Text style={[styles.questionTitle, {color: this.props.theme == "dark" ? '#c2c2c2' : '#3d3d3d'}]}>{this.props.questionDatum.prompt}</Text>
      </View>
    )
  }
};



class AnswerList extends React.Component {
  render() {
      return this.props.answers.map((answer, index) => {
          return (
              <ListItem theme={this.props.theme} indexBtn={index} questionData={this.props.questionData} 
              dataProgressClicked={this.props.dataProgressClicked} key={index} answerItem={answer} answerCallback={this.props.answerCallback} index={index} />
          )
        })
  }
}

class ListItem extends React.Component {
    
  constructor(props) {
super(props);


  this.onClickAnswer = this.onClickAnswer.bind(this);
}

onClickAnswer() {
this.props.answerCallback(this.props.index);
}
render() {
return (

        <TouchableOpacity
        style={styles.mainButton}
          activeOpacity={.7}
          onPress={this.onClickAnswer}
          >
               <Text
                  style={ this.props.dataProgressClicked == this.props.indexBtn ? 
                    [styles.buttonText, this.props.theme == "dark" ? styles.darkbluemode : styles.darkblue] : 
                    [styles.buttonText, this.props.theme == "dark" ? styles.bluemode : styles.blue]}
                  >
                   
               {this.props.answerItem}
               </Text>
             
           </TouchableOpacity>
);
}
};

class EndQuestionList extends React.Component {
render() {
  return (
this.props.question.map((q, i) => {
    return (
      <View index={i} key={i} style={styles.viewEndQue}>
       <Text style={[styles.titleEndQue, {color: this.props.theme == "dark" ? '#c2c2c2' : '#3d3d3d'}]}>{q.prompt}</Text>
       {q.answers.map((a, j) => {
         return (
           <Text key={j} index={j} style={[styles.questionEnd, {backgroundColor: this.props.theme == "dark" ?
           "#303030" : '#f2f2f2', borderColor: this.props.theme == "dark" ? "#1a1818" : "silver", 
          color: this.props.theme == "dark" ? dark.colors.color : "black"}, q.correct==j ?
           this.props.theme == "dark" ? styles.BackgreenTheme : styles.Backgreen : '']}>{a}</Text>
         )
       })}
       </View>
    )
  })
  )
}
}

const styles = StyleSheet.create({
  viewBlockCode :{
     borderWidth:1,
     borderColor:'silver',
     borderRadius:3,
     padding:10,
     fontFamily:"OpenSans-R",
     alignSelf: 'flex-start',
     flexDirection: 'column',
     justifyContent: 'center',
      alignItems: 'center',
  },
  buttonText: {
   alignItems: 'center',
   borderRadius: 3,
   padding: 10,
   paddingTop: 10,
   color: 'white',
   fontFamily:"OpenSans-R",
   fontSize: 16
  },
  blue: {
    backgroundColor: '#337ab7',
  },
  darkblue:{
    backgroundColor: '#033c6e',
  },
  bluemode: {
    backgroundColor: '#033c6e',
  },
  darkbluemode:{
    backgroundColor: '#061e33',
  },
  buttonTextSolved :{
    borderRadius: 3,
   padding: 10,
   paddingTop: 10,
   color: 'white',
   fontFamily:"OpenSans-R",
   fontSize: 16,
   alignItems: 'center',
  },
  nextButton :{
    borderWidth:1,
    borderRadius: 7,
   paddingTop: 15,
   paddingBottom: 15,
   paddingLeft: 60,
   paddingRight: 60,
   fontFamily:"OpenSans-R",
   fontSize: 18,
   alignItems: 'center',
   textAlign: 'center'
  },
  mainButton :{
      paddingBottom: 10
  },
  main :{
      padding:10
  },
  viewQuesProg :{
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: "center",
    paddingBottom: 10
  },
  progressText :{
    fontSize: 18
  },
  progressView :{
    borderWidth: 1,
    borderRadius: 3,
    padding: 10
  },
  questionTitle :{
      fontFamily:"Roboto-M",
      fontSize: 19,
      paddingBottom:10,
      width: '90%',
      textAlign: "center"
  },
  viewTitle :{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20
  },
  titleOver :{
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
    paddingBottom: 15
  },
  solvedRight :{
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 10,
    textAlign: "center",
    fontFamily:"Roboto-M",
  },
  topSolved: {
    borderWidth:1,
    borderRadius: 8,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft:10,
    paddingRight: 10,
  },
  viewEndQueList :{
   
    marginTop: 20
  },
  testOverText :{
    fontWeight: 'bold',
    fontFamily:"Roboto-R",
    textAlign: "center",
    color: '#363636'
  },
  green :{
    color: '#04912a',
  },
  red :{
    color: 'red'
  },
  redTheme :{
    color: '#ff0000'
  },
  greenTheme :{
    color: '#04912a',
  },
  titleEndQue :{
    fontSize:18,
    fontWeight:"bold",
    fontFamily:"Roboto-M",
    paddingBottom:15
  },
  questionEnd :{
    borderWidth:1,
    borderRadius:3,
    padding:10,
    fontFamily:"OpenSans-R",
    marginBottom:10,
  },
  Backgreen :{
    backgroundColor: '#04912a',
    color: 'white'
  },
  BackgreenTheme :{
    backgroundColor: '#094a19',
    color: 'white'
  }
 });

 export default TestComponent;
