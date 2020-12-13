import React, {PureComponent} from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from "react-redux";
import AppContainer from "./routes/index";
import {
  ThemeContext,
} from "./components/Shared/Utils/themeContext";
import { getBaseStyleSheet } from "./assets/utils/index";
import configureStore from "./store";



const initialState = {};
export const sharedFunctions = {};
export const store = configureStore(initialState, sharedFunctions);

export default class App extends PureComponent  {
  constructor(props){
    super(props);
  }
  state = {
    theme: "light", //Type: <string> "dark" || "light" Used for change App state for theme and causing a re render,
  };

  toggleTheme = (setTheme) => {
    this.setState({ theme: setTheme });
  };
  render(){
    const { theme } = this.state;
    const themeProvider = {
      theme: { type: theme, style: getBaseStyleSheet(theme) },
      toggleTheme: this.toggleTheme,
    };
  return (
    <Provider store={store}>
    <ThemeContext.Provider value={themeProvider}>
      <SafeAreaView style={styles.container}>
          <AppContainer/>
      </SafeAreaView>
    </ThemeContext.Provider>
  </Provider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
