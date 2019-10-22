import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../screens/HomeScreen';
import AddExerciseScreen from '../screens/AddExerciseScreen';
import ExercisesScreen from '../screens/ExercisesScreen';
import ExerciseDetailScreen from '../screens/ExerciseDetailScreen';
import PlanMacrosScreen from '../screens/PlanMacrosScreen';
import TrackMacrosScreen from '../screens/TrackMacrosScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  AddExercise: AddExerciseScreen,
  Exercises: ExercisesScreen,
  ExerciseDetail: ExerciseDetailScreen,
  PlanMacros: PlanMacrosScreen,
  TrackMacros: TrackMacrosScreen
});

export default createAppContainer(AppNavigator);