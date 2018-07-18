import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export default class Options extends Component {
  constructor(){
    super();
    this.state = {
      radioColor: 'rgb(255, 255, 255)'
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity style={{borderColor: 'green', borderWidth: 1, borderRadius: 20, width: 25, height: 25}} onPress = {()=>{this.setState({radioColor: 'blue'})}}>
          <TouchableOpacity style={{borderColor: this.state.radioColor, borderRadius: 20, width: 15, height: 15, backgroundColor: this.state.radioColor, marginTop: 4, marginLeft: 4}}>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}