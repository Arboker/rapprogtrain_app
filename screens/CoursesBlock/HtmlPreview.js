import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import { Header } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from 'react-navigation-stack'
import { HeaderBackButton } from 'react-navigation-stack';

import HtmlPlan from './HtmlPlan'
import CourseOne from './HtmlCourseData/CourseOne'
import { light, dark } from '../../assets/theme'

class HtmlPreview extends Component {

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

                    <View style={
                    styles.viewContainer}>


                    <Image
                          source = {{ uri: "http://rapprogtrain.com/img/new/computer-2788918_1280.jpg" }}
                            style={styles.imageStyle}
                          />

                    <View style={{ ...StyleSheet.absoluteFillObject,
                    backgroundColor: 'rgba(59, 72, 99,0.9)'}} />


                    <View style={styles.viewPosition}>

                    <View>
                    <HeaderBackButton onPress={() => this.props.navigation.goBack(null)} tintColor={'white'} />

                    </View>

                    <View style={styles.viewPositionBlock}>

                    <Text
                    onPress={() =>
                  this.props.navigation.navigate('HtmlPlan')
                    }
                    style={styles.imageTitleBackground}>Начать курс</Text>

                    <View style={{paddingTop:20, flexDirection: 'row'}}>
                    <Icon name="ios-book" size={18} style={styles.iconImage} />
                    <Text style={{color:'white', marginRight:20}}>22 урока</Text>

                    <Icon name="ios-cash" size={18} style={styles.iconImage} />
                    <Text style={{color:'white'}}>Бесплатно</Text>

                    </View>
                    </View>
                    </View>

                    </View>


                    <View style={{padding:10}}>
                    <Text style={[styles.titleInfoBig, {color: this.state.theme=="dark" ? dark.colors.color : light.colors.color}]}>Информация:</Text>

                    <View style={{ flexDirection: 'row', paddingTop:20}}>
                    <Icon name="ios-journal" size={18} style={[styles.iconStyle, {color:this.state.theme=="dark" ? dark.colors.color : light.colors.color}]} />
                    <Text style={[styles.titleInfo, {color: this.state.theme=="dark" ? dark.colors.color : light.colors.color}]}>Зачем изучать HTML?</Text>
                          </View>

                          <View style={{paddingTop:10}}>
                          <Text style={{color:this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                           fontFamily: 'OpenSans-R', fontSize: 15}}>
                    HTML является основой всех веб-страниц. Без HTML вы не сможете создать текст или добавлять изображения или видео на свои веб-страницы.
                    HTML - это начало всего, что вам нужно знать, чтобы создать привлекательные веб-страницы! </Text>
                          </View>


                          <View style={styles.viewIcon}>
                          <Icon name="ios-school" size={18} style={[styles.iconStyle, {color: this.state.theme=="dark" ? dark.colors.color : light.colors.color}]} />
                          <Text style={[styles.titleInfo, {color: this.state.theme=="dark" ? dark.colors.color : light.colors.color}]}>Получишь навыки:</Text>
                                </View>

                                <View style={{paddingTop:10}}>
                                <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                                fontFamily: 'OpenSans-R', fontSize: 15}}>
                              Вы узнаете все самые выжные HTML-теги, используемые для структурирования HTML-страниц, скелета всех веб-сайтов.
                              Вы также сможете создавать таблицы HTML для эффективного представления табличных данных.
                                </Text>
                                </View>

                                <View style={styles.viewIcon}>
                                <Icon name="ios-podium" size={18} style={[styles.iconStyle, {color: this.state.theme=="dark" ? dark.colors.color : light.colors.color}]} />
                                <Text style={[styles.titleInfo, {color: this.state.theme=="dark" ? dark.colors.color : light.colors.color}]}>Требования</Text>
                                      </View>

                                      <View style={{paddingTop:10}}>
                                      <Text style={{color: this.state.theme=="dark" ? dark.colors.color : light.colors.color,
                                      fontFamily: 'OpenSans-R', fontSize: 15}}>
                                      Перед изучением этого курса вам ничего не нужно знать.
                                      </Text>
                                      </View>

                                      <View style={styles.viewIcon}>
                                      <Icon name="ios-globe" size={18} style={[styles.iconStyle, {color: this.state.theme=="dark" ? dark.colors.color : light.colors.color}]} />
                                      <Text style={[styles.titleInfo, {color: this.state.theme=="dark" ? dark.colors.color : light.colors.color}]}>Источник</Text>
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
  viewContainer :{
  resizeMode:'cover',    width: Dimensions.get('window').width,
  height:210,
},
titleInfoBig :{fontSize:22,fontFamily: 'Roboto-M',fontWeight:'700'},
titleInfo :{fontFamily: 'Roboto-M',  fontWeight:'700', fontSize: 15},
iconStyle :{marginRight:10, fontWeight:'700',
fontFamily: 'Roboto-M'},
viewIcon :{ flexDirection: 'row', paddingTop:20},
imageStyle :{resizeMode:'cover',    width: Dimensions.get('window').width,
    height:210,},
    viewPosition :{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, marginTop:15},
    viewPositionBlock :{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,justifyContent: 'center', alignItems: 'center'},
    imageTitleBackground :{color: '#fff', backgroundColor:'#db0202', borderRadius:20, paddingTop:8,
    paddingLeft:25, paddingRight:25, paddingBottom:8, fontSize:16},
    iconImage :{color:'white', marginRight:3}
});


export default createStackNavigator(
  {
    Main: {
      screen: HtmlPreview,
      navigationOptions: {
        header: null,
      },
    },
    HtmlPlan: {
      screen: HtmlPlan,
      navigationOptions: {
    header: null,
    },
    },
  },
  {
    initialRouteName: 'Main',
  }
);
