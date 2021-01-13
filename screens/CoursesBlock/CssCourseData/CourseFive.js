import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import MobileAd from '../../components/MobileAd'

import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1

import TextCourseTitle from '../../components/TextCourseTitle'
import { light, dark } from '../../../assets/theme'

const code = `transition: none| transition-property transition-duration transition-timing-function
  transition-delay;`;
const code2 = `<style>
 #block {
  -moz-transition: width 2s, height 4s linear 3s;
  -webkit-transition: width 2s, height 4s linear 3s;
  transition: width 2s, height 4s linear 3s;
  width: 150px;
  height: 25px;
     }
  </style>
  <div id="block"></div>`;
  const code3 = `<style>
 #block {
     width: 150px;
     height: 25px;
     }
     #block:hover {
    -moz-transform: scaleX(0.6);
    -ms-transform: scaleX(0.6);
    -webkit-transform: scaleX(0.6);
    -o-transform: scaleX(0.6);
    transform: scaleX(0.6);
}

  </style>
  <div id="block"></div>`;
  const code4 = `<style>
 #block {
        border: 1px solid black;
  width: 150px;
  height: 25px;
  animation: left 3s ease-in-out infinite;
  position: relative;
     }
     @keyframes left {
 from { left: 0; }
 to { left: 300px; }
}

  </style>
  <div id="block"></div>`;
  const code5 = `<style>
 #block {
  border: 1px solid black;
  width: 150px;
        height: 25px;
  animation-name: move;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  position: relative;
  animation-timing-function: linear;
 }
 @keyframes move {
 from {
    left: 0;
 }
 to {
  left: 20%;
 }
}
  </style>
  <div id="block"></div>`;

class CourseFiveScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, theme: '', };
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
      title = "Свойство transition";
         break;
      case 2:
          title = "Свойство transform"; 
         break;
      case 3:
        title = "Правило @keyframes";
        break;
      case 4:
        title = "Анимация";
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
  dark.colors.color : light.colors.color}]}>Свойство transition</Text>

    <TextCourseTitle
    codeText={this.state.code}
      language="html"
     />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>transition</Text> устанавливает эффект перехода между двумя состояниями элемента.
  Свойство <Text style={{color:'#db0202'}}>transition</Text> позволяет одновременно задать значения transition-property, transition-duration,
  transition-timing-function и transition-delay.
  </Text>
  </View>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство transition-property</Text>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Свойство <Text style={{color:'#db0202'}}>transition-property</Text> устанавливает имя стилевого свойства.
       Значения к transition-property:
      </Text>
      </View>

  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>none</Text> - отменяет тень.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>all</Text> - значение по умолчанию.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>inherit</Text> - наследует значение родителя.
    </Text>
    </View>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство transition-duration</Text>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Свойство <Text style={{color:'#db0202'}}>transition-duration</Text> задает время длительности анимации.
      </Text>
      </View>

      <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство transition-timing-function</Text>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Свойство <Text style={{color:'#db0202'}}>transition-timing-function</Text> устанавливает скорость изменения значение стилевого свойство для которого применяется эффект перехода.
        Значения к transition-timing-function:
        </Text>
        </View>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    <Text style={{color:'#db0202'}}>linear</Text> - отменяет тень.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    <Text style={{color:'#db0202'}}>ease</Text> - значение по умолчанию.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    <Text style={{color:'#db0202'}}>ease-in</Text> - наследует значение родителя.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    <Text style={{color:'#db0202'}}>ease-out</Text> - наследует значение родителя.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    <Text style={{color:'#db0202'}}>ease-in-out</Text> - наследует значение родителя.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    <Text style={{color:'#db0202'}}>step-start</Text> - отменяет тень.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    <Text style={{color:'#db0202'}}>step-end</Text> - отменяет тень.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    <Text style={{color:'#db0202'}}>steps</Text> - отменяет тень.
      </Text>
      </View>

      <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство transition-delay</Text>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Свойство <Text style={{color:'#db0202'}}>transition-delay</Text> устанавливает время ожидания перед запуском эффекта перехода.
        </Text>
        </View>


<Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

  <TextCourseTitle
  codeText={this.state.code2}
    language="html"
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

if (id == 2) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство transform</Text>


<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Свойство <Text style={{color:'#db0202'}}>transform</Text> трансформирует элемент(например: масштабировать, вращать, сдвигать, наклонять элементы и др.
    Значение к transform:
  </Text>
  </View>


  <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>none</Text> - отменяет действие трансформации.
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>функция</Text> - устанавливает функцую трансформации.
    </Text>
    </View>

    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Функции трансформации</Text>

    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>rotate</Text> - устанавливает поворот элемента на заданный угол относительно точки трансформации.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>scale</Text> - устанавливает масштаб элемента по горизонтали и вертикали.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>scaleX</Text> - масштабирует элемент по горизонтали.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>scaleY</Text> - масштабирует элемент по вертикали.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>skewX</Text> - наклоняет элемент на заданный угол по вертикали.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>skewY</Text> - наклоняет элемент на заданный угол по горизонтали.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>translate</Text> - сдвигает элемент на заданное значение по горизонтали и вертикали.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>translateX</Text> - сдвигает элемент по горизонтали на указанное значение.
   Положительное значение сдвигает вправо, отрицательное влево.
      </Text>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  <Text style={{color:'#db0202'}}>translateY</Text> - сдвигает элемент по вертикали на указанное значение.
  Положительное значение сдвигает вниз, отрицательное вверх.
      </Text>
      </View>

  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

      <TextCourseTitle
      codeText={this.state.code3}
        language="css"
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

if (id == 3) {
  return (
<ScrollView
ref={(c) => {this.scroll = c}}>
    <View style={{padding:10}}>
    <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Правило @keyframes</Text>


<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
  Правило <Text style={{color:'#db0202'}}>@keyframes</Text> устанавливает ключевые кадры при анимации элемента. Чтобы получить работающую анимацию, вам надо связать анимацию с элементомю.
  Анимацию можно реализовать через % или значений from | to
  </Text>
  </View>


  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Пример использования:</Text>

      <TextCourseTitle
      codeText={this.state.code4}
        language="css"
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
  dark.colors.color : light.colors.color}]}>Анимация</Text>


<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Анимации CSS3 делает сайт более динамичным. Анимации CSS3 базируется на ключевых кадрах,
 которые позволяют автоматически воспроизводить и повторять эффекты на протяжении заданного времени.
  </Text>
  </View>


       <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство animation-name</Text>

       <View style={{paddingTop:10}}>
         <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
    Свойство <Text style={{color:'#db0202'}}>animation-name</Text> задаёт имя анимации. Свойство animation-name создается в правиле @keyframes.
    Значения к animation-name:
         </Text>
         </View>

         <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство animation-delay</Text>

         <View style={{paddingTop:10}}>
           <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
        Свойство <Text style={{color:'#db0202'}}>animation-delay</Text> устанавливает время ожидания перед запуском эффекта перехода.
           </Text>
           </View>

           <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство animation-iteration-count</Text>

           <View style={{paddingTop:10}}>
             <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             Свойство <Text style={{color:'#db0202'}}>animation-iteration-count</Text> позволяет запустить анимацию несколько раз.
             </Text>
             </View>

             <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Свойство animation-direction</Text>

             <View style={{paddingTop:10}}>
               <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
               Свойство <Text style={{color:'#db0202'}}>animation-direction</Text> задает направление повтора анимации:
               </Text>
               </View>

               <View style={{paddingTop:10}}>
                 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             <Text style={{color:'#db0202'}}>alternate</Text> - анимация проигрывается с начала до конца, затем в обратном направлении.
                 </Text>
                 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             <Text style={{color:'#db0202'}}>scaalternate-reverse</Text> - анимация начинает воспроизводится в обратном направлении, потом меняет свое направление на противоположное.
                 </Text>
                 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             <Text style={{color:'#db0202'}}>normal</Text> - значение по умолчанию.
                 </Text>
                 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             <Text style={{color:'#db0202'}}>reverse</Text> - анимация проигрывается с конца.
                 </Text>
                 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
             <Text style={{color:'#db0202'}}>inherit</Text> - наследует значение свойства от родительского элемента.
                 </Text>
                 </View>

                 <TextCourseTitle
                 codeText={this.state.code5}
                   language="css"
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
            onPress={() => this.props.navigation.goBack(null)}
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
  editorStyle: {paddingLeft: 10, margin: 0 },
  editorViewStyle: {paddingTop:10, padding:0}

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
