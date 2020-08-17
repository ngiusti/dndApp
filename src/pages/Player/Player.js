import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';




class Player extends Component {

  render() {
    let savingThrows = null
    let savingThrowsArray = []
    let abilityBonuses = null
    let abilityBonusesArray = []

    if(this.props.characters) {
        this.props.characters.map((character, index) => {
            if(character.savingThrows){
              savingThrows = character.savingThrows.join(" ")
              savingThrowsArray.push(savingThrows);
            }
  
            if(character.bonuses){
              abilityBonuses = character.bonuses.join(" ")
              abilityBonusesArray.push(abilityBonuses);
            }
          }
        )
    }

    return (
      <View>
        <Text>Class: {this.props.characters[this.props.route.params.itemId].class}</Text>
        <Text>Race: {this.props.characters[this.props.route.params.itemId].race}</Text>
        <Text>Hit Dice:  {this.props.characters[this.props.route.params.itemId].hitDice}</Text>
        <Text>Saving throws: {savingThrowsArray[this.props.route.params.itemId]}</Text>
        <Text>Ability Bonuses: {abilityBonusesArray[this.props.route.params.itemId]}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      characters: state.character.characters,
    }
  }

export default  connect(mapStateToProps)(Player)