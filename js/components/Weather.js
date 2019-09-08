import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground
} from 'react-native';


export default class App extends Component<{}> {
  render() {

    return (
      <View style={styles.container}>
            <Text style={styles.text}>Weather</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    text:{
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000',
    }
});
