import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import Route from '@routes/Route';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Prompt-Light',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;
