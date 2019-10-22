import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, Text, Alert, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import DayPicker from '../components/DayPicker';
import CustomButton from '../components/CustomButton';
import ExerciseContext from '../store/exerciseContext';

export default function AddExerciseScreen(props) {
  const initialState = { name: '', weight: '', reps: '', sets: '', day: 'Sunday' };
  const [exercise, setExercise] = useState(initialState);
  const { dispatch } = useContext(ExerciseContext);

  function handleSubmit() {
    if (
      exercise.name.trim() !== '' &&
      exercise.weight.trim() !== '' &&
      exercise.reps.trim() !== '' &&
      exercise.sets.trim() !== ''
    ) {
      dispatch({ type: 'ADD_EXERCISE', exercise });
      setExercise(initialState);
      Alert.alert('Success', `${exercise.name} was sucessfully added to your exercises.`, [{ text: 'OK' }]);
    } else {
      Alert.alert('Error', 'Please make sure all fields are completed and try again.', [{ text: 'OK' }]);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <Card style={styles.addExerciseCard}>
        <Input
          label="Name:"
          value={exercise.name}
          onChangeText={text => setExercise({ ...exercise, name: text })}
        />
        <Input
          label="Weight:"
          keyboardType="numeric"
          value={exercise.weight}
          onChangeText={text => setExercise({ ...exercise, weight: text })}
        />
        <Input
          label="Reps:"
          keyboardType="numeric"
          value={exercise.reps}
          onChangeText={text => setExercise({ ...exercise, reps: text })}
        />
        <Input
          label="Sets:"
          keyboardType="numeric"
          value={exercise.sets}
          onChangeText={text => setExercise({ ...exercise, sets: text })}
        />
        <View>
          <View style={{ padding: 10 }}>
            <Text style={styles.pickerLabel}>Day:</Text>
            <DayPicker
              selectedValue={exercise.day}
              onValueChange={itemValue => setExercise({ ...exercise, day: itemValue })}
            />
          </View>
          <CustomButton
            title="Add Exercise"
            style={styles.button}
            onPress={handleSubmit}
          />
        </View>
      </Card>
    </KeyboardAvoidingView>
  );
}

AddExerciseScreen.navigationOptions = {
  headerTitle: 'Add An Exercise'
};

const styles = StyleSheet.create({
  addExerciseCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 50
  },
  pickerLabel: {
    textAlign: 'left',
    fontFamily: 'nunito',
    fontSize: 18
  },
  button: {
    marginVertical: 15
  }
});