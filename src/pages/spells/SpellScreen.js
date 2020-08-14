import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableHighlight} from 'react-native'
import axios from 'axios';
import { SearchBar } from 'react-native-elements';

import Loader from '../../components/loader/Loader'



class SpellScreen extends Component {

    constructor(props) {
        super(props);
        this.filteredSpells = []
    }

    state = {
        spells: {},
        ready: false,
        search: ''
    }

    componentDidMount() {
        axios.get('https://www.dnd5eapi.co/api/spells/')
        .then(response => {
            this.setState(
                {
                    spells: response.data.results, 
                    ready: true
                },
                function() {
                    this.filteredSpells = response.data.results;
                }
            );
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

    SearchFilterFunction(text) {
        //passing the inserted text in textinput
        const newData = this.filteredSpells.filter(function(item) {
          //applying filter for the inserted text in search bar
          const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
    
        this.setState({
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          spells: newData,
          search: text,
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
        <View>
            <SearchBar
                round
                searchIcon={{ size: 24 }}
                onChangeText={text => this.SearchFilterFunction(text)}
                onClear={text => this.SearchFilterFunction('')}
                placeholder="Type Here..."
                value={this.state.search}
            />
            <ScrollView style={styles.scrollView}>
                {spells}
            </ScrollView>
        </View>

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