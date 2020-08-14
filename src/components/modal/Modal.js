import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView
} from "react-native";
import axios from 'axios';
import { connect } from 'react-redux'


class ModalCompoent extends Component {
  state = {
    modalVisible: false,
    ready: false,
    data: {}
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  componentDidMount() {
    axios.get(`https://www.dnd5eapi.co${this.props.dataUrl}`)
      .then(response => {
        this.setState({data: response.data})
        this.setState({ready: true})
      })
      .catch(error => {
          console.log(error);
      });
  }

  dataType(){
    if(this.props.dataName == "classes") {
      let savingThrows = ""
      if(this.state.ready){
        savingThrows = this.state.data.saving_throws.map((data, index) => 
          <Text key={index}>{data.name}</Text>
        )
      }
      return (
        <ScrollView style={styles.modalContent}>
          <Text>{this.state.data.name}</Text>
          <Text>{this.state.data.hit_die}</Text>
          {savingThrows}
        </ScrollView>
      )
    }

    if(this.props.dataName == "races") {
      let abilityBonus = ""
      let languages = ""
      let traits = ""
      let startingProf = ""
      if(this.state.ready){
        abilityBonus = this.state.data.ability_bonuses.map((data, index) => 
          <Text key={index}>{data.name} - {data.bonus}</Text>
        )
        languages = this.state.data.languages.map((data, index) => 
          <Text key={index}>{data.name}</Text>
        )
        traits = this.state.data.traits.map((data, index) => 
          <Text key={index}>{data.name}</Text>
        )
        startingProf = this.state.data.starting_proficiencies.map((data, index) => 
          <Text key={index}>{data.name}</Text>
        )
      }
      return (
        <ScrollView style={styles.modalContent}>
          <Text>{this.state.data.name}</Text>
          <Text>{this.state.data.size}</Text>
          <Text>{this.state.data.speed} feet</Text>
          <Text>{this.state.data.age}</Text>
          {abilityBonus}
          {languages}
          {traits}
          {startingProf}
        </ScrollView>
      )
    }
  }

  changeProperty = () => {
    const { modalVisible } = this.state;
    if(this.props.dataName == "classes") {
      this.props.changeClass(this.props.charId, this.state.data.name)
      this.setModalVisible(!modalVisible);
    }
    if(this.props.dataName == "races") {
      this.props.changeRace(this.props.charId, this.state.data.name)
      this.setModalVisible(!modalVisible);
    }
  }



  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {this.dataType()}
              <View style={styles.buttonWrap}>
                <TouchableHighlight style={{ ...styles.openButton }}
                  onPress={() => this.changeProperty()}
                >
                  <Text style={styles.textStyle}>Select</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.openButton }}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={styles.textStyle}>X Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Check Details</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    width: '80%',
  },
  modalContent: {
    textAlign: 'center',
    margin: 10,
  },
  openButton: {
    backgroundColor: "black",
    padding: 10,
    elevation: 2,
    marginHorizontal: 10,
  },
  buttonWrap: {
    flexDirection: 'row',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 30,
    marginBottom: 15,
    textAlign: "center"
  }
});

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
    changeRace: (charId, race) => dispatch({ type: 'CHANGE_RACE',id: charId, value: race }),
    changeClass: (charId, charClass) => dispatch({ type: 'CHANGE_CLASS',id: charId, value: charClass }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCompoent);
