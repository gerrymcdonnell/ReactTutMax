
//note the captial letter
/*import ListItem from './src/components/Listitem/Listitem';

//add header from prev app
import Header from './src/components/Header';
import Footer from './src/components/Footer';*/

import React, { Component } from 'react';
import { Text, View,Stylesheet } from 'react-native';

//import customcomponet nb. convention is capital letter
import FetchLocation from './src/components/FetchLocation';


export default class HelloWorldApp extends Component {

getUserLocationHandler=()=>{
  console.log('onPress');
  navigator.geolocation.getCurrentPosition(position=>{
    console.log(position);
  },err=>console.log(err));
}

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
      </View>
    );
  }
}