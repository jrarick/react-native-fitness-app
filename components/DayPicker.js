import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';

export default function DayPicker(props) {
  return (
    
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={props.selectedValue}
          onValueChange={props.onValueChange}
          textStyle={styles.pickerItem}
        >
          <Picker.Item style={styles.pickerItem} label="Sunday" value="Sunday" />
          <Picker.Item style={styles.pickerItem} label="Monday" value="Monday" />
          <Picker.Item style={styles.pickerItem} label="Tuesday" value="Tuesday" />
          <Picker.Item style={styles.pickerItem} label="Wednesday" value="Wednesday" />
          <Picker.Item style={styles.pickerItem} label="Thursday" value="Thursday" />
          <Picker.Item style={styles.pickerItem} label="Friday" value="Friday" />
          <Picker.Item style={styles.pickerItem} label="Saturday" value="Saturday" />
        </Picker>
      </View>

  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: 'white',
    height: 50,
    width: 150
  },
  picker: {
    height: 50,
    width: 150
  },
  pickerItem: {
    fontFamily: 'nunito',
    fontSize: 18
  }
});