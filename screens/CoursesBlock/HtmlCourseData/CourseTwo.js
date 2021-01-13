import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import MobileAd from '../../components/MobileAd'

import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1

import { light, dark } from '../../../assets/theme'

const code = `<!-- текст -->`;
const code2 = ` <!--блок с текстом-->
<div class="block-txt">
  <p>Текст</p>
 </div>`;
const code3 = `<meta name="description" content="Описание страницы">`;
const code4 = `<meta name="keywords" content="страница html, html, сайт на html">`;
const code5 = `<meta charset="UTF-8">`;
const code6 = `
 <!DOCTYPE html>
  <html>
     <head>
       <meta charset="utf-8">
       <title>Параграфы</title>
     </head>
     <body>
      <p>Любой текст .</p>
      <p>Еще текст .</p>
    </body>
 </html>
`;
const code7 = `<div id="sidebar"></div>`;
const code8 = `
 <!DOCTYPE html>
 <html>
  <head>
  </head>
  <body>
   <p><b>Жирный текст</b></p>
   <p><small>Текст с мелким шрифтом</small></p>
   <p><big>Текст с крупным шрифтом</big></p>
   <p><i>Текст курсивом</i></p>
   <p><strong>Важный текст</strong></p>
   <p><sub>Подстрочный текст</sub></p>
   <p><sup>Надстрочный текст</sup></p>
   <p><ins>Вставленный текст</ins></p>
   <p><del>Удаленный текст</del></p>
  </body>
 </html>`;
const code9 = `<!DOCTYPE html>
 <html>
  <head>
  </head>
  <body>
   <p>Любой текст</p>
   <hr>
     </body>
 </html>`;
 const code10 = `<!DOCTYPE html>
 <html>
  <head>
  </head>
  <body>
   <p>Любой <br>текст</p>
     </body>
 </html>`;


class CourseTwoScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10,
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
      title = "Комментарии";
         break;
      case 2:
          title = "Теги 'meta'"; 
         break;
      case 3:
        title = "Параграфы";
        break;
      case 4:
        title = "Заголовки";
        break;
      case 5:
        title = "Форматирование текста";
        break;
      case 6:
        title = 'Тег "hr" и "br"';
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
  dark.colors.color : light.colors.color}]}>Комментарии</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Комментарии Html используется для того, чтобы легче ориентироватся в коде. Комментарии не отображаются на странице.</Text>
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
            {this.state.code}
          </SyntaxHighlighter>
    </View>

 <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Давайте на примере покажу применение комментариев Html.</Text>
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
  dark.colors.color : light.colors.color}]}>Теги "meta"</Text>
    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Тег &lt;meta> задается в элементе &lt;head>. &lt;meta> теги нужны для того, чтобы указывать кодировку сайта,
    описание сайта, ключевые слова и др.
    </Text>
    </View>

    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Например, давайте укажем описание страницы.
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
Или давайте укажем ключевые слова к странице. Каждое ключевое слово должно быть через запятую:
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
  dark.colors.color : light.colors.color}]}>Кодировка</Text>
      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Кодировка нужна для того, чтобы указать компьютеру на каком языке ты пишешь текст. Если не указать кодировку,
     то у вас на страницы будут непонятные символы.
    Давайте зададим кодировку, чтобы у нас отображались русские символы.
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

if (id == 3) {
  return (
<ScrollView
 ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Тег &lt;p></Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Тег  <Text style={{color:'#db0202'}}>&lt;p></Text> используется для создание нового параграфа.
  Каждый раз при использование тега &lt;p> идет перенос строки.  </Text>
  </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Например:
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


         <Image
             source={require('../../../assets/img/ex2.jpg')}
               style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:150}}
           />

           <View style={{paddingTop:10}}>
             <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
     Как видим каждое предложение начинается с новой строки.
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

if (id == 4) {
  return (
<ScrollView
 ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Заголовки в HTML</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
В HTML есть 6 уровней заголовков:  <Text style={{color:'#db0202'}}>&lt;p>&lt;h1>, &lt;h2>, &lt;h3>, &lt;h4>, &lt;h5>, &lt;h6> </Text>
  </Text>
  </View>


       <Image
           source={require('../../../assets/img/ex3.jpg')}
            style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
         />

         <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Заголовок &lt;h1></Text>
     <View style={{paddingTop:10}}>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Заголовок <Text style={{color:'#db0202'}}>&lt;h1></Text> используется 1 раз в заголовке страницы. Имеет размер шрифта 2em.
       </Text>
       </View>

       <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Заголовок &lt;h2></Text>
   <View style={{paddingTop:10}}>
     <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Заголовок <Text style={{color:'#db0202'}}>&lt;h2></Text> имеет размер шрифта 1.5em.
     </Text>
     </View>

     <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Заголовок &lt;h3></Text>
 <View style={{paddingTop:10}}>
   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Заголовок <Text style={{color:'#db0202'}}>&lt;h3></Text> имеет размер шрифта 1.33em.
   </Text>
   </View>

   <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Заголовок &lt;h4></Text>
<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Заголовок <Text style={{color:'#db0202'}}>&lt;h3></Text> имеет размер шрифта 1em.
 </Text>
 </View>

 <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Заголовок &lt;h5></Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Заголовок <Text style={{color:'#db0202'}}>&lt;h5></Text> имеет размер шрифта 0.83em.
</Text>
</View>

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Заголовок &lt;h6></Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Заголовок <Text style={{color:'#db0202'}}>&lt;h6></Text> имеет размер шрифта 0.67em.
</Text>
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

if (id == 5) {
  return (
<ScrollView
 ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Элементы форматирования</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
В HTML используется ряд элементов для определения стиля текста
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

       <Image
           source={require('../../../assets/img/ex4.jpg')}
            style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:200, marginTop:10}}
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
  dark.colors.color : light.colors.color}]}>Тег &lt;hr></Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Тег <Text style={{color:'#db0202'}}>&lt;hr></Text> используется для добавление горизонтальной линии.
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


           <Image
               source={require('../../../assets/img/ex5.jpg')}
                 style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:150}}
             />


         <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Тег &lt;br></Text>
     <View style={{paddingTop:10}}>
       <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
     Тег <Text style={{color:'#db0202'}}>&lt;br></Text> переносит предложение или слово на новую строку.
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


                <Image
                    source={require('../../../assets/img/ex6.jpg')}
                      style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:150}}
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
  textBlock: {fontFamily: 'OpenSans-R', fontSize: 15}

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
