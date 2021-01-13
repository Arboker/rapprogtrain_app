import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import TextCourseTitle from '../../components/TextCourseTitle'
import MobileAd from '../../components/MobileAd'
import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1
import { light, dark } from '../../../assets/theme'

const code = `<form action="settings.php">
    //код
 </form>`;
const code2 = `<input атрибут>`;
 const code3 = `<textarea атрибуты>
    // любой текст
 </textarea>`;
  const code4 = `<input type="button">.`;

class CourseFiveScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, theme: '', };
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
      title = 'Элемент "form"';
         break;
      case 2:
          title = "Добавление полей"; 
         break;
      case 3:
        title = "Кнопки";
        break;
    }
    this.props.navigation.navigate('CourseFiveScreen', {
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
  dark.colors.color : light.colors.color}]}>Элемент &lt;form></Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Форма создается с помощью элемента <Text style={{color:'#db0202'}}>&lt;form> </Text>.
   Элемент <Text style={{color:'#db0202'}}>&lt;form> </Text> является контейнером, в котором находится вся информация.
  </Text>
  </View>

  <View style={{paddingTop:10, padding:0}}>
      <SyntaxHighlighter
          {...this.props}
          style={tomorrow}
          customStyle={{paddingLeft: 10, margin: 0 }}
          language='html'
          fontSize={14}
          highlighter="prism"
        >
          {this.state.code}
        </SyntaxHighlighter>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Атрибуты</Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1) <Text style={{color:'#db0202'}}>action</Text> - является обязательным атрибутом, указывает адрес где будет обрабатываться форма.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2) <Text style={{color:'#db0202'}}>accept-charset</Text> - указывает кодировку при отправки формы.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>3) <Text style={{color:'#db0202'}}>autocomplete</Text> - включает автозаполнение полей формы.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>4) <Text style={{color:'#db0202'}}>enctype</Text> - используется для указания MIME-типа данных.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>5) <Text style={{color:'#db0202'}}>method</Text> - используется для передачи данных формы.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>6) <Text style={{color:'#db0202'}}>name</Text> - задает имя формы.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>7) <Text style={{color:'#db0202'}}>novalidate</Text> - отключает проверку на корректность ввода.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>8) <Text style={{color:'#db0202'}}>target</Text> - укзывает куда будет направлена информауия.</Text>
  </View>

     <MobileAd />

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
  dark.colors.color : light.colors.color}]}>Элемент &lt;input></Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Элемент <Text style={{color:'#db0202'}}>&lt;input> </Text> предназначен для создания текстовых полей, кнопок, переключателей и флажков.
    Он не является контейнером.
  </Text>
  </View>


  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис</Text>
  <View style={{paddingTop:10, padding:0}}>
      <SyntaxHighlighter
          {...this.props}
          style={tomorrow}
          customStyle={{paddingLeft: 10, margin: 0 }}
          language='html'
          fontSize={14}
          highlighter="prism"
        >
          {this.state.code2}
        </SyntaxHighlighter>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Атрибуты</Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1) <Text style={{color:'#db0202'}}>accept</Text> - указывает типы файлов, которые сервер принимает.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2) <Text style={{color:'#db0202'}}>accesskey</Text> - указывает комбинацию клавиш для активации фокусировки элемента.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>3) <Text style={{color:'#db0202'}}>checked</Text> - атрибут проверяет установлен ли флажок на элементе. Если флажок присутствует, то элемент будет выбран (отмечен).</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>4) <Text style={{color:'#db0202'}}>required</Text> - проверяет если поле заполнено.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>5) <Text style={{color:'#db0202'}}>type</Text> - указывает к какому ипу относится элемент формы.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>6) <Text style={{color:'#db0202'}}>value</Text> - указывает значение элемента.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>7) <Text style={{color:'#db0202'}}>readonly</Text> - используется чтобы пользователь не мог поле изменить.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>8) <Text style={{color:'#db0202'}}>maxlength</Text> - укзывает максимальное количество символов разрешенных в тексте.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>9) <Text style={{color:'#db0202'}}>name</Text> - используется имя формы. Этот атрибут используется для задания данных формы после отправки формы.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>10) <Text style={{color:'#db0202'}}>multiple</Text> - укзывает что пользователь может вводить более одного значения в элементе.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>11) <Text style={{color:'#db0202'}}>formenctype</Text> - указывает кодировку при отправке на сервер.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>12) <Text style={{color:'#db0202'}}>formmethod</Text> - определяет форму отправки данных.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>13) <Text style={{color:'#db0202'}}>formnovalidate</Text> - указывает, что элемент не должен проверятся при отправки.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>14) <Text style={{color:'#db0202'}}>formaction</Text> - определяет где будет обрабатыватся форма.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>15) <Text style={{color:'#db0202'}}>formtarget</Text> - укзывает где будет отображаться ответ, полученный после отправки формы.</Text>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Элемент &lt;textarea></Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Элемент <Text style={{color:'#db0202'}}>&lt;textarea> </Text> используется когда надо создать большой текст.
</Text>
</View>


<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Синтаксис</Text>
<View style={{paddingTop:10, padding:0}}>
    <SyntaxHighlighter
        {...this.props}
        style={tomorrow}
        customStyle={{paddingLeft: 10, margin: 0 }}
        language='html'
        fontSize={14}
        highlighter="prism"
      >
        {this.state.code3}
      </SyntaxHighlighter>
</View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Атрибуты</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1) <Text style={{color:'#db0202'}}>accesskey</Text> - указывает комбинацию клавиш для активации фокусировки элемента.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2) <Text style={{color:'#db0202'}}>required</Text> - проверяет если поле заполнено. </Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>3) <Text style={{color:'#db0202'}}>maxlength</Text> - укзывает максимальное количество символов разрешенных в тексте.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>4) <Text style={{color:'#db0202'}}>name</Text> - дает имя полю.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>5) <Text style={{color:'#db0202'}}>disabled</Text> - отключает текстовую область.</Text></View>

     <MobileAd />


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
            onPress={() => 
              this.combineFun()}
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
  dark.colors.color : light.colors.color}]}>Кнопки</Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Обычно мы создаем кнопки через элемент &lt;button>.Также можно создать кнопку через <Text style={{color:'#db0202'}}>input </Text>.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Это будет выглядить вот так:
    </Text>
  </View>

  <View style={{paddingTop:10, padding:0}}>
      <SyntaxHighlighter
          {...this.props}
          style={tomorrow}
          customStyle={{paddingLeft: 10, margin: 0 }}
          language='html'
          fontSize={14}
          highlighter="prism"
        >
          {this.state.code4}
        </SyntaxHighlighter>
  </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Атрибуты</Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1) <Text style={{color:'#db0202'}}>disabled</Text> - делает кнопку некликабельной.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2) <Text style={{color:'#db0202'}}>accesskey</Text> - указывает комбинацию клавиш для активации фокусировки элемента.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>3) <Text style={{color:'#db0202'}}>autofocus</Text> - указывает, что кнопка автоматически получит фокус при загрузке страницы.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>4) <Text style={{color:'#db0202'}}>name</Text> - дает уникальное имя кнопке.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>5) <Text style={{color:'#db0202'}}>type</Text> - указывает тип кнопки.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>6) <Text style={{color:'#db0202'}}>formenctype</Text> - указывает кодировку данных формы перед отправке на сервер.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>7) <Text style={{color:'#db0202'}}>formmethod</Text> - указывает, какой HTTP-метод использовать при отправке данных формы.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>8) <Text style={{color:'#db0202'}}>formnovalidate</Text> - указывает, что данные формы не должны проверяться при подаче.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>9) <Text style={{color:'#db0202'}}>formaction</Text> - указывает, куда отправлять данные формы при отправке форм.</Text>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>10) <Text style={{color:'#db0202'}}>formtarget</Text> - укзывает где будет отображаться ответ, полученный после отправки формы.</Text>
  </View>
     <MobileAd />

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
            onPress={() => 
              this.props.navigation.goBack(null)}
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
  imageStyle: {resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}

   });

  export default createStackNavigator(
    {
      CourseFiveScreen: {
        screen: CourseFiveScreen,
      },
    },
    {
      initialRouteName: 'CourseFiveScreen',
    }
  );
