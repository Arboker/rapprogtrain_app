import React from 'react';
import * as Font from 'expo-font';

import { Button, View, Text, StyleSheet, Image, Dimensions,
  ScrollView, TouchableOpacity, Linking, AsyncStorage } from 'react-native';

import { createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import { light, dark } from '../assets/theme'
import { HeaderBackButton } from 'react-navigation-stack';

class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        theme: '',
    }
  }

  static navigationOptions = ({ navigation }) => {

    return {
      title: "О приложении",
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

    render() {
        return (
          <ScrollView>
         <View style={styles.main}>


          <View style={styles.viewTopVersion}>
           <Image
          style={{width: 120, height: 120,  alignItems: 'center',
          justifyContent: 'center',}}
          source={require('../assets/icon.png')}
        />

        <Text style={[styles.text, {color: this.state.theme == "dark" ? dark.colors.color : 
      light.colors.color}]}>
        Rapprogtrain - это платформа по программированию! Rapprogtrain объединяет все другие приложения по программированию в одно. 
        Вам больше не нужно будет искать другие приложения, потому что есть Rapprogtrain. Мы предлагаем вам бесплатные курсы, 
        уроки, также на нашем приложении ты сможешь почитать статьи, пройти тесты, написать и протестировать код в нашем редакторе
        и почитать самые задаваемые вопорсы по веб-порграммированию и посмотреть ответы на них.
        </Text>

    
<TouchableOpacity
 activeOpacity={.6}
          style={styles.button}
          onPress={() => 
            Linking.openURL('http://rapprogtrain.com/')
            }
        >
          <Text style={[styles.textButton, {backgroundColor: this.state.theme == "dark" ?
          "#a10000" : "#db0202"}]}>Посетить наш сайт</Text>
        </TouchableOpacity>

        </View>
        </View>
        </ScrollView>
        )
    }
}


const styles = StyleSheet.create({

  main :{
    padding: 10,
  },

  viewTopVersion :{ 
      paddingTop: 10,
      alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily:"OpenSans-R",
    textAlign: "center",
    paddingTop: 20,
    fontSize: 16
  },
  
  textButton: {
    fontFamily:"OpenSans-R",
    padding: 10,
    color: 'white',
    borderRadius: 3,
    fontSize: 16
  },

  button: {
      paddingTop: 30
  }
  
})


  const RootStack = createStackNavigator(
    {
      AboutScreen: {
        screen: AboutScreen,
      },
    },
    {
      initialRouteName: 'AboutScreen',
    }
  );


  const AppContainer = createAppContainer(RootStack);

  export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }
