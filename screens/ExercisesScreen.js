import React, { useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

import DayPicker from '../components/DayPicker';
import ExerciseContext from '../store/exerciseContext';

export default function ExercisesScreen(props) {
  const { state, dispatch } = useContext(ExerciseContext);
  const [dayOfWeek, setDayOfWeek] = useState('Sunday');

  function renderSeparator() {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 25 }}>
      <DayPicker
        selectedValue={dayOfWeek}
        onValueChange={itemValue => setDayOfWeek(itemValue)}
      />
      </View>
      <FlatList
        style={{ marginTop: 15 }}
        data={state.exercises.filter(exercise => exercise.day === dayOfWeek)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={() => {
          return(
            <View style={{ marginLeft: 25 }}>
              <Text style={styles.text}>{`There's no exercises for ${dayOfWeek} yet.`}</Text>
            </View>
          );
        }}
        renderItem={itemData => (
          <TouchableOpacity
            style={styles.exercise}
            onPress={() => {
              dispatch({ type: 'SELECT_EXERCISE', exercise: itemData.item });
              props.navigation.navigate('ExerciseDetail', {
                exerciseName: itemData.item.name,
                exerciseDay: itemData.item.day
              });
            }}
          >
            <Text style={styles.text}>{itemData.item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

ExercisesScreen.navigationOptions = {
  headerTitle: 'Your Exercise Plan'
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  text: {
    fontFamily: 'nunito',
    fontSize: 18
  },
  exercise: {
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#F8F8FF',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5
  }
});