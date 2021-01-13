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

const code = `<header>
  <h1>Название сайта</h1>
    <ul class="menu">
      <li><a href="">Главная</a>
      <li><a href="">О нас</a>
      <li><a href="">Курсы</a>
    </ul>
</header>`;
const code2 = `<main>
   <h2>О нас</h2>
   <div class="txt-about-us">
   <p>Любой текст о компании</p>
   </div>
 </main>`;
 const code3 = `<nav>
   <ul class="menu">
     <li>Главная</li>
     <li>О нас</li>
     <li>Курсы</li>
   </ul>
 </nav>`;
  const code4 = `<footer>
   <div class="copyright">
   &copy; Rapprogtrain
   </div>
 </footer> `;
  const code5 = `<article>
    <h2>Название</h2>
  <span>Любой текст</span>
</article>`;
  const code6 = `<section>
      <h2>Название статьи</h2>
      <p>Информация</p>
 </section>
`;
    const code7 = `<aside>
  <ul class="menu">
     <li>Главная</li>
     <li>О нас</li>
     <li>Курсы</li>
  </ul>
 </aside>`;
 const code8 = `<audio src="audio.mp3" controls></audio>  `;
const code9 = `<audio controls>
  <source src="name.ogg" type="audio/ogg">
  <source src="name.mp3" type="audio/mpeg">
 </audio>`;
 const code10 = `<video src="video.ogv" controls></video>`;
  const code11 = `<video controls autoplay loop>
   <source src="video.mp4" type="video/mp4">
   <source src="video.oog" type="video/oog">
 </video>`;
   const code12 = `<video controls width="400" height="300">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  <param name="movie" value="video.swf">
 </video>`;

class CourseFourScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12,
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
      title = 'Элементы "header", "main", "nav", "footer"';
         break;
      case 2:
          title = 'Элементы "article", "section", "aside"'; 
         break;
      case 3:
        title = "Добавление аудио";
        break;
      case 4:
        title = "Добавление видео";
        break;
    }
    this.props.navigation.navigate('CourseFourScreen', {
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
  dark.colors.color : light.colors.color}]}>Элемент "header"</Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Элемент <Text style={{color:'#db0202'}}>&lt;header> </Text> - это шапка сайта.
  Элемент <Text style={{color:'#db0202'}}>&lt;header> </Text> не является обязательным элементом.
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
  dark.colors.color : light.colors.color}]}>Элемент "main"</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Элемент <Text style={{color:'#db0202'}}>&lt;main> </Text> представляет основное содержимое документа.
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

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Элемент "nav"</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Элемент <Text style={{color:'#db0202'}}>&lt;nav> </Text> предназначен для создания блока навигации веб-страницы.
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

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Элемент "footer"</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Элемент <Text style={{color:'#db0202'}}>&lt;footer> </Text> представляет собой подвал страницы.
Обычно там пишут данные о копирайте, содержит какую либо информацию.
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
  dark.colors.color : light.colors.color}]}>Элемент "article"</Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Элемент <Text style={{color:'#db0202'}}>&lt;article> </Text> - используется для группировки записей — публикаций, статей,
   записей блога, комментариев и др. Элемент <Text style={{color:'#db0202'}}>&lt;article></Text>
   может дублироваться на других страницах сайта.
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

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Элемент "section"</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Элемент <Text style={{color:'#db0202'}}>&lt;section> </Text>
используется обычно для группирования элементов. Элемент <Text style={{color:'#db0202'}}>&lt;section></Text>
применяется для блока новостей, какой либо информации или др.
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

<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Элемент "aside"</Text>
<View style={{paddingTop:10}}>
<Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Элемент <Text style={{color:'#db0202'}}>&lt;aside> </Text>
используется, как боковая панель страницы. Там обычно находится меню и любая другая информация.
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
  dark.colors.color : light.colors.color}]}>Добавление аудио</Text>
  <View style={{paddingTop:10}}>
  <Text style={styles.textBlock}>
  Раньше в HTML не было специального стандарта на добавление аудио.
  Но в HTML5 появилась такая возможность.Теперь добавлять аудио можно через тег <Text style={{color:'#db0202'}}>&lt;audio> </Text>
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Есть два способа добавить аудио:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Первый через атрибут source:
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
  dark.colors.color : light.colors.color}]}>
  Второй способ - это использовать элемент source внутри элемента <Text style={{color:'#db0202'}}>&lt;audio> </Text>
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
      source={require('../../../assets/img/audio.png')}
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

if (id == 4) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Добавление видео</Text>
  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Добавить видео можно 2 путями:
  </Text>
  </View>

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
1) Добавить видео можно через атрибут <Text style={{color:'#db0202'}}>&lt;source> </Text>.
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



      <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Атрибут &lt;video></Text>
    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Также в видео можно добавить элемент autoplay и loop. При использование этих элементов, когда видео закончится, то оно начнется заново.
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

    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Но лучше при добавления видео перечислять все его возможные форматы:
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
      CourseFourScreen: {
        screen: CourseFourScreen,
      },
    },
    {
      initialRouteName: 'CourseFourScreen',
    }
  );
