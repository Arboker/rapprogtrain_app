import React from 'react';

export var setting = {
  setting: {
    theme: global.themeNow,
    anotherTheme: "dark",
    },
};

export const ThemeContext = React.createContext(
  setting
);