
//note the captial letter
/*import ListItem from './src/components/Listitem/Listitem';

//add header from prev app
import Header from './src/components/Header';
import Footer from './src/components/Footer';*/

import React, { Component } from 'react';
import { Text, View,Stylesheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}