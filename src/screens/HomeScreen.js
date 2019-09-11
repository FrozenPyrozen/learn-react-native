import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <View>
      <Text style={styles.text}></Text>
      <Button
        title="Go to Components demo"
        onPress={() => navigate('Components')}
      />
      <Button title="Go to list demo" onPress={() => navigate('List')} />
      <Button title="Go to image demo" onPress={() => navigate('Image')} />
      <Button title="Go to color demo" onPress={() => navigate('Color')} />
      <Button title="Go to counter demo" onPress={() => navigate('Counter')} />
      <Button title="Go to square demo" onPress={() => navigate('Square')} />
      <Button title="Go to text demo" onPress={() => navigate('Text')} />
      <Button title="Go to box layout demo" onPress={() => navigate('Box')} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
