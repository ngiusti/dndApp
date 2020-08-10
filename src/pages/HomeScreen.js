import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios';


class HomeScreen extends Component {


  render() {  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home</Text>
        </View>
    );
  }
}

export default HomeScreen