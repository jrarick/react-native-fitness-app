import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CustomButton(props) {

  return (
    <View style={{ ...props.style, ...styles.container }}>
      <TouchableOpacity 
        activeOpacity={0.6}
        onPress={props.onPress}
      >
        <LinearGradient
          colors={['#0FBED8', '#1BD7BB']}
          style={styles.linearGradient}
          start={[0, 0]}
          end={[1.0, 1.0]}
        >
          <Text
            style={styles.buttonText}
          >{props.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 26,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5
  },
  linearGradient: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 26
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'nunito-bold',
    textAlign: 'center'
  }
});