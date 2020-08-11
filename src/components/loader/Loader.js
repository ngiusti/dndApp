import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'


class Loader extends Component {
  render() {  
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#000" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 40,
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
  });

export default Loader