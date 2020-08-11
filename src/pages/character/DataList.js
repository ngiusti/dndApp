import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet} from 'react-native'
import axios from 'axios';
import Loader from '../../components/loader/Loader';
import ModalComponent from '../../components/modal/Modal'

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
            console.log(response.data)
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
                <ModalComponent dataName={ this.state.dataType } dataUrl={data.url}/>
            </View>
        )
    }

    return (
        <ScrollView style={styles.scrollView}>
            {data}
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

export default dataComponent