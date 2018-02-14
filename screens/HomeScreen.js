import React, { Component } from 'react';
import { View, WebView, Text } from 'react-native';

const api = 'https://alenkart.github.io/crypto-timer-react/';

class HomeScreen extends Component {  

  static navigationOptions = {
    title: 'Crypto Timer',
    headerStyle: { backgroundColor: '#2c3e50' },
    headerTitleStyle: { color: 'white' },
  };

  render() {
    return (
      <WebView source={{ uri : api }}/>);
  }
}

export default HomeScreen;