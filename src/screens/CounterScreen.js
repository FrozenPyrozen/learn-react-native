import React, { useReducer } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const INITIAL_STATE = { counter: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload };
    case 'decrease':
      return { ...state, counter: state.counter - action.payload };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increase', payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'decrease', payload: 1 })}
      />
      <View>
        <Text>Current count: {counter}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
