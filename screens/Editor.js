
import React from 'react';
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, AsyncStorage, Linking } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { WebView } from 'react-native-webview';

import {
  AdMobBanner
} from 'expo-ads-admob';

import { light, dark } from '../assets/theme'


class Editor extends React.Component {
  constructor() {
    super();
    this.state = { height: 0, theme: "", loading: true, };
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: "Редактор",
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: global.themeNow == "dark" ? "#171717" : "white",
        color: global.themeNow == "dark" ? "white" : "black",
        elevation: 0,
        borderBottomWidth: 1,
        borderBottomColor: global.themeNow == "dark" ? "#303030" : "#dddddd",
      },
      headerTitleStyle: {
        color: global.themeNow == "dark" ? "white" : "black"
      },
      cardStyle: { backgroundColor: global.themeNow == "dark" ? "#212121" : "white" },
    };
  };

  async componentDidMount() {

    const value = await AsyncStorage.getItem('theme')
    this.setState({
      theme: value,
      loading: false
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


  render() {
    const uri = 'http://rapprogtrain.com/server-side/small_mobile_ad.php';
    return (

      <View style={{
        flex: 1, backgroundColor: this.state.theme == "dark" ? dark.colors.background :
          light.colors.background
      }}>



        <WebView style={{
          flex: 1, backgroundColor: this.state.theme == "dark" ? dark.colors.background :
            light.colors.background
        }}

          source={{ uri: 'http://rapprogtrain.com/newEditorToMyApp/?theme=' + global.themeNow }}
          onLoadEnd={() => {
            this.setState({ loading: false });
          }}
        />

        {
          this.state.loading && (
            <View style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: global.themeNow == "dark" ? "#212121" : "white",  // your color 
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ActivityIndicator />
            </View>
          )
        }

        <View style={!this.state.hasAd ? { height: 0 } : {}}>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center', backgroundColor: global.themeNow == "dark" ? "#212121" : "white"
          }}>
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
        <View style={{ height: 60, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" }}>
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
    );
  }
}

const styles = StyleSheet.create({

  offlineText: {
    color: '#fff',
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default createStackNavigator(
  {
    Editor: {
      screen: Editor,
    },
  },
  {
    initialRouteName: 'Editor',
  }
);

