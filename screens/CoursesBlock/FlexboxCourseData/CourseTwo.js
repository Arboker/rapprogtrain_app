import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, WebView, TouchableOpacity, Share, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'

import MediumAdmobAd from '../../components/MobileAd'

import { HeaderBackButton } from 'react-navigation-stack';

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1

import TextCourseTitle from '../../components/TextCourseTitle'
import { light, dark } from '../../../assets/theme'

const code = `<div class='photo-grid-container'>
<div class='photo-grid'>
  <div class='photo-grid-item first-item'>
    <img src='images/one.svg'/>
  </div>
  <div class='photo-grid-item'>
    <img src='images/two.svg'/>
  </div>
  <div class='photo-grid-item'>
    <img src='images/three.svg'/>
  </div>
</div>
</div>`;
const code2 = `.photo-grid-container {
  display: flex;
  justify-content: center;
}

.photo-grid {
  width: 900px;
  display: flex;
  justify-content: flex-start;
}

.photo-grid-item {
  border: 1px solid #fff;
  width: 300px;
  height: 300px;
}`;
 const code3 = `<div class='photo-grid-item'>
 <img src='images/four.svg'/>
</div>
<div class='photo-grid-item last-item'>
 <img src='images/five.svg'/>
</div> `;
 const code4 = `.photo-grid {
  /* ... */
  flex-wrap: wrap;
}`;
const code5 = `.photo-grid {
  width: 900px;
  display: flex;
  justify-content: center;    /* Change this */
  flex-wrap: wrap;
}`;
const code6 = `.photo-grid {
  /* ... */
  flex-direction: column;
}`;
const code7 = `.photo-grid {
  /* ... */
  flex-direction: column;
  align-items: center;      /* Добавьте это */
}`;
const code8 = `.photo-grid {
  width: 900px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row-reverse;  
  align-items: center;
}`;
const code9 = `.photo-grid {
  /* ... */
  flex-direction: row;  /* Update this */
  align-items: center;
}

.first-item {
  order: 1;
}

.last-item {
  order: -1;
}`;
const code10 = `.social,
.subscribe {
  align-self: flex-end;
  margin-bottom: 20px;
}`;
const code11 = `<div class='footer'>
<div class='footer-item footer-one'></div>
<div class='footer-item footer-two'></div>
<div class='footer-item footer-three'></div>
</div>`;
const code12 = `.footer {
  display: flex;
  justify-content: space-between;
}

.footer-item {
  border: 1px solid #fff;
  background-color: #D6E9FE;
  height: 200px;
  flex: 1;
}
`;
const code13 = `.footer-three {
  flex: 2;
}
`;
const code14 = `.footer-one,
.footer-three {
  background-color: #5995DA;
  flex: initial;
  width: 300px;
}
`;

class CourseTwoScreen extends React.Component {
  constructor() {
    super();
    this.state = { code, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14,
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
      title = "Свойство flex-wrap";
         break;
      case 2:
          title = "Свойство flex-direction"; 
         break;
      case 3:
        title = "Порядок элементов в flex-контейнере";
        break;
      case 4:
        title = "Свойство order";
        break;
      case 5:
        title = "Выравнивание flex элементов";
        break;
      case 6:
        title = "Свойство flex";
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
  dark.colors.color : light.colors.color}]}>Свойство flex-wrap
  </Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Flexbox является более мощной альтернативой float. Он может не только отображать элементы в виде сетки, но и изменять их выравнивание, направление, 
порядок и размер. Для создания сетки мы будем использовать свойство flex-wrap.
  </Text>
  </View>

  <Image
         source={require('../../../assets/img/flex-wrap-b960c1.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />


  <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Когда использовать контекст</Text>
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Добавьте несколько фотографий в ряд в файле flexbox.html, чтобы нам было с чем работать. 
Это должно быть внутри &lt;body>, под элементом .header-container:
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code}
    language="html"
   />

<View style={{paddingTop:10}}>
 <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Теперь добавляем некоторый код в файл style.css:
 </Text>
 </View>

 <TextCourseTitle
  codeText={this.state.code2}
    language="css"
   />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Сейчас отображается все нормально, но посмотрите, что будет, если мы добавим еще 2 элемента.
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code3}
    language="html"
   />

<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Вот как это будет выглядить:
  </Text>
  </View>

  <Image
         source={require('../../../assets/img/grid-no-flex-wrap-66c396.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />


  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Вы видите, что не все блоки попадают на страничку. Добавление свойства flex-wrap приведет к тому, что элементы, 
которые выходят за рамки странички, переместятся на следующую ряд.
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code4}
    language="css"
   />

  <View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Теперь все нормально, и все блоки попадают. 
Добавим свойство justify-content, чтобы все сдвинулось в центр.
  </Text>
  </View>

  <TextCourseTitle
  codeText={this.state.code5}
    language="css"
   />
  
<View style={{paddingTop:10}}>
  <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Вот, что у нас получилось:
  </Text>
  </View>

  <Image
         source={require('../../../assets/img/grid-with-flex-wrap-1da4da.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />


     <MediumAdmobAd />

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
  dark.colors.color : light.colors.color}]}>Свойство flex-direction  </Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство flex-direction определяет направление, будет ли контейнер отображать свои 
элементы горизонтально или вертикально. Пока что все контейнеры, которые мы видели, 
использовали горизонтальное направление по умолчанию, что означает, что все элементы 
прорисовывались один за другим в одном ряде, а затем, 
когда пространство заканчивалось, контейнеры опускались на следующий ряд.</Text>
      </View>

      <Image
         source={require('../../../assets/img/flex-direction-9acadf.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />


    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Одна из самых удивительных вещей в flexbox является его способность преобразовывать 
строки в столбцы, используя только одну строку CSS. Попробуйте добавить следующий код в .photo-grid:
</Text>
      </View>


<TextCourseTitle
  codeText={this.state.code6}
    language="css"
   />

<View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
     Этот код поменял направление нашего контейнера. 
     Теперь вместо сетки на нашей странице есть один вертикальный столбец:
            </Text>
      </View>

      <Image
         source={require('../../../assets/img/grid-with-flex-wrap-1da4da.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />


      <Text style={[styles.titleText,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Аспекты выравнивания
  </Text>

      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
   Обратите внимание, что наш коонтейнер находится по левой стороне, несмотря на то, 
   что мы написали justify-content: center. Когда вы меняете направление контейнера, 
   вы также меняете направление justify-content. 
   Сейчас контейнер выравнен по вертикали, а не по горизонтали.
            </Text>
      </View>

      <Image
         source={require('../../../assets/img/flex-direction-column-1bb8a0.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />


      <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
 Чтобы выравнить контейнер по горизонтали, мы должны добавить свойство align-items нашему .photo-grid:
            </Text>
      </View>

    
<TextCourseTitle
  codeText={this.state.code7}
    language="css"
   />
  
     <MediumAdmobAd />

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
  dark.colors.color : light.colors.color}]}>Порядок элементов в flex-контейнере
  </Text>

    <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Раньше, чтобы поменять порядок элементов вы должны были изменить HTML код. Но теперь вам это не обязательно делать.
</Text>
        </View>


      <Image
         source={require('../../../assets/img/flex-direction-reverse-532d8f.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />


<View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Свойство flex-direction также позволяет менять порядок элементов с помощью свойств row-reverse и column-reverse. 
Давайте посмотрим на это в действии, для этого поменяем свойство flex-direction.
    </Text>
    </View>

    <TextCourseTitle
  codeText={this.state.code8}
    language="css"
   />
  

    <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Оба ряда теперь отображаются справа налево, а не слева направо. Но обратите внимание, порядок меняется только для одного ряда.
    </Text>
    </View>

    <Image
         source={require('../../../assets/img/grid-direction-row-reverse-78cc12.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />

              

     <MediumAdmobAd />

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
  dark.colors.color : light.colors.color}]}>Свойство order
  </Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Прошлая глава была посвящена позиционированию flex-элементов через их родительские контейнеры, но управлять можно и 
отдельными элементами. Для этого мы будем использовать свойство order.
      </Text>
      </View>

      <Image
         source={require('../../../assets/img/flex-direction-vs-order-021cee.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
       Добавление свойства order к элементу flex определяет его порядок в контейнере, 
       не затрагивая окружающие элементы. Его значение по умолчанию равно 0, 
       и увеличение или уменьшение этого числа, перемещает элемент вправо или влево.
        </Text>
        </View>

        <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Для примера, давайте поменяем .first-item и .last-item местами. 
      Мы также должны поменять значение row-reverse на row обратно.
        </Text>
        </View>

        <TextCourseTitle
  codeText={this.state.code9}
    language="css"
   />
  


     <MediumAdmobAd />

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
  dark.colors.color : light.colors.color}]}>Выравнивание flex элементов
  </Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Допустим мы хотим, чтобы ссылка "Подписаться" и иконки социальных сетей находились в нижней части шапки, а не в центре? Их можно выровнить по отдельности. Для этого нам понадобится свойство align-self. Добавление этого свойства к flex элементу выравнит элемент по заданному значению:
</Text>
      </View>

      <TextCourseTitle
             codeText={this.state.code10}
               language="css"
              />

                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Вот что получится:
                   </Text>
                   </View>

                   <Image
         source={require('../../../assets/img/flex-wrap-b960c1.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Вот как это будет выглядить:
</Text>
                   </View>

                   <Image
         source={require('../../../assets/img/grid-align-self-4302c2.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                   Другие значения у align-self:
                   </Text>
                   </View>

                   <View style={{paddingTop:10}}>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>center</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>flex-start</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>flex-end</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>stretch</Text>
    </Text>
    <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
<Text style={{color:'#db0202'}}>baseline
</Text>
    </Text>
    </View>
                   
                   <MediumAdmobAd />

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
  dark.colors.color : light.colors.color}]}>Свойство flex
  </Text>
    <View style={{paddingTop:10}}>
      <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
      Все наши примеры вращались вокруг элементов с фиксированной шириной. Это позволило нам сосредоточиться на аспектах позиционирования flexbox. 
      Flex-элементы гибкие: они могут сжиматься и растягиваться в соответствии с шириной контейнера.
      </Text>
      </View>

      <View style={{paddingTop:10}}>
        <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
       Свойство flex определяет ширину отдельных предметов в flex-контейнере. Или, точнее, оно позволяет им иметь гибкую ширину. 
       Например, элемент со значением flex 2 будет больше, чем элементы со значением 1.
        </Text>
        </View>

                 <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                 Добавйте поэкспериментируем со свойство flex добавив футер. 
                 Добавьте этот код после элемента .photo-grid-container:
                   </Text>
                   </View>

                   <TextCourseTitle
             codeText={this.state.code11}
               language="html"
              />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
                  И немного CSS кода:
                   </Text>
                   </View>

                   <TextCourseTitle
             codeText={this.state.code12}
               language="css"
              />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Flex: 1 говорит элементам, о том, чтобы они растягивались в соответствии с шириной .footer. 
Так как они все имеют одинаковую ширину, они будут растягиваться равномерно:
                   </Text>
                   </View>

                   <Image
         source={require('../../../assets/img/footer-flexible-items-220ac8.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />

                   <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Увеличение ширины одного из элементов сделает его больше других. Например, мы можем увеличить третий элемент задав ему свойство flex, со значением 2.
</Text>
                   </View>

                   <TextCourseTitle
             codeText={this.state.code13}
               language="css"
              />

<Text style={[styles.titleText, {color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>Статическая ширина элемента
  </Text>

  <View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Мы можем даже смешивать flex-контейнеры с контейнерами фиксированной ширины использую свойство flex со значением initial.
</Text>
                   </View>

                   <Image
         source={require('../../../assets/img/combining-flexible-and-static-items-52aacb.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Сейчас мы сделаем так, чтобы наш центральный блок был больше других. Для этого мы должны добавить следующий код:
</Text>
                   </View>

                   <TextCourseTitle
             codeText={this.state.code14}
               language="css"
              />

<View style={{paddingTop:10}}>
                   <Text style={[styles.textBlock,{color: this.state.theme == "dark" ? 
  dark.colors.color : light.colors.color}]}>
Без строки flex: initial, flex: 1 было бы унаследовано от элемента .footer-item, из-за чего заданная ширина игнорируется. Значение initial исправила это, и мы получили гибкий макет, который содержит элементы фиксированной ширины. При изменении размера окна браузера вы увидите, что изменяется только блок по середини.
</Text>
                   </View>

                   <Image
         source={require('../../../assets/img/footer-flexible-items-static-widths-af0a32.png')}
          style={{resizeMode:'contain', width:Dimensions.get('window').width - 20, height:300, marginTop:10}}
       />
                
     <MediumAdmobAd />

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
      CourseTwoScreen: {
        screen: CourseTwoScreen,
      },
    },
    {
      initialRouteName: 'CourseTwoScreen',
    }
  );
