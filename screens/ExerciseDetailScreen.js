import React, { useState, useContext } from 'react';
import { View, Text, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import DayPicker from '../components/DayPicker';
import CustomButton from '../components/CustomButton';
import ExerciseContext from '../store/exerciseContext';

export default function ExerciseDetailScreen(props) {
  const { state, dispatch } = useContext(ExerciseContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedExercise, setUpdatedExercise] = useState(state.targetedExercise);

  function saveChangeHandler() {
    dispatch({ type: 'SAVE_EXERCISE', updatedExercise });
    setIsEditing(false);
    Alert.alert('Success', 'Changes were successfully saved.', [{ text: 'OK' }]);
    if (updatedExercise.day !== state.targetedExercise.day) {
      props.navigation.pop();
    }
  }

  function removeExerciseHandler() {
    dispatch({ type: 'REMOVE_EXERCISE' });
    Alert.alert('Success', 'Exercise was removed.', [{ text: 'OK' }]);
    props.navigation.pop();
  }

  return (
    <View>
      {isEditing ? (
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1 }}
          keyboardVerticalOffset={100}
        >
          <Card style={styles.editExerciseCard}>
            <Input
              label="Weight:"
              keyboardType="numeric"
              value={updatedExercise.weight}
              textChangeHandler={text => setUpdatedExercise({ ...updatedExercise, weight: text })}
            />
            <Input
              label="Reps:"
              keyboardType="numeric"
              value={updatedExercise.reps}
              textChangeHandler={text => setUpdatedExercise({ ...updatedExercise, reps: text })}
            />
            <Input
              label="Sets:"
              keyboardType="numeric"
              value={updatedExercise.sets}
              textChangeHandler={text => setUpdatedExercise({ ...updatedExercise, sets: text })}
            />
            <View style={{ padding: 10 }}>
              <Text style={styles.text}>Day:</Text>
              <DayPicker
                selectedValue={updatedExercise.day}
                onValueChange={itemValue => setUpdatedExercise({ ...updatedExercise, day: itemValue })}
              />
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Save Changes"
                onPress={saveChangeHandler}
              />
              <CustomButton
                title="Cancel"
                onPress={() => setIsEditing(false)}
              />
            </View>
          </Card>
        </KeyboardAvoidingView>
      ) : (
        <Card style={styles.exerciseDetailCard}>
          <View style={styles.exerciseDetail}>
            <Text style={styles.text}>{`Weight: ${state.targetedExercise.weight}`}</Text>
          </View>
          <View style={styles.exerciseDetail}>
            <Text style={styles.text}>{`Reps: ${state.targetedExercise.reps}`}</Text>
          </View>
          <View style={styles.exerciseDetail}>
            <Text style={styles.text}>{`Sets: ${state.targetedExercise.sets}`}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Edit Details"
              onPress={() => setIsEditing(true)}
            />
            <CustomButton
              title="Remove Exercise"
              onPress={removeExerciseHandler}
            />
          </View>
        </Card>
      )}
    </View>
  );
}

ExerciseDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('exerciseName')
  }
};

const styles = StyleSheet.create({
  headerRight: {
    fontFamily: 'nunito',
    fontSize: 18
  },
  text: {
    fontFamily: 'nunito',
    fontSize: 18
  },
  editExerciseCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 50 
  },
  exerciseDetailCard: {
    marginHorizontal: 15,
    marginTop: 50
  },
  exerciseDetail: {
    marginLeft: 25,
    marginBottom: 5
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});