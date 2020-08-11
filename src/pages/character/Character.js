import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'
import axios from 'axios';


class CharacterScreen extends Component {


  render() {  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Character</Text>
          <Button title={'character'} onPress={() => this.props.navigation.navigate('New Character')}>New Character</Button>
        </View>
    );
  }
}

export default CharacterScreen