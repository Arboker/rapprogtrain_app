import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import { light, dark } from '../../assets/theme'

import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from "react-native";

class CoursesPlan extends Component {

    render() {
        return (


          <View style={this.props.styleBox}>

          <View style={{flexDirection: 'row'}}>

          <View style={{paddingRight:10}}>
        <Text style={[this.props.styleTextBox, {color: this.props.theme == "dark" ? 
        dark.colors.color : light.colors.color}]}>{this.props.number}</Text>
          </View>
          <Text style={[this.props.style,{color: this.props.theme == "dark" ? 
        dark.colors.color : light.colors.color}]}>{this.props.title}</Text>
          </View>
             <Icon name='ios-arrow-forward' size={18} style={{color: this.props.theme == "dark" ? "#a1a1a1" :
      '#727272',alignSelf: "center", marginRight:10}} />

          </View>

        );
    }
}




export default CoursesPlan;
