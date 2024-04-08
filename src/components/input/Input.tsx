// Input.tsx
import React from 'react';
import { KeyboardTypeOptions, StyleProp, StyleSheet, Text, TextInput, TextStyle, View } from 'react-native';
import { InputProps } from '../../types/types';


const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  error,
  keyboardType,
  style
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[styles.input, style]}
        keyboardType={keyboardType}
        // style={style}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export { Input };

