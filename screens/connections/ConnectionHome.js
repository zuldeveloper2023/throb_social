import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Connections from './Connections';

const ConnectionHome = () => {
  return (
    <View style={styles.container}>

      <Connections />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
});

export default ConnectionHome;