import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: '3%',
    padding: '3%',
    width: '90%',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    backgroundColor: '#fff',
    fontFamily:'Ruda_400Regular',
  },
});

const Input = ({ xstyles,value, onChange,onKeyPress, ...props }) => (
  <TextInput
    style={[styles.input,xstyles]}
    onChangeText={onChange}
    onKeyPress={onKeyPress?onKeyPress:()=>{}}
    value={value}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

export default Input;
