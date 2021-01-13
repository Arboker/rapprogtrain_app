import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, TouchableOpacity, Linking, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import { WebView } from 'react-native-webview';
import { HeaderBackButton } from 'react-navigation-stack';

import AutoHeightWebView from 'react-native-autoheight-webview'
import { light, dark } from '../../../assets/theme'

import {
  AdMobBanner
} from 'expo-ads-admob';

class CourseCssScreen extends React.Component {
  constructor() {
    super();
    this.state = { height: 0, theme: '', };
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
  bannerError(e) {
    console.log('banner error: ');
    console.log(e);
  }
  adReceived() {
    console.log('banner ad received: ');
    this.setState({
      ...this.state,
      hasAd: true
    });
  }
  adClicked() {
    console.log('banner ad clicked: ');
  }
 
getData = () => {
      const { params } = this.props.navigation.state;
const id = params ? params.id : '';
if (id == 1) {
  const uri = 'http://rapprogtrain.com/server-side/small_mobile_ad.php';
  var colorTitlw;
  if (this.state.theme == "dark") {
     colorTitlw = "#dbdbdb";
  }
  if (this.state.theme == "light") {
    colorTitlw = "black";
 } 
  return (
 <SafeAreaView style={{flex:1}}>
<View style={{flex: 1, padding: 10}}>
                <AutoHeightWebView style={{flex: 1}} source={{
                    html: `
                    <html><head>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700&display=swap&subset=cyrillic" rel="stylesheet">
                     </head>
                    <style>* { padding:0;margin:0; } .code-js pre { overflow: auto; }
                    .about_article_js {
                      padding: 0px 0px 2% 0%;
                      font-family: 'Roboto', sans-serif;font-weight: bold;
                      font-size:14
                    }
                    .text_JavaScript p {
                       padding: 0px 0px 3% 0%;
                       font-family: 'Open Sans', sans-serif;
        
                   }
                   .code-js {
        
                       padding-bottom: 7%;
                   }
                   img {
                    width: 100%;
                   }
                    </style>

<div class="article_content" style="color:`+colorTitlw+`">
<p>

<div class="about_article_js">
<h2>С чего начать?<h2>
</div>
<div class="text_JavaScript">
<p>Сайт можно разрабатывать несколькими способами(например через cms системы или конструкторы). Мы же будем разрабатывать сайт самостоятельно. Перед началом, вам надо выучить хотя бы html и css.<p>
<p>Для разработки сайта нам нужен open server.<p>
</div>
<div class="about_article_js">
<h2">Что такое OpenServer?<h2>
</div>
<div class="text_JavaScript">
<p>OpenServer – набор программ, платформа для локальной работы с сайтами. Он включает в себя: <span style="word-wrap: break-word;">Apache;Nginx;MySQL;MariaDB;MongoDB;PostgreSQL;PHP;PHPMyAdmin</span>.<p>
</div>

     <div class="about_article_js">
<h2>Как и где скачать Open Server?<h2>
</div>
<div class="text_JavaScript">
<p>Скачиваем <span>Open Server</span> с их официального сайта <a href="http://open-server.ru/" target="_blank">http://open-server.ru/</a>.<p>
<p> На странице «Скачать» нужно выбрать необходимую редакцию (их там 3), ввести капчу и нажать на кнопку скачивания.<p>
</div>
<div class="about_article_js">
<h2>Устанавливаем OpenServer.<h2>
</div>
<div class="text_JavaScript">
<p>Переходим в папку со скачанным установщиком, запускаем файл.Выбираем папку, в которую будет распакована программа, нажимаем «ОК» и ждем.<p>
</div>
 <div class="about_article_js">
<h2>Запуск Open Server.<h2>
</div>
<div class="text_JavaScript">
<p>Первое, что вам надо сделать это выбрать 32-битную или 64-битную систему(какая у вас)</a>.<p>
  <img src="http://rapprogtrain.com/img/site/bit.jpeg" alt="Установка и настройка Open Server" class="prog_img"/>
<p>Второе вам нужно запутить программу. У вас появится красный флажок(кликните на него)<p>
  <img src="http://rapprogtrain.com/img/site/wBrw5_croper_ru.jpeg" alt="Установка и настройка Open Server" class="prog_img"/>
<p>У вас появится меню. Последнее, что вам надо сделать - это запустить Open Server.<p>
  <img src="http://rapprogtrain.com/img/site/9sFsw_croper_ru.jpeg" alt="Установка и настройка Open Server" class="prog_img"/>
   <p>У вас появится меню. Последнее, что вам надо сделать - это запустить Open Server.<p>
</div>
 <div class="about_article_js">
<h2>Возможные ошибки при запуске<h2>
</div>
<div class="text_JavaScript">
<p>Если при запуске у вас появилась ошибка с hosts файлом, то вот, что вам нужно делалть.<p>
  <img src="http://rapprogtrain.com/img/site/thumb_open_server_error.png" alt="Установка и настройка Open Server" class="prog_img"/>
  <p>Первое из-за чего у вас могла появится эта ошибка, это - из-за того, что вы не установили Microsoft Visual Studio C++. <p>
  <img src="http://rapprogtrain.com/img/site/visual.jpg" alt="Установка и настройка Open Server" class="prog_img"/>
  <p>Второй способ решение этой проблемы это - запуск программы от имени администратора. <p>
  <p>И третий способ решение этой проблемы это введение cmd кода. Открываем cmd терминал(можно найти в программах windows) и вводим вот этот код: <p>
</div>
    <div class="code-js">
<pre style="background-color: #bfbfbf;color:#000">

attrib.exe -s -r -h -a C:\Windows\system32\drivers\etc\hosts

</pre>
</div>
<div class="text_JavaScript">
<p>Если эта команда не проходит - значит у вас стоит антивирус. Можно временно отключить антивирус и переназначить права для файла <span>Windows\system32\drivers\etc\hosts</span>
после чего снова включить антивирус.<p>
<p>
</div>

                    `
                }}/>

<View style={!this.state.hasAd ? { height: 0 } : {}}>
<View style={{flex: 1,
  justifyContent: 'center',
  alignItems: 'center',  backgroundColor: global.themeNow == "dark" ? "#212121" : "white"}}>
  <AdMobBanner
    bannerSize="banner"
    adUnitID="ca-app-pub-3371284819677164/9624543779" // Test ID, Replace with your-admob-unit-id
    setTestDeviceID="EMULATOR"
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={this.bannerError}
    onDidFailToReceiveAdWithError={this.bannerError}
      onAdViewDidReceiveAd={this.adReceived.bind(this)}
      onAdViewWillPresentScreen={this.adClicked.bind(this)} />
  </View>
  </View>    
  <View style={{height: 60,  backgroundColor: global.themeNow == "dark" ? "#212121" : "white"}}>
<WebView
  ref={(ref) => { this.webview = ref; }}
  source={{ uri }}
  onNavigationStateChange={(event) => {
    if (event.url !== uri) {
      this.webview.stopLoading();
      Linking.openURL(event.url);
    }
  }}
  style={this.state.hasAd ? { height: 0, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" } : { height: 50, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" }}
  />    
</View>
                
            </View>
         
            </SafeAreaView>
);
}

if (id == 2) {
  const uri = 'http://rapprogtrain.com/server-side/small_mobile_ad.php';
  var colorTitlw;
  if (this.state.theme == "dark") {
     colorTitlw = "#dbdbdb";
  }
  if (this.state.theme == "light") {
    colorTitlw = "black";
 } 
  return (
 <SafeAreaView style={{flex:1}}>
<View style={{flex: 1, padding: 10}}>
                <AutoHeightWebView style={{flex: 1}} source={{
                    html: `
                    <html><head>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700&display=swap&subset=cyrillic" rel="stylesheet">
                     </head>
                    <style>* { padding:0;margin:0; } .code-js pre { overflow: auto; }
                    .about_article_js {
                      padding: 0px 0px 2% 0%;
                      font-family: 'Roboto', sans-serif;font-weight: bold;
                      font-size:14
                    }
                    .text_JavaScript p {
                       padding: 0px 0px 3% 0%;
                       font-family: 'Open Sans', sans-serif;
        
                   }
                   .code-js {
        
                       padding-bottom: 7%;
                   }
                   img {
                    width: 100%;
                   }
                    </style>


                    <div class="article_content" style="color:`+colorTitlw+`">
                    <p>
             
                 <div class="about_article_js">
                   <h2>Создание сайта<h2>
                 </div>
                 <div class="text_JavaScript">
                    <p>В этом уроке мы начнем разрабатывать наш собственный сайт! На прошлом уроке мы установили и настроили Open Server. Давайте зайдем в нашу папку «OpenServer».<p>
                  </div>
                  <img src="http://rapprogtrain.com/img/site/set1.png" alt="OpenServer" class="prog_img"/>
                  <div class="text_JavaScript">
                    <p>Сдесь мы выбираем папку «domains».<p>
                  </div>
                       <img src="http://rapprogtrain.com/img/site/set2.png" alt="Папка «domains» OpenServer" class="prog_img"/>
                  <div class="text_JavaScript">
                    <p>Теперь мы создадим папку с названием нашим сайтом.<p>
                  </div>
                  <div class="text_JavaScript">
                    <p>Чтобы наш сайт работал, его надо закинуть в домены Open Server.<p>
                     <p>Для этого мы заходим в настройки Open Server, где находим отдел "домены". В ней мы выбираем ручное управление, пишем название нашего сайта и выбираем его в папке и сохраняем.<p>
                  </div>
                       <img src="http://rapprogtrain.com/img/site/set3.png" alt="Настройки OpenServer" class="prog_img"/>
                       <div class="text_JavaScript">
                    <p>Теперь мы зайдем в нашу папку "web-site" и создадим там наш основной файл "index.php".<p>
                  </div>
                       <img src="http://rapprogtrain.com/img/site/les3.png" alt="Файл inde.php" class="prog_img"/>
                  <div class="text_JavaScript">
                    <p>Открываем этот файл с помощью любого редактора(мой Sublime Text3). Для проверки напишем "Привет".<p>
                  </div>
                   <img src="http://rapprogtrain.com/img/site/les1.png" alt="localhost" class="prog_img"/>
                  <div class="text_JavaScript">
                    <p>Теперь зайдем в браузер и напишем в поисковике "web-site/". Нам выведится "Привет". Значит у нас все работает.<p>
                  </div>
                            <div class="about_article_js">
                   <h2>_htaccess файл<h2>
                 </div>
                          <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             AddDefaultCharset utf-8
             RewriteEngine On
             RewriteCond % !^web-site\.ru$ [NC]
             RewriteRule ^(.*)$ http://web-site.ru/$1 [L,R=301]
              
             </pre>
             </div>
                       <div class="about_article_js">
                   <h2>Раздел &lt;head><h2>
                 </div>
                      <div class="text_JavaScript">
                    <p>Начинаем разработку сайта мы, с раздела &lt;head>, куда мы поместим все шрифты и meta теги.<p>
                  </div>
                      <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
              <span class="xml"> <span class="hljs-meta" style="color: rgb(43, 145, 175);">&lt;!DOCTYPE html&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">html</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">head</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">meta</span> <span class="hljs-attr" style="color: red;">charset</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"UTF-8"</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">meta</span> <span class="hljs-attr" style="color: red;">name</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"viewport"</span> <span class="hljs-attr" style="color: red;">content</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"width=device-width, initial-scale=1"</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">link</span> <span class="hljs-attr" style="color: red;">rel</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"stylesheet"</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"css/style.css"</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">link</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"https://fonts.googleapis.com/css?family=PT+Sans"</span> <span class="hljs-attr" style="color: red;">rel</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"stylesheet"</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">link</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/icon.ico"</span> <span class="hljs-attr" style="color: red;">rel</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"shortcut icon"</span> <span class="hljs-attr" style="color: red;">type</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"image/x-icon"</span>&gt;</span>   
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">title</span>&gt;</span>Главная<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">title</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">head</span>&gt;</span></span>
              
             </pre>
             </div>
             
                       <div class="about_article_js">
                   <h2>Шапка сайта<h2>
                 </div>
                          <div class="text_JavaScript">
                    <p>Сейчас мы будем делать шапку сайта. В нее мы поместим название нашего сайта и меню.<p>
                     <p><span>&lt;div id="logo"&gt;</span> отвечает за название сайта.<br>
                       <span>&lt;div id="menu"&gt;</span> отвечает за меню на сайта.<p>
                  </div>
                     <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             <span class="xml"><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">header</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"logo"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">h1</span>&gt;</span>Web-site<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">h1</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"menu"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">ul</span>&gt;</span>
                    <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"http://web-site/"</span>&gt;</span>Главная<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
                    <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"articles.php"</span>&gt;</span>Статьи<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
                    <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"about-us.php"</span>&gt;</span>О нас<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">ul</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">header</span>&gt;</span></span>
              
             </pre>
             </div>
                         <div class="about_article_js">
                   <h2>Футер сайта<h2>
                 </div>
                            <div class="text_JavaScript">
                    <p>В футер сайта мы поместим оставшуюся информацию.<p>
                     <p><span>&lt;div class="copyright"&gt;</span> отвечает за авторское право сайта.<br>
                       <span>&lt;ul class="footer_menu"&gt;</span> отвечает за меню в футере.<p>
                  </div>
                  
                     <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             <span class="xml"><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">footer</span>&gt;</span>
                <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"copyright"</span>&gt;</span>
              &amp;copy; <span class="php"><span class="hljs-meta" style="color: rgb(43, 145, 175);">&lt;?php</span> <span class="hljs-keyword" style="color: rgb(0, 0, 255);">echo</span> date(<span class="hljs-string" style="color: rgb(163, 21, 21);">'Y'</span>); <span class="hljs-meta" style="color: rgb(43, 145, 175);">?&gt;</span></span> Web-site
              <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">ul</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"footer_menu"</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"http://web-site/"</span>&gt;</span>Главная<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"articles.php"</span>&gt;</span>Статьи<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"about-us.php"</span>&gt;</span>О нас<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"mailto:your-mail@gmail.com"</span>&gt;</span>Реклама<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
                <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">ul</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">footer</span>&gt;</span></span>
              
             </pre>
             </div>
                       <div class="about_article_js">
                   <h2>Css<h2>
                 </div>
                            <div class="text_JavaScript">
                    <p>Теперь приступаем к CSS коду.<p>
                     <p><span>display: flex;</span> отвечает за выравнивания элемента в ряд .<br>
                       <span>justify-content: space-between;</span> отвечает за расстояние между flex элементами.<p>
                  </div>
                    <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">0</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">margin</span>: <span class="hljs-number">0</span>;
             }
             <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">header</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">background-color</span>: <span class="hljs-number">#1c1c1c</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">height</span>: <span class="hljs-number">60px</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">display</span>: flex;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">justify-content</span>: space-between;
             }
             <span class="hljs-selector-id">#logo</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">position</span>: relative;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">top</span>: <span class="hljs-number">10%</span>;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">left</span>: <span class="hljs-number">1%</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">color</span>: white;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
             }
             <span class="hljs-selector-id">#menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">ul</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">display</span>: flex;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">list-style-type</span>: none;
             }
             <span class="hljs-selector-id">#menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">ul</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">li</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">17px</span> <span class="hljs-number">15px</span>;
             }
             <span class="hljs-selector-id">#menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">ul</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">li</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">color</span>: white;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-decoration</span>: none;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">1.1em</span>;
             }
             <span class="hljs-selector-id">#menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">ul</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">li</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span><span class="hljs-selector-pseudo" style="color: rgb(43, 145, 175);">:hover</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-decoration</span>: underline;
             }
             <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">footer</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">position</span>: fixed;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">left</span>: <span class="hljs-number">0</span>;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">bottom</span>: <span class="hljs-number">0</span>;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">width</span>: <span class="hljs-number">100%</span>;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">background-color</span>: <span class="hljs-number">#1c1c1c</span>;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">color</span>: white;
             }
             <span class="hljs-selector-class">.footer_menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">li</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">display</span>: inline;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">5px</span>;
             }
             <span class="hljs-selector-class">.footer_menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">li</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">color</span>: white;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-decoration</span>: none;
             }
             <span class="hljs-selector-class">.footer_menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">li</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span><span class="hljs-selector-pseudo" style="color: rgb(43, 145, 175);">:hover</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-decoration</span>: underline;
             }
             <span class="hljs-selector-class">.footer_menu</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">float</span>: right;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">margin</span>: <span class="hljs-number">0</span>;
             <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">13px</span> <span class="hljs-number">15px</span>;
             <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
             <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">1.1em</span>;
             }
             <span class="hljs-selector-class">.copyright</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">float</span>: left;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">1.5em</span>;
             <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">15px</span>;
             <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
             }
              
             </pre>
             </div>
             
             
                    <p>
                    </div>

                    `
                }}/>

<View style={!this.state.hasAd ? { height: 0 } : {}}>
<View style={{flex: 1,
  justifyContent: 'center',
  alignItems: 'center',  backgroundColor: global.themeNow == "dark" ? "#212121" : "white"}}>
  <AdMobBanner
    bannerSize="banner"
    adUnitID="ca-app-pub-3371284819677164/9624543779" // Test ID, Replace with your-admob-unit-id
    setTestDeviceID="EMULATOR"
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={this.bannerError}
    onDidFailToReceiveAdWithError={this.bannerError}
      onAdViewDidReceiveAd={this.adReceived.bind(this)}
      onAdViewWillPresentScreen={this.adClicked.bind(this)} />
  </View>
  </View>    
  <View style={{height: 60,  backgroundColor: global.themeNow == "dark" ? "#212121" : "white"}}>
<WebView
  ref={(ref) => { this.webview = ref; }}
  source={{ uri }}
  onNavigationStateChange={(event) => {
    if (event.url !== uri) {
      this.webview.stopLoading();
      Linking.openURL(event.url);
    }
  }}
  style={this.state.hasAd ? { height: 0, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" } : { height: 50, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" }}
  />    
</View>
                
            </View>
   
          </SafeAreaView>

);
}


if (id == 3) {
  const uri = 'http://rapprogtrain.com/server-side/small_mobile_ad.php';
  var colorTitlw;
  if (this.state.theme == "dark") {
     colorTitlw = "#dbdbdb";
  }
  if (this.state.theme == "light") {
    colorTitlw = "black";
 } 
  return (
 <SafeAreaView style={{flex:1}}>
<View style={{flex: 1, padding: 10}}>
                <AutoHeightWebView style={{flex: 1}} source={{
                    html: `
                    <html><head>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700&display=swap&subset=cyrillic" rel="stylesheet">
                     </head>
                    <style>* { padding:0;margin:0; } .code-js pre { overflow: auto; }
                    .about_article_js {
                      padding: 0px 0px 2% 0%;
                      font-family: 'Roboto', sans-serif;font-weight: bold;
                      font-size:14
                    }
                    .text_JavaScript p {
                       padding: 0px 0px 3% 0%;
                       font-family: 'Open Sans', sans-serif;
        
                   }
                   .code-js {
        
                       padding-bottom: 7%;
                   }
                   img {
                    width: 100%;
                   }
                    </style>
                    <div class="article_content" style="color:`+colorTitlw+`">
                    <p>
             
                 <div class="about_article_js">
                   <h2>Боковое меню<h2>
                 </div>
                 <div class="text_JavaScript">
                    <p>Боковое меню будет у нас находится с левой стороны. Оно будет отвечать за типы статей на сайте.<p>
                     <p><span>&lt;div id="aside-menu"></span> отвечает за позиционирования бокового меню.<br>
                     <span>&lt;div class="article-menu-block"></span> - блок текста с картинкой.<br>
                     <span>&lt;h2 class="article-name"></span> - отвечает за название раздела статей.
                     </p>
                  </div>
                      <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             <span class="xml"><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">aside</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"aside-menu"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"aside-container"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">h2</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-name"</span>&gt;</span>Научные статьи:<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">h2</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/2.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-title"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/2.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-title"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/2.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-title"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">h2</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-name"</span>&gt;</span>Разговорные статьи:<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">h2</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu-block"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/2.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-title"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/2.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-title"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/2.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-title"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">h2</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-name"</span>&gt;</span>Официально-деловые статьи:<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">h2</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu-block"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/2.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-title"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/2.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-title"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/2.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-menu"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-title"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">aside</span>&gt;</span></span>
              
             </pre>
             </div>
             
                       <div class="about_article_js">
                   <h2>Основная часть сайта<h2>
                 </div>
                          <div class="text_JavaScript">
                    <p>В основную часть сайта мы поставим блок с самыми новыми статьями.<p>
                     <p><span>&lt;div class="article-container"&gt;</span> отвечает за расположение статей.<br>
                       <span>&lt;div class="main-article-block"&gt;</span> отвечает за каждую отдельную статью.<br>
                       <span>&lt;span class="article"&gt;</span> отвечает за название статьи.<p>
                  </div>
                     <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             <span class="xml"><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">section</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"section-block"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">h2</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"header"</span>&gt;</span>Новые статьи:<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">h2</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-container"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"main-article-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/1.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-img"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"title-description"</span>&gt;</span>Описание:<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span>&gt;</span>
                     <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"description"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"main-article-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/1.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-img"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"title-description"</span>&gt;</span>Описание:<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span>&gt;</span>
                     <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"description"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"main-article-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/1.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-img"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"title-description"</span>&gt;</span>Описание:<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span>&gt;</span>
                     <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"description"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"main-article-block"</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"#"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">img</span> <span class="hljs-attr" style="color: red;">src</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/1.jpg"</span> <span class="hljs-attr" style="color: red;">alt</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"статья"</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article-img"</span> /&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"article"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">span</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"title-description"</span>&gt;</span>Описание:<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span>&gt;</span>
                     <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span> <span class="hljs-attr" style="color: red;">class</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"description"</span>&gt;</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                 consequat.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">section</span>&gt;</span></span>
              
             </pre>
             </div>
                    <div class="about_article_js">
                   <h2>Css<h2>
                 </div>
                            <div class="text_JavaScript">
                    <p>Теперь приступаем к CSS коду.<p>
                     <p><span>float: left</span> отвечает за выравнивания элемента по левому краю.<br>
                       <span>display: flex;</span> отвечает за выравнивания элемента в ряд .<br>
                       <span>flex-basis: 0;</span> отвечает за ширину флекс-элемента, относительно которой будет происходить растяжение.<br>
                       <span>justify-content: space-between;</span> отвечает за выравнивание их по центру.<p>
                  </div>
                    <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             <span class="hljs-selector-class">.article-menu-block</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-decoration</span>: none;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">color</span>: <span class="hljs-number">#3d3d3d</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">1.1em</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
             }
             <span class="hljs-selector-class">.article-name</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding-bottom</span>: <span class="hljs-number">1%</span>;
             }
             <span class="hljs-selector-class">.article-menu</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">float</span>: left;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">border-radius</span>: <span class="hljs-number">4px</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">margin-right</span>: <span class="hljs-number">8px</span>;
             }
             <span class="hljs-selector-class">.article-menu-block</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">float</span>: left;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding-bottom</span>: <span class="hljs-number">3%</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">width</span>: <span class="hljs-number">100%</span>;
             }
             <span class="hljs-selector-id">#aside-menu</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">float</span>: left;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">border-right</span>: <span class="hljs-number">1px</span> solid black;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">border-bottom</span>: <span class="hljs-number">1px</span> solid black;
             }
             <span class="hljs-selector-class">.article-container</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">display</span>: flex;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">flex-wrap</span>: wrap;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">justify-content</span>: center;
             }
             <span class="hljs-selector-class">.main-article-block</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">flex-basis</span>: <span class="hljs-number">0</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">60px</span> <span class="hljs-number">20px</span> <span class="hljs-number">0</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
             }
             <span class="hljs-selector-class">.main-article-block</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">color</span>: black;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-decoration</span>: none;
             }
             <span class="hljs-selector-class">.main-article-block</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span><span class="hljs-selector-pseudo" style="color: rgb(43, 145, 175);">:hover</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">color</span>: orange;
             }
             <span class="hljs-selector-id">#header</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-indent</span>: <span class="hljs-number">20px</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
             }
             <span class="hljs-selector-class">.title-description</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">color</span>: red;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">1.1em</span>;
             }
             <span class="hljs-selector-class">.description</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: .<span class="hljs-number">9em</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">color</span>: <span class="hljs-number">#3d3d3d</span>;
             }
              
             </pre>
             </div>
             
             
                    <p>
                    </div>
             

                    `
                }}/>

<View style={!this.state.hasAd ? { height: 0 } : {}}>
<View style={{flex: 1,
  justifyContent: 'center',
  alignItems: 'center',  backgroundColor: global.themeNow == "dark" ? "#212121" : "white"}}>
  <AdMobBanner
    bannerSize="banner"
    adUnitID="ca-app-pub-3371284819677164/9624543779" // Test ID, Replace with your-admob-unit-id
    setTestDeviceID="EMULATOR"
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={this.bannerError}
    onDidFailToReceiveAdWithError={this.bannerError}
      onAdViewDidReceiveAd={this.adReceived.bind(this)}
      onAdViewWillPresentScreen={this.adClicked.bind(this)} />
  </View>
  </View>    
  <View style={{height: 60,  backgroundColor: global.themeNow == "dark" ? "#212121" : "white"}}>
<WebView
  ref={(ref) => { this.webview = ref; }}
  source={{ uri }}
  onNavigationStateChange={(event) => {
    if (event.url !== uri) {
      this.webview.stopLoading();
      Linking.openURL(event.url);
    }
  }}
  style={this.state.hasAd ? { height: 0, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" } : { height: 50, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" }}
  />    
</View>

            </View>
          </SafeAreaView>

);
}

if (id == 4) {
  const uri = 'http://rapprogtrain.com/server-side/small_mobile_ad.php';
  var colorTitlw;
  if (this.state.theme == "dark") {
     colorTitlw = "#dbdbdb";
  }
  if (this.state.theme == "light") {
    colorTitlw = "black";
 } 
  return (
 <SafeAreaView style={{flex:1}}>
<View style={{flex: 1, padding: 10}}>
                <AutoHeightWebView style={{flex: 1}} source={{
                    html: `
                    <html><head>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700&display=swap&subset=cyrillic" rel="stylesheet">
                     </head>
                    <style>* { padding:0;margin:0; } .code-js pre { overflow: auto; }
                    .about_article_js {
                      padding: 0px 0px 2% 0%;
                      font-family: 'Roboto', sans-serif;font-weight: bold;
                      font-size:14
                    }
                    .text_JavaScript p {
                       padding: 0px 0px 3% 0%;
                       font-family: 'Open Sans', sans-serif;
        
                   }
                   .code-js {
        
                       padding-bottom: 7%;
                   }
                   img {
                    width: 100%;
                   }
                    </style>

                    <div class="article_content" style="color:`+colorTitlw+`">
                    <p>
             
                   <div class="about_article_js">
                   <h2>PHP блоки<h2>
                 </div>
              <div class="text_JavaScript">
                    <p>На сайте у нас может быть много страниц, и вдруг ты захотел изменить меню на всех страницах, но каждой странице все изменять очень долго. Что делать?<p>
                      <p>Нам на помощь приходит PHP. Сейчас мы разберем как создать PHP блоки.<p>
                      <p>1) Создаем папку с названием "blocks".<p>
                      <p>2) Создаем файл "header.php" и "footer.php"<p>
                      <p>3) Копируем код с <span>&lt;!DOCTYPE html></span> до <span>&lt;/header></span> с index страницы. У футер с тега <span>&lt;footer></span> до <span>&lt;/footer></span> и удаляем<p>
                      <p>4) Вставляем код в "header.php" и "footer.php".</p>
                      <p>Теперь подключаем эти файлы. Раншье, где у нас было header, пишем <span>&lt;?php include "blocks/header.php"; ?> </span>, а где футер, пишем<span>&lt;?php include "blocks/footer.php"; ?> </span>.</p>
                      <p>Чтобы можно было изменять название страницы, мы будем использовать одну функцию PHP. Где у нас находится <span>&lt;title> &lt;title></span>, удаляем его и изменяем на этот код <span>&lt;?php
             function title($title) {
               echo ">&lt;title>$title</title>";
             } ?> </span>. Теперь если хотите изменить название страницы, пишите <span>&lt;?php title("Главная") ?> </span></p>
             <p>Итоговый код header.php<p>
                      <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             <span class="xml"> <span class="hljs-meta" style="color: rgb(43, 145, 175);">&lt;!DOCTYPE html&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">html</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">head</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">meta</span> <span class="hljs-attr" style="color: red;">charset</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"UTF-8"</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">meta</span> <span class="hljs-attr" style="color: red;">name</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"viewport"</span> <span class="hljs-attr" style="color: red;">content</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"width=device-width, initial-scale=1"</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">link</span> <span class="hljs-attr" style="color: red;">rel</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"stylesheet"</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"css/style.css"</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">link</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"https://fonts.googleapis.com/css?family=PT+Sans"</span> <span class="hljs-attr" style="color: red;">rel</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"stylesheet"</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">link</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"img/icon.ico"</span> <span class="hljs-attr" style="color: red;">rel</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"shortcut icon"</span> <span class="hljs-attr" style="color: red;">type</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"image/x-icon"</span>&gt;</span>   <span class="php"><span class="hljs-meta" style="color: rgb(43, 145, 175);">&lt;?php</span>
             <span class="hljs-function"><span class="hljs-keyword" style="color: rgb(0, 0, 255);">function</span> <span class="hljs-title" style="color: rgb(163, 21, 21);">title</span><span class="hljs-params">($title)</span> </span>{
               <span class="hljs-keyword" style="color: rgb(0, 0, 255);">echo</span> <span class="hljs-string" style="color: rgb(163, 21, 21);">"&lt;title&gt;$title&lt;/title&gt;"</span>;
             } <span class="hljs-meta" style="color: rgb(43, 145, 175);">?&gt;</span></span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">head</span>&gt;</span>
             
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">body</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">header</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"logo"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">h1</span>&gt;</span>Web-site<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">h1</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"menu"</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">ul</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"http://web-site/"</span>&gt;</span>Главная<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"articles.php"</span>&gt;</span>Статьи<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
                   <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span> <span class="hljs-attr" style="color: red;">href</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"about-us.php"</span>&gt;</span>О нас<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">a</span>&gt;</span><span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">li</span>&gt;</span>
                 <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">ul</span>&gt;</span>
               <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">header</span>&gt;</span></span>
              
             </pre>
             </div>
               
                    <div class="about_article_js">
                   <h2>Страница "О нас"<h2>
                 </div>
              <div class="text_JavaScript">
                    <p>В прошлом уроке мы закончили делать нашу главную страницу. Теперь нам надо занятся страницей "О нас". На этой странице вы можете рассказать о вашем продукте ил компании.<p>
                      <p>Создаем новый файл и называем его "about-us.php".<p>
                  </div>
                    <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             <span class="php"><span class="hljs-meta" style="color: rgb(43, 145, 175);">&lt;?php</span> <span class="hljs-keyword" style="color: rgb(0, 0, 255);">include</span> <span class="hljs-string" style="color: rgb(163, 21, 21);">"blocks/header.php"</span>;
             title(<span class="hljs-string" style="color: rgb(163, 21, 21);">"О нас"</span>); <span class="hljs-meta" style="color: rgb(43, 145, 175);">?&gt;</span></span> 
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"about-us-block"</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">h1</span>&gt;</span>О нас<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">h1</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span> <span class="hljs-attr" style="color: red;">id</span>=<span class="hljs-string" style="color: rgb(163, 21, 21);">"txt-position"</span>&gt;</span>
             &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">p</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">div</span>&gt;</span>
             <span class="php"><span class="hljs-meta" style="color: rgb(43, 145, 175);">&lt;?php</span> <span class="hljs-keyword" style="color: rgb(0, 0, 255);">include</span> <span class="hljs-string" style="color: rgb(163, 21, 21);">"blocks/footer.php"</span> <span class="hljs-meta" style="color: rgb(43, 145, 175);">?&gt;</span></span> 
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">body</span>&gt;</span>
             
             <span class="hljs-tag" style="color: rgb(0, 0, 255);">&lt;/<span class="hljs-name" style="color: rgb(0, 0, 255);">html</span>&gt;</span>
             </pre>
             </div>
               <div class="about_article_js">
                   <h2>Страница "Статьи"<h2>
                 </div>
              <div class="text_JavaScript">
                    <p>Страница "articles.php" будет такая же, как и "index.php". На этой странице вы можете добавить больлше статей, но я не буду.<p>
                  </div>
                    <div class="about_article_js">
                   <h2>CSS код<h2>
                 </div>
              <div class="text_JavaScript">
                    <p>CSS код страницы "about-us.php" будет очень маленький и простой.<p>
                  </div>
                        <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             <span class="hljs-selector-id">#about-us-block</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-align</span>: center;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">margin</span>: <span class="hljs-number">10%</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span>;
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
             }
             <span class="hljs-selector-id">#txt-position</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">width</span>: <span class="hljs-number">50%</span>;
                     <span class="hljs-attribute" style="color: rgb(163, 21, 21);">margin</span>: auto;
                     <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">1%</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span>;
                     <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-family</span>: <span class="hljs-string" style="color: rgb(163, 21, 21);">'PT Sans'</span>, sans-serif;
             }
             
             </pre>
             </div> 
                    <div class="about_article_js">
                   <h2>Адаптивность<h2>
                 </div>
              <div class="text_JavaScript">
                    <p>Сейчас мы разберем, как адаптировать сайт под разнные устройства. Адаптация сайта нужна для большего трафика и продвижения сайта по поисковой системе. Адаптация делается через <span> @media</span>.<p>
                  </div>
                        <div class="code-js">
             <pre style="background-color: #bfbfbf;color:#000">
             
             @<span class="hljs-keyword" style="color: rgb(0, 0, 255);">media</span> screen and (max-width: <span class="hljs-number">853px</span>) {
             <span class="hljs-selector-class">.article-menu</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">max-width</span>: <span class="hljs-number">35%</span>;
             }
             <span class="hljs-selector-class">.article-menu-block</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">0.9em</span>;
             }
              @<span class="hljs-keyword" style="color: rgb(0, 0, 255);">media</span> screen and (max-width: <span class="hljs-number">641px</span>) {
             <span class="hljs-selector-class">.main-article-block</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">30px</span> <span class="hljs-number">20px</span> <span class="hljs-number">0</span>;
             }
             <span class="hljs-selector-class">.article-menu-block</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">0.7em</span>;
             }
             <span class="hljs-selector-class">.article-name</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">1.2em</span>;
             }
              @<span class="hljs-keyword" style="color: rgb(0, 0, 255);">media</span> screen and (max-width: <span class="hljs-number">572px</span>) {
                <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">section</span> {
                  <span class="hljs-attribute" style="color: rgb(163, 21, 21);">float</span>: left;
                }
                <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">aside</span> {
                  <span class="hljs-attribute" style="color: rgb(163, 21, 21);">width</span>: <span class="hljs-number">100%</span>;
                }
                <span class="hljs-selector-id">#aside-menu</span> {
                  <span class="hljs-attribute" style="color: rgb(163, 21, 21);">border-right</span>: none;
                }
                <span class="hljs-selector-class">.article-menu-block</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">1em</span>;
             }
             <span class="hljs-selector-id">#header</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-indent</span>: <span class="hljs-number">0</span>;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">text-align</span>: center;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding-top</span>: <span class="hljs-number">1%</span>;
             }
             <span class="hljs-selector-class">.footer-menu</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">0.9em</span>;
             }
             <span class="hljs-selector-class">.footer_menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">li</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">0</span> <span class="hljs-number">2px</span>;
             }
             
             <span class="hljs-selector-class">.copyright</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">1.2em</span>;
             }
             <span class="hljs-selector-id">#logo</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">position</span>: relative;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">top</span>: <span class="hljs-number">20%</span>;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">left</span>: <span class="hljs-number">2%</span>;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">0.8em</span>;
             }
             <span class="hljs-selector-id">#menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">ul</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">li</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">a</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">font-size</span>: <span class="hljs-number">0.9em</span>;
             }
             <span class="hljs-selector-id">#menu</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">ul</span> <span class="hljs-selector-tag" style="color: rgb(0, 0, 255);">li</span> {
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">17px</span> <span class="hljs-number">5px</span>;
             }
              @<span class="hljs-keyword" style="color: rgb(0, 0, 255);">media</span> screen and (max-width: <span class="hljs-number">399px</span>) {
                <span class="hljs-selector-class">.article-container</span> {
                <span class="hljs-attribute" style="color: rgb(163, 21, 21);">display</span>: block;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">20px</span>;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">position</span>: relative;
                 <span class="hljs-attribute" style="color: rgb(163, 21, 21);">left</span>: <span class="hljs-number">5%</span>;
             }
             <span class="hljs-selector-class">.article-img</span> {
               <span class="hljs-attribute" style="color: rgb(163, 21, 21);">max-width</span>: <span class="hljs-number">90%</span>;
             }
             
             </pre>
             </div> 
             
             
                    <p>
                    </div>
             

                    `
                }}/>

<View style={!this.state.hasAd ? { height: 0 } : {}}>
<View style={{flex: 1,
  justifyContent: 'center',
  alignItems: 'center',  backgroundColor: global.themeNow == "dark" ? "#212121" : "white"}}>
  <AdMobBanner
    bannerSize="banner"
    adUnitID="ca-app-pub-3371284819677164/9624543779" // Test ID, Replace with your-admob-unit-id
    setTestDeviceID="EMULATOR"
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={this.bannerError}
    onDidFailToReceiveAdWithError={this.bannerError}
      onAdViewDidReceiveAd={this.adReceived.bind(this)}
      onAdViewWillPresentScreen={this.adClicked.bind(this)} />
  </View>
  </View>    
  <View style={{height: 60,  backgroundColor: global.themeNow == "dark" ? "#212121" : "white"}}>
<WebView
  ref={(ref) => { this.webview = ref; }}
  source={{ uri }}
  onNavigationStateChange={(event) => {
    if (event.url !== uri) {
      this.webview.stopLoading();
      Linking.openURL(event.url);
    }
  }}
  style={this.state.hasAd ? { height: 0, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" } : { height: 50, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" }}
  />    
</View>
                
            </View>
          </SafeAreaView>

);
}

}

  render () {
          return (
<View style={{flex: 1}}>

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
      CourseCssScreen: {
        screen: CourseCssScreen,
      },
    },
    {
      initialRouteName: 'CourseCssScreen',
    }
  );
