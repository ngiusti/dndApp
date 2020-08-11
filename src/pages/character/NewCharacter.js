import React, { Component } from 'react'
import { Text, Button, ScrollView, StyleSheet} from 'react-native'

class NewCharacterScreen extends Component {

    state = {
        ready: false
    }

  render() {  

    return (
        <ScrollView style={styles.scrollView}>
            <Button title={'Races'} onPress={() => this.props.navigation.navigate('DataList', {param: 'races'})}/>
            <Button title={'Classes'} onPress={() => this.props.navigation.navigate('DataList', {param: 'classes'})}/>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    scrollView: {
    },
    character: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    name: {
        fontSize: 30,
        color: 'black',
    }
});

export default NewCharacterScreen