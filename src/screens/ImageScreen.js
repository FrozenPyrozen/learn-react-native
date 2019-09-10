import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/imageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Image Screen</Text>
      <ImageDetail
        title="Forest"
        score="2"
        imageSource={require('../../assets/forest.jpg')}
      />
      <ImageDetail
        title="Beach"
        score="3"
        imageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title="Mountain"
        score="4"
        imageSource={require('../../assets/mountain.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;
