import React, { Component } from "react";


import {
    View,
    Text,
    Image,
    ActivityIndicator
} from "react-native";

import { light, dark } from '../../assets/theme'

class CoursesFragment extends Component {



    render() {
        return (

           <View style={this.props.viewBox}>
                           <View style={{ flex: 2 }}>


                               <Image
                                 source={this.props.imageUrl}
                                style={this.props.imageStyle}
                                 PlaceholderContent={<ActivityIndicator />}
                               />

                           </View>
                    <Text style={[this.props.textStyle, {backgroundColor: this.props.theme == "dark" ? "#2e2e2e" :
    '#efefef', color: this.props.theme == "dark" ? "white" :
    'black'}]}>{this.props.title}</Text>
           </View>

        );
    }
}
export default CoursesFragment;
