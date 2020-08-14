import React, { Component } from 'react'
import { Text, View , Button, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';

import CharacterFrame from './CharacterFrame';


class CharacterScreen extends Component {

  componentDidUpdate(){
    console.log('hello')
  }

  addCharacter = () => {
    this.props.addCharacter({name: 'New Character', class: 'Pick One', race: 'Pick One'})
  }

  editCharacter = (index) => {
    this.props.navigation.navigate('New Character', {itemId: index})
  }

  render() {  
    let characterList = null
    if  (this.props.characters){
      characterList = this.props.characters.map((character, index) => 
        <TouchableOpacity  key={index} onPress={() => this.editCharacter(index)}>
          <View style={styles.CharacterWrap}>
            <Text>{character.name}</Text>
            <Text>{character.class}</Text>
            <Text>{character.race}</Text>
          </View>
        </TouchableOpacity>
      )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ flex: 0.25, justifyContent: 'center' }}>
            <Button title={"Add Character"} onPress={() => this.addCharacter()}/>
          </View>
          <View style={styles.TitleWrap}>
            <Text style={styles.Title}>Character List</Text>
          </View>
          <ScrollView style={{ flex: 1 }}>
            {characterList}
          </ScrollView>
          <CharacterFrame/>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.character.characters,
    name: state.character.name,
    class: state.character.class,
    race: state.character.race,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCharacter: (character) => dispatch({ type: 'ADD_CHARACTER', item: character }),
  }
}


const styles = StyleSheet.create({
  CharacterWrap: {
    backgroundColor: 'darkgray',
    margin: 10,
    padding: 20,
  },
  Title: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 32,
  },
  TitleWrap: {
    borderBottomWidth: 3,
    marginBottom: 10,
    borderColor: 'black',
    width: '80%',
    alignSelf: 'center'
  }
})



export default  connect(mapStateToProps, mapDispatchToProps)(CharacterScreen)