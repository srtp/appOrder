/* eslint-disable import/extensions */
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { store } from './src/stores/store';
import { name as appName } from './app.json';
import App from './App';

export default function Main() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
