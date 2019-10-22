import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import AppNavigator from './navigation/AppNavigator';
import { ExerciseProvider } from './store/exerciseContext';

function fetchFonts() {
  return Font.loadAsync({
    'nunito': require('./assets/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/Nunito-SemiBold.ttf')
  });
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <ExerciseProvider>
      <AppNavigator />
    </ExerciseProvider>
  );
}