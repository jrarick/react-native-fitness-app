import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, View, Text, Alert, StyleSheet } from 'react-native';

import ExerciseContext from '../store/exerciseContext';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import Input from '../components/Input';

export default function PlanMacrosScreen(props) {
  const { dispatch } = useContext(ExerciseContext);
  const initialState = { fats: '', carbs: '', proteins: '' };
  const [macroInfo, setMacroInfo] = useState(initialState);
  
  function handleSubmit() {
    dispatch({ type: 'SET_MACROS', macroInfo });
    setMacroInfo(initialState);
    Alert.alert('Success', 'Your daily macronutrient intake goals have been updated.', [{ text: 'OK' }]);
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1 }}
      keyboardVerticalOffset={100}
    >
      <Card style={styles.planMacrosCard}>
        <View>
          <Text style={styles.text}>Enter your planned daily macro intake (in grams) here.</Text>
        </View>
        <View>
          <Input
            label="Fats:"
            keyboardType="numeric"
            value={macroInfo.fats}
            onChangeText={text => setMacroInfo({ ...macroInfo, fats: text })}
          />
          <Input
            label="Carbs:"
            keyboardType="numeric"
            value={macroInfo.carbs}
            onChangeText={text => setMacroInfo({ ...macroInfo, carbs: text })}
          />
          <Input
            label="Proteins:"
            keyboardType="numeric"
            value={macroInfo.proteins}
            onChangeText={text => setMacroInfo({ ...macroInfo, proteins: text })}
          />
          <CustomButton
            style={{ marginTop: 25 }}
            title="Save"
            onPress={handleSubmit}
          />
        </View>
      </Card>
    </KeyboardAvoidingView>
  );
}

PlanMacrosScreen.navigationOptions = {
  headerTitle: 'Plan Your Macros'
};

const styles = StyleSheet.create({
  planMacrosCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 50
  },
  text: {
    fontFamily: 'nunito',
    fontSize: 18
  }
});