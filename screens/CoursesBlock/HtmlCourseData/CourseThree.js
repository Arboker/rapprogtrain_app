import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import MobileAd from '../../components/MobileAd'
import { createStackNavigator } from 'react-navigation-stack'
import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1
import { light, dark } from '../../../assets/theme'

const code = `<a href="http://rapprogtrain.ru">ссылка</a> `;
const code2 = `<a href="mailto:site@gmail.com">ссылка на почту</a> `;
 const code3 = `http://test.ru/courses/css/introduction.html  `;
  const code4 = `http://test.ru/introduction.html`;
  const code5 = `<a href="about.php">`;
  const code6 = `<a href="../page/about.php"> `;
  const code7 = `<img src="img.jpg" alt="Картинка">`;
  const code8 = `<img src="http://site.ru/img/photo.jpg" alt="Фото">  `;
  const code9 = `<img src="../img/photo.jpg" alt="Фото">

 <img src="img/photo.jpg" alt="Фото"> `;
  const code10 = `<img src="img/photo.jpg" width="50%" height="50%" alt="Фото">  `;
  const code11 = `<ul>
   <li>JavaScript</li>
   <li>jQuery</li>
   <li>Html</li>
   <li>Css</li>
 </ul>`;
 const code12 = `<ol>
<li>JavaScript</li>
<li>jQuery</li>
<li>Html</li>
<li>Css</li>
</ol>`;
const code13 = `<ul>
  <li> 1) JavaScript.
    <ul>
      <li>Фреймворки.
        <ul>
          <li>Angular.js</li>
          <li>ReactJS.</li>
          <li>Vue.js</li>
          </ul>
       </li>
      <li>Библиотека.
        <ul>
          <li>jQuery</li>
          </ul>
    </ul>
    <li> 2) Css.</li>
</ul>`;

class CourseThreeScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13,
      theme: '', };
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
      title = "Структура";
         break;
      case 2:
          title = "Абсолютный и относительный путь"; 
         break;
      case 3:
        title = "Добавление изоображений и ссылка";
        break;
      case 4:
        title = "Маркированные списки";
        break;
      case 5:
        title = "Нумерованные списки";
        break;
      case 6:
        title = 'Многоуровневые списки';
        break;
    }
    this.props.navigation.navigate('CourseThreeScreen', {
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
  dark.colors.color : light.colors.color}]}>Структура</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Сcылки создаются с помощью тега <Text style={{color:'#db0202'}}>&lt;a>  </Text>. Внутри тега ставится текст.
 Обязательным параметром тега &lt;a> является атрибут href, который задает URL-адрес веб-страницы.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Структура:
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
  dark.colors.color : light.colors.color}]}>Ссылка на почту</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Для того, чтобы создать ссылку на почту, надо записать <Text style={{color:'#db0202'}}>mailto: и свою почту</Text>.
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
        {this.state.code2}
      </SyntaxHighlighter>
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
  dark.colors.color : light.colors.color}]}>Абсолютный путь</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>Абсолютный путь</Text> указывает точное расположение файла.
  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Например если файл находится в нескольких папках:
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
          {this.state.code3}
        </SyntaxHighlighter>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Но если файл не находится в папке, то тогда будет вот такой путь.
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
  dark.colors.color : light.colors.color}]}>Относительный путь</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>Относительный путь</Text> описывает путь к указанному документу относительно текущего.
 Путь определяется с учётом местоположения веб-страницы.
 <Text style={{color:'#db0202'}}>Относительный путь</Text> используется, когда надо указать файл на том же сайте.
</Text>
</View>

<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1) <Text style={{color:'#db0202'}}>/</Text> - используется когда надо идти вниз до следующей папки.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2) <Text style={{color:'#db0202'}}>./</Text> - указывает на текущую папку.</Text>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>3) <Text style={{color:'#db0202'}}>../</Text> - используется когда надо выйти с папки.</Text>
</View>

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Например мы находимся на главной странице, и нам надо указать ссылку на другую страницу:
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
        {this.state.code5}
      </SyntaxHighlighter>
</View>

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Или нам надо выйти с одной папки и перейти в другую:
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
        {this.state.code6}
      </SyntaxHighlighter>
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
  dark.colors.color : light.colors.color}]}>Тег &lt;img></Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Тег <Text style={{color:'#db0202'}}>&lt;img></Text> представляет изображение. Атрибут <Text style={{color:'#db0202'}}>alt</Text>
 добавляет альтернативный текст для изображения. Чтобы указать ссылку на изоображение надо вставить атрибут src:
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
        {this.state.code7}
      </SyntaxHighlighter>
</View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Адрес изображения</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Есть два пути добавления изоображения:
</Text>
</View>

<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>1)
<Text style={{color:'#db0202'}}>Абсолютный:</Text>
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
    {this.state.code8}
  </SyntaxHighlighter>
</View>


<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>2)
<Text style={{color:'#db0202'}}>Относительный: (Идет от корневой папки или идет от документа)</Text>
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
    {this.state.code9}
  </SyntaxHighlighter>
</View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Размеры изображения</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
У фото можно задать высоту и ширину.Без задания этих компонентов, изоображение показывается на страницы в реальных размерах.
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
    {this.state.code10}
  </SyntaxHighlighter>
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

if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Маркированный список</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>Маркированный список</Text> - это неупорядоченный список.
Маркированный список создается с помощью тега &lt;ul>. Элемент списка создается с помощью &lt;li>. У маркированных списков есть метка рядом со списками.
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
          {this.state.code11}
        </SyntaxHighlighter>
  </View>

  <Image
      source={require('../../../assets/img/ex7.jpg')}
        style={styles.imageStyle}
    />

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

if (id == 5) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Нумерованные списки</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>Нумерованные списки</Text> - это списки которые идут по нумерацией.
Нумерованные списки создаются с помощью тега &lt;ol>. Списки создаются через &lt;li>.
Если вы хотите изменить нумерацию, например на алфавитные буквы, для это для &lt;ol> задается type="A".
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
          {this.state.code12}
        </SyntaxHighlighter>
  </View>

  <Image
      source={require('../../../assets/img/ex8.jpg')}
        style={styles.imageStyle}
    />

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
  dark.colors.color : light.colors.color}]}>Многоуровневые списки</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>Многоуровневые списки</Text> используется для отображения элементов списка на разных уровнях.
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
          {this.state.code13}
        </SyntaxHighlighter>
  </View>

  <Image
      source={require('../../../assets/img/ex9.jpg')}
        style={styles.imageStyle}
    />

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
      CourseThreeScreen: {
        screen: CourseThreeScreen,
      },
    },
    {
      initialRouteName: 'CourseThreeScreen',
    }
  );
