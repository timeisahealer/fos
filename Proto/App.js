import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Event from './Event';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Event></Event>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
