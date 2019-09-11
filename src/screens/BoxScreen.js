import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.childView}></View>
      <View style={[styles.childView, styles.childViewTwo]}></View>
      <View style={styles.childView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  childView: {
    width: 80,
    height: 50,
    borderWidth: 3,
    backgroundColor: 'white',
    borderColor: 'red',
  },
  childViewTwo: {
    top: 60,
    backgroundColor: '#444',
  },
});

export default BoxScreen;
