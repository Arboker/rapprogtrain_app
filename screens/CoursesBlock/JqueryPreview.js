import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, ActivityIndicator, AsyncStorage } from 'react-native';
import { Header } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { AntDesign } from '@expo/vector-icons';

import JqueryPlan from './JqueryPlan'
import { light, dark } from '../../assets/theme'


class JqueryPreview extends Component {
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
        this.props.navigation.navigate('JqueryPlan')
          }
          style={{color: '#fff', backgroundColor:'#db0202', borderRadius:20, paddingTop:8,
          paddingLeft:25, paddingRight:25, paddingBottom:8, fontSize:16}}>Начать курс</Text>

          <View style={{paddingTop:20, flexDirection: 'row'}}>
          <Icon name="ios-book" size={18} style={{color:'white', marginRight:3}} />
          <Text style={{color:'white', marginRight:20}}>15 урока</Text>

          <Icon name="ios-cash" size={18} style={{color:'white', marginRight:3}} />
          <Text style={{color:'white'}}>Бесплатно</Text>

          </View>
          </View>
          </View>

          </View>


          <View style={{padding:10}}>
          <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,fontSize:22,fontFamily: 'Roboto-M',fontWeight:'700'}}>Информация:</Text>

          <View style={{ flexDirection: 'row', paddingTop:20}}>
          <Icon name="ios-journal" size={18} style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color, marginRight:10, fontWeight:'700',
          fontFamily: 'Roboto-M',}} />
          <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
          fontFamily: 'Roboto-M',  fontWeight:'700', fontSize: 15}}>Зачем изучать jQuery?</Text>
                </View>

                <View style={{paddingTop:10}}>
                <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                fontFamily: 'OpenSans-R', fontSize: 15}}>
  С помощью HTML и CSS вы можете создавать визуально привлекательные статические веб-страницы.
  С небольшим количеством JavaScript вы можете добавить динамическое поведение на эти статические веб-сайты.
  jQuery - это библиотека JavaScript, которая предоставляет вам много динамического поведения «из коробки»,
  позволяя добавлять некоторые творческие эффекты в другие тупые макеты.</Text>
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
            Вы узнаете, как добавить jQuery на веб-страницы и как работать с DOM.
            Вы также узнаете, как использовать эффекты, обработчики событий и методы стиля.
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
                            Перед началом изучения этого курса вам нужно знать основы HTML, CSS и JAVASCRIPT.
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
      screen: JqueryPreview,
      navigationOptions: {
        header: null,
      },
    },
    JqueryPlan: {
      screen: JqueryPlan,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Main',
  }
);
