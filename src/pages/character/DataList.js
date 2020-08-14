import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet} from 'react-native'
import axios from 'axios';
import Loader from '../../components/loader/Loader';
import ModalComponent from '../../components/modal/Modal'
import { connect } from 'react-redux';

import CharacterFrame from './CharacterFrame'

class dataComponent extends Component {

    state = {
        data: {},
        dataType: "",
        ready: false
    }



    componentDidMount() {
        const { param } = this.props.route.params;
        this.setState({dataType: param})
        axios.get(`https://www.dnd5eapi.co/api/${param}`)
        .then(response => {
            this.setState({data: response.data.results})
            this.setState({ready: true})
        })
        .catch(error => {
            console.log(error);
        }); 
    }

    render() {  
        let data = (
            <Loader/>
        )

    if(this.state.ready) {
        data = this.state.data.map((data, index) => 
            <View key={index} style={styles.character}>
                <Text style={styles.name}>{data.name}</Text>
                <ModalComponent dataName={ this.state.dataType } charId={this.props.route.params.itemId} dataUrl={data.url}/>
            </View>
        )
    }

    return (
        <View style={{flex: 1, justifyContent: 'center' }}>
            <ScrollView style={styles.scrollView}>
                {data}
            </ScrollView>
            <CharacterFrame/>
        </View>
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

const mapStateToProps = (state) => {
    return {
      name: state.character.name,
      class: state.character.class,
      race: state.character.race,
    }
}


export default connect(mapStateToProps)(dataComponent);