
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';

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
    return (


    <View style={!this.state.hasAd ? { height: 50 } : {}}>
<View style={{paddingTop:15, flex: 1,
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
</View></View>


 


    );
  }
}


  export default MediumAdmobAd;
