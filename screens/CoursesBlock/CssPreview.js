import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { Header } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons';

import { HeaderBackButton } from 'react-navigation-stack';
import { light, dark } from '../../assets/theme'
import CssPlan from './CssPlan'

class CssPreview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      theme:''
    }
  }


  async componentDidMount() {
    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
    })
      await Expo.Font.loadAsync({
       'Roboto-M': require('../../assets/fonts/Roboto-Medium.ttf'),
        'OpenSans-R': require('../../assets/fonts/OpenSans-Regular.ttf'),
     });
     this.setState({ fontLoaded: true });
  
   }
  

  render() {
    return (

      <ScrollView style={{backgroundColor: this.state.theme=="dark" ? "#212121" : "white"}}>

          <View style={{
          resizeMode:'cover',width: Dimensions.get('window').width,
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
        this.props.navigation.navigate('CssPlan')
          }
          style={{color: '#fff', backgroundColor:'#db0202', borderRadius:20, paddingTop:8,
          paddingLeft:25, paddingRight:25, paddingBottom:8, fontSize:16}}>Начать курс</Text>

          <View style={{paddingTop:20, flexDirection: 'row'}}>
          <Icon name="ios-book" size={18} style={{color:'white', marginRight:3}} />
          <Text style={{color:'white', marginRight:20}}>35 урока</Text>

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
          <Icon name="ios-journal" size={18} style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
           marginRight:10, fontWeight:'700',
          fontFamily: 'Roboto-M',}} />
          <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
          fontFamily: 'Roboto-M',  fontWeight:'700', fontSize: 15}}>Зачем изучать CSS?</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                fontFamily: 'OpenSans-R', fontSize: 15}}>
      Без CSS каждая веб-страница была бы грубым простым текстом и изображениями, которые текли прямо по странице.
      С помощью CSS вы можете добавлять цветные и фоновые изображения и изменять макет своей страницы - ваши веб-страницы могут
       выглядеть как произведения искусства! </Text>
                </View>


                <View style={{ flexDirection: 'row', paddingTop:20}}>
                <Icon name="ios-school" size={18} style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color, marginRight:10, fontWeight:'700',
                fontFamily: 'Roboto-M',}} />
                <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                fontFamily: 'Roboto-M',  fontWeight:'700', fontSize: 15}}>Получишь навыки:</Text>
                      </View>

                      <View style={{paddingTop:10}}>
                      <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                      fontFamily: 'OpenSans-R', fontSize: 15}}>
                  Вы узнаете много аспектов стилизации веб-страниц! Вы сможете настроить правильную структуру файлов,
                  отредактировать текст и цвета и создать привлекательные макеты.
                   Благодаря этим навыкам вы сможете настроить внешний вид своих веб-страниц в соответствии со всеми вашими потребностями!
                      </Text>
                      </View>

                      <View style={{ flexDirection: 'row', paddingTop:20}}>
                      <Icon name="ios-podium" size={18} style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color, marginRight:10, fontWeight:'700',
                      fontFamily: 'Roboto-M',}} />
                      <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                      fontFamily: 'Roboto-M',  fontWeight:'700', fontSize: 15}}>Требования</Text>
                            </View>

                            <View style={{paddingTop:10}}>
                            <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                            fontFamily: 'OpenSans-R', fontSize: 15}}>
                            Перед началом изучения этого курса вам нужно знать основы HTML.
                            </Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingTop:20}}>
                            <Icon name="ios-globe" size={18} style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color, marginRight:10, fontWeight:'700',
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

export default createStackNavigator(
  {
    Main: {
      screen: CssPreview,
      navigationOptions: {
        header: null,
      },
    },
    CssPlan: {
      screen: CssPlan,
      navigationOptions: {
    header: null,
    },
    },
  },
  {
    initialRouteName: 'Main',
  }
);
