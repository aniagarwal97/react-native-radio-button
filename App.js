import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/AssetExample';
import Options from './components/options'
// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      radioColor: 'rgb(255, 255, 255)'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          I am a question.
        </Text>
        <Options/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
