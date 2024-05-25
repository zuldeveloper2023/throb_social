import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Ruda_400Regular } from "@expo-google-fonts/ruda";
const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    backgroundColor: '#282DA6',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    width:'90%',
    elevation: 3,
    
    

  },
  textStyle: {
    fontFamily:'Ruda_400Regular',
    fontSize: 18,
    color: 'white',
  },
});

const Button = ({ onPress, children, backgroundColor,customStyles }) => {
  let btnStyle = backgroundColor ? [styles.buttonStyle, { backgroundColor }] : styles.buttonStyle;
  btnStyle={...btnStyle,...customStyles};
  return (
    <TouchableHighlight
      onPress={onPress}
      style={btnStyle}
    >
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;
