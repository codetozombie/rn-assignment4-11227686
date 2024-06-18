// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the Home Page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});

export default HomeScreen;
