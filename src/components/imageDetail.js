import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const imgageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.textStyle}>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default imgageDetail;
