import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 2,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 0,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    width:'20%',
    elevation: 0,
    position:'relative',
    top:-50,
    left:130,
    height:35,
    marginBottom:-35,

  },
  textStyle: {
    fontSize: 14,
    color: '#282DA6',
    fontFamily:'Ruda_400Regular',
  },
});

const ShowPassword = ({ onPress, children, backgroundColor }) => {
  const btnStyle = backgroundColor ? [styles.buttonStyle, { backgroundColor }] : styles.buttonStyle;
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

export default ShowPassword;
