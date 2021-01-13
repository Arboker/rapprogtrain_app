import React from 'react';
import { Font } from 'expo';

import { Button, View, Text, ActivityIndicator, ListView, StyleSheet, Image, Dimensions,
ScrollView, Linking, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons';
import Courses from './Courses'

import { HeaderBackButton } from 'react-navigation-stack';
import { light, dark } from '../assets/theme'

class InfoCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      fontLoaded: false,
      theme:''
    }
  }


    closeActivityIndicator = () => {
      this.setState({ showIndicator: false });
    }

      delay = () => {
        const that = this;
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            resolve();
          }, 1000)
        });
      }

  async componentDidMount() {
    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
      loading: false
    })
    global.themeNow = value;
      await Expo.Font.loadAsync({
       'Roboto-M': require('../assets/fonts/Roboto-Medium.ttf'),
        'OpenSans-R': require('../assets/fonts/OpenSans-Regular.ttf'),
     });
     this.setState({ fontLoaded: true });
    
   }

render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
      return (



            <ScrollView style={{backgroundColor: this.state.theme=="dark" ? "#212121" : "white"}}>

            <View style={{
            resizeMode:'cover',    width: Dimensions.get('window').width,
            height:210,}}>


            <Image
                  source = {{ uri: "http://rapprogtrain.com/img/new/computer-2788918_1280.jpg" }}
                    style={{resizeMode:'cover',    width: Dimensions.get('window').width,
                        height:210,}}
                  />

            <View style={{ ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(59, 72, 99,0.9)'}} />


            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,  marginTop:15}}>

            <View>
            <HeaderBackButton onPress={() => this.props.navigation.goBack(null)} tintColor={'white'} />

            </View>

            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,justifyContent: 'center', alignItems: 'center'}}>

            <Text
            onPress={() =>
          this.props.navigation.navigate('Courses')
            }
            style={{color: "white", 
            backgroundColor:'#db0202', borderRadius:20, paddingTop:8,
            paddingLeft:25, paddingRight:25, paddingBottom:8, fontSize:16}}>Выбрать курс</Text>

            <View style={{paddingTop:20, flexDirection: 'row'}}>
            <Icon name="ios-book" size={18} style={{color:'white', marginRight:3}} />
            <Text style={{color:'white', marginRight:20}}>118 уроков</Text>

            <Icon name="ios-cash" size={18} style={{color:'white', marginRight:3}} />
            <Text style={{color:'white'}}>Бесплатно</Text>

            </View>
            </View>
            </View>

            </View>

            <View style={{padding:10}}>
            <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
            fontSize:22,fontFamily: 'Roboto-M',fontWeight:'700'}}>Информация:</Text>

            <View style={{ flexDirection: 'row', paddingTop:20}}>
            <Icon name="ios-information-circle-outline" size={18} style={{color:this.state.theme=="dark" ? dark.colors.color : light.colors.color, 
            marginRight:10, fontWeight:'700',
            fontFamily: 'Roboto-M',}} />
            <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color, 
            fontFamily: 'Roboto-M',  fontWeight:'700', fontSize: 15}}>О курсах</Text>
                  </View>

                  <View style={{paddingTop:10}}>
                  <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color, 
                  fontFamily: 'OpenSans-R', fontSize: 15}}>
                  В этих курсах по программированию ты познакомишься с основными понятиями программирования.
                  Некоторые курсы дадут тебе практику в какой-либо отросли (например курс по созданию сайта). </Text>
                  </View>


                  <View style={{ flexDirection: 'row', paddingTop:20}}>
                  <Icon name="ios-podium" size={18} style={{color:this.state.theme=="dark" ? dark.colors.color : light.colors.color, 
                  marginRight:10, fontWeight:'700',
                  fontFamily: 'Roboto-M',}} />
                  <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                    fontFamily: 'Roboto-M',  fontWeight:'700', fontSize: 15}}>Требования</Text>
                        </View>

                        <View style={{paddingTop:10}}>
                        <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                          fontFamily: 'OpenSans-R', fontSize: 15}}>
                        Большинство курсов адресованны тем, кто еще не начал изучать программирование. Для понимания курсов
                        я рекомендую вам скачать IDL и записывать весь код который есть в курсах.
                        </Text>
                        </View>

                        <View style={{ flexDirection: 'row', paddingTop:20}}>
                        <Icon name="ios-school" size={18} style={{color:this.state.theme=="dark" ? dark.colors.color : light.colors.color, 
                        marginRight:10, fontWeight:'700',
                        fontFamily: 'Roboto-M',}} />
                        <Text style={{color:this.state.theme=="dark" ? dark.colors.color : light.colors.color, 
                          fontFamily: 'Roboto-M',  fontWeight:'700', fontSize: 15}}>Список курсов</Text>
                              </View>

                              <View style={{paddingTop:10}}>
                              <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                              fontFamily: 'OpenSans-R', fontSize: 15}}>
                              Вам будут данны 7 курсов. В них включается изучения языков: HTML, CSS, JavaScript. Изучение библиотек
                              и фреймворков: jQuery, React, CSS Flex. А также практика: Создание сайта.
                              </Text>
                              </View>

                              <View style={{ flexDirection: 'row', paddingTop:20}}>
                              <Icon name="ios-globe" size={18} style={{color:this.state.theme=="dark" ? dark.colors.color : light.colors.color, marginRight:10, fontWeight:'700',
                              fontFamily: 'Roboto-M',}} />
                              <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                              fontFamily: 'Roboto-M',  fontWeight:'700', fontSize: 15}}>Источник</Text>
                                    </View>

                                    <View style={{paddingTop:10}}>
                                    <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                                    fontFamily: 'OpenSans-R', fontSize: 15}}>
                                  Все курсы были взяты с моего сайта - 
                                  <Text style={{color:'#db0202'}} onPress={ ()=>{ Linking.openURL('http://rapprogtrain.com')}}> Rapprogtrain</Text>
                                    </Text>
                                    </View>

            </View>


            </ScrollView>


      );
}

}
const styles = StyleSheet.create({
    container :{
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default createStackNavigator(
    {
      Main: {
        screen: InfoCourses,
        navigationOptions: {
          header: null,
        },
      },
      HomeCourses: {
        screen: Courses,
        navigationOptions: {
          header: null,
        },
      }
    },
    {
      initialRouteName: 'Main',
    }
  );
