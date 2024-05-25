import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 5,
    backgroundColor: '#282DA6',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 6,
    width:'50%',
    elevation: 3,
    

    
    

  },
  textStyle: {
    fontSize: 14,
    color: 'white',
    fontFamily:'Ruda_400Regular',
  },
});

const JoinButton = ({ onPress, children, backgroundColor }) => {
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

export default JoinButton;
