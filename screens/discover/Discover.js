import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import {
    StyleSheet,
  } from 'react-native';
const HomeCentral = () => {
    return (
        <View style={styles.container}>
            <Text></Text>
            <Button customStyles={styles.customButtonStyle}>Happy Reels</Button>
            <Button customStyles={styles.customButtonStyle}>Creverse</Button>
            <Button customStyles={styles.customButtonStyle}>Collaverse</Button>
            <Button customStyles={styles.customButtonStyle}>Learverse</Button>
            <Button customStyles={styles.customButtonStyle}>Connect</Button>
            <Button customStyles={styles.customButtonStyle}>Explore employers</Button>
            <Button customStyles={styles.customButtonStyle}>Search jobs</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      //paddingLeft:30,
      paddingTop:20,
      backgroundColor:'white'
      //marginTop: StatusBar.currentHeight || 0,
    },
    customButtonStyle:{
        marginBottom:30
    }
  });
  
export default HomeCentral;