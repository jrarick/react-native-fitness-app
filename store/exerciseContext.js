import React, { createContext, useReducer } from 'react';
import Exercise from '../models/exercise';

const ExerciseContext = createContext();

const initialState = {
  exercises: [],
  targetedExercise: { id: '', name: '', weight: '', sets: '', reps: '', day: '' },
  macros: { fats: 0, carbs: 0, proteins: 0 }
};

const ADD_EXERCISE = 'ADD_EXERCISE';
const SELECT_EXERCISE = 'SELECT_EXERCISE';
const REMOVE_EXERCISE = 'REMOVE_EXERCISE';
const SAVE_EXERCISE = 'SAVE_EXERCISE';
const SET_MACROS = 'SET_MACROS';
const UPDATE_MACROS = 'UPDATE_MACROS';

function exerciseReducer (state, action) {
  switch (action.type) {
    case ADD_EXERCISE:
      const newExercise = new Exercise(
        Math.random().toString(),
        action.exercise.name,
        action.exercise.weight,
        action.exercise.reps,
        action.exercise.sets,
        action.exercise.day
      );
      return {
        ...state,
        exercises: [...state.exercises, newExercise]
      };
    case SELECT_EXERCISE:
      return {
        ...state,
        targetedExercise: action.exercise
      };
    case REMOVE_EXERCISE:
      return {
        ...state,
        exercises: state.exercises.filter(exercise => exercise.id !== state.targetedExercise.id)
      };
    case SAVE_EXERCISE:
      return {
        ...state,
        exercises: state.exercises.map(exercise => (exercise.id === action.updatedExercise.id ? action.updatedExercise : exercise)),
        targetedExercise: action.updatedExercise
      };
    case SET_MACROS:
      return {
        ...state,
        macros: action.macroInfo
      }
    case UPDATE_MACROS:
      return {
        ...state,
        macros: { fats: state.macros.fats - action.mealMacros.fats, carbs: state.macros.carbs - action.mealMacros.carbs, proteins: state.macros.proteins - action.mealMacros.proteins }
      }
    default:
      return state;
  }
}

export function ExerciseProvider(props) {
  const [state, dispatch] = useReducer(exerciseReducer, initialState);

  return (
    <ExerciseContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ExerciseContext.Provider>
  );
}

export default ExerciseContext;