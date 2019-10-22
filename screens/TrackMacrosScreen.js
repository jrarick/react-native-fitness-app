import React, { useState, useContext } from 'react';
import { View, KeyboardAvoidingView, Text, Alert, StyleSheet } from 'react-native';

import ExerciseContext from '../store/exerciseContext';
import CustomButton from '../components/CustomButton';
import Card from '../components/Card';
import Input from '../components/Input';

export default function TrackMacrosScreen(props) {
  const { state, dispatch } = useContext(ExerciseContext);
  const initialState = { fats: '', carbs: '', proteins: '' };
  const [mealMacros, setMealMacros] = useState(initialState);

  function handleSubmit() {
    if (mealMacros.fats < 0 || mealMacros.carbs < 0 || mealMacros.proteins < 0) {
      Alert.alert(`Well that won't work.`, `You can't eat negative number of nutrients. Try a positive number.`, [{ text: 'OK' }]);
    }
    dispatch({ type: 'UPDATE_MACROS', mealMacros });
    setMealMacros(initialState);
  }

  if (
    state.macros.fats === 0 &&
    state.macros.carbs === 0 &&
    state.macros.proteins === 0
  ) {
    return (
      <View>
        <View>
          <Text>You haven't entered any nutrition information yet.</Text>
        </View>
        <CustomButton
          title="Plan My Nutrition Goals"
          onPress={() => {
            props.navigation.navigate('PlanMacros');
          }}
        />
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={100}
    >
      <View style={styles.trackerContainer}>
        <Text style={styles.text}>
          {state.macros.fats >= 0 ? (
            `You have ${state.macros.fats}g of fats left today.`
          ) : (
            `You are ${Math.abs(state.macros.fats)}g over your fat consumption limit today.`
          )}
        </Text>
        <Text style={styles.text}>
          {state.macros.carbs >= 0 ? (
            `You have ${state.macros.carbs}g of carbs left today.`
          ) : (
            `You are ${Math.abs(state.macros.carbs)}g over your carb consumption limit today.`
          )}
        </Text>
        <Text style={styles.text}>
          {state.macros.proteins >= 0 ? (
            `You have ${state.macros.proteins}g of proteins left today.`
          ) : (
            `You are ${Math.abs(state.macros.proteins)}g over your protein consumption limit today.`
          )}
        </Text>
      </View>
      <Card style={styles.updateMacrosCard}>
        <View><Text style={styles.text}>Add the macro count of your meal when you eat to update your remaining macros.</Text></View>
        <Input
            label="Fats:"
            keyboardType="numeric"
            value={mealMacros.fats}
            onChangeText={text => setMealMacros({ ...mealMacros, fats: text })}
          />
          <Input
            label="Carbs:"
            keyboardType="numeric"
            value={mealMacros.carbs}
            onChangeText={text => setMealMacros({ ...mealMacros, carbs: text })}
          />
          <View>
            <Input
              label="Proteins:"
              keyboardType="numeric"
              value={mealMacros.proteins}
              onChangeText={text => setMealMacros({ ...mealMacros, proteins: text })}
            />
            <CustomButton
              style={{ marginTop: 15 }}
              title="Update Macros"
              onPress={handleSubmit}
            />
          </View>
      </Card>
    </KeyboardAvoidingView>
  );
}

TrackMacrosScreen.navigationOptions = {
  headerTitle: 'Track Your Macros'
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'nunito',
    fontSize: 18
  },
  trackerContainer: {
    marginTop: 25,
    marginLeft: 25
  },
  updateMacrosCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 25
  }
});