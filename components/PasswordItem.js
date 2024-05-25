import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from './Input';
import { Ruda_400Regular } from "@expo-google-fonts/ruda";
import ShowPassword from './ShowPassword';


const PasswordItem = ({ placeholder,pwd,onChangePassword }) => {
  
  //const [password, onChangePassword] = useState(pwd);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Input
        value={pwd}
        placeholder={placeholder}
        onChange={(text) => onChangePassword(text)}
        secureTextEntry={!showPassword}
      >
      </Input>
      <ShowPassword
        onPress={() => toggleShowPassword()}>{showPassword ? 'Hide' : 'Show'}</ShowPassword>
    </>
  );
};

export default PasswordItem;
