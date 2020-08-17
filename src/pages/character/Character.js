import React, { Component } from 'react'
import { Text, View , Button, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'



class CharacterScreen extends Component {

  componentDidUpdate(){

  }

  addCharacter = () => {
    this.props.addCharacter({name: 'New Character', class: 'Pick One', race: 'Pick One'})
  }

  editCharacter = (index) => {
    this.props.navigation.navigate('New Character', {itemId: index})
  }

  playerScreen = (index) => {
    this.props.navigation.navigate('Player', {itemId: index, name: this.props.characters[index].name.toUpperCase()})
  }

  render() {  
    let characterList = null


    if  (this.props.characters){


      characterList = this.props.characters.map((character, index) => 
        <TouchableOpacity  key={index} onPress={() => this.playerScreen(index)}>
          <View style={styles.CharacterWrap}>
            <View>
              <Text>{character.name}</Text>
              <Text>{character.class}</Text>
              <Text>{character.race}</Text>
            </View>
            <TouchableOpacity style={styles.editCharacterButton} onPress={() => this.editCharacter(index)}>
              <FontAwesomeIcon style={styles.Icon} size={ 40 } icon={ faUserEdit } />
            </TouchableOpacity>
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
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.character.characters,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
  },
  editCharacterButton: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
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