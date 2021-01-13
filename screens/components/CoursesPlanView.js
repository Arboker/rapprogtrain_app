
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

class CoursesPlanView extends Component {

    render() {
        return (


    <View style={{paddingTop:5}}>

          <View style={this.props.viewStyleBox}>

          <View style={{flexDirection: 'row'}}>

          <View style={{paddingRight:10}}>
        <Text style={[this.props.numTopBox, {color: this.props.theme == "dark" ? 
        dark.colors.color : light.colors.color}]}>{this.props.number}</Text>
          </View>
          <Text style={[this.props.topHomeCourses,{color: this.props.theme == "dark" ? 
        dark.colors.color : light.colors.color}]}>{this.props.title}</Text>
          </View>

          </View>
  </View>


        );
    }
}


export default CoursesPlanView;
