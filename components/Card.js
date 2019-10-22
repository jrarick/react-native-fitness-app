import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View> 
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    backgroundColor: '#F8F8FF',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5
  }
});