import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import axios from 'axios';

import Loader from '../../components/loader/Loader'


export default class Spell extends Component {
    
    state = {
        spell: {},
        ready: false
    }

    componentDidMount() {
        const { spell } = this.props.route.params;
        console.log(spell)
        axios.get('https://www.dnd5eapi.co' + spell)
        .then(response => {
            this.setState({spell: response.data})
            this.setState({ready: true})
        })
        .catch(error => {
            console.log(error);
        });
    }


    render() {
        let classes = (
            <Loader/>
        )       
        let components = []        
        let desc = []        
        if(this.state.ready) {
            classes = this.state.spell.classes.map((charClass, index) =>
                <View key={index}>
                    <Text>{charClass.name}</Text>
                </View>
            );
            components = this.state.spell.components.map((components, index) =>
                <View key={index}>
                    <Text>{components}</Text>
                </View>
            );
            desc = this.state.spell.desc.map((desc, index) =>
                <View key={index}>
                    <Text>{desc}</Text>
                </View>
            );
        }

        return (
            <View>
                <Text>{this.state.spell.name}</Text>
                <Text>{this.state.spell.duration}</Text>
                <Text>{this.state.spell.range}</Text>
                <Text>{this.state.spell.casting_time}</Text>
                <Text>{this.state.spell.level}</Text>
                {classes}
                {components}
                {desc}
            </View>
        )
    }
}