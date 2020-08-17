import React, { Component } from 'react'
import { Text, Button, ScrollView, StyleSheet, TextInput, View} from 'react-native'
import { connect } from 'react-redux'

import CharacterFrame from './CharacterFrame'

class NewCharacterScreen extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        ready: false,
        text: '',
    }


    checkState = () => {
        if(this.state.text.length > 0){
            this.props.changeName(this.props.route.params.itemId, this.state.text)
        }else {
            console.log('name too short')
        }
    }


  render() {  
    return (
        <View style={{flex: 1, justifyContent: 'center' }}>
            <ScrollView style={styles.scrollView}>
                <TextInput
                    style={styles.textInput}
                    placeholder= "Character Name"
                    placeholderTextColor = "#999"
                    onChangeText={(text) => this.setState({text})}
                    defaultValue={this.state.text}
                />
                <Button title={"submit"} onPress={() => this.checkState()}/>
                <Button title={'Classes'} onPress={() => this.props.navigation.navigate('DataList', {param: 'classes', itemId: this.props.route.params.itemId})}/>
                <Button title={'Races'} onPress={() => this.props.navigation.navigate('DataList', {param: 'races', itemId: this.props.route.params.itemId})}/>
            </ScrollView>
            <CharacterFrame charId={this.props.route.params.itemId}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    textInput: {
        backgroundColor: '#ddd',
        padding: 30,
        margin: 30,
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

const mapDispatchToProps = dispatch => {
    return{
        changeName: (charId, name) => dispatch({ type: 'CHANGE_NAME', id: charId, value: name}),
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

export default connect(mapStateToProps, mapDispatchToProps)(NewCharacterScreen)