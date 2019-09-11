import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {password.length < 5 && (
        <Text style={styles.error}>
          Password must be longer than 5 symbols!
        </Text>
      )}
      <Text>Your name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },

  error: {
    color: 'red',
  },
});

export default TextScreen;
