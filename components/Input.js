import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.textInput}
        {...props}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  label: {
    textAlign: 'left',
    fontFamily: 'nunito',
    fontSize: 18
  },
  textInput: {
    fontFamily: 'nunito',
    fontSize: 18,
    width: 150,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1
  }
});