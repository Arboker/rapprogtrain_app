
import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import SyntaxHighlighter from 'react-native-syntax-highlighter'; // 2.0.0
import { tomorrow } from 'react-syntax-highlighter/styles/prism' // 7.0.1

class TextCourseTitle extends Component {

    render() {
        return (

          <View style={{paddingTop:10, padding:0}}>
              <SyntaxHighlighter
                  {...this.props}
                  style={tomorrow}
                  customStyle={{paddingLeft: 10, margin: 0}}
                  language={this.props.language}
                  fontSize={14}
                  highlighter="prism"
                >
                {this.props.codeText}
                </SyntaxHighlighter>
          </View>

        );
    }
}


export default TextCourseTitle;
