import React from 'react';
import * as Font from 'expo-font';

import { Text, View } from 'react-native';

  
import {ThemeContext, themes} from './UserSet';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <Text>
            {ThemeContext._currentValue}
      </Text>
    );
  }
}

ThemedButton.contextType = ThemeContext;
  
  export default class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        theme: themes.light,
      };
  
    
    }
  
    render() {
      // ThemedButton внутри ThemeProvider использует
      // значение светлой UI-темы из состояния, в то время как
      // ThemedButton, который находится вне ThemeProvider,
      // использует тёмную UI-тему из значения по умолчанию
      return (
        <View style={{paddingTop: 100}}>
           
          <View>
            <ThemedButton />
          </View>
        </View>
      );
    }
  }

console.log(ThemeContext._currentValue)