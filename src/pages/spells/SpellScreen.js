import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableHighlight} from 'react-native'
import axios from 'axios';

import Loader from '../../components/loader/Loader'



class SpellScreen extends Component {

    state = {
        spells: {},
        ready: false
    }

    componentDidMount() {
        axios.get('https://www.dnd5eapi.co/api/spells/')
        .then(response => {
            this.setState({spells: response.data.results})
            this.setState({ready: true})
        })
        .catch(error => {
            console.log(error);
        });
    }

    spellUrl(spellURI) {
        this.props.navigation.navigate('Spell', {
            spell: spellURI,
        });
    }



  render() {  
    let spells = (
        <Loader/>
    )
    if(this.state.ready) {
        spells = this.state.spells.map((spell, index) =>
            <TouchableHighlight key={index} onPress={() => this.spellUrl(spell.url)} underlayColor="white">
                <View style={styles.ItemWrap}>
                    <Text style={styles.Item}>{spell.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }


    return (
        <ScrollView style={styles.scrollView}>
            {spells}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    ItemWrap: {
      flex: 1,
      backgroundColor: '#ddd',
      padding: 10,
      margin: 5,
    },
    Item: {
        fontSize: 30,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });

export default SpellScreen;