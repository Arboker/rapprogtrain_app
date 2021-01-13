
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import {
  AdMobBanner
} from 'expo-ads-admob';

 class MediumAdmobAd extends React.Component {
  constructor() {
    super();
    this.state = { height: 0 };
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
    const uri = 'http://rapprogtrain.com/server-side/mobile_ad.php';
    return (

<View style={{paddingTop:15}}>

<View style={!this.state.hasAd ? { height: 0 } : {}}>
<View style={{flex: 1,
  justifyContent: 'center',
  alignItems: 'center' }}>
  <AdMobBanner
    bannerSize="mediumRectangle"
    adUnitID="ca-app-pub-3371284819677164/9624543779" // Test ID, Replace with your-admob-unit-id
    setTestDeviceID="EMULATOR"
    servePersonalizedAds // true or false
    onDidFailToReceiveAdWithError={this.bannerError}
    onDidFailToReceiveAdWithError={this.bannerError}
      onAdViewDidReceiveAd={this.adReceived.bind(this)}
      onAdViewWillPresentScreen={this.adClicked.bind(this)} />
  </View>
  </View>    

<WebView
  ref={(ref) => { this.webview = ref; }}
  source={{ uri }}
  onNavigationStateChange={(event) => {
    if (event.url !== uri) {
      this.webview.stopLoading();
      Linking.openURL(event.url);
    }
  }}
  style={this.state.hasAd ? { height: 0, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" } : { height: 260, backgroundColor: global.themeNow == "dark" ? "#212121" : "white" }}
  />    
 </View> 

    );
  }
}


  export default MediumAdmobAd;
